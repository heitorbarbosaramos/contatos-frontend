<template>
    <main>
        <section class="container">
             <h1 class="title">Ooops!</h1>
             <p>Página não encontrada. Não se preocupe, temos muitas outras páginas para explorar</p>
             <img id="notFound" src="https://acegif.com/wp-content/gifs/globe-9.gif">
        </section>
    </main>
</template>

<script>
export default {
    name:'NotFoundPage'
}
</script>

<style scoped>

     main{
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    p{
        color: var(--color-text-light);
    }

    .title{
        color: var(--color-text-title);
    }

     #notFound{
        width: 290px;
    }
</style>
