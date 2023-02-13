<template>
    <!-- <div class="nav-item is-tab" :class="{ 'active-bottom-border': $route.path === '/cart' }"> -->
  <!-- <div class="field is-grouped">
    <p class="control"> -->
      <div>
        
        <b-nav tabs fill>
   
  
  
  
        <!-- </header> -->

      
       <b-nav-item active> <router-link to="/productData">Home</router-link></b-nav-item>
       <b-nav-item active><router-link to='/cartData'> Your Cart ({{ cartList.length }})</router-link></b-nav-item>
       <b-nav-item active><router-link to='/signupData'>Signup</router-link></b-nav-item>
       <b-nav-item active><router-link to='/'>Login</router-link></b-nav-item>
       <b-nav-item  @click="logout">Logout</b-nav-item>
       </b-nav>
       
</div>


   <!-- navbar-collapse.// -->
  
          <!-- <i class="fa fa-shopping-cart"></i> -->
      
 
   <!-- <a  href="#">Shoping Cart</a> -->
  <!-- <button  type="button"  data-bs-target="#main_nav">
      <span ></span>
   </button> -->
  
 <!-- container-fluid.// -->
 

        
  
 
  

</template>

<script>
import { RouterLink } from 'vue-router';
import { mapGetters } from 'vuex'
    export default {
      name: 'App',
      components: {
    RouterLink
},
computed: {
    ...mapGetters(['cartList'])
  },
methods:{
  logout(){
    localStorage.clear;
    this.$router.push({name:'Login'})
  }
},
        
    }
</script>

<style scoped>


</style>