<template>
    <div class="cart">
        <div class="title-hud">
            <i @click="changeIcon" class="fa fa-window-minimize" aria-hidden="true"></i>
            <h2>Cart</h2>
        </div>
        <div v-bind:key="product.id" v-for="product in allProducts">
            <p>{{product.quantity}}x {{product.title}}</p>
            <p>{{product.price * product.quantity}}</p>
            <button @click="deleteProduct(product.id)">Delete one</button>
            <button @click="deleteAll(product.id)">Delete all</button>
        </div>
        <button @click="clearCart" class="clear-cart">Clear Cart</button>
        <p>Total: $ {{getPrice}}</p>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'Cart',
    computed: mapGetters(['allProducts','getPrice']),
    methods: {
        ...mapActions(['deleteProduct','deleteAll','clearCart']),
        changeIcon(e) {
            // console.log(e.target);
            if(e.target.classList.contains('fa-window-minimize')) {
                e.target.classList.remove('fa-window-minimize');
                e.target.classList.add('fa-angle-up');
                e.target.parentNode.parentNode.style.bottom = '-270px';
            } else {
                e.target.classList.add('fa-window-minimize');
                e.target.classList.remove('fa-angle-up');
                e.target.parentNode.parentNode.style.bottom = '0px';
            }
            // console.log(e.target.parentNode.parentNode);
            
        }
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
        .title-hud {
            height: 30px;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            i.fa-angle-up:hover, i.fa-window-minimize:hover {
                background: lightblue;
            }
        }
        .clear-cart {
            background-color: #c70000;
            color: #fff;
            width: 100%;
            border: none;
            cursor: pointer;
        }
    }
</style>