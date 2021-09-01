<template>

    <footer>
        <a class="socialLink" v-for="socialLink in socialLinks" :key="socialLink.id" :href="socialLink.link" target="_blank">
            <img :alt="socialLink.label" :tile="socialLink.label" :src="socialLink.icon" />
        </a>
    </footer>

</template>

<script>

import api from '@/services/ap.js';

export default({
    name: 'Footer',
    data(){
        return{
            socialLinks:[]
        }
    },
    mounted(){
        api.get('/social/all').then(response => {
            console.log(response.data);
            this.socialLinks = response.data;
        })
    }
})
</script>

<style scoped>

    footer{
        height: 60px;
        width: 100%;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        justify-items: center;
    }

    .socialLink{
        border: 2px solid var(--color-text-light);
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .socialLink img{
        width: 20px;
    }
</style>
