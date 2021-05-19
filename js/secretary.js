let redName1 = "";
let blueName4 = "";
let redName2 = "";
let blueName5 = "";
let redName3 = "";
let blueName6 = "";
function newFight() {
    redName1 = document.getElementById("name1").value;
    blueName4 = document.getElementById("name4").value;
    redName2 = document.getElementById("name2").value;
    blueName5 = document.getElementById("name5").value;
    redName3 = document.getElementById("name3").value;
    blueName6 = document.getElementById("name6").value;
    updateHtml()
}
function updateHtml() {
    document.getElementById("redName1").innerHTML = redName3;
    document.getElementById("blueName1").innerHTML = blueName6;
    document.getElementById("redName2").innerHTML = redName1;
    document.getElementById("blueName2").innerHTML = blueName5;
    document.getElementById("redName3").innerHTML = redName2;
    document.getElementById("blueName3").innerHTML = blueName4;
    document.getElementById("redName4").innerHTML = redName1;
    document.getElementById("blueName4").innerHTML = blueName6;
    document.getElementById("redName5").innerHTML = redName3;
    document.getElementById("blueName5").innerHTML = blueName4;
    document.getElementById("redName6").innerHTML = redName2;
    document.getElementById("blueName6").innerHTML = blueName5;
    document.getElementById("redName7").innerHTML = redName1;
    document.getElementById("blueName7").innerHTML = blueName4;
    document.getElementById("redName8").innerHTML = redName2;
    document.getElementById("blueName8").innerHTML = blueName6;
    document.getElementById("redName9").innerHTML = redName3;
    document.getElementById("blueName9").innerHTML = blueName5;
}