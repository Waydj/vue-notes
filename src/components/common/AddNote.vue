<script setup>
import { ref } from "vue";
import contenteditable from "vue-contenteditable";
import { useAppStore } from "@/stores/NoteStore";

const title = ref("");
const content = ref("");

const store = useAppStore();

const handleFormSubmit = (e) => {
  store.addNote({
    title: title.value,
    content: content.value,
  });

  title.value = "";
  content.value = "";
};
</script>

<template>
  <div class="nf__notes-content">
    <form @submit.prevent="handleFormSubmit">
      <input
        type="text"
        class="nf__input-title"
        placeholder="What is the note about?"
        v-model="title"
      />

      <contenteditable
        tag="div"
        class="nf__content-editable"
        :contenteditable="true"
        :no-nl="false"
        :no-html="true"
        v-model="content"
      />

      <button type="submit" class="nf__form-save-btn">
        <span class="material-symbols-outlined">save</span>
      </button>
    </form>
  </div>
</template>
