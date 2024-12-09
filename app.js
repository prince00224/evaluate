function showResult() {
    var data = document.getElementById("input").value;
    var result = eval(data);
    document.getElementById("result").innerHTML = result;
}