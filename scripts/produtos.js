
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
// função para verificar o banco de dados
// db.collection(carrinho).get().then((snapshot)=>{
//   snapshot.forEach((doc)=>{
//     console.log(doc.data())
//   })
// })

// funções das paginas produtos

// função para definir o tamanho:
var tm = function choiceSize() {
  let sz = $('[name = in');
  if (sz[0].checked) {
    var size = 'P'
  } else if (sz[1].checked) {
    var size = 'M'
  } else if (sz[2].checked) {
    var size = 'G'
  }
  return size;
}
// função que soma a quantidade e mostra o total para o usuario
$('#cNunber').on('input', () => {
  var qnt = $('#cNunber').val();
  var preco = parseFloat($('#preco').text())
  var tot = qnt * preco
  $('#ctot').val(`R$ ${tot.toFixed(2)}`)
})

// Função para o objeto produto'
var tt = () => {
  var qnt = $('#cNunber').val();
  var preco = parseFloat($('#preco').text())
  var tot = qnt * preco
  return parseFloat(tot)
}


// função que adiciona o produto a um map(objeto) do firebase
$('#add').click(function criarProduto() {
  img = $('img')[1]
  produto = {
    nome: $('h2').text(),
    preco: parseFloat($('#preco').text()),
    tamanho: tm(),
    quantidade: parseInt($('#cNunber').val()),
    imagem: $(img).attr('src'),
    total: Number(parseFloat(tt()).toFixed(2)),
    
  }
  db.collection(carrinho).add({ produto })
}) 








{program(amar)}




                  






