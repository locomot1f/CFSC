Vue.config.devtools = true;

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:`   
        <div class="product">
            <div :style="title"> 
                <h1>{{ product }}</h1>
                <span>{{ description }}</span>
            </div>
            <div>
                <img :src="image" />
                <p v-if="inStock > 0">In Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <div v-for="list in lists" :key="list.GroupID">
                <p @mouseover="updateImage(list.ImageID)">{{list.GroupID}} - {{list.AgeID}}</p>
                </div>
            </div>
            <product-review @review-subbmitted="addReview"></product-review>
        </div>
        `,
  data() {
    return  {
      product: 'Boots',
      description: 'This is a description of the term Boots',
      image: 'https://drive.google.com/uc?export=view&id=0BzHHb3SBxtQSemNoWXNQcnVGalVSUHJwekZsTlRkRVZhektj',
      title: 'padding:10px; color:hsla(215, 65%, 28%, 1);border-radius:5px 5px 0 0;',
      inStock: 0,

      lists: [ 
            {
              GroupID: 'U8 Girls',
              AgeID: 8,
              ImageID: 'https://drive.google.com/uc?export=view&id=1hov1CiPoxW1OA1c3SD54Dnq8QVAi3NKM'
            }, 
            {
              GroupID: 'U9 Girls',
              AgeID: 9,
              ImageID: 'https://drive.google.com/uc?export=view&id=1jBbH4MyNz1bpOX_fJ1EewshsyfsWuIdJ'
            },
            {
              GroupID: 'U10 Boys',
              AgeID: 10,
              ImageID: 'https://drive.google.com/uc?export=view&id=1hov1CiPoxW1OA1c3SD54Dnq8QVAi3NKM'
            }, 
            {
              GroupID: 'U12 Boys',
              AgeID: 12,
              ImageID: 'https://drive.google.com/uc?export=view&id=1jBbH4MyNz1bpOX_fJ1EewshsyfsWuIdJ'
            }
            ],
            reviews:[]
    }
  },  
  methods: {
    updateImage: function(ImageID) {
      this.image = ImageID
    },
    addReview: function(productReview) {
      this.reviews.push(productReview)
    }
  },
  computed:{
      shipping(){
          if (this.premium){
              return "Free"
          }
          return 2.99
      }
  }
})

Vue.component('product-review', {
    template:`
    <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
        
    <p>
      <input type="submit" value="Submit">  
    </p>    
  
  </form>
    `,
    data(){
        return {
            name: null,
            review: null,
            rating: null,
        }
    },
    methods:{
      onSubmit(){
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        this.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
      }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: false
    }

})