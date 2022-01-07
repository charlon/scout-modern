// detail.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>{{ pageTitle }}</template>

    <template #content>
      <div class="mb-3">
        <img src="holder.js/430x275">
        <div class="flex-fill align-self-end bg-secondary p-3">
          <h2>space name goes here</h2>
          <div>some details</div>
        </div>
      </div>
      <div class="p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptas facilis accusantium, consectetur nulla, facere eligendi vel dolor laboriosam laudantium eum fugit quidem quisquam magnam, aspernatur soluta odit dignissimos! Mollitia.
      </div>
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
      pageTitle: 'Detail',
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
