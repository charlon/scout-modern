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
          <h2>{{ campus }} campus</h2>          
          <p>Discover campus options for food, study spaces, and tech items.</p>
        </div>
      </div>

      <div class="p-3">
        {{ foodSpotList }}
        <h3 class="h6 text-uppercase text-muted">food spaces nearby</h3>
        <ul class="list-group mb-2">
          <li class="list-group-item">Cafe<br>Mary Gates Espresso<br>0.05mi, Mary Gates Hall (MGH)</li>
          <li class="list-group-item">Cafe<br>Starbucks Coffee<br>0.13mi, Suzzallo Library(SUZ)</li>
          <li class="list-group-item">Cafe<br>Microsoft Cafe<br>0.13mi, Computer Science and Engineering Building 2 (CSE2)</li>
        </ul>
        <div class="text-end"><a :href="'/' + $route.params.campus + '/food'">more food spaces...</a></div>
      </div>

      <div class="p-3">
        {{ studySpotList }}
        <h3 class="h6 text-uppercase text-muted">study spaces nearby</h3>
        <ul class="list-group mb-2">
          <li class="list-group-item">Study Room<br>Mary Gates Hall Commons (MGH 135)<br>0.08mi, Mary Gates Hall (MGH)</li>
          <li class="list-group-item">Study Room<br>Study Room 131B<br>0.21mi, Odegaard Undergraduate Library (OUGL)</li>
          <li class="list-group-item">Computer Lab<br>Alder 105<br>0.32mi, Alder Hall(ALD)</li>
        </ul>
        <div class="text-end"><a :href="'/' + $route.params.campus + '/study'">more study spaces...</a></div>
      </div>

      <div class="p-3">
        {{ techSpotList }}
        <h3 class="h6 text-uppercase text-muted">tech spaces nearby</h3>
        <ul class="list-group mb-2">
          <li class="list-group-item">Tech Loan<br>Student Technology Loan Program<br>0.12mi, Kane Hall (KNE)</li>
          <li class="list-group-item">Makerspace<br>The Mill<br>0.45mi, McCarty Hall</li>
          <li class="list-group-item">Makerspace<br>Area 01<br>0.45mi, Maple Hall</li>
          <li class="list-group-item">Makerspace<br>The 8<br>0.45mi, McMahon Hall</li>
          <li class="list-group-item">Makerspace<br>Collaboratory<br>4.5mi, Discovery Hall, Bothell</li>
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
import { routeLocationKey } from 'vue-router';

export default {
  components: {
    layout: Layout,
  },
  data() {
    return {
      pageTitle: 'Discover',
      foodSpotList: [],
      studySpotList: [],
      techSpotList: [],
      categories: ["food", "study", "tech"],
      campus: this.$route.params.campus,
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
      let q = query(collection(db, "spots"), where("campus", "==", this.campus));
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
  
  },
  mounted() {
    this.getSpots();
  }
};
</script>

<style lang="scss">
</style>
