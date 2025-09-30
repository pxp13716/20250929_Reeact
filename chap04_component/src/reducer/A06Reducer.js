export const func = (state, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case 'A06HOOK/NUMBER':
      {
        let value = Number(action.payload.value);
        if (Number.isNaN(value)) value = 0;
        return { ...state, [action.payload.name]: value };
      }
    case 'A06HOOK/STRING':
      // 제약조건이 필요하면 기술
      return { ...state, [action.payload.name]: action.payload.value };
    case 'A06HOOK/TIMER':
      return { ...state, today: new Date() };
    case 'A06HOOK/ADDLIST':
      {
        const newList = state.list.concat(state.avg)
        return { ...state, list: newList };
      }

    default:
      return state;
  }
}
export const init = {
  num: '',
  str: '',
  today: new Date(),
  avg: '',
  list: [],
}