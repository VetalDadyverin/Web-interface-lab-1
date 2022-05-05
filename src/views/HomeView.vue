<template>
  <div class="home">
    <MyGrid :myGrid="$store.state.grid.components" />
  </div>
</template>

<script>
import MyGrid from "@/components/MyGrid.vue";

export default {
  name: "HomeView",
  components: { MyGrid },
  methods: {
    onClick() {
      console.log(this.$store.state.grid);
    },
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
