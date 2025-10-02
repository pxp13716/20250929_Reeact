import { configureStore } from '@reduxjs/toolkit';
import countStore from './countStore';

// 개별 스토어 통합
// main에 등록
const store = configureStore({
  reducer: {
    // 참조 스토어명: import한 스토어
    countStore: countStore.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // serializableCheck => 전달 데이터의 직렬화 여부
    return getDefaultMiddleware({ serializableCheck: true });
  },
});
export default store;
