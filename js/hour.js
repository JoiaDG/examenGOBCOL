var hora = document.querySelector("#hora");
var result;

$.get(
    "http://worldtimeapi.org/api/timezone/America/Mexico_City",
    {},
    function(data) {
       var result = data;
    }
);
JSON.parse(result);
console.log(result);