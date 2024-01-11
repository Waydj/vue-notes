import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    notes: [
      {
        id: 1,
        title: "Note 1",
        content: "Content 1",
        pinned: true,
        timeStamp: new Date(),
      },
      {
        id: 2,
        title: "Note 2",
        content: "Content 2",
        pinned: false,
        timeStamp: new Date(),
      },
      {
        id: 3,
        title: "Note 3",
        content: "Content 3",
        pinned: true,
        timeStamp: new Date(),
      },
      {
        id: 4,
        title: "Note 4",
        content: "Content 4",
        pinned: false,
        timeStamp: new Date(),
      },
    ],
  }),
  getters: {
    allNotes: (state) => state.notes,
    pinnedNotes: (state) => state.notes.filter((note) => note.pinned),
  },
  actions: {
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
