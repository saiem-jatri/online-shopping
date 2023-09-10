import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
    state: () => ({
        products: [],
        cart: []
    }),

    actions: {
        fetchProductsFromDB() {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(json => {
                    this.products = json.products;
                })
        },

        addToCart(product) {
            let findItem = this.cart.find((cart)=>{
                return  product.id === cart.id
            })
            console.log(findItem)
            if(!findItem){
                let price = product.price
                let test = {...product, quantity: 1, totalPrice: price}
                this.cart.push(test)
            }else{
                findItem.quantity = findItem.quantity +1
                findItem.totalPrice = findItem.totalPrice + product.price
            }
        },
         removeFromCart(id){
            this.cart = this.cart.filter((item) => item.id !== id)
        },

        reduceOneItem(product){
            let findItem = this.cart.find((cart)=>{
                return  product.id === cart.id
            })
            if(findItem.quantity > 1){
                findItem.quantity = findItem.quantity - 1
                findItem.totalPrice = findItem.totalPrice - product.price
            }else{
                this.removeFromCart(findItem.id)
            }

        }



    }
})
