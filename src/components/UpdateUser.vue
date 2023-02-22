<template>
        <div class="row">
      <div class="modal fade" :id="updateUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="display-4 text-center" id="exampleModalLabel">Update User</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <form class="form" @submit.prevent="updateRecord">
                <div class="form-control-wrapper">  
                    <span class="inline">
                      <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>   
                      <i class="bi bi-person"></i>           
                    </span>
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
                        <i class="bi bi-person"></i>
                      </span>          
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Gender" v-model="payload.gender">
                        <i class="bi bi-person-fill"></i>
                      </span>        
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
                        <i class="bi bi-telephone-fill"></i>
                      </span>        
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
                        <i class="bi bi-envelope"></i>
                      </span>        
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass">
                        <i class="bi bi-person-fill"></i>
                      </span>        
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="user / admin" v-model="payload.userRole">
                        <i class="bi bi-person"></i>
                      </span>        
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                        <i class="bi bi-link"></i>
                      </span>        
                  </div>
                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
                      </span >        
                  </div>
                  <div class="form-control-wrapper">  
                    <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
                  </div>
                  <div class="form-control-wrapper">  
                    <button type="submit" class="btn btn-success">Update</button>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success m-auto" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
import {getCurrentInstance} from 'vue';
export default {
    props: ["updateUser", "record"],
    data() {
        return {
          payload : {
            firstName: this.record.firstName,
            lastName: this.record.lastName,
            gender: this.record.gender,
            cellphoneNumber: this.record.cellphoneNumber,
            emailAdd: this.record.emailAdd,
            userPass: this.record.userPass,
            userRole: this.record.userRole,
            userProfile: this.record.userProfile,
            joinDate: this.record.joinDate
          }
        }
    },
    setup() {
        const store = useStore();
        const updateRecord = ()=> {
            store.dispatch("updateUser", getCurrentInstance().data.payload);
        }
        const userMsg = 
        computed( ()=>store.state.message )
        return {
            userMsg,
            updateRecord
        }
    }
}
</script>