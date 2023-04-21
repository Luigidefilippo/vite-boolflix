import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
    error: null,
    movies: null,
    userInput: null,
    flags: {
        es: '../../public/es.png',
        it: '../../public/it.png',
        en: '../../public/en.png',
        ja: '../../public/ja.png',
    },
    thumbUrl: 'https://image.tmdb.org/t/p/original/',
    // chiamata api
    callApi(batman) {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: '81a748c4cf20794badcafd3536296776',
                query:batman
            }
        }
        // chiamata axios
        axios(config)
            .then(response => {
                store.movies = response.data.results
                console.log(store.movies)
            })
            .catch(err => {
                console.log(err)
            })
             
    },
      // funzione ricerca lingua e sostituzione testo con bandiera (se possibile c'è la bandiera) 
    search(lang) {
        if (lang === 'en') {
            return store.flags.en
        } else if (lang === 'it') {
            return store.flags.it
        } else if (lang === 'es') {
            return store.flags.es
        } else if (lang === 'ja') {
            return store.flags.ja
        }
    },
// funzione che genera stelle al posto del voto
    stars(vote) {
        return Math.ceil(vote)
    }
})