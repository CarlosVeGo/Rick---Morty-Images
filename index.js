const container = document.querySelector(".container");
const next = document.querySelector(".next");
const back = document.querySelector(".back")
const botones = document.querySelector(".botones");
let page = 1;
let apiLink = `https://rickandmortyapi.com/api/character/?page=${page}`;

function showPage(link){
    fetch(link).then((data)=>data.json().then((res)=>{
        
        const results = res.results;
        container.innerHTML =``;
        
        results.forEach(result => { 
            
            const linkImage = result.image;
            const name = result.name;
            container.innerHTML +=`
            <div class="card">
                <span>${name}</span>
                <img src="${linkImage}" alt="imagen de ${name}">
            `
        });
    
    })).catch((err)=>container.innerHTML=`try again later`)
    
}

showPage(apiLink)

next?.addEventListener("click",() => {

    container.innerHTML = `Loading Images...`;
    page++;
    apiLink = `https://rickandmortyapi.com/api/character/?page=${page}`;

    showPage(apiLink);

    back.classList.remove("dis");

    page === 42 ? next.classList.add("dis"):null;

})

back?.addEventListener("click",() => {
    
    container.innerHTML = `Loading Images...`;
    page === 42 ? next.classList.remove("dis"):null;
    
    page--;
    
    apiLink = `https://rickandmortyapi.com/api/character/?page=${page}`;

    showPage(apiLink);

    page === 1 ? back.classList.add("dis"):null;

})
