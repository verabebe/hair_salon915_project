<script>
import { Icon } from '@iconify/vue'

export default {
    // 註冊元件
    components: {
        Icon
    },

    props: {
        product: {
            type: Object,
            required: true
        }
    },
    emits: ["add"],
    methods: {
        goDetail() {
            this.$router.push(`/products/${this.product.id}`)
        },
        goCategory() {
            this.$router.push(`/products/category/${this.product.category}`)
        }
    }

}
</script>
<template>
    <article @click="goDetail">
        <span class="category" :class="{
            red: product.price > 40000,
            orange: product.price > 3000 && product.price <= 1000
        }" @click.stop="goCategory">
            {{ product.category }}
        </span>

        <h3>
            {{ product.name }}
        </h3>

        <img class="card-img" :src="product.img" alt="example">

        <p>
            {{ product.description }}
        </p>

        <strong>
            {{ product.price }}
        </strong>

        <button type="button" @click.stop="$emit('add', product)">
            <Icon icon="typcn:shopping-cart" width="24" height="24" color="red" />
            加入購物車

        </button>

    </article>

</template>

<style scoped>
.category {
    display: inline;
    cursor: pointer;
}

.category:hover {
    color: white;
    background-color: blue;
    transform: translateY(-5px);
}

.category.orange {
    color: black;
    background-color: orange;
}

.category.red {
    color: black;
    background-color: red;
}
</style>
