<template>
  <div>
 <form @submit.prevent="handleSubmit">
  <h3>Login</h3>

  <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
      </div>
      <div class="fom-group">
       <label>Password</label>
       <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div><br>
      <button class="btn btn-primary btn-block">Login</button>
      <p>
          <router-link to="/signupData">Sign Up</router-link>
      </p>
  </form>
  </div>
</template>

<script>
  
  export default {
      name: 'loginData',
      data() {
          return {
             
              email: "",
              password: ""
              }
          },
      methods: {
           handleSubmit(){
            const formData = {
              
              email: this.email,
              password: this.password,
              
            };
          
          console.log(formData);
          this.$router.push('/productData');
      }
      }
      }
</script>

<style scoped>

</style>