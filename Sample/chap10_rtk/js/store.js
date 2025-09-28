const increaseAction = (no) => {
  let value = Number(no);
  if (Number.isNaN(value)) value = 0
  return { type: 'COUNT/INCREASE', payload: value }
}
const decreaseAction = () => {
  return { type: 'COUNT/DECREASE' }
}

const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = (state = init, action) => {
  switch (action.type) {
    case 'COUNT/INCREASE':
      return { ...state, count: state.count + action.payload }
    case 'COUNT/DECREASE':
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}

const configureStore = (storeName) => {
  let state = storeName(undefined, '');
  // console.log(state)

  const getState = () => {
    return state;
  }

  const dispatch = (action) => {
    state = storeName(state, action)
  }

  return {
    getState, dispatch
  }
}

const store = configureStore(countStore);
let state = store.getState();
console.log(state)

// store.dispatch(increaseAction(2));
store.dispatch({ type: 'COUNT/INCREASE', payload: 2 });
state = store.getState();
console.log(state)