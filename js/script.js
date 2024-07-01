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
});
