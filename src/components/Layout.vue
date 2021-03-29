<template>
    <div>
        <header>
            <nav id="nav">
                <router-link to="/">
                    <img class="logo" src="../assets/logoml.png" alt="">
                </router-link>
                <Search />
            </nav>
        </header>
        <Cart />
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
import Search from './Search';
import Cart from './Cart';
export default {
    name: 'Layout',
    components: {
        Search,
        Cart,
    }
}
</script>

<style lang="scss">
#nav {
    padding: 5px 150px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #ffe600 ;
    a {
    font-weight: bold;
    color: #2c3e50;
    }
    .logo {
        height: 50px;
    }
}
main {
    min-height: 100vh;
    background-color: rgba(0,0,0,.1);
    padding: 10px 0px;
}

</style>