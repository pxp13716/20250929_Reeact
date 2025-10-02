import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product'

function ParamsComp() {
  // 패스로 넘어오는 값을 받는 Hook
  // const params = useParams();
  // console.log(params)
  const { id, name, no } = useParams();

  // 주소줄 관련 정보
  const location = useLocation();
  // console.log(location)

  const [data, setData] = useState({ id: '', name: '', category: '' });
  const [contact, setContact] = useState({ no: '', name: '', tel: '', address: '' })

  const getContact = useMemo(async () => {
    try {
      const resp = await fetch('http://localhost:8000/contacts/' + no);
      const data = await resp.json();
      // console.log(data);
      setContact(data);
    } catch (err) {
      console.error(err)
    }
  }, [no]);

  useEffect(() => {
    // 넘어오는 값은 문자열이다 
    const item = product.find(item => item.id === Number(id));
    setData(item);
  }, [id]);

  useEffect(() => {
    getContact;
  }, [no, getContact]);

  return (
    <div className="mb-3">
      <h3>PARAMS ONE</h3>

      <div className="mb-3">
        Id: {id}<br />
        Name: {name}<br />
        Location: {decodeURIComponent(location.pathname)}
      </div>

      <div className="mb-3">
        ID: {data?.id}<br />
        NAME: {data.name}<br />
        CATEGORY: {data.category}
      </div>

      <div className="mb-3">
        ID: {contact.no}<br />
        NAME: {contact.name}<br />
        ADDRESS: {contact.address}
      </div>
    </div>
  );
};
export default ParamsComp;
