import React, { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function GetContact() {
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

  const deleteContact = useCallback(async () => {
    try {
      const resp = await axios.delete(baseURL + no);
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' })
      }
      navigate('/contactList')
    } catch (err) {
      setError(err);
    }
  }, [no, navigate]);

  useEffect(() => {
    getContact()
  }, [getContact]);

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: {error.message}</h3>
  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => navigate(`/updateContact/${contact.no}`)} >수정</button>
      <button className="btn btn-outline-primary" onClick={deleteContact}>삭제</button>
    </div>
  );
}
export default GetContact;
