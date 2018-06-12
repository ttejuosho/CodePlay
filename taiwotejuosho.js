// Using JQuery

// Hiding all Mac Widgets by default
$("#jive-widgetframe_1269477").hide();
$("#jive-widgetframe_1269479").hide();

// these functions shows and hide the approriate widgets by their ID

function showIosWidgets(){
  var id = $(this).attr("data-target");
    if (id === "iosWidgets"){
    $(".iosWidgets").show();
    $(".macWidgets").hide();
}}

function showMacWidgets(){
  var id = $(this).attr("data-target");
  if (id === "macWidgets"){
  $(".macWidgets").show();
  $(".iosWidgets").hide();
}}

// Setting up a listener on the iOS and MacOS icons to show widgets for whichever is clicked on
$('#jive-widgetframe-header_1269470').on( "click", showIosWidgets);
$('#jive-widgetframe-header_1269471').on( "click", showMacWidgets);