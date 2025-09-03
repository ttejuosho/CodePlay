using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class MarkingPositionMonitor
{
    private class Order
    {
        public int OrderId;
        public string Symbol;
        public string Side;
        public int Quantity;
        public int RemainingQuantity;
    }

    private readonly Dictionary<int, Order> orders = new();
    private readonly Dictionary<string, int> actualPositions = new();
    private readonly Dictionary<string, int> conservativeSellQty = new(); // For marking position

    public int HandleEvent(string jsonEventMessage)
    {
        JObject obj = JObject.Parse(jsonEventMessage);
        string type = obj["type"]?.ToString();

        switch (type)
        {
            case "NEW":
                HandleNew(obj);
                break;
            case "ORDER_ACK":
                HandleOrderAck(obj);
                break;
            case "ORDER_REJECT":
                HandleOrderReject(obj);
                break;
            case "CANCEL_ACK":
                HandleCancelAck(obj);
                break;
            case "FILL":
                HandleFill(obj);
                break;
        }

        // Return marking position for this event's symbol
        string symbol = GetSymbolFromEvent(obj);
        return GetMarkingPosition(symbol);
    }

    private void HandleNew(JObject obj)
    {
        int orderId = (int)obj["order_id"];
        string side = obj["side"]?.ToString();
        int quantity = (int)obj["quantity"];
        string symbol = obj["symbol"]?.ToString();

        var order = new Order
        {
            OrderId = orderId,
            Side = side,
            Quantity = quantity,
            RemainingQuantity = quantity,
            Symbol = symbol,
            IsActive = false
        };

        orders[orderId] = order;

        if (side == "sell")
        {
            if (!conservativeSellQty.ContainsKey(symbol))
                conservativeSellQty[symbol] = 0;
            conservativeSellQty[symbol] += quantity; // Immediately reduce marking position
        }
    }

    private void HandleOrderAck(JObject obj)
    {
        int orderId = (int)obj["order_id"];
        if (orders.TryGetValue(orderId, out var order))
        {
            order.IsActive = true;
        }
    }

    private void HandleOrderReject(JObject obj)
    {
        int orderId = (int)obj["order_id"];
        if (orders.TryGetValue(orderId, out var order))
        {
            if (order.Side == "sell")
            {
                conservativeSellQty[order.Symbol] -= order.Quantity;
            }

            orders.Remove(orderId);
        }
    }

    private void HandleCancelAck(JObject obj)
    {
        int orderId = (int)obj["order_id"];
        if (orders.TryGetValue(orderId, out var order) && order.Side == "sell")
        {
            conservativeSellQty[order.Symbol] -= order.RemainingQuantity;
            order.IsActive = false;
        }
    }

    private void HandleFill(JObject obj)
    {
        int orderId = (int)obj["order_id"];
        int filled = (int)obj["filled_quantity"];
        int remaining = (int)obj["remaining_quantity"];

        if (orders.TryGetValue(orderId, out var order))
        {
            int prevRemaining = order.RemainingQuantity;
            int delta = prevRemaining - remaining;
            order.RemainingQuantity = remaining;

            if (!actualPositions.ContainsKey(order.Symbol))
                actualPositions[order.Symbol] = 0;

            if (order.Side == "buy")
            {
                actualPositions[order.Symbol] += delta;
            }
            else if (order.Side == "sell")
            {
                actualPositions[order.Symbol] -= delta;
            }

            if (remaining == 0)
                order.IsActive = false;
        }
    }

    private int GetMarkingPosition(string symbol)
    {
        actualPositions.TryGetValue(symbol, out int position);
        conservativeSellQty.TryGetValue(symbol, out int outstandingSell);
        return position - outstandingSell;
    }

    private string GetSymbolFromEvent(JObject obj)
    {
        string type = obj["type"]?.ToString();
        if (type == "NEW")
            return obj["symbol"]?.ToString();

        int orderId = obj["order_id"]?.Value<int>() ?? -1;
        if (orders.TryGetValue(orderId, out var order))
            return order.Symbol;

        return "";
    }
}
