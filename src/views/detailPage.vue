<template>
    <div>
        <div class="container">
            <div class="title-img-container">
                <div class="img-container">
                    <img v-if="this.loaded" :src="article.pictures[0].url" :alt="'imangen de ' + this.article.title">
                    <h1 v-else>Loading...</h1>
                </div>
                <div class="title-container">
                    <h1>{{this.article.title}}</h1>
                </div>
            </div>
            <div class="description-container">
                <p>{{this.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'detailPage',
    created() {
        console.log(this.$route.params.id);
        axios.get(`https://api.mercadolibre.com/items/${this.$route.params.id}`)
            .then((res) => {
                console.log(res.data),
                this.article = res.data;
                this.loaded = true;
            })
            .catch((err) => console.log(err));
        axios.get(`https://api.mercadolibre.com/items/${this.$route.params.id}/description`)
            .then((res) => {
                this.description = res.data.plain_text
                console.log(res)
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

<style>

</style>