<script setup>
import { useAppStore } from "@/stores/NoteStore";

const store = useAppStore();

defineProps({
  notes: Array,
  title: String,
  icon: String,
  type: String,
});
</script>

<template>
  <h4 class="nf__sidebar-title" v-if="type === 'list'">
    <span class="nf__sidebar-title-note-icon material-symbols-outlined">{{
      icon
    }}</span>
    {{ title }}
  </h4>
  <ul class="nf__note-list" v-if="type === 'list'">
    <li v-for="note in notes" :key="note.id">
      <p>{{ note.title }}</p>
      <span
        v-if="note.pinned"
        @click="store.removeFromPinned(note.id)"
        class="nf__note-list-icon material-symbols-outlined"
        >do_not_disturb_on</span
      >
      <span
        v-else
        @click="store.addToPinned(note.id)"
        class="nf__note-list-icon material-symbols-outlined"
        >push_pin</span
      >
    </li>
  </ul>
</template>
