<script>
export default {
  name: "MyGrid",
  props: {
    myGrid: Array,
  },
  data() {
    return {
      victory: false,
    };
  },
  methods: {
    async tryToSwap(index) {
      this.$store.commit("TRY_TO_SWAP", index);
      if (this.$store.getters.CHECK_SWAP) {
        if (this.$store.getters.CHECK_SOLVED) {
          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
          const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
          await sleep(500);
          this.victory = true;
          if (this.$store.state.currentUser) {
            this.$store.state.currentUser.inc_games();
          }
        }
      }
    },
    restart() {
      this.$store.commit("RESTART");
      this.victory = false;
    },
  },
};
</script>

<template>
  <div v-if="!this.victory">
    <div class="grid">
      <div
        v-for="(comp, index) in myGrid"
        v-bind:key="comp.number"
        class="component"
        @click="tryToSwap(index)"
        :class="{
          empty: comp.number === 0,
          correct: comp.number === index + 1,
        }"
        v-bind:style="{
          border: comp.number === 0 ? '' : '2px solid rgb(75,75,75)',
          backgroundColor:
            comp.number === 0
              ? ''
              : comp.number === index + 1
              ? 'blue'
              : 'yellow',
        }"
      >
        <div v-if="comp.number !== 0">
          {{ comp.number }}
        </div>
      </div>
    </div>
  </div>
  <div v-if="this.victory">
    <h1>You have won!!!</h1>
    <input type="button" @click="restart()" value="Restart" />
  </div>
</template>

<style>
.grid {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  width: 524px;
  height: 500px;
  background-color: "red";
  border-radius: 2px;
}

.component {
  width: 120px;
  height: 120px;
  font-size: 40px;
  margin: 1px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
