import contactsReducer, {
  addContact,
  removeContact,
  updateContact,
} from './contactsSlice';

describe('contactsSlice', () => {
  const initialState = { contacts: [] };

  it('deve adicionar um contato', () => {
    const action = addContact({
      id: '1',
      name: 'Teste',
      email: 't@t.com',
      phone: '123',
    });
    const state = contactsReducer(initialState, action);
    expect(state.contacts).toHaveLength(1);
    expect(state.contacts[0].name).toBe('Teste');
  });

  it('deve remover um contato', () => {
    const filled = {
      contacts: [{ id: '1', name: 'A', email: 'a@a', phone: '1' }],
    };
    const action = removeContact('1');
    const state = contactsReducer(filled, action);
    expect(state.contacts).toHaveLength(0);
  });

  it('deve atualizar um contato', () => {
    const filled = {
      contacts: [{ id: '1', name: 'A', email: 'a@a', phone: '1' }],
    };
    const action = updateContact({
      id: '1',
      name: 'B',
      email: 'b@b',
      phone: '2',
    });
    const state = contactsReducer(filled, action);
    expect(state.contacts[0].name).toBe('B');
  });
});
