<script setup>
  import InputFrom from './InputForm.vue';
  import PeopleView from './PeopleView.vue';
  import btnBack from '../btnBack.vue';
</script>

<template>
  <div class="container min-h-screen min-w-full bg-gradient-to-br from-gray-800 to-gray-700 text-gray-100">
    <btnBack />
    <InputFrom class="mb-6" />
    <PeopleView />
  </div>
</template>

<style scoped>

</style>