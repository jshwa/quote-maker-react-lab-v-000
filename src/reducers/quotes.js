import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {
        author: action.quote.author,
        content: action.quote.content,
        id: uuid(),
        votes: 0
      }]
  }
  return state;
}
