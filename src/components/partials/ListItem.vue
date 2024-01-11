<script setup>
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
    </li>
  </ul>
</template>
