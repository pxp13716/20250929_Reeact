import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

// action
import { addContactAction, changeContactAction } from './../stores/contactStore'

function AddContact() {
  const { contact, loading, error, etc } = useSelector(store => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addContact = useCallback((evt) => {
    evt.preventDefault();
    dispatch(addContactAction(contact))
  }, [dispatch, contact])

  useEffect(() => {
    if (etc.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
      navigate('/contactList');
    } else if (etc.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'fail' })
      navigate('/contactList');
    }
  }, [etc, navigate])

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: ${error.message}</h3>
  return (
    <div>
      <h3>Add Contact</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" name="name"
            value={contact.name} onChange={(evt) => dispatch(changeContactAction(evt.target))} />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Tel</label>
          <input type="text" id="tel" className="form-control" name="tel"
            value={contact.tel} onChange={(evt) => dispatch(changeContactAction(evt.target))} />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" name="address"
            value={contact.address} onChange={(evt) => dispatch(changeContactAction(evt.target))} />
        </div>

        <button type="submit" className="btn btn-outline-primary" onClick={addContact}>ADD</button>
      </form>
    </div>
  );
}

export default AddContact;
