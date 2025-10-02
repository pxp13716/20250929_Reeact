import React, { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function UpdateContact() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // /:no값 추출
  const { no } = useParams();
  // 이동
  const navigate = useNavigate();

  const getContact = useCallback(async () => {
    setLoading(true)
    try {
      const resp = await axios.get(baseURL + no);
      setContact(resp.data)
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [no]);

  const changeContact = useCallback((evt) => {
    setContact((contact) => {
      // 필요에 따라 검증 추가
      return { ...contact, [evt.target.name]: evt.target.value }
    })
  }, []);

  useEffect(() => {
    getContact()
  }, [getContact]);

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: {error.message}</h3>
  return (
    <div>
      <h3>Update Contact</h3>

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

        <button type="submit" className="btn btn-outline-primary">UPDATE</button>
      </form>
    </div>
  );
}
export default UpdateContact;
