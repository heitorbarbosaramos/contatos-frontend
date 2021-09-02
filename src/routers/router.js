import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home';
import Contatos from '../components/pages/Contatos';
import NovoEndereco from '../components/pages/NovoEndereco';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path:"/contatos",
        component: Contatos
    },
    {
        path:"/novoEndenreco",
        component: NovoEndereco
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;