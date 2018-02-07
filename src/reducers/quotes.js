import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {
        author: action.quote.author,
        content: action.quote.content,
        id: action.quote.id,
        votes: 0
      }];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return Object.assign({}, state, quote.id === action.quoteId && {quote.vote + 1})
    default:
      return state;
  }
}
