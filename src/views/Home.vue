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
          <h2>{{ $route.params.campus }} campus</h2>
          <p>Discover campus options for food, study spaces, and tech items.</p>
        </div>
      </div>

      <div class="p-3">
        <h3 class="h6 text-uppercase text-muted">food spaces nearby</h3>
        <ul class="list-group mb-2">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        <div class="text-end"><a :href="'/' + $route.params.campus + '/food'">more food spaces...</a></div>
      </div>

      <div class="p-3">
        <h3 class="h6 text-uppercase text-muted">study spaces nearby</h3>
        <ul class="list-group mb-2">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        <div class="text-end"><a :href="'/' + $route.params.campus + '/study'">more study spaces...</a></div>
      </div>

      <div class="p-3">
        <h3 class="h6 text-uppercase text-muted">tech spaces nearby</h3>
        <ul class="list-group mb-2">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
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
import Layout from '../layout.vue';

export default {
  components: {
    layout: Layout,
  },
  data() {
    return {
      pageTitle: 'Discover',
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
