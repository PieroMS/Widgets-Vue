<script setup>
import { defineProps } from 'vue';
import { pay } from '../../storePayment/store';

const props = defineProps(['id', 'numberOfPerson', 'totalPerPerson', 'paid']);

function handleChange(e) {
  pay(props.id, e.target.checked);
}
</script>

<template>
  <div
    :class="[
      'p-4 rounded-md transition-colors',
      props.paid ? 'bg-green-200/20 border border-green-500' : 'bg-red-200/10 border border-red-400'
    ]"
  >
    <div class="text-lg font-semibold text-white mb-2">
      Person {{ props.numberOfPerson }}
    </div>
    <div class="text-green-400 font-bold text-base mb-4">
      {{
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.totalPerPerson)
      }}
    </div>
    <div class="flex items-center gap-2 text-white">
      <input
        type="checkbox"
        @change="handleChange"
        :checked="props.paid"
        class="w-5 h-5 rounded border-2 border-gray-500 bg-gray-700 checked:bg-emerald-500 checked:border-emerald-500 focus:ring-0 cursor-pointer relative"
      />
      Paid
    </div>
  </div>
</template>
