<template>
    <div>
        <div v-if="!isLoading" class="container">
            <div class="title-img-container">
                <div class="img-container">
                    <img :src="selectedItem.pictures[0].url" :alt="'imangen de ' + selectedItem.title">
                </div>
                <div class="title-container">
                    <span>{{selectedItem.condition}} - {{selectedItem.sold_quantity}} Vendidos</span>
                    <h3>{{selectedItem.title}}</h3>
                    <span class="price">$ {{selectedItem.price}}</span>
                    <button @click="actionAdd" class="buy-btn">Comprar</button>
                </div>
            </div>
            <div class="description-container">
                <h3>Descripción del producto</h3>
                <p>{{this.description}}</p>
            </div>
        </div>
        <h1 v-else>Loading...</h1>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'detailPage',
    computed: mapGetters(['selectedItem','isLoading']),
    created() {
        this.getSelectedItem(this.$route.params.id)
        // console.log(this.$route.params.id);
        axios.get(`https://api.mercadolibre.com/items/${this.$route.params.id}`)
            .then((res) => {
                // console.log(res.data),
                this.article = res.data;
                this.loaded = true;
            })
            .catch((err) => console.log(err));
        axios.get(`https://api.mercadolibre.com/items/${this.$route.params.id}/description`)
            .then((res) => {
                this.description = res.data.plain_text;
                // console.log('-- DESCRIPTION RESPONSE --');
                // console.log(res)
            })
            .catch((err) => console.log(err));
    },
    data() {
        return {
            article: {},
            description: '',
            loaded: false,
        }
    },
    methods: {
        ...mapActions(['addProduct','getSelectedItem']),
        actionAdd() {
            this.addProduct({
                id: this.article.id,
                title: this.article.title,
                price: this.article.price,
            });
        }
    }
}
</script>

<style lang="scss">
    .container {
        width: 75%;
        margin: 0px auto;
        padding: 20px;
        background-color: #fff;
        font-family: Arial, Helvetica, sans-serif;

        .title-img-container {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 50px;
            .img-container {
                width: 70%;
            }
            .title-container {
                width: 25%;
                text-align: left;
                color: #000;
                span {
                    text-transform: capitalize;
                }
                .price {
                    display: block;
                    margin: 20px 0px;
                    font-size: 36px;
                }
                .buy-btn {
                    width: 100%;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #1a73e8;
                    cursor: pointer;
                }
            }
        }
        .description-container {
            text-align: left;
            width: 90%;
            h3 {
                font-size: 24px;
                font-weight: 700;
            }
            p {
                margin-top: 20px
            }
        }
    }
</style>