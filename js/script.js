const listaDeProdutos = document.querySelector("#listaProdutos");
const listaDeCarrinho = document.querySelector("#listaCarrinho");
const total = document.querySelector("#total");
const formulario = document.querySelector("#formulario");
const buttonOrdenar = document.querySelector(".ordenar");
const comprarButton = document.getElementById("comprar");
const modal = document.getElementById("modal");
const closeButton = document.getElementsByClassName("close")[0];
const finalizarCompraButton = document.getElementById("finalizarCompra");
const modalListaCarrinho = document.getElementById("modalListaCarrinho");
const modalTotal = document.getElementById("modalTotal");

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
  buttonOrdenar.style.display = "none";
  for (const element of array) {
    const html = `
            <li>
              <article>
                <h2>${element.nome}</h2>
                <p>Preço: ${element.preco}</p>
                <button class="${element.nome} adicionar" >Adicionar ao Carrinho</button>
              </article>
            </li>      
         `;
    listaDeProdutos.innerHTML += html;
  }

  ordenarProdutosPreco(produtos);
};

const atualizarCarrinho = (array) => {
  listaDeCarrinho.innerHTML = " ";
  if (carrinho.length > 1) {
    buttonOrdenar.style.display = "block";
  }
  for (const element of array) {
    const html = `
            <li>
               <article>              
                    <h2>${element.nome}</h2>
                    <p>Preço: ${element.preco}</p>
                    <p>quantidade: ${element.quantidade}</p>                    
                    <button class="${element.nome} retirar">retirar do carrinho</button>
                  </article>
            </li>            
         `;
    listaDeCarrinho.innerHTML += html;
  }
  const total = document.querySelector("#total");
  total.innerHTML = `Total: ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(
    carrinho.reduce(
      (acc, element) => acc + element.preco * element.quantidade,
      0
    )
  )}`;
};

const ordenarProdutosPreco = (array) => {
  array.sort((a, b) => a.preco - b.preco);
};

const adicionarCarrinho = (event) => {
  const { id, nome, preco, quantidade } = produtos.find((prop) => {
    return prop.nome === event.target.className.split(" ")[0];
  });

  const indexProduto = produtos.findIndex((prop) => {
    return prop.nome === event.target.className.split(" ")[0];
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

const atualizarModal = () => {
  modalListaCarrinho.innerHTML = "";
  for (const item of carrinho) {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - Quantidade: ${
      item.quantidade
    } - Preço: ${new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(item.preco * item.quantidade)}`;
    modalListaCarrinho.appendChild(li);
  }
  modalTotal.textContent = `Total: ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(
    carrinho.reduce((acc, element) => {
      return acc + element.preco * element.quantidade;
    }, 0)
  )}`;
};

const removerDoCarrinho = (event) => {
  const index = carrinho.findIndex((prop) => {
    return prop.nome === event.target.className.split(" ")[0];
  });

  const indexProduto = produtos.findIndex((prop) => {
    return prop.id === carrinho[index].id;
  });

  const removerCarrinho = carrinho[index];
  produtos[indexProduto].quantidade++;
  removerCarrinho.quantidade--;

  const botaoQuantidadeAcimadeZero = document.querySelector(
    ` #listaProdutos  .${event.target.className.split(" ")[0]}`
  );

  if (produtos[indexProduto].quantidade > 0) {
    botaoQuantidadeAcimadeZero.disabled = false;
  }

  if (carrinho[index].quantidade === 0) {
    carrinho.splice(index, 1);
  }

  atualizarCarrinho(carrinho);
};
atualizarCarrinho(carrinho);
atualizarProdutos(produtos);

listaDeProdutos.addEventListener("click", (e) => {
  if (e.target.classList.contains("adicionar")) {
    adicionarCarrinho(e);
  }
});
listaDeCarrinho.addEventListener("click", (e) => {
  if (e.target.classList.contains("retirar")) {
    removerDoCarrinho(e);
  }
});

formulario.addEventListener("input", (e) => {
  e.preventDefault();

  const minusculo = e.target.value.toLowerCase();

  const filter = produtos.filter((prop) => {
    return prop.nome.toLowerCase().includes(minusculo);
  });
  atualizarProdutos(filter);
});

buttonOrdenar.addEventListener("click", (e) => {
  if (e.target.id === "ordenar" && carrinho.length > 1) {
    ordenarProdutosPreco(carrinho);
    atualizarCarrinho(carrinho);
  }
});

comprarButton.addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio.");
    return;
  }
  atualizarModal();
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

finalizarCompraButton.addEventListener("click", () => {
  alert("Compra finalizada! Obrigado pela sua compra.");
  carrinho.length = 0;
  atualizarCarrinho(carrinho);
  modal.style.display = "none";
});
