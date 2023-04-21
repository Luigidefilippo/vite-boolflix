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
    callApi(batman) {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: '81a748c4cf20794badcafd3536296776',
                query:batman
            }
        }
        axios(config)
            .then(response => {
                store.movies = response.data.results
                console.log(store.movies)
            })
            .catch(err => {
                console.log(err)
            })
    },
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

    stars(vote) {
        return Math.ceil(vote)
    }
})