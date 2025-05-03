<script setup>
  import { defineProps } from 'vue';

  const props = defineProps(['title', 'value']);
</script>

<template>
  <div class="flex flex-col">
    <span class="text-gray-300 text-base font-semibold mb-1">{{ props.title }}</span>
    <span class="text-emerald-400 text-xl font-bold">
      {{ 
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.value)
      }}
    </span>
  </div>
</template>
