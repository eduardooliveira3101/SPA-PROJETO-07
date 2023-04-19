import { Router } from "./route.js"
import Events from "./events.js"
import Style from "./bg.js"

const router = new Router()
router.add('/' , '/pages/home.html')
router.add('/universe' , '/pages/universe.html')
router.add('/explorer','/pages/explorer.html')
router.add(404, '/pages/404.html')

router.handle()
Style()

window.onpopstate = () => {
  router.handle()
  Style()
}

window.route = () => {
  router.route()
  Style()
}

Events()






    


