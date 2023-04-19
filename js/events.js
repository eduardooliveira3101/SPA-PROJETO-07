import {
  home, 
  universe ,
  explorer ,
  ImagesBG ,
} from './elements.js'

import Style from './bg.js'

export default function() {
  home.addEventListener('click', function() {
    Style()
  })
  
  universe.addEventListener('click', function() {
    Style()
  })

  explorer.addEventListener('click', function() {
    Style()
  })


  return 

}