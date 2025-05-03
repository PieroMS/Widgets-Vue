<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 text-gray-100">
    <!-- Header -->
    <header class="bg-gray-850 shadow-md sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-90">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <h1 class="text-center text-4xl font-bold relative">
          Links Rápidos
        </h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-12 px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          to="/tags"
          class="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-blue-500 overflow-hidden group"
        >
          <div class="p-8 flex flex-col items-center justify-center h-full relative">
            <div class="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <div class="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>

            <span class="text-3xl font-bold text-blue-300 relative z-10 mb-2">Tags</span>
            <p class="mt-2 text-gray-400 text-center relative z-10">Gestiona etiquetas y categorías</p>
          </div>
        </router-link>

        <!-- ToDo -->
        <router-link
          to="/todo"
          class="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-green-500 overflow-hidden group"
        >
          <div class="p-8 flex flex-col items-center justify-center h-full relative">
            <div class="absolute inset-0 bg-green-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <div class="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>

            <span class="text-3xl font-bold text-green-300 relative z-10 mb-2">ToDo</span>
            <p class="mt-2 text-gray-400 text-center relative z-10">Organiza tareas tipo Kanban</p>
          </div>
        </router-link>

        <!-- Split Bill -->
        <router-link
          to="/splitbill"
          class="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-yellow-500 overflow-hidden group"
        >
          <div class="p-8 flex flex-col items-center justify-center h-full relative">
            <div class="absolute inset-0 bg-yellow-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <div class="w-16 h-16 bg-yellow-800 rounded-full flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>

            <span class="text-3xl font-bold text-yellow-300 relative z-10 mb-2">Split Bill</span>
            <p class="mt-2 text-gray-400 text-center relative z-10">Divide cuentas fácilmente</p>
          </div>
        </router-link>
      </div>
    </main>
  </div>
</template>
