import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function AddContact() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const changeContact = useCallback((evt) => {
    setContact((contact) => {
      // 필요에 따라 검증 추가
      return { ...contact, [evt.target.name]: evt.target.value }
    })
  }, []);

  const addContact = useCallback(async (evt) => {
    evt.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post(baseURL, contact);
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' })
      }
      navigate('/contactList')
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [navigate, contact]);



  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: {error.message}</h3>
  return (
    <div>
      <h3>Add Contact</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" name="name"
            value={contact.name} onChange={changeContact} />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Tel</label>
          <input type="text" id="tel" className="form-control" name="tel"
            value={contact.tel} onChange={changeContact} />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" name="address"
            value={contact.address} onChange={changeContact} />
        </div>

        <button type="submit" className="btn btn-outline-primary" onClick={addContact}>ADD</button>
      </form>
    </div>
  );
}

export default AddContact;
