import { Router } from "./route.js"

//O mapeamento da rota, fazendo a função achar a page que eu quero
const router = new Router()
router.add('/' , '/pages/home.html')
router.add('/universe' , '/pages/universe.html')
router.add('/explorer','/pages/explorer.html')
router.add(404, '/pages/404.html')

//Função sendo executada na page inicial
router.handle()

//Voltando ou indo para frente com o histórico.
window.onpopstate = () => router.handle()

//Fazendo as rotas funcionarem após a refatoração
window.route = () => router.route()






    


