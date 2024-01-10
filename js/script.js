const nomeProduto = document.getElementById("nome-produto");
const valorProduto = document.getElementById("valor-produto");
const descricao = document.querySelector("#decricao-body");

const btnCadastrar = document.querySelector("#enviar-cadastro");
const helperCadastro = document.querySelector("#helper-text-cadastro");
const produtosCadastrados = document.querySelector(".produtos-cadastrados");

function cadastraProdutos(evento) {
  evento.preventDefault();
  const jsonBody = JSON.stringify({
    produto: nomeProduto.value,
    valor: valorProduto.value,
    descricao: descricao.value,
  });

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonBody,
  })
    .then((res) => res.json())
    .then((data) => {
      const produtos = document.createElement("div");
      produtos.classList.add("produtos");
      produtos.innerHTML = `
      <h1>${data.produto}</h1><br>
      <h2>${data.valor}</h2><br>
      <p>${data.descricao}</p>`;

      produtosCadastrados.appendChild(produtos);

      nomeProduto.value = "";
      valorProduto.value = "";
      descricao.value = "";
      alert("Produto cadastrado com sucesso!");
    })
    .catch((error) => {
      helperCadastro.innerText = "Não foi possível cadastrar o produto :(";
    });
  evento.preventDefault();
}

btnCadastrar.addEventListener("click", (evento) => cadastraProdutos(evento));
