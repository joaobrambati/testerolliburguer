var retirada = document.getElementById("retirada");
var retirada = 3;

var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4");
var l5 = document.getElementById("l5");
var l6 = document.getElementById("l6");
var l7 = document.getElementById("l7");
var l8 = document.getElementById("l8");

var l1 = 17;
var l2 = 20;
var l3 = 22;
var l4 = 25;
var l5 = 26;
var l6 = 28;
var l7 = 30;
var l8 = 35;

var qnt = document.getElementById("qnt");

var qnt = Number(qnt.value);

var botao = document.getElementById("botao");

var res = document.getElementById("res");

botao.addEventListener("click", enviar);

function enviar() {
  alert("foiii");
  res.style.display = "block";
  var total = l1 * qnt;
  var totalComRetirada = total + retirada;
  alert(totalComRetirada);
}
