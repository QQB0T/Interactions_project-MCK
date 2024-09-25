<template>
  
  <div class="container">
    <div class="CreateTitle">Create page</div>
    <br>
    <div class="canvas" id = "canvas"></div>
    <div class="circle"></div>
    <br>
    <button class = "btn" id="add">Add Resident</button>
    <button class = "btn"  id="remove">Eraser</button>
    <button class = "btn"  id="connection">Connector</button>
  </div>
</template>

<style>
html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}
#app {
  height: inherit;
  width: inherit;
}

.container {
  height: 75%;
}

.canvas {
  width: 100%;
  height: 100%;
  background-color: white;
}

.ResidentDot {
  border-radius: 50%;
  width: contain;
  height: auto;
  font-size: 12px;
  font-family: "Inter", "DM Sans", Arial, sans-serif;
}

</style>

<script>

</script>


