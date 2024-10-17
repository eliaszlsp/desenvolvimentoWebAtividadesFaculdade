const listaDeProdutos = document.querySelector("#listaProdutos");
const listaDeCarrinho = document.querySelector("#listaCarrinho");
const total = document.querySelector("#total");

const produtos = [
  { id: 1, nome: "Cadeira", preco: 150.0, quantidade: 10 },
  { id: 2, nome: "Mesa", preco: 350.0, quantidade: 5 },
  { id: 3, nome: "Laptop", preco: 2500.0, quantidade: 3 },
  { id: 4, nome: "Monitor", preco: 800.0, quantidade: 7 },
  { id: 5, nome: "Teclado", preco: 100.0, quantidade: 20 },
];

const carrinho = [];

const atualizarProdutos = (array) => {
  listaDeProdutos.innerHTML = " ";
  for (const element of array) {
    const html = `
            <li>
              <article>
                <h2>${element.nome}</h2>
                <p>Preço: ${element.preco}</p>
                <button id=${element.nome}  class="adicionar">Adicionar ao Carrinho</button>
              </article>
            </li>      
         `;
    listaDeProdutos.innerHTML += html;
  }
};

const atualizarCarrinho = (array) => {
  listaDeCarrinho.innerHTML = " ";
  for (const element of array) {
    const html = `
            <li id="${element.nome}">
               <article>
                    <h2>${element.nome}</h2>
                    <p>Preço: ${element.preco}</p>
                    <p>quantidade: ${element.quantidade}</p>
                    <button id=${element.nome}  class="retirar">retirar do carrinho</button>
                  </article>
            </li>      
         `;
    listaDeCarrinho.innerHTML += html;
  }
  const total = document.querySelector("#total");
  total.innerHTML = `Total: ${carrinho.reduce(
    (acc, element) => acc + element.preco * element.quantidade,
    0
  )}`;
};

const adicionarCarrinho = (event) => {
  const { id, nome, preco, quantidade } = produtos.find((prop) => {
    return prop.nome === event.target.id;
  });

  const indexProduto = produtos.findIndex((prop) => {
    return prop.nome === event.target.id;
  });
  const objetoReferencia = {
    id,
    nome,
    preco,
    quantidade: 1,
  };
  const verificarRepeticao = carrinho.findIndex((prop) => {
    return prop.nome === objetoReferencia.nome;
  });

  if (produtos[indexProduto].quantidade === 0) {
    event.target.disabled = true;
    alert("Produto esgotado");
    return;
  }

  if (verificarRepeticao === -1) {
    listaDeCarrinho.innerHTML = "";
    carrinho.push(objetoReferencia);

    produtos[indexProduto].quantidade--;
    atualizarCarrinho(carrinho);

    return;
  } else {
    carrinho[verificarRepeticao].quantidade++;
    produtos[indexProduto].quantidade--;
    atualizarCarrinho(carrinho);
  }
};

const removerCarrinho = (event) => {
  const index = carrinho.findIndex((prop) => {
    return prop.nome === event.target.id;
  });
  const removerCarrinho = carrinho[index];

  removerCarrinho.quantidade--;
  if (carrinho[index].quantidade === 0) {
    carrinho.splice(index, 1);
  }

  atualizarCarrinho(carrinho);
};

atualizarProdutos(produtos);

listaDeProdutos.addEventListener("click", (e) => {
  if (e.target.classList.contains("adicionar")) {
    adicionarCarrinho(e);
  }
});
listaDeCarrinho.addEventListener("click", (e) => {
  if (e.target.classList.contains("retirar")) {
    removerCarrinho(e);
  }
});
