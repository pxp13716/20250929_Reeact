import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product.jsx'

function ParamsTwo() {
  const { '*': params } = useParams();
  // console.log(params);     // "1003/향단/13"

  // 재 실행될때마다 의존관계를 가진 useEffect가 재 실행되지 않도록 useMemo로 처리
  const arr = useMemo(() => params.split('/'), [params]);
  // console.log(arr)

  const location = useLocation();

  const [data, setData] = useState({ id: '', name: '', category: '' });
  const [contact, setContact] = useState({ no: '', name: '', tel: '', address: '' })

  const getContact = useMemo(async () => {
    try {
      const resp = await fetch('http://localhost:8000/contacts/' + (arr[2] ?? 0));
      const data = await resp.json();
      // console.log(data);
      setContact(data);
    } catch (err) {
      console.error(err)
    }
  }, [arr]);

  useEffect(() => {
    const item = product.find(item => item.id === Number(arr[0] ?? 0));
    setData(item);
  }, [arr]);

  useEffect(() => {
    getContact;
  }, [arr, getContact]);

  return (
    <div className="mb-3">
      <h3>PARAMETER TWO</h3>

      <div className="mb-3">
        Id: {arr[0] ?? 0}<br />
        Name: {arr[1] ?? 'UNKNOWN'}<br />
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
export default ParamsTwo;
