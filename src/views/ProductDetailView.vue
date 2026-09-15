<script>
export default {

    data() {
        return {
            products: [],
            product: null,
            isLoading: false,
            errorMessage: ""
        }
    },

    methods: {
        async fetchProduct() {          

            this.isLoading = true
            this.errorMessage = ""

            try {

                const response =
                    await fetch("/data/products.json")

                if (!response.ok) {
                    throw new Error(
                        `HTTP ${response.status}`
                    )
                }

                this.products =
                    await response.json()
                
                console.log(this.$route.params.id);
                
                
                const productId=Number(this.$route.params.id)

                console.log(productId);
                

                this.product=this.products.find(
                    product=> product.id===productId)

                    

            } catch (error) {

                console.error(error)

                this.errorMessage =
                    error.message

            } finally {

                this.isLoading = false
            }
        }
    },

    mounted() {
        this.fetchProduct()
    }

};
</script>


<template>
    <main class="page">
        <!-- 返回上一頁 -->
        <div class="page-header">

            <RouterLink
                to="/products"
                class="back-link"
            >
                ← 返回商品列表
            </RouterLink>

        </div>


        <!-- 載入中 -->
        <section v-if="isLoading" class="status-card">

            <div class="loading-icon">
                ⏳
            </div>

            <h2>商品資料載入中</h2>

            <p>
                正在幫你取得商品資訊...
            </p>

        </section>


        <!-- 發生錯誤 -->
        <section
            v-else-if="errorMessage"
            class="status-card"
        >

            <div class="status-icon">
                ⚠️
            </div>

            <h2>
                商品資料讀取失敗
            </h2>

            <p class="error">
                {{ errorMessage }}
            </p>

        </section>


        <!-- 商品存在 -->
        <section
            v-else-if="product"
            class="product-detail"
        >

            <!-- 左側商品視覺區 -->
            <div class="product-visual">

                <img :src="product.img" alt="example">

                <!-- <div class="product-icon">
                    🛍️
                </div>

                <span class="visual-text">
                    商品圖片
                </span> -->

            </div>


            <!-- 右側商品資訊 -->
            <div class="product-info">

                <span class="badge">
                    {{ product.category }}
                </span>


                <h1 class="product-title">
                    {{ product.name }}
                </h1>


                <p class="product-id">
                    商品編號：
                    #{{ product.id }}
                </p>


                <div class="divider"></div>


                <p class="product-description">
                    {{ product.description }}
                </p>


                <div class="price-area">

                    <span class="price-label">
                        售價
                    </span>

                    <div class="product-price">

                        <small>
                            NT$
                        </small>

                        {{
                            product.price.toLocaleString()
                        }}

                    </div>

                </div>


                <div class="product-actions">

                    <RouterLink
                        to="/products"
                        class="btn"
                    >
                        返回商品列表
                    </RouterLink>

                </div>

            </div>

        </section>


        <!-- 找不到商品 -->
        <section
            v-else
            class="status-card"
        >

            <div class="status-icon">
                🔍
            </div>

            <h1>
                找不到商品
            </h1>

            <p>
                找不到商品 ID：
                <strong>
                    {{ $route.params.id }}
                </strong>
            </p>

            <RouterLink
                to="/products"
                class="btn"
            >
                返回商品列表
            </RouterLink>

        </section>

    </main>

</template>