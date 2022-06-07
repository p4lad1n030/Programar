
const firebaseConfig = {
  apiKey: "AIzaSyCMHzHRtSSomPrTVxMu_ZMMVU2znTak12U",
  authDomain: "loja-do-pedro.firebaseapp.com",
  projectId: "loja-do-pedro",
  storageBucket: "loja-do-pedro.appspot.com",
  messagingSenderId: "790038704735",
  appId: "1:790038704735:web:1f26d66e91085047bfe1ea",
  measurementId: "G-EDM6WCR8HS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const carrinho = "carrinhoCompras";
// var identify = []


db.collection(carrinho).get().then(snapshot => {

  snapshot.forEach((doc) => {
    compra = doc.data()
    compras = compra.produto
    identify = doc.id
    input = $(this)
    // replaceAll() use este
    $('#vitrine').append(`
    <section>
    
      <article class="float-left border rounded w-50 mb-2 text-center ">
      <h2 class="display-4 font-weight-bold">${compras.nome}</h2> <br>
        <img class="shadow" src="${compras.imagem}" alt="imagens dos produtos">
      </article>
      <aside class="border rounded w-50 float-right mb-2">
      
      <p>
        preço:${compras.preco} <br>
        Tamanho: ${compras.tamanho}<br>

        quantidade:
         <input id="${identify}" class="qnt" type="number" value="${compras.quantidade}" oninput="atualiza('${identify}')"> <br>

        total:
        <input id="${identify}" class="tot" type="text" value="R$ ${compras.total}" readonly maxlength="5" onload="atualizatot('${compras.total}')"/> <br> 
        </p>

        <div onclick ="remove('${identify}')" class=" border border-danger rounded-circle d-inline-block bg-light  mr-3">
        <img class="img-fluid" src="/assets/image/removerCarrinho.png" alt=" imagem de um carrinho de compras"/>
      </div>
      </aside> 
      <footer  style="clear:both;" ></footer>   
    
    </section>
    `
    )//append


  })//forEach

})//then

// função que apaga os itens do carrinho de compras e do firebase
function remove(id_element) {
  db.collection(carrinho)
    .doc(id_element)
    .delete()
    .then(() => {
      console.log(id_element)
      setTimeout((location.reload()), 200);
    })

}

// função que atualiza a quantidade no carrinho
function atualiza(id_element,tot) {
  // aqui eu peguei o valor do input
  inp = $(`#${id_element}`).val()

  // ==============

  db.collection(carrinho).doc(id_element).update({
    "produto.quantidade": Number(inp)
  }).then(() => {
    db.collection(carrinho).doc(id_element).update({
      "produto.total": Number(parseFloat(inp) * 39.90).toFixed(2)
    },
    setTimeout((location.reload()), 200)

    )//update

  })//then

}//atualiza

