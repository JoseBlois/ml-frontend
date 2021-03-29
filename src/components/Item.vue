<template>
        <div @click="redirect" class="item">
            <div class="item-img">
                <img :src="article.thumbnail" alt="">
            </div>
            <div class="item-desc">
                <span>$ {{article.price}}</span>
                <span class="location">{{article.seller_address.state.name}}</span>
                <p>{{article.title}}</p>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['article'],
    methods: {
        redirect () {
            window.location.href = `#/items/${this.article.id}`
        }
    }
}
</script>

<style lang="scss">
    .item {
        display: flex;
        text-align: left;
        cursor: pointer;
        margin: 5px;
        padding: 5px;
        border-bottom: solid 1px #ddd;

        .item-img{
            width: 150px;
            height: 150px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }

        }

        .item-desc {
            width: 80%;
            margin-left: 10px;
            padding: 10px;
            position: relative;

            span {
                font-size: 20px;
            }
            .location {
                position: absolute;
                right: 10px;
                top: 20px;
                font-size:  12px
            }
            p {
                margin-top: 10px;
                width: 70%;
            }
        }

    }
</style>