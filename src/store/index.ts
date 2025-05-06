import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contactsSlice';

// Funções de load/save do localStorage
const STORAGE_KEY = 'contacts_state';

interface ContactState {
  contacts: Array<{ id: string; name: string; email: string; phone: string }>;
}

const loadState = (): ContactState | undefined => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return undefined;
    return JSON.parse(serialized) as ContactState;
  } catch {
    return undefined;
  }
};

const saveState = (state: ContactState) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState: {
    contacts: persistedState ?? { contacts: [] },
  },
});

// Sempre que o estado mudar, salva
store.subscribe(() => {
  saveState(store.getState().contacts);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
