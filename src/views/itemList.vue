<template>
    <div class="list-container">
        <div v-bind:key="article.id" v-for="article in itemList">
            <Item :article="article"/>
        </div>
    </div>
</template>

<script>
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
        ...mapActions(['getItems']),
    },
    created() {
        // console.log('---- search ----')
        // console.log(this.search);
        const data = {
            search: this.search
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