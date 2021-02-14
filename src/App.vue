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
      testDurationMs: 5000,
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
        setTimeout(() => this.evaluateTest(), this.testDurationMs)
      }
      this.clickAmount += 1
    },
    evaluateTest () {
      this.isTestRunning = false

      const clicksPerSecond = (this.clickAmount * 1000) / this.testDurationMs
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
