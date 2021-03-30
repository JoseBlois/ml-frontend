<template>
    <div class="list-container">
        <div v-bind:key="article.id" v-for="article in itemList">
            <Item :article="article"/>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import querystring from 'querystring';
import Item from '../components/Item';
import {mapActions, mapGetters} from 'vuex';
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
    computed: mapGetters(['itemList']),
    methods: {
        // goFind() {
        //     // console.log(this.$props.search)
        //     const data = {
        //             search: this.$props.search
        //         }
        //     const query = querystring.stringify(data)
        //     const x = query.slice(7);
        //     // console.log(x);
        //     axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${x}`)
        //         .then((res) => {
        //             this.articles = res.data.results.slice(0,4);
        //             // console.log(this.articles)
        //         })
        //         .catch((err) => console.log(err))
        // },
        ...mapActions(['getItems']),
    },
    created() {
        const data = {
            search: this.$props.search
        }
        const query = querystring.stringify(data)
        const x = query.slice(7);
        this.getItems(x);
    },
    watch: {
        search: function () {
            // console.log(this.$props.search)
            const data = {
                    search: this.$props.search
                }
            const query = querystring.stringify(data)
            const x = query.slice(7);
            this.getItems(x)
            // console.log(`https://api.mercadolibre.com/sites/MLA/search?q=${x}`);
            // axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${x}`)
            //     .then((res) => {
            //         // console.log('-- RES.DATA --');
            //         // console.log(res.data);
            //         this.articles = res.data.results.slice(0,4);
            //         // console.log('-- THIS.ARTICLES --');
            //         // console.log(this.articles)
            //     })
            //     .catch((err) => console.log(err))
        },
    }
}
</script>

<style lang="scss">
    .list-container{
        width: 75%;
        margin: 0px auto;
        padding: 5px;
        background-color: #fff;
    }
</style>