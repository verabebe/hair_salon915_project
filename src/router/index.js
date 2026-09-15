import { 
    createRouter, 
    createWebHistory 
} from "vue-router"

import ProductsView from "../views/ProductsView.vue"
import AboutView from "../views/AboutView.vue"
import ProductDetailView from "../views/ProductDetailView.vue"
import CategoryProductView from"../views/CategoryProductView.vue"
import CartView from '../views/CartView.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>import("../views/HomeView.vue")
        // 這種寫法可以到該路由時才import，大專案比較不會進首頁就lag
    },
    {
        path: "/products",
        name: "products",
        component: ProductsView
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    },
    {
        path: "/products/:id",
        name: "productdetail",
        component: ProductDetailView
    },
    {
        path: "/products/category/:category",
        name: "CategoryProductView",
        component: CategoryProductView
    },

    {
        path: "/cart",
        name: "cart",
        component: CartView
    }
    
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router