import { lista } from '../../js/API/index.js'
import { containerCards, updateList } from '../../js/index.js'
import { footer, nav } from '../../js/navHeader/index.js'

const productInfo = (producto)=>{
  const productInfos = document.querySelector('[data-product]')
  
  const html = `
  <div class="product__img" id="teste" style="background-image: url('${producto.img}');background-size: contain ;"></div>
  <div class="product__infos">
    <h1>${producto.nombre}</h1>
    <p>COP ${producto.precio}</p>
    <p>${producto.descripcion}</p>
  </div>
  `
  productInfos.innerHTML = html;
}


window.onload = function () {

  
  const url = new URL(window.location)
  const listIndex = url.searchParams.get('listIndex')
  const id = url.searchParams.get('id')
  
  updateList();
  
  const paths = {
    controle: "../../img/logo.png",
    alura: "../../img/ad.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    imgSeta: "../../img/seta.png",
    imgSlider: "../../img/setaSlider.png",
    allProducts: "../allproducts/index.html",
    productList: lista[listIndex],
    productAmount: '',
    listIndex: listIndex,
    url: "",
    login: "../login/index.html",
    inputShow: true,
  } 
  
  // const path = '../../img/setaSlider.png'
  // const seta = '../../img/seta.png'
  const productURL = ''
  containerCards(paths);
  const title = document.querySelector('[data-title]')
  title.innerHTML = "productos similares"


  // const paths = {
  //   controle: "assets/img/controle.png",
  //   alura: "assets/img/alura.png",
  //   geek: "assets/img/geek.png",
  //   lupa: "assets/img/lupa.png",
  //   home: "#",
  //   imgSeta: "assets/img/seta.png",
  //   imgSlider: "assets/img/setaSlider.png",
  //   allProducts: "assets/pages/allproducts/index.html",
  //   productList: lista,
  //   productAmount: lista.length,
  //   listIndex: '',
  //   url: "./assets/pages/product/index.html"
  // }
  

  nav(paths);
  productInfo(lista[listIndex].productos[id-1].infos)
  footer(paths);

}