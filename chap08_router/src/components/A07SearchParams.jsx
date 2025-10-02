/*
  Router path를 우선적으로 사용하는 이유
  1. Router 정의로 이름을 명시하므로 전달하는 정보가 명확하다
  2. 값 처리를 위한 코드의 처리가 useParams가 심플
  3. 일반적인 패스 기술의 일부로서 표현하므로 패스 자체의 의미가 알기 쉽다
*/
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { product } from './data/product.jsx'

function SearchParams() {
  const [searchParam, setSearchParam] = useSearchParams();
  // console.log(searchParam);
  const { pathname, hash, search } = useLocation();

  const [data, setData] = useState({ id: '', name: '', category: '' });
  const [contact, setContact] = useState({ no: '', name: '', tel: '', address: '' })

  const getContact = useMemo(async () => {
    try {
      const resp = await fetch('http://localhost:8000/contacts/' + searchParam.get('no'));
      const data = await resp.json();
      // console.log(data);
      setContact(data);
    } catch (err) {
      console.error(err)
    }
  }, [searchParam]);

  // setter로 요청정보 변경 가능
  useEffect(() => {
    // setSearchParam({ id: '1001', name: 'ABC', no: '20' })
  }, [setSearchParam])

  useEffect(() => {
    // 넘어오는 값은 문자열이다 
    if (searchParam.has('id')) {
      const item = product.find(item => item.id === Number(searchParam.get('id')));
      setData(item);
    }
  }, [searchParam]);

  useEffect(() => {
    getContact;
  }, [searchParam, getContact]);

  return (
    <div>
      <h3>SEARCHPARAMS</h3>

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
    </div >
  );
};
export default SearchParams;
