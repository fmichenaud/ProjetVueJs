import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuetify from 'vuetify';
Vue.use(Vuetify);
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import App from '../src/App.vue';
import CreateItem from '../src/components/CreateItem.vue';
import DisplayItem from '../src/components/DisplayItem.vue';
import EditItem from '../src/components/EditItem.vue';
import Navbar from '../src/components/Navbar.vue';
import ShowItem from '../src/components/ShowItem.vue';

const routes = [
{
        name: 'CreateItem',
        path: '/create/item',
        component: CreateItem
    },
    {
        name: 'DisplayItem',
        path: '/',
        component: DisplayItem
    },
    {
        name: 'EditItem',
        path: '/movie/:id/edit',
        component: EditItem
    },
    {
        name: 'ShowItem',
        path: '/:id',
        component: ShowItem
    }
];

const router = new VueRouter({ routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
