<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 178, 129);
  background: linear-gradient(
    270deg,
    rgba(63, 178, 129, 1) 0%,
    rgba(58, 129, 113, 1) 50%,
    rgba(52, 74, 95, 1) 100%
  );
}

header h1 {
  color: white;
  letter-spacing: 5px;
  text-shadow: 3px 4px 7px #35495e;
}
</style>
