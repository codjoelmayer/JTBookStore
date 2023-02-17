<template>
    <div class="container-fluid">
        <h2 class="display-2">Admin</h2>
        <div class="row">
            <button class="btn btn-primary">Add a user</button>
        </div>
        <div class="row">
            <table class="table table-hover">
               <thead class="bg-gradient">
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email Address</th>
                    <th>Country</th>
                    <th>Edit/Delete</th>
               </thead>
               <tbody>
                <!-- {{users}} -->
                    <!-- <tr v-for="(user, index) in users" :key="index">
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>{{ user.country }}</td>
                        <td>
                    
                            <button>Edit</button>
                            <button>Delete</button>
                         
                        </td>
                    </tr> -->
               </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
    components: {
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        const users = 
        computed( ()=>store.state.users );

        return {
            users,
        }
    }
    
}
</script>
