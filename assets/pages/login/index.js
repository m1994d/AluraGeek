import { footer, nav } from '../../js/navHeader/index.js'


window.onload = function () {
 
  const paths = {
    controle: "../../img/logo.png",
    alura: "../../img/ad.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "",
    inputShow: false
  } 

  nav(paths);
  footer(paths);  

}