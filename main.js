let prourl ="https://fakestoreapi.com/products"
let getProjects =() =>{
    fetch(prourl)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        // loopmovie()
    })
}
let loopmovie=(proj)=>{
    let lp=document.getElementById('mdiv')
    for(let i=0;proj.length.i;i++){
        let project =proj[i]
        let pc =
        `
            <p>${project.title}</p>
        `
        lp.innerHTML+=pc
    }
}

getProjects()