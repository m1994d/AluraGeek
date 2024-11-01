import { lista } from './API/index.js'
import { slider } from './slider/index.js'
import { nav, footer } from './navHeader/index.js'

export function updateList(){
  if(JSON.parse(localStorage.getItem('lista'))){
    const nuevo = JSON.parse(localStorage.getItem('lista'))
    
    nuevo.map((item)=>{
      let validar = true
  
      lista.map((el)=>{
        if(el.titulo.toLowerCase() == item.titulo.toLowerCase()){
          el.productos.push(item.productos[0])
          validar = false
        }
      })
      if(validar){
        lista.push(item)
      }
      
    })
  }
}

export function createCards(data) {
  var cardContainer = ''
  data.product.productos.map((element) => {
    let a = `
    <div class="content__card">
      <a href="${data.url}?listIndex=${data.index}&id=${element.infos.id}"><img src="${element.infos.img}" alt="${element.infos.alt}"></a>
      <div class="card__info">
        <p class="content__card--title">${element.infos.nombre}</p>
        <p class="content__card--price">COP ${element.infos.precio}</p>
        <a href="${data.url}?listIndex=${data.index}&id=${element.infos.id}">Ver producto</a>
      </div>
    </div>`
    cardContainer += a
  })
  return cardContainer
}

function HTML(data) {

  let innerHTML = `
    <div class="content__container">
        <div class="content__title">
          <h2 data-title>${data.title}</h2>
          <div>
            <a href="${data.path.allProducts}">Ver todo <img src="${data.path.imgSeta}" alt="flecha hacia la derecha"/></a>
          </div>
        </div>
        <div class="card__container">
        <span class="span voltar"><img src="${data.path.imgSlider}" alt="" class="img"></span>
        <div class="cards">
        ${data.cards}
        </div>
        <span class="span avancar"><img src="${data.path.imgSlider}" alt=""></span>
        </div>
    </div>`;
  return innerHTML
}

export function containerCards(paths) {
  var cardSection = document.querySelector(".content")
  cardSection.innerHTML = ''

  if (paths.productAmount > 1) {
    paths.productList.forEach((item, index) => {
      let data = { product: item, index: index, url: paths.url }
      let cardContainer = createCards(data)      
      let info = { title: item.titulo, cards: cardContainer, path: paths }
      cardSection.innerHTML += HTML(info);
      cardContainer = ''
    })
    slider();

    return
  }
  let data = { product: paths.productList, index: paths.listIndex, url: paths.url }
  let cardContainer = createCards(data)
  let info = { title: paths.productList.titulo, cards: cardContainer, path: paths }
  cardSection.innerHTML += HTML(info);
  cardContainer = ''
  slider();
}

window.onload = function () {

  updateList();

  const paths = {
    controle: "assets/img/logo.png",
    alura: "assets/img/ad.png",
    lupa: "assets/img/lupa.png",
    home: "#",
    imgSeta: "assets/img/seta.png",
    imgSlider: "assets/img/setaSlider.png",
    allProducts: "assets/pages/allproducts/index.html",
    productList: lista,
    productAmount: lista.length,
    listIndex: '',
    url: "./assets/pages/product/index.html",
    login: "assets/pages/login/index.html",
    inputShow: true,
  }

  nav(paths);
  containerCards(paths);
  footer(paths);
}


