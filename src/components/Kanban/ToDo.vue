<template>
  <div class="min-h-screen px-6 py-4 bg-gradient-to-br from-gray-800 to-gray-700 text-white font-sans">
    <btnBack />
    <nav class="mt-12 mb-6 ml-6">
      <ul class="flex gap-4">
        <li>
          <a
            href="#"
            @click.prevent="handleNewBoard"
            class="bg-green-600 hover:bg-green-500 transition-colors px-4 py-2 rounded-md text-white font-medium shadow"
          >
            Create board
          </a>
        </li>
      </ul>
    </nav>

    <div class="overflow-x-auto pb-4 ml-6">
      <div class="flex gap-6 w-max">
        <div
          v-for="board in boards"
          :key="board.id"
          class="bg-gray-750 rounded-xl border border-gray-600 w-64 p-4 shadow-md"
          @drop="onDrop($event, board)"
          @dragover.prevent
          @dragenter.prevent
        >
          <p class="text-lg font-semibold mb-3">{{ board.name }}</p>

          <!-- Input para nueva tarea -->
          <InputNewTask @on-new-item="(text) => handleNewItem(text, board)" />

          <div class="mt-4 flex flex-col gap-3">
            <div
              v-for="item in board.items"
              :key="item.id"
              class="bg-gray-800 text-gray-200 p-3 rounded-lg shadow hover:shadow-lg transition cursor-move"
              draggable="true"
              @dragstart="startDrag($event, board, item)"
            >
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import InputNewTask from './InputNewTask.vue';
import btnBack from '@/components/btnBack.vue'

let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: 'Default Board',
    items: [
      {
        id: crypto.randomUUID(),
        title: 'Default Task'
      }
    ]
  }
]);

function handleNewItem(text, board) {
  board.items.push({
    id: crypto.randomUUID(),
    title: text.value
  });
}

function handleNewBoard() {
  const name = prompt('Enter the name of the board');
  if (name) {
    boards.push({
      id: crypto.randomUUID(),
      name: name,
      items: []
    });
  }
}

function startDrag(evt, board, item) {
  evt.dataTransfer.setData('text/plain', JSON.stringify({ boardId: board.id, itemId: item.id }));
}

function onDrop(evt, dest) {
  const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData('text/plain'));
  const originBoard = boards.find(item => item.id === boardId);
  const originItem = originBoard.items.find(item => item.id === itemId);
  dest.items.push({ ...originItem });
  originBoard.items = originBoard.items.filter(item => item !== originItem);
}
</script>
