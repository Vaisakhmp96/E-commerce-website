<template>
  <div>
    
    <form >
      <input type="text" class="search-input" v-model="searchTerm" @input="searchProducts" placeholder=" Search Products">
      <div class="input-group-prepend">
        
      
</div>

    </form>
    <b-container fluid class="bv-example-row">
            <b-row class="mb-3">
                <b-col v-for="product in filteredProducts" :key="product.id">
                    
                
                        <img :src="product.image" />
                        <h3>{{ product.name }}</h3>

                        <h3>${{ product.price }}</h3>

                        <b-button variant="primary" @click='addToCart(product)' class='button is-info'>Add to cart</b-button> <br>
                        
                        
                </b-col>

            </b-row>
        </b-container>
        
        <!-- <h2>Cart</h2>
        <ul v-for="item in cartList" :key="item.id">
          <img :src="item.image" />
          <li>{{ item.name }} . {{ item.price }} <b-button @click='removeFromCart(item)' class='button is-danger'>Remove</b-button></li>
        
      </ul>
      
  </div> -->
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  computed: {
    ...mapState(['searchTerm']),
    ...mapGetters(['filteredProducts', 'cartList'])
  },
  methods: {
    ...mapActions(['updateSearchTerm', 'addToCart', 'removeFromCart']),
    searchProducts () {
      this.updateSearchTerm(this.searchTerm)
    },
    removeFromCart(item){
      this.$store.dispatch('removeFromCart', item)
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
.search-input {
padding: 10px;
font-size: 16px;
border-radius: 5px;
border: 1px solid #ccc;
width: 50%;
margin: 20px auto;
}
input.search-input {
  width: 400px;
  height: 28px;
  border: 1px solid #555;
  padding: 9px 4px 9px 40px;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
}

/* .search-input::placeholder {
  content: url(https://www.seekpng.com/png/detail/71-712261_lens-clipart-magnifier-search-icon-png-grey.png);
  padding-left: 20px;
  background-repeat: no-repeat;
} */


</style>