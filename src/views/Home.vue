// home.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>

    <template #content>

      <div class="d-flex bg-info mb-3 p-3" style="height:300px;">
        <div class="align-self-end">
          <h2>{{ campus.name }} campus</h2>          
          <p>Discover campus options for food, study spaces, and tech items.</p>
        </div>
      </div>

      <div class="p-3">
        <p class="text-muted">{{ campus }}</p>
        <div>latitude: {{ campus.latitude }}, longitude: {{ campus.longitude }} </div>
      </div>

      <div class="p-3">
        <p class="text-muted">{{ foodSpotList }}</p>
        <h3 class="h6 text-uppercase text-muted">food spaces nearby</h3>
        <ul class="list-group mb-2">

          <li v-for="(spot, index) in foodSpotList" :key="index" class="list-group-item">
            <span v-for="(category, index) in spot.category_type" :key="index" class="me-1">{{ category }}</span>
            <div>{{ spot.name}}<br>{{ spot.building_name }}</div>
            {{ spot.location.latitude }}, {{ spot.location.longitude }}
          </li>

        </ul>
        <div class="text-end"><a :href="'/' + $route.params.campus + '/food'">more food spaces...</a></div>
      </div>

      <div class="p-3">
        <p class="text-muted">{{ studySpotList }}</p>
        <h3 class="h6 text-uppercase text-muted">study spaces nearby</h3>
        <ul class="list-group mb-2">
          <li v-for="(spot, index) in studySpotList" :key="index" class="list-group-item">
            <span v-for="(category, index) in spot.category_type" :key="index" class="me-1">{{ category }}</span>
            <div>{{ spot.name}}<br>{{ spot.building_name }}</div>
            {{ spot.location.latitude }}, {{ spot.location.longitude }}
          </li>
        </ul>
        <div class="text-end"><a :href="'/' + $route.params.campus + '/study'">more study spaces...</a></div>
      </div>

      <div class="p-3">
        <p class="text-muted">{{ techSpotList }}</p>
        <h3 class="h6 text-uppercase text-muted">tech spaces nearby</h3>
        <ul class="list-group mb-2">
          <li v-for="(spot, index) in techSpotList" :key="index" class="list-group-item">
            <span v-for="(category, index) in spot.category_type" :key="index" class="me-1">{{ category }}</span>
            <div>{{ spot.name}}<br>{{ spot.building_name }}</div>
            {{ spot.location.latitude }}, {{ spot.location.longitude }}
          </li>
        </ul>
        <div class="text-end"><a :href="'/' + $route.params.campus + '/tech'">more tech spaces...</a></div>
      </div>

    </template>

    <template #map>
      map goes here here hre
    </template>
    
  </layout>
</template>

<script>
import db from '../firebase';
import { collection, query, where, limit, doc, getDoc, getDocs} from "firebase/firestore"; 
import Layout from '../layout.vue';

export default {
  components: {
    layout: Layout,
  },
  data() {
    return {
      pageTitle: 'Discover',
      locations: [
        {"name": "seattle", "latitude": "47.653811", "longitude": "-122.307815"},
        {"name": "bothell", "latitude": "47.75907121", "longitude": "-122.19103843"},
        {"name": "tacoma", "latitude": "47.24458187", "longitude": "-122.43763134"}
      ],
      campus: {},
      foodSpotList: [],
      studySpotList: [],
      techSpotList: [],
      categories: ["food", "study", "tech"],
      //campus: this.$route.params.campus,
    };
  },
  methods: {

    async getSpots() {      
      if (this.$route.params.campus) {
        // filter spots for each category
        this.categories.forEach(category => this.getFilteredSpots(category));
      }
    },
    async getFilteredSpots(category) {
      
      // get spots by campus
      let q = query(collection(db, "spots"), where("campus", "==", this.$route.params.campus));
      // filter spots by category
      q = query(q, where("category", "array-contains", category));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        // update doc snapshot for each category
        if (category == "food") {
          return this.foodSpotList.push({ id: doc.id, ...doc.data() });
        }
        else if (category == "study"){
          return this.studySpotList.push({ id: doc.id, ...doc.data() });
        }
        else if (category == "tech"){
          return this.techSpotList.push({ id: doc.id, ...doc.data() });
        }
      });
    },

    getCampus() {
      // filter array into object based on campus (arrow function)
      this.campus = this.locations.filter(obj => obj.name === this.$route.params.campus)[0];
      /* 
      this.campus = this.locations.filter(function (obj) { 
        return obj.name === this.$route.params.campus; 
      })[0]; */
    }
  
  },
  mounted() {
    this.getSpots();
    this.getCampus();
  }
};
</script>

<style lang="scss">
</style>
