<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h3>Sign Up</h3>
        <div class="form-group">
    <label for="first_name">First Name</label>
    <input type="text" class="form-control" id="first_name" v-model="first_name" placeholder="First Name">
    </div>
    <div class="form-group">
        <label for="last_name">Last Name</label>
        <input type="text" class="form-control" id="last_name" v-model="last_name" placeholder="Last Name"/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password"  placeholder="Password">
                </div>
                <div class="form-group">
                <label for="password-confirm">Confirm Password</label>
                <input type="password" class="form-control" id="password_confirm" v-model="password_confirm"  placeholder="Re-type password">
                </div>
                <button class="btn btn-primary btn-block">SignUp</button>
                <p>
          <router-link to="/">Login</router-link>
      </p>
                </form>
    </div>
</template>

<script>
    
    export default {
        name: 'signupData',
        data() {
            return {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                password_confirm: ""
                }
            },
        methods: {
             handleSubmit(){
              const formData = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
              };
            
            console.log(formData);
            this.$router.push('/'); 
        }
        }
        }
    
    

</script> 

<style scoped>

</style>