import axios from 'axios';
const state = {
    itemList: [],
    selectedItem: {},
    loading: true,
}

const getters = {
    itemList: (state) => state.itemList,
    selectedItem: (state) => state.selectedItem,
    isLoading: (state) => state.loading,
}

const actions = {
    async getItems({commit},query) {
        try {
            const res = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
            commit('listItems',res.data.results.slice(0,4))
        } catch (err) {
            console.log(err)
        }
    },
    async getSelectedItem({commit}, id) {
        // console.log(id);
        const itemRes = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        const descRes = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
        // console.log('-- ITEMRES --');
        const item = itemRes.data;
        item.description = descRes.data.plain_text
        // console.log('-- DESC RES --')
        // console.log(descRes)
        commit('selectItem', item);
    }
};

const mutations = {
    listItems(state,items) {
        // console.log('vuex')
        state.itemList = items
    },
    selectItem(state,item) {
        // console.log('vuex   -   select item');
        state.loading = false
        state.selectedItem = item
        // state.selectedItem = item;

    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}