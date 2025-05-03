<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 text-gray-100">
    <router-link
      to="/"
      class="inline-flex gap-3 items-center py-2 px-4 bg-yellow-500 mt-6 ml-6 text-white font-bold rounded hover:bg-yellow-400 transition-all duration-300 ease-in-out hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
      </svg>
      Regresar
    </router-link>
    <div class="max-w-md mx-auto pt-6 bg-gray-750 rounded-xl shadow-md text-gray-100">
      <!-- Tags mostradas -->
      <div class="flex flex-wrap gap-2 mb-4">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          class="flex items-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-1 rounded-full transition"
        >
          {{ tag }}
          <button
            @click="deleteTag(tag)"
            class="ml-2 cursor-pointer text-white hover:text-red-300 focus:outline-none"
          >
            ×
          </button>
        </div>
      </div>

      <!-- Input -->
      <form @submit.prevent="handleSubmit" class="flex items-center gap-2">
        <input
          v-model="currentValue"
          type="text"
          placeholder="Escribe un tag"
          class="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          class="cursor-pointer px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          Agregar
        </button>
      </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: "",
      tags: []
    };
  },
  mounted() {
    const storedTags = localStorage.getItem("tags");
    if (storedTags) {
      this.tags = JSON.parse(storedTags);
    }
  },
  methods: {
    handleSubmit() {
      if (this.currentValue !== "") {
        const exist = this.tags.some((item) => item === this.currentValue);
        if (!exist) {
          this.tags.push(this.currentValue);
          this.currentValue = "";
          this.saveTags();
        }
      }
    },
    deleteTag(tag) {
      this.tags = this.tags.filter((item) => item !== tag);
      this.saveTags();
    },
    saveTags() {
      localStorage.setItem("tags", JSON.stringify(this.tags));
    }
  }
};
</script>
