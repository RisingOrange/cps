<template>
  <div
    style="width:500px; height:500px; border:10px solid #000; font-size:400px; text-align:center; vertical-align:middle; line-height:500px; margin:auto;"
    @click="clickHandler($event)"
    @contextmenu="clickHandler($event)"
    :style="{ color : clickNumberColor }"
    class="noselect"
  >
  {{ clickAmount }}
  </div>
  <div style="font-size: xx-large; padding:20px; text-align:center;"
  >{{cpsResult}}  cps
  </div>
</template>

<script>

function rgbStringToValues (rgb) {
  return rgb.substring(4, rgb.length - 1)
    .replace(/ /g, '')
    .split(',')
    .map(x => +x)
}

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
      cpsResult: 0,
      clickNumberColor: rgb(0, 0, 0)
    }
  },
  methods: {
    clickHandler (e) {
      // preventing right-click contextmenu from showing up
      e.preventDefault()

      if (!this.isTestRunning) {
        this.isTestRunning = true
        this.clickAmount = 0
        setTimeout(() => this.evaluateTest(), this.testDurationMs)
      }
      this.clickAmount += 1

      // change color of number
      console.log(this.clickNumberColor)
      let [r, g, b] = rgbStringToValues(this.clickNumberColor)
      r += 10
      this.clickNumberColor = rgb(r, g, b)
    },
    evaluateTest () {
      this.isTestRunning = false

      const clicksPerSecond = (this.clickAmount * 1000) / this.testDurationMs
      this.cpsResult = clicksPerSecond
      this.clickAmount = 0
      this.clickNumberColor = rgb(0, 0, 0)

      // alerting using timeout to udpate the display first
      setTimeout(() => alert(`${clicksPerSecond} CPS`), 10)
    }

  }
}
</script>

<style scoped>
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
