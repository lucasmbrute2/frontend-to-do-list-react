export const Api = {
    url: 'https://back-end-to-do-list-node.herokuapp.com/tarefas',
    buildGetRequest: ()=>fetch(Api.url),
    buildGetRequestId: (id)=>fetch(Api.url+'/'+id),
    fetchPost: (task)=>{
        fetch(Api.url+"/add",{
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(task)
        })
    },
}