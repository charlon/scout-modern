// filter.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>{{ pageTitle }}</template>

    <template #content>
      <div class="p-3">
        <p>{{ $route.params.campus}} {{$route.params.type}} options</p>
        <div class="card rounded p-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
            <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
            <label class="form-check-label" for="defaultCheck2">Another checkbox</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck3" />
            <label class="form-check-label" for="defaultCheck3">Another checkbox</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck4" />
            <label class="form-check-label" for="defaultCheck4">Another checkbox</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck5" />
            <label class="form-check-label" for="defaultCheck5">Another checkbox</label>
          </div>
        </div>
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
      pageTitle: 'Filter Food',
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
