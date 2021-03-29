<template>
    <div>
        <div v-if="this.loaded" class="container">
            <div class="title-img-container">
                <div class="img-container">
                    <img :src="article.pictures[0].url" :alt="'imangen de ' + this.article.title">
                </div>
                <div class="title-container">
                    <span>{{this.article.condition}} - {{this.article.sold_quantity}} Vendidos</span>
                    <h3>{{this.article.title}}</h3>
                    <span class="price">$ {{this.article.price}}</span>
                    <button class="buy-btn">Comprar</button>
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
export default {
    name: 'detailPage',
    created() {
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