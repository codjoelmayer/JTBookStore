<template>
    <div class="container">
        <div class="row">
            <h4 class="display-4">User CRUD</h4>
        </div>
        <div class="row gap-2 ">
            <div class="col">
                <input class="form-control" type="text" placeholder="Filter users by their roles">
            </div>
            <div class="col">
                <button class="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#addUserModal">Add User</button>
                <AddUser addUser="addUserModal"/>
            </div>
        </div>
        <div class="row">
            <table class="table table-hover" v-if="users">
                <thead class="bg-gradient">
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Cellphone number</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Profile</th>
                        <th scope="col">Join Date</th>
                        <th scope="col">Edit or Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.userID">
                        <td data-title="User ID">{{user.userID}}</td>
                        <td data-title="Firstname">{{user.firstName}}</td>
                        <td data-title="Lastname">{{user.lastName}}</td>
                        <td data-title="Gender">{{user.gender}}</td>
                        <td data-title="Cellphone Number">{{user.cellphoneNumber}}</td>
                        <td data-title="Email Address">{{user.emailAdd}}</td>
                        <td data-title="User Role">{{user.userRole}}</td>
                        <td data-title="User Profile">
                            <img class="img-thumbnail sameSize" :src="user.userProfile" :alt="user.firsName" loading="lazy"/>
                        </td>
                        <td data-title="Join Date">{{ dateFormat(user.joinDate) }}</td>
                        <td data-title="Edit or Delete">
                            <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#updateUserModal" @click.prevent=""></i>
                            <UpdateUser updateUser = "updateUserModal"/>
                            <i class="bi bi-trash3-fill" 
                           @click ="removeUser(user.userID)"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-4" v-else>
                <SpinnerC/>
            </div>
        </div>

    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
import SpinnerC from './SpinnerC.vue';
import moment from 'moment';
import AddUser from './AddUser.vue';
import UpdateUser from './UpdateUser.vue';
export default {
    components: {
        SpinnerC,
        AddUser,
        UpdateUser
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        const users = 
        computed( ()=>store.state.users );
        const removeUser = (id)=>store.dispatch('deleteUser', 
        id);
        return {
            users,
            removeUser
        }
    },
    methods: {
        dateFormat(value) {
            return moment(value).format("YYYY-MM-DD");
        }
    }
}
</script>