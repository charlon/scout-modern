<template>
  <!-- layout.vue: this is where you override the layout -->
  <div class="position-absolute d-flex flex-column shadow" style="width:430px; height:100vh;">
    <div class="bg-white">
      <div class="h2 d-flex m-0 px-3 py-2">
        <a :href="'/' + $route.params.campus" class="flex-fill text-reset text-decoration-none">{{ appName }}</a>
        <select class="form-select form-select-sm" aria-label="Default select example" style="width: 150px;">
          <option selected value="1">Seattle</option>
          <option value="2">Bothell</option>
          <option value="3">Tacoma</option>
        </select>
      </div>
      <ul class="nav nav-fill">
        <li class="nav-item">
          <a :href="'/' + $route.params.campus + '/food'" class="nav-link small text-uppercase">Food</a>
        </li>
        <li class="nav-item">
          <a :href="'/' + $route.params.campus + '/study'" class="nav-link small text-uppercase">Study</a>
        </li>
        <li class="nav-item">
          <a :href="'/' + $route.params.campus + '/tech'" class="nav-link small text-uppercase">Tech</a>
        </li>
      </ul>
    </div>
    <div class="flex-fill overflow-scroll bg-white">
      <h1 class="visually-hidden">{{ pageTitle }}</h1>
      <main>
        <slot name="content" />
      </main>
    </div>
    <div
      class="bg-secondary small p-2"
    >Copyright &copy; {{ currentYear }} University of Washington</div>
  </div>
  <div class="position-fixed bg-light" style="left: 430px; top: 0; right:0; bottom:0; z-index: -1;">
    <slot name="map" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // minimum application setup overrides
      appName: 'Scout',
      // automatically set year
      currentYear: new Date().getFullYear(),
    };
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + ' - ' + this.appName;
  },
};
</script>

<style lang="scss" scoped>
</style>
