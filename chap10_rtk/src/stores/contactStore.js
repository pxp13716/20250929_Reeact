/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseLong = 'http://localhost:8000/contacts_long';
// const baseLong = '/api/contacts_long';
const baseURL = 'http://localhost:8000/contacts/';

// 비동기 처리 Action => extraReducer가 받아 처리한다
// data 매개변수 1개만 허용
// data => { no: 1, size: 5}
export const getContactListAction = createAsyncThunk('CONTACT/GETCONTACTLIST', async (data) => {
  const resp = await axios.get(baseLong, { params: { pageno: data.no, pagesize: data.size } });
  return resp.data;
});
// data => no
export const getContactAction = createAsyncThunk('CONTACT/GETCONTACT', async (data) => {
  const resp = await axios.get(baseURL + data);
  return resp.data;
});
// data => no
export const deleteContactAction = createAsyncThunk('CONTACT/DELETECONTACT', async (data) => {
  const resp = await axios.delete(baseURL + data);
  return resp.data;
});
// data => { no: '', name: 'XXX', tel: 'XXX', address: 'XXX', photo; '' }
export const addContactAction = createAsyncThunk('CONTACT/ADDCONTACT', async (data) => {
  const resp = await axios.post(baseURL, data);
  return resp.data;
});

const countStore = createSlice({
  name: 'countStore', // 내부적으로 사용. 중복되지 않은 이름으로 등록
  initialState: {
    contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
    contact: { no: '', name: '', tel: '', address: '', photo: '' },
    etc: { status: '', message: '' },
    loading: false,
    error: null,
  },
  reducers: {
    // 동기 처리
    // action.payload => evt.target (직렬화 되지 않은 값 - serializableCheck: false)
    changeContactAction: (state, action) => {
      state.contact[action.payload.name] = action.payload.value;
    },
  },
  // 비동기 처리
  // pending => 로딩중
  // fulfilled => 성공
  // rejected => 실패
  extraReducers: (builder) => {
    builder.addCase(getContactListAction.pending, (state) => {
      // Loading 표시
      state.loading = true;

      state.contactList = { pageno: '', pagesize: '', totalcount: '', contacts: [] };
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(getContactListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contactList = action.payload;
    });
    builder.addCase(getContactListAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // getContact
    builder.addCase(getContactAction.pending, (state) => {
      // Loading 표시
      state.loading = true;
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(getContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(getContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // deleteContact
    builder.addCase(deleteContactAction.pending, (state) => {
      // Loading 표시
      state.loading = true;
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(deleteContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.etc = action.payload;
    });
    builder.addCase(deleteContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // addContact
    builder.addCase(addContactAction.pending, (state) => {
      // Loading 표시
      state.loading = true;
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(addContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.etc = action.payload;
    });
    builder.addCase(addContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});
export default countStore;

// 동기(reducers)에 있는 Action Export
export const { changeContactAction } = countStore.actions;
