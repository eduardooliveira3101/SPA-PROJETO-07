import {
  body
} from './elements.js'

const {pathname} = window.location

switch (pathname) {
  case '/':
    bgHome()

    break;

    case '/universe':
      bgUniverse()

      break;

      case '/explorer':
        bgExplorer()

  default:
    break;
}

function bgHome() {
  body.classList.add('home')
  body.classList.remove('universe')
  body.classList.remove('explorer')
}

function bgUniverse() {
  body.classList.remove('home')
  body.classList.add('universe')
  body.classList.remove('explorer')
}

function bgExplorer() {
  body.classList.remove('home')
  body.classList.remove('universe')
  body.classList.add('explorer')
}




