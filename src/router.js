import { createRouter, createWebHistory} from "vue-router";
import HomePage from './view/HomePage.vue';
import AboutUs from './view/AboutUs.vue';
import ContactUs from './view/ContactUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect:'/home'},
        {path:'/home', component:HomePage},
        {path:'/about', component:AboutUs},
        {path:'/contact', component:ContactUs}
    ]
})

export default router;