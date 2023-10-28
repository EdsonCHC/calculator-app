$(function () {
  let buttons = $(".button");
  let screen = $("#screen");
  let clearButton = $("#clear");
  let calculation = [];
  let fixedCalculation;

  buttons.each(function () {
    var button = $(this);
    button.on("click", function (e) {
      let value = button.val();
      calculation.push(value);
      fixedCalculation = calculation.join("");
      screen.text(fixedCalculation);
    });
  });

  clearButton.on("click", (e) => {
    screen.text("");
    $("#errDiv").text("");
    calculation = [];
  });

  $("#equals").on("click", (e) => {
    try{
        let result = math.evaluate(fixedCalculation);
        if(isFinite(result)){
            screen.text(result);
            calculation = [];
            calculation.push(result);
        }else{
            $("#errDiv").text("Error: División por cero u operación no válida.");
        }
    }catch(e){
        screen.text("Error");
    }
  });
});
