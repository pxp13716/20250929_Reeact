import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'
import pMinDelay from 'p-min-delay'
import { Link } from 'react-router-dom'

function GetContactList() {
  const baseURL = "http://localhost:8000/contacts/";
  // const baseURL = "/api";
  const [contactList, setContactList] = useState(
    { pageno: '', pagesize: '', totalcount: '', contacts: [] }
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getContactList = useCallback(async (no = 1, size = 5) => {
    setLoading(true)
    try {
      // Axios.jsx에서 axios의 default 값이 설정되어 있어서 baseURL 생략
      const resp = await pMinDelay(axios.get(baseURL, { params: { pageno: no, pagesize: size } }), 1000);
      setContactList(resp.data)
    } catch (err) {
      // console.error(err)
      setError(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getContactList(1, 5)
  }, [getContactList]);

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: {error.message}</h3>
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {/* 외부 컴포넌트로 분리해야 한다 */}
          {contactList.contacts.map(contact => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td><Link to={`/contact/${contact.no}`}>{contact.name}</Link></td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GetContactList;
