<template>
    <div class="list-container">
        <div v-bind:key="article.id" v-for="article in this.articles">
            <Item :article="article"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import querystring from 'querystring';
import Item from '../components/Item';
export default {
    name: 'itemList',
    props: ['search'],
    components: {
        Item
    },
    data() {
        return {
            articles: []
        }
    },
    methods: {
        goFind() {
            console.log(this.$props.search)
            const data = {
                    search: this.$props.search
                }
            const query = querystring.stringify(data)
            const x = query.slice(7);
            console.log(x);
            axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${x}`)
                .then((res) => {
                    this.articles = res.data.results.slice(0,4);
                    console.log(this.articles)
                })
                .catch((err) => console.log(err))
        }
    },
    created() {
        this.goFind();
    },
    watch: {
        search: function () {
            console.log(this.$props.search)
            const data = {
                    search: this.$props.search
                }
            const query = querystring.stringify(data)
            const x = query.slice(7);
            console.log(`https://api.mercadolibre.com/sites/MLA/search?q=${x}`);
            axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${x}`)
                .then((res) => {
                    this.articles = res.data.results.slice(0,4);
                    console.log(this.articles)
                })
                .catch((err) => console.log(err))
        },
    }
}
</script>

<style lang="scss">
    .list-container{
        width: 80%;
        margin: 0px auto;
        padding: 5px;
        background-color: #fff;

        // .item-container {
        //     background-color: #fff ;
        //     display: flex;
        // }
    }
</style>