<template>
    <div>
       <!-- <h1 class="title">Your Cart</h1> -->
    <p v-show="!cartList.length">
        <br><br><br><i>Your cart is empty!</i>
        <router-link to="/productData">Go shopping</router-link>
    </p>
    <div v-show="cartList.length">
        <br><br><br><h1>Your Cart</h1>
      
      <b-container fluid class="bv-example-row">
            <b-row class="mb-3">
                <b-col v-for="item in cartList" :key="item.id">
                    
                
                        <img :src="item.image" />
                        <h3>{{ item.name }}</h3>

                        <h3>${{ item.price }}</h3>
                        

                        <b-button variant="success" @click='removeFromCart(item)' class='button is-danger'>Remove</b-button> <br>
                        <b>Quantity: {{ item.quantity }} </b>
                        
                </b-col>

            </b-row>
        </b-container>
        <h3>Total: ${{ totalPrice }}</h3>
</div>
    </div>
  </template>
  <script>
  import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
return this.cartList.reduce((total, item) => {
return total + item.price * item.quantity
}, 0)
}
    

  },
  
  methods: {
    ...mapActions(['removeFromCart']),
    
    removeFromCart(item){
      this.$store.dispatch('removeFromCart', item)
    }
  },
}
</script>