<template>
    <div class="form-container">
        <form @submit="Submit">
            <input type="text" v-model="title" placeholder="Buscar producto marcas y mas...">
            <button type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    </div>
</template>

<script>
import querystring from 'querystring';
export default {
    name: 'search',
    props: ['articles'],
    data() {
        return {
            title: '',
        }
    },
    methods: {
        Submit (e) {
            e.preventDefault();
                const data = {
                    search: this.title
                }
                const query = querystring.stringify(data)
                const newPath = '/items?' + query;
                this.$router.history.push(newPath);
                // window.location = '#/items?' + query;
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-container {
        width: 100%;
        form {
            display: flex;
            input {
                width: 95%;
                font-size: 18px;
                padding: 5px;
                border: none;
            }
            button i {
                width: 30px;
            }
        }
    }
</style>