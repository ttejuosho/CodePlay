number: int = 10
decimal: float = 5.2
text: str = "Hello World"
active: bool = True

namesList: list = ["Taiwo", "Kehinde", "Idowu"]
immutableList: tuple = (1.2, 5.2)
noDuplicates: set = {1, 4, 7, 9}
keyValuePair: dict = {"Name": "Taiwo Tejuosho", "City": "Downers Grove", "House Number": 1641 }



class Car:
    def __init__(self, make: str, model: str, year: int) -> None:
        self.make = make
        self.model = model
        self.year = year

    def drive(self) -> None:
        print(f"{self.make} is driving!")
    def getInfo(self) -> None:
        print(f"Your car is a {self.year} {self.make} {self.model}")

car0: Car = Car("Volvo", "XC90", 2025)
print(car0.make)
car0.getInfo()
car0.drive()
car0.make.join()