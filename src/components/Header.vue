<template>
    <header>

        <nav  class="container">
        
            <a href="#">
                <img alt="Logotipo" id="logo" src="https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/images/fdec4032a25557564976374b8f6ba6bb">
            </a>

            <img alt="menu mobile" id="menu-button" src="https://img.icons8.com/cotton/2x/4a90e2/menu.png"/>

        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav{
        display: flex;
        justify-content: space-between;
    }

    #logo{
        width: 130px;
    }

    #menu-button{
        width: 60px;
    }
</style>