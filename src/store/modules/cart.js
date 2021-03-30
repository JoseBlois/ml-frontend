const state = {
    products: [],
    price: 0,
};

const getters = {
    allProducts: (state) => state.products,
    getPrice: (state) => state.price,
}

const actions = {
    addProduct({commit}, product) {
        commit('newProduct', product)
    },
    deleteProduct({commit}, id) {
        commit('deleteProduct', id);
    },
    deleteAll({commit}, id) {
        commit('deleteAll', id);
    },
    clearCart({commit}) {
        commit('clearCart')
    }
}

const mutations = {
    newProduct: (state, product) => {
        const another = state.products.find(og => og.id === product.id);
        if(another) {
            another.quantity += 1;
            state.price += product.price;
        } else {
            product.quantity = 1;
            state.products.unshift(product)
            state.price += product.price;
        }
    },
    deleteProduct: (state, id) => {
        const another = state.products.find(product => product.id === id);
        if(another.quantity === 1) {
            state.products = state.products.filter(product => product.id !== id);
        } else {
            another.quantity -= 1;
        }
        state.price -= another.price;
        
    },
    deleteAll: (state, id) => {
        // console.log(id)
        const found = state.products.find(product => product.id === id);
        state.products = state.products.filter(product => product.id !== id);
        state.price -= found.price * found.quantity;
    },
    clearCart: (state) => {
        state.products = []
        state.price = 0;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}