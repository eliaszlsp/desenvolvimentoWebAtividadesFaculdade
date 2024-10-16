const produtoHtml = document.querySelector("#produtos");
const adicionar = document.querySelector("#adicionar");
const remover = document.querySelector("#remover");
const carrinho = document.querySelector("#carrinho");

const produtos = [
  { nome: "Cadeira", preco: 150.0, quantidade: 10 },
  { nome: "Mesa", preco: 350.0, quantidade: 5 },
  { nome: "Laptop", preco: 2500.0, quantidade: 3 },
  { nome: "Monitor", preco: 800.0, quantidade: 7 },
  { nome: "Teclado", preco: 100.0, quantidade: 20 },
];

for (const element of produtos) {
  const html = ` <div style="border: solid red 1px ; margin : 10px ; width : fit-content" > <p  id="${element.nome}"  >  
  ${element.nome} - R$ ${element.preco} 
  </p>  <button  id="${element.nome}" class="adicionarCarrinho">adicionar no carrinho</button>  
   </div>
   `;
  produtoHtml.innerHTML += html;
}

const adicionarCarrinho = produtoHtml.querySelectorAll(".adicionarCarrinho");

produtoHtml.addEventListener("click", (event) => {
  if (event.target.id) {
    const produto = produtos.findIndex(
      (produto) => produto.nome === event.target.id
    );
    const removido = produtos.splice(produto, 1);

    carrinho.innerHTML += `${removido[0].nome} - R$ ${removido[0].preco}`;

    produtoHtml.innerHTML = " ";
    for (const element of produtos) {
      const html = `<div style="border: solid red 1px ; margin : 10px ; width : fit-content" > <p  id="${element.nome}"  >  
        ${element.nome} - R$ ${element.preco} 
        </p>  <button  id="${element.nome}" class="adicionarCarrinho">adicionar no carrinho</button>  
         </div>
         `;
      produtoHtml.innerHTML += html;
    }
  }
});
