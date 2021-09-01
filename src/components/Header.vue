<template>
    <header>

        <nav  class="container">
        
            <a href="#">
                <img alt="Logotipo" id="logo" src="https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/images/fdec4032a25557564976374b8f6ba6bb">
            </a>

            <img alt="menu mobile" id="menu-button" v-on:click="openMenu" src="https://img.icons8.com/cotton/2x/4a90e2/menu.png"/>

            <div id="menu-overlay" v-on:click="closeMenu" v-if="menuActive"></div>

            <div id="menu-items" :class="{active:menuActive}">
                <img alt="Logotipo" id="menu-logo" src="https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/images/fdec4032a25557564976374b8f6ba6bb">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            menuActive:false
        }
    },
    methods:{
        openMenu:function(){
            this.menuActive = true;
        },
        closeMenu:function(){
            this.menuActive = false;
        }

    }
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

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: rgb(0, 0, 0);
        opacity: 0.8;
    }

    #menu-logo{
        width: 110px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    #menu-items.active{
        display: flex;
    }

    @media (min-width: 700px) {
        #menu-button, #menu-logo, #menu-overlay{
            display: none;
        }

        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul{
            display: flex;
        }

        ul li{
            margin: 0;
            padding: 10px;
        }
    }

    ul{
        list-style: none;
        align-items: center;
    }

    ul li{
        margin: 20px 0px;
        text-align: center;
    }

    ul li a{
        color: var(--color-text-light);
    }
</style>