import React, { useState } from "react";
import axios from 'axios'
import { useCallback } from "react";

// https://axios-http.com/kr/docs/config_defaults
axios.defaults.baseURL = '/api';
axios.defaults.headers.timeout = 3000;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';


function Axios() {
  // const baseURL = "http://localhost:8000/contacts/";
  // const baseURL = '/api'
  const [data, setData] = useState('');

  const getContactList = useCallback(() => {
    // axios.get(주소, {options});
    // axios.get(baseURL + '/contacts', { params: { pageno: 1, pagesize: 5 }, headers: {}, timeout: 3000 })
    axios.get('/contacts', { params: { pageno: 1, pagesize: 5 } })
      .then((resp) => {
        // console.log(resp);
        setData(JSON.stringify(resp.data, '', 4));
      })
      .catch((err) => {
        console.error(err)
      })
  }, []);
  const getContactListAsync = useCallback(async (no = 1, size = 5) => {
    try {
      // const resp = await axios.get(baseURL + '/contacts', { params: { pageno: no, pagesize: size }, headers: {}, timeout: 3000 })
      const resp = await axios.get('/contacts', { params: { pageno: no, pagesize: size } })
      setData(JSON.stringify(resp.data, '', 4));
    } catch (err) {
      console.error(err)
    }
  }, []);
  const getContact = useCallback((no) => {
    // axios({
    //   method: 'GET',
    //   url: baseURL + '/contacts/' + no,
    //   params: {},
    //   data: '',       // POST, PUT, PATCH 에서 서버에 전송할 값
    //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json ' }
    // })
    axios({
      method: 'GET',
      url: '/contacts/' + no,
      data: '',       // POST, PUT, PATCH 에서 서버에 전송할 값
    })
      .then((resp) => {
        setData(JSON.stringify(resp.data, '', 4));
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  const addContact = useCallback(async () => {
    const person = {
      name: "강감찬",
      tel: "010-2222-3339",
      address: "서울시"
    }
    try {
      // axios.post(URL, 전송할 데이터 값, { options })
      // const resp = await axios.post(baseURL + '/contacts', person, { headers: { 'conent-type': 'application/json' }, timeout: 3000 })
      const resp = await axios.post('/contacts', person)
      setData(JSON.stringify(resp.data, '', 4));
    } catch (err) {
      console.error(err)
    }
  }, []);
  const updateContact = useCallback(async (no) => {
    const person = {
      no,
      name: "이순신",
      tel: "010-2222-1111",
      address: "충무시"
    }
    try {
      // axios.put(URL, 전송할 데이터 값, { options })
      // const resp = await axios.put(baseURL + '/contacts/' + no, person, { headers: { 'conent-type': 'application/json' }, timeout: 3000 })
      const resp = await axios.put('/contacts/' + no, person)
      setData(JSON.stringify(resp.data, '', 4));
    } catch (err) {
      console.error(err)
    }
  }, []);
  const deleteContact = useCallback(async (no) => {
    try {
      // axios.delete(URL, { options })
      // const resp = await axios.delete(baseURL + '/contacts/' + no, { timeout: 3000 })
      const resp = await axios.delete('/contacts/' + no)
      setData(JSON.stringify(resp.data, '', 4));
    } catch (err) {
      console.error(err)
    }
  }, []);

  return (
    <div>
      <h3>Axios Test</h3>

      <div className="mb-3">
        <button onClick={() => getContactList()}>DATA LIST</button>
        <button onClick={() => getContactListAsync(2, 5)}>DATA LIST ASYNC</button>
        <button onClick={() => getContact(1)}>GET</button>
        <button onClick={addContact}>ADD</button>
        <button onClick={() => updateContact(1759385104154)}>UPDATE</button>
        <button onClick={() => deleteContact(1759385104154)}>DELETE</button>
      </div>

      <textarea rows="15" className="form-control" defaultValue={data}></textarea>
    </div>
  );
}
export default Axios;
