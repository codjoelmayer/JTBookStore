<template>
    <div class="container-fluid">
        <div class="row">
            <h2 class="display-2">Login</h2>
        </div>
        <div class="row">
            <div class="col">
                <form class="form" @submit.prevent="signIn">
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
                    <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
                  </div>
                  <div class="form-control-wrapper">  
                    <button type="submit" class="btn btn-success w-100">Login</button>
                  </div>
                  <div class="form-control-wrapper">  
                    <button type="submit" class="btn btn-outline-success w-100">Forget Password</button>
                  </div>
              </form>

            </div>
        </div>
    </div>
</template>
  
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
    setup() {
      const payload = {
          emailAdd: '',
          userPass: '',
        }
      const store = useStore();
      const signIn = ()=> {
          store.dispatch("login", payload);
      }
      const userMsg = 
      computed( ()=>store.state.message )
      return {
        payload,
        userMsg,
        signIn
      }

    }

}
</script>
