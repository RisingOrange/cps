<template>
  <div
    @click="handleClick($event)"
    @contextmenu="handleClick($event)"
    class="click-area noselect"
    :style="{ color: clickNumberColor }"
  >
    {{ clickAmount }}
  </div>
  <div style="font-size: xx-large; padding: 20px; text-align: center">
    {{ lastCpsResult }} cps
  </div>
  <div
    style="text-align:center; padding:10px"
  >{{ testDurationSecs }} second(s)
  </div>
  <input
    v-model="testDurationSecs"
    v-if="!isTestRunning"
    type="range" min="1" max="15" step="1"
    style="display:block; margin:auto;"
  >
</template>

<script>

function rgb (r, g, b) {
  return `rgb(${r},${g},${b})`
}

export default {
  name: 'App',
  data: function () {
    return {
      isTestRunning: false,
      clickAmount: 0,
      testDurationSecs: 8,
      lastCpsResult: 0
    }
  },
  methods: {
    handleClick (e) {
      // preventing right-click contextmenu from showing up
      e.preventDefault()

      if (!this.isTestRunning) {
        this.isTestRunning = true
        this.clickAmount = 0
        setTimeout(() => this.evaluateTest(), this.testDurationSecs * 1000)
      }
      this.clickAmount += 1
    },
    evaluateTest () {
      this.isTestRunning = false

      const clicksPerSecond = this.clickAmount / this.testDurationSecs
      this.lastCpsResult = clicksPerSecond
      this.clickAmount = 0

      // alerting using timeout to udpate the display first
      setTimeout(() => alert(`${clicksPerSecond} CPS`), 10)
    }
  },
  computed: {
    clickNumberColor () {
      return rgb(this.clickAmount * 8, 0, 0)
    }
  }
}
</script>

<style scoped>
.click-area {
  width:500px;
  height:500px;
  border:10px solid #000;
  font-size:400px;
  text-align:center;
  vertical-align:middle;
  line-height:500px;
  margin:auto;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
