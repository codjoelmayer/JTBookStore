<template>
    <div class="container-fluid">
        <h2 class="display-2">Admin</h2>
        <!-- User -->
        <div class="row">
            <UserCRUD/>
        </div>
        <!-- Product -->
        <div class="row">
            <ProductCRUD/>
        </div>
    </div>
</template>
<script>
import UserCRUD from '@/components/UserCRUD.vue';
import ProductCRUD from '@/components/ProductCRUD.vue';
export default {
    components: {
        UserCRUD,
        ProductCRUD
    },    
}
</script>
