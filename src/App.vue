<template>
  <the-header title="Vue projects"></the-header>
  <projects-list></projects-list>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ProjectsList from './components/main/ProjectsList.vue';

export default {
  components: {
    TheHeader,
    ProjectsList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand&family=Rubik+Bubbles&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
