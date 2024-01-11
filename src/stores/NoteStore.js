import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    notes: [],
    lastNoteId: 0,
  }),
  getters: {
    allNotes: (state) => state.notes,
    pinnedNotes: (state) => state.notes.filter((note) => note.pinned),
  },
  actions: {
    addNote(note) {
      const newNote = {
        id: this.lastNoteId + 1,
        title: note.title,
        content: note.content,
        timeStamp: new Date().toISOString(),
        pinned: false,
      };

      this.notes.push(newNote);
    },
    addToPinned(id) {
      const updatedNotes = this.notes.map((note) => {
        if (note.id === id) {
          note.pinned = true;
        }
        return note;
      });

      this.notes = updatedNotes;
    },
    removeFromPinned(id) {
      const updatedNotes = this.notes.map((note) => {
        if (note.id === id) {
          note.pinned = false;
        }
        return note;
      });

      this.notes = updatedNotes;
    },
  },
});
