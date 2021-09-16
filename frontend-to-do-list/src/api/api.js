export const Api = {
    url: 'https://back-end-to-do-list-node.herokuapp.com/tarefas',
    buildGetRequest: ()=>fetch(Api.url),
    buildGetRequestId: (id)=>fetch(Api.url+'/'+id),
    fetchPost: (task)=>{
        return fetch(Api.url+"/add",{
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(task)
        })
    },
    fetchPut: (body,id) =>{
        return fetch(Api.url+'/edit/'+id,{
            method: 'PUT',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(body)
        })
    },
    fetchDelete: (id) =>{
        return fetch(Api.url+"/delete/"+id,{
            method: 'DELETE'
        })
    }
}   
