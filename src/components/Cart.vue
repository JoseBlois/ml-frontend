<template>
    <div class="cart">
        <h2>Cart</h2>
        <div v-bind:key="product.id" v-for="product in allProducts">
            <p>{{product.quantity}}x {{product.title}}</p>
            <p>{{product.price * product.quantity}}</p>
            <button @click="deleteProduct(product.id)">Delete one</button>
            <button @click="deleteAll(product.id)">Delete all</button>
        </div>
        <button @click="clearCart" class="clear-cart">Clear Cart</button>
        <p>{{getPrice}}</p>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'Cart',
    computed: mapGetters(['allProducts','getPrice']),
    methods: {
        ...mapActions(['deleteProduct','deleteAll','clearCart'])
    },
}
</script>

<style lang="scss">
    .cart{
        width: 200px;
        height: 300px;
        background-color: #fff;
        position: fixed;
        z-index: 1000;
        bottom: 0;
        right: 0;
        overflow: auto;
        border: solid 1px #000;
        .clear-cart {
            background-color: #c70000;
            color: #fff;
            width: 100%;
            border: none;
            cursor: pointer;
        }
    }
</style>