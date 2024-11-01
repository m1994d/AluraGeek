
const logo = (paths) => {
  const logoLink = `
  <a href="${paths.home}">
      <img src="${paths.controle}" alt="imagen de un auto">
      <img src="${paths.alura}" alt="ad">
  </a>
  `
  return logoLink;
}


export function nav(paths) {

  const navHeader = document.querySelector('[data-nav]');
  const toggleButton = document.getElementById("toggle-theme");
  const logoLink = logo(paths)
  const html = `
  <div class="navHeader__left">
    <div class="logo">
      ${logoLink}
    </div>
    <div class="navHeader__search">
      <input type="text" class="navHeader__search--input" placeholder="¿Qué buscas?"/>
      <img src="${paths.lupa}" alt="imagen de una lupa, para buscar" class="navHeader__search--img">
    </div>
  </div>
  <div>
  </div>
  ${paths.login && (`<div class="navHeader__login"><a href="${paths.login}" class="btn__login">Login</a><img class="lupa__hidden" src="${paths.lupa}" alt="imagen de una lupa" data-input/></div><input type="text" class="lupa__hidden--input" placeholder="¿Qué quiere encontrar?"/>`)}
  `;

  navHeader.innerHTML = html;

  if(paths.inputShow){
    inputShow();
  }

}

export function inputShow(){
  const img = document.querySelector('[data-input]')
  img.addEventListener('click',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
    document.querySelector('.lupa__hidden--input').focus();
  })
  
  document.querySelector('.lupa__hidden--input').addEventListener('blur',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
  })  
}


export function footer(paths) {

  const footer = document.querySelector('[data-footer]');
  const logoLink = logo(paths)
  const html = `
  <section class="footer">
    <div class="container">
      <div class="logo">
        ${logoLink}
      </div>
      <div class="footer__text">
        <a href="#">Quiénes somos</a href="">
        <a href="#">Política de privacidad</a href="">
        <a href="#">Programa de fidelización</a href="">
        <a href="#">Nuestras tiendas</a href="">
        <a href="#">Anúnciese aquí</a href="">
      </div>
    </div>
    <form class="footer__forms">
      <p>Póngase en contacto con nosotros</p>
      <input type="text" placeholder="Digite su nombre" required/>
      <textarea placeholder="Escribe tu mensaje" required></textarea>
      <input type="submit" value="Enviar mensaje" class="btn__submit" data-submit />
    </form>
  </section>
  <div class="footer__dev">
  <p>Desarrollado por <a href="https://github.com/m1994d">MadTech</a></p>
  </div>
  `;

  footer.innerHTML = html;
}