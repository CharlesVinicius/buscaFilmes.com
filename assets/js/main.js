const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8'
const URL_UR = 'https://api.themoviedb.org/3'
const API_URL = URL_UR + '/discover/movie?sort_by=popularity.desc&'+ API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchURL = URL_UR + '/search/movie?'+ API_KEY

const main = document.getElementById('main')
pegarFilmes(API_URL)
const form = document.getElementById('BuscarFilmes')
const search = document.getElementById('search')

function pegarFilmes(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results)
        mostrarFilmes(data.results)

    })
}

function mostrarFilmes(data){
    main.innerHTML = ''
    data.forEach(filme => {
        const{title, poster_path, vote_average} = filme
        const filmeEl = document.createElement('div')
        filmeEl.classList.add('filmes')
        filmeEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="conteudo">
            <h3>${title}</h3>

            <!--<div class="info">
                 <span>${vote_average}</span>
            </div>-->
        </div>
       `

        main.appendChild(filmeEl)
    });

}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
     const searchTerm = search.value

     if(searchTerm){
         pegarFilmes(searchURL+'&query='+searchTerm)
     }
})

/*function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote >=5){
        return  'orange'
    }else{
        return 'red'
    }
}*/
