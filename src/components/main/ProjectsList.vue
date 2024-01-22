<template>
  <base-card>
    <h1>
      Greetings! I'm Móré Tímea Solange, a passionate Junior Frontend Developer,
      with a focus on expanding my proficiency in Vue.js and frontend
      technologies.
    </h1>
    <h2>The technologies I used in these projects are the following:</h2>
    <ul>
      <li>Vue.js</li>
      <li>Vuex</li>
      <li>Nuxt</li>
      <li>HTML</li>
      <li>CSS / SCSS</li>
      <li>Javascript</li>
      <li>Bootstrap, Tailwind, PrimeVue, Buefy</li>
    </ul>
  </base-card>
  <base-card>
    <ul>
      <li><a href="https://phasmodex.org/">Phasmodex</a></li>
      <li><a href="">Restaurant</a></li>
      <li><a href="">Friends</a></li>
      <li><a href="">Forms</a></li>
      <li><a href="">Resources</a></li>
      <li><a href="">Routing</a></li>
      <li><a href="">Coach App</a></li>
    </ul>
  </base-card>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
  text-align: center;
}

h1,
h2,
li {
  font-size: 1rem;
  color: #35495e;
}

a {
  text-decoration: none;
  color: #41b883;
}

a:hover {
  color: #35495e;
  text-decoration: underline;
}
</style>
