<template>
  <div class="hello">
    <h1>asmsuechan</h1>
    <div><p>I like computer technologies.</p></div>
    <div>
      <ul>
        <li><p><a href='https://github.com/asmsuechan'>GitHub</a></p></li>
        <li><p><a href='https://www.linkedin.com/in/ryota-suenaga-658749128'>LinkedIn</a></p></li>
        <li><p><a href='https://twitter.com/suenaga_ryota'>Twitter</a></p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
