const btn1 = document.querySelector(".btn1").addEventListener("click", () => {
  document.body.style.backgroundImage =
    "linear-gradient(to right, purple, blue)";
  alert("Você clicou!!!");
});

const btn2 = document.querySelector(".btn2").addEventListener("click", () => {
  let n1 = Number(prompt("Digite um número: "));
  let n2 = Number(prompt("Digite outro número: "));
  let n3 = Number(prompt("Digite outro número: "));

  let media = (n1 + n2 + n3) / 3;

  alert(`Média: ${media.toFixed(2)}.`);

  if (media >= 7) {
    alert("Aprovado");
  } else {
    alert("Reprovado");
  }
});

const btn3 = document.querySelector(".btn3").addEventListener("click", () => {
  let peso = Number(prompt("Peso: "));
  let altura = Number(prompt("Altura: "));

  let imc = peso / Math.pow(altura, 2);

  alert(`IMC: ${imc.toFixed(2)}.`);
});
