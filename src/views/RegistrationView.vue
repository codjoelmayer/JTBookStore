<template>
    <div class="container-fluid">
        <h2 class="display-2">Registration</h2>
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#registerUserModal">Click here to register</button>
        <AddUser addUser="registerUserModal" title="Registration" :isAdmin = "false"/>
    </div>
</template>
<script>
import AddUser from '@/components/AddUser.vue';
export default {
    components: {
        AddUser
    }
}
</script>
