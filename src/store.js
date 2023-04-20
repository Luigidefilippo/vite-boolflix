import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    error: null,
    movies: null,
    userInput: null,
    lang: null,
    image: '../../public/img/',

    callApi(Batman) {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: '81a748c4cf20794badcafd3536296776',
                query: Batman
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
    }
})