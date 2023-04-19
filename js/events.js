import {
  home, 
  universe ,
  explorer ,
  ImagesBG 
} from './elements.js'

import Bg from './bg.js'

export default function() {
  home.addEventListener('click', function() {
    Bg()
  })
  
  universe.addEventListener('click', function() {
    Bg()
  })

  explorer.addEventListener('click', function() {
    Bg()
  })


  return 

}