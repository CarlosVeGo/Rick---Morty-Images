const container = document.querySelector(".container");
const apiLink = `https://rickandmortyapi.com/api/character`;



fetch(apiLink).then((data)=>data.json().then((res)=>{
    console.log(res)
    const results = res.results;
    

    results.forEach(result => { 
        
        const linkImage = result.image;
        const name = result.name;
        container.innerHTML +=`
        <div class="card">
            <span>${name}</span>
            <img src="${linkImage}" alt="imagen de ${name}">
        `
        console.log(result)
    });

}))

