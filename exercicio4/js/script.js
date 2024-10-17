/* console.log(adicionarAoCarrinho); */

const listaDeProdutos = document.querySelector("#listaProdutos");
const listaDeCarrinho = document.querySelector("#listaCarrinho");

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
            <li id="${element.nome}">
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

const adicionarCarrinho = (event) => {
  const { id, nome, preco, quantidade } = produtos.find((prop) => {
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

  if (verificarRepeticao === -1) {
    listaDeCarrinho.innerHTML = "";
    carrinho.push(objetoReferencia);
    for (const element of carrinho) {
      const html = `
                <li>
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

    return;
  } else {
    carrinho[verificarRepeticao].quantidade++;
    for (const element of carrinho) {
      listaDeCarrinho.innerHTML = "";
      const html = `
                  <li>
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
  }
};

const removerCarrinho = (event) => {
  const index = carrinho.findIndex((prop) => {
    return prop.nome === event.target.id;
  });
};

atualizarProdutos(produtos);

listaDeProdutos.addEventListener("click", (e) => {
  if (e.target.classList.contains("adicionar")) {
    adicionarCarrinho(e);
  }
});
listaDeProdutos.addEventListener("click", (e) => {
  if (e.target.classList.contains("retirar")) {
    removerCarrinho(e);
  }
});
