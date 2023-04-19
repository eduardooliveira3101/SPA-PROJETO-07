import {
  home, 
  universe,
  explorer,
  ImagesBG  
} from './elements.js'

let {pathname} = window.location

let bg_img= 'url("./assets/mountains-universe-1.png")';

export default function Bg(){

  if(pathname == '/'){
    home()
  }

  if(pathname == '/universe'){
    universe()
  }

  if(pathname == '/explorer'){
    explorer()
}

  function home(){

    bg_img= 'url("./assets/mountains-universe-1.png")'
    ImagesBG.style.setProperty('--bg-img', bg_img);
  }

  function universe(){
    bg_img= 'url("./assets/mountains-universe02.png")'

    ImagesBG.style.setProperty('--bg-img', bg_img);
  }

  function explorer(){
    bg_img= 'url("./assets/mountains-universe-3.png")'

    ImagesBG.style.setProperty('--bg-img', bg_img);

  }

  return{
    home,
    universe,
    explorer,
  }
}