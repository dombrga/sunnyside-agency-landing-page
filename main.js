// toggle menu
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header-link-wrapper')

burger.addEventListener('click', showMenu)
function showMenu() {
  menu.style.display = menu.style.display ? '':'flex'
}


// image by viewport
const headerimg = document.querySelector('.header-orange')
const egg = document.querySelector('.egg')
const standout = document.querySelector('.stand-out')
const cherry = document.querySelector('.cherry')
const tangerine = document.querySelector('.tangerine')
const bottle = document.querySelector('.glry-bottle')
const orange = document.querySelector('.glry-orange')
const cone = document.querySelector('.glry-cone')
const sugar = document.querySelector('.glry-sugar')
const urls = {
  headerimg: {desktop: './images/desktop/image-header.jpg', mobile: './images/mobile/image-header.jpg'},
  egg: {desktop: './images/desktop/image-transform.jpg', mobile: './images/mobile/image-transform.jpg'},
  standout: {desktop: './images/desktop/image-stand-out.jpg', mobile: './images/mobile/image-stand-out.jpg'},
  cherry: {desktop: './images/desktop/image-graphic-design.jpg', mobile: './images/mobile/image-graphic-design.jpg'},
  tangerine: {desktop: './images/desktop/image-photography.jpg', mobile: './images/mobile/image-photography.jpg'},
  bottle: {desktop: './images/desktop/image-gallery-milkbottles.jpg', mobile: './images/mobile/image-gallery-milkbottles.jpg'},
  orange: {desktop: './images/desktop/image-gallery-orange.jpg', mobile: './images/mobile/image-gallery-orange.jpg'},
  cone: {desktop: './images/desktop/image-gallery-cone.jpg', mobile: './images/mobile/image-gallery-cone.jpg'},
  sugar: {desktop: './images/desktop/image-gallery-sugarcubes.jpg', mobile: './images/mobile/image-gallery-sugar-cubes.jpg'}
}

window.addEventListener('resize', () => {
  changeImg()
  offMenu()
}, true)

function offMenu() {
  if(window.innerWidth >= 900) {
    menu.style.display = ''
  }
}

function changeImg() {
  if(window.innerWidth < 800) {
    headerimg.src = urls.headerimg.mobile
    egg.src = urls.egg.mobile
    standout.src = urls.standout.mobile
    cherry.src = urls.cherry.mobile
    tangerine.src = urls.tangerine.mobile
    bottle.src = urls.bottle.mobile
    orange.src = urls.orange.mobile
    cone.src = urls.cone.mobile
    sugar.src = urls.sugar.mobile
  } else {
    headerimg.src = urls.headerimg.desktop
    egg.src = urls.egg.desktop
    standout.src = urls.standout.desktop
    cherry.src = urls.cherry.desktop
    tangerine.src = urls.tangerine.desktop
    bottle.src = urls.bottle.desktop
    orange.src = urls.orange.desktop
    cone.src = urls.cone.desktop
    sugar.src = urls.sugar.desktop
  }
}


