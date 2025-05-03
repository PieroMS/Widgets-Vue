<script setup>
import { ref, defineEmits } from 'vue';

const text = ref('');
const emits = defineEmits(['onNewItem']);

function handleSubmit() {
  if (text.value.trim() !== '') {
    emits('onNewItem', text);
    text.value = '';
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      v-model="text"
      placeholder="New task"
      class="w-full px-4 py-2 rounded-md border-2 border-green-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
    />
  </form>
</template>
