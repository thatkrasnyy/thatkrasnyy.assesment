import axios from 'axios'

let state = {
    companies: []
}
let getters = {
    GET_COMPANIES: state => state.companies
}
let mutations = {
    SET_COMPANIES: (state, companies) => (
        state.companies = companies
    )
}
let actions = {
    async FETCH_COMPANIES({commit}) {
        const response = await axios.get(`https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/525e8e2fbee5cd98a80499c400f569e77b4f6ffd/server-response.json`);
        commit("SET_COMPANIES", response.data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
