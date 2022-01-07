// list.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>{{ pageTitle }}</template>

    <template #content>
      <div class="d-flex justify-content-between bg-light p-2">
        <div>14 spaces</div>
        <div>
          <a
            :href="'/' + $route.params.campus + '/' + $route.params.type + '/filter'"
          >filter {{ $route.params.campus }} {{ $route.params.type }}</a>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
        <li class="list-group-item d-flex p-3">
          <img src="holder.js/90x100" class="rounded">
          <div class="flex-fill ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a :href="'/' + $route.params.campus + '/' + $route.params.type + '/1234'">view space details</a></div>
        </li>
      </ul>
    </template>

    <template #map>map goes here here hre</template>
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
      pageTitle: 'Food',
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
