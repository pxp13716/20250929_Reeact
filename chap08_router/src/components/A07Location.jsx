// npm i qs
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from 'qs'

import { product } from './data/product.jsx'

function LocationComp() {
  // const location = useLocation();
  // console.log(location);
  const { hash, search, pathname } = useLocation();
  const searchData = qs.parse(search, { ignoreQueryPrefix: true });
  // console.log(searchData)

  const [data, setData] = useState({ id: '', name: '', category: '' });
  const [contact, setContact] = useState({ no: '', name: '', tel: '', address: '' })

  const getContact = useMemo(async () => {
    try {
      const resp = await fetch('http://localhost:8000/contacts/' + searchData.no);
      const data = await resp.json();
      // console.log(data);
      setContact(data);
    } catch (err) {
      console.error(err)
    }
  }, [searchData.no]);

  useEffect(() => {
    // 넘어오는 값은 문자열이다 
    const item = product.find(item => item.id === Number(searchData.id));
    setData(item);
  }, [searchData.id]);

  useEffect(() => {
    getContact;
  }, [searchData.no, getContact]);

  return (
    <div>
      <h3>LOCATION</h3>

      <div className="mb-3">
        pathname: {decodeURIComponent(pathname)}<br />
        search: {decodeURIComponent(search)}<br />
        hash: {decodeURIComponent(hash)}
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
export default LocationComp;
