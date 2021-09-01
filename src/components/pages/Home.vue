<template>
   
   <main>

       <div class="text-topo">Pesquisa por endereços e contatos </div>
        <img id="logo" src="https://acegif.com/wp-content/gifs/globe-9.gif" />
       <div class="text-bottom">SIS WEB, facilitando a sua vida! </div>

   </main>

</template>

<script>
export default{
    name:'Home'
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

    @media (max-width: 700px) {
         #logo{
            width: 120px;
        }
        .text-topo{
            color: var(--color-text-light);
            font-size: 20px;
            padding: 20px;
        }
    }

</style>
