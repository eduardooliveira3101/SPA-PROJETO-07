//Objeto pronto, reutilizável quando for necessário. O mesmo está sendo exportado.
export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    //Cancelamento de padrões
    event.preventDefault()

    //Trazendo o histórico
    window.history.pushState({}, "", event.target.href)

    //Executando a função handle
    this.handle()

  }

  handle() {
    //Desestruturação e o caminho da URL
    const { pathname } = window.location

    //Criando uma rota

    //Pegue um desses endereços já exisstentes ou o erro 404 será exibido.
    const route = this.routes[pathname] || this.routes[404]

    //Promessa / API HTML que entrega o conteudo logo após, porém não para a aplicação para isso, sendo uma função assincrona.
    fetch(route)
      .then(data => data.text())

      //Injetando conteudo
      .then(html => {
        document.querySelector("#app").innerHTML = html
      })
  }
  
}




