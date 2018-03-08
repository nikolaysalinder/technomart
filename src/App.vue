<template>
  <div id="app">
    <app-header></app-header>
    <main>
     <app-home></app-home>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  min-width: 960px;
  font-family: 'Cuprum', 'PT Sans', sans-serif;
  color: #000;
}
</style>
