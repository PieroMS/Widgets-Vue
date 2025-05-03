<script setup>
  import { getGrantTotal, store } from '../../storePayment/store';
  import Label from './Label.vue'
  import PersonView from './PersonView.vue'
</script>

<template>
  <div v-if="store.people.length === 0" class="text-center text-gray-400 text-lg py-6">
    No items
  </div>

  <div v-else class="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-6">
    <header class="flex justify-between items-center border-b border-gray-600 pb-4 mb-4">
      <Label title="Total + Tip: " :value="getGrantTotal()" />
      <Label title="Remaining: " :value="store.params.remaining" />
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <PersonView 
        v-for="person in store.people" :key="person.id" 
        :id="person.id" 
        :number-of-person="person.numberOfPerson" 
        :total-per-person="person.totalPerPerson" 
        :paid="person.paid" 
      />
    </div>
  </div>
</template>
