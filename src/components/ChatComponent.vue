<template>
  <div class="Chat">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChatComponent',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
  background-color: blueviolet;
}
</style>
