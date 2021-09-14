export const Api = {
    url: 'https://back-end-to-do-list-node.herokuapp.com/tarefas',
    buildGetRequest: ()=>fetch(Api.url)
}