import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

// action
import { getContactAction, deleteContactAction } from './../stores/contactStore'

function Contact() {
  const { contact, loading, error, etc } = useSelector(store => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { no } = useParams();

  const deleteContact = useCallback(() => {
    dispatch(deleteContactAction(no))
  }, [dispatch, no])

  useEffect(() => {
    dispatch(getContactAction(no))
  }, [dispatch, no]);

  useEffect(() => {
    if (etc.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
      navigate('/contactList');
    } else if (etc.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'fail' })
      navigate('/contactList');
    }
  }, [etc, navigate])

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: ${error.message}</h3>

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary">수정</button>
      <button className="btn btn-outline-primary" onClick={deleteContact}>삭제</button>
    </div>
  )
}

export default Contact;
