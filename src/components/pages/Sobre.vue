<template>
    <main>
        <section class="container">
            
            <div class="text-topo">Sobre o programa </div>
            <img id="logo" src="https://acegif.com/wp-content/gifs/globe-9.gif" />
            <div class="text-bottom">SIS WEB, <s>ATRAPALHANDO</s> facilitando a sua vida! </div>
            <p class="text-bottom">Simples programa para exercitar com o que VUE tem para oferecer e faciliar o desenvolvimento</p>
            
        </section>
    </main>
</template>

<script>
export default {
    name:'Sobre'
}
</script>

<style scoped>
    main{
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

 #logo{
        width: 90px;
    }

    .text-topo{
        color: var(--color-text-light);
        font-size: 22px;
        padding: 20px;
    }

     .text-bottom{
        color: var(--color-text-light);
        font-size: 18px;
         padding: 20px;
    }


</style>