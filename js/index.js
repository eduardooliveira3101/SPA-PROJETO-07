import { Router } from "./route.js"
import Events from "./events.js"
import Bg from "./bg.js"

//O mapeamento da rota, fazendo a função achar a page que eu quero
const router = new Router()
router.add('/' , '/pages/home.html')
router.add('/universe' , '/pages/universe.html')
router.add('/explorer','/pages/explorer.html')
router.add(404, '/pages/404.html')

//Função sendo executada na page inicial
router.handle()
Bg()

//Voltando ou indo para frente com o histórico.
window.onpopstate = () => {
  router.handle()
  Bg()
}

//Fazendo as rotas funcionarem após a refatoração
window.route = () => {
  router.route()
  Bg()
}

Events()






    


