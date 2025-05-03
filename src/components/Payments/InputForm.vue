<script setup>
  import { ref } from 'vue';
  import { store, calculate } from '../../storePayment/store';

  const total = ref(0);
  const tip = ref(0);
  const people = ref(0);

  function handleSubmit() {
    store.params.total = total;
    store.params.tip = tip;
    store.params.people = people;
    calculate();
  }
</script>

<template>
  <div class="bg-gray-800 p-6 rounded-xl max-w-md mx-auto shadow-lg">
    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <div class="flex flex-col">
          <label for="total" class="text-gray-300 font-semibold mb-1">Total</label>
          <input type="number" id="total" required placeholder="Total" v-model="total"
            class="bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        </div>

        <div class="flex flex-col">
          <label for="tip" class="text-gray-300 font-semibold mb-1">Tip %</label>
          <input type="number" id="tip" required placeholder="Tip %" v-model="tip"
            class="bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        </div>

        <div class="flex flex-col">
          <label for="people" class="text-gray-300 font-semibold mb-1">People</label>
          <input type="number" id="people" required placeholder="People" v-model="people"
            class="bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        </div>

        <button type="submit"
          class="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-md transition duration-300 uppercase">
          Calculate
        </button>
      </div>
    </form>
  </div>
</template>
