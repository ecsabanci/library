import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
      {
        id: 0,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        image: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
        user: {}
      },
    ],
  },
  mutations: {
    setBooks(state, books) {
      state.books = [...state.books, books];
    },
    setUser(state, user) {
      state.books.forEach(book => {
        if (book.title === user.selectedBookTitle) {
          book.user = user;
        }
      });
    },
    deleteBook(state, book) {
      state.books = state.books.filter(b => b.title !== book.title);
    },
    getBook(state, book) {
      state.books.forEach(b => {
        if (b.title === book.title) {
          b.user = {};
        }
      });
    }
  },
  actions: {
    setNewBooks(context, books) {
      context.commit('setBooks', books);
    },
    setUser(context, user) {
      context.commit('setUser', user);
    },
    deleteBook(context, book) {
      context.commit('deleteBook', book);
    },
    getBook(context, book) {
      context.commit('getBook', book);
    }
  },
  getters: {
    getBooks(state) {
      return state.books;
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
