<script setup>
import { useAppStore } from "@/stores/NoteStore";
import ListItem from "../partials/ListItem.vue";

const store = useAppStore();
</script>

<template>
  <div class="nf__notes-sidebar">
    <ListItem
      :notes="store.pinnedNotes"
      :title="'Pinned Notes'"
      :icon="'push_pin'"
      :type="'list'"
    />
    <ListItem
      :notes="store.allNotes"
      :title="'All Notes'"
      :icon="'notes'"
      :type="'list'"
    />
  </div>
</template>
