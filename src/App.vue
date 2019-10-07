<template>
  <div id="app">
    <div class="wrapper">
      <scene></scene>
    </div>
    <div class="wrapper">
      <keyboard></keyboard>
    </div>
  </div>
</template>

<script>
import KeyBoard from './components/keyboard/Keyboard';
import Scene from './components/scene/Scene';
export default {
  name: 'app',
  components: {
    'keyboard': KeyBoard,
    'scene': Scene
  }
}
</script>

<style lang="scss">

html, body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  display: flex;
  height: 100vh;
}

.wrapper {
  background-color: #d3d3d3;
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
    &:first-child {
      border-right:2px solid #000;
    }
}
</style>
