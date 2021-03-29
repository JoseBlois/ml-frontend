<template>
    <div class="form-container">
        <form @submit="Submit">
            <input type="text" v-model="title" placeholder="Buscar producto marcas y mas...">
            <button type="submit">Search</button>
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
                console.log('query desde el search: '  + query);
                window.location = '#/items?' + query;
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
                width: 100%;
                font-size: 18px;
                padding: 5px;
                border: none;
            }
        }
    }
</style>