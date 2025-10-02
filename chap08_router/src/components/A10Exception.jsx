import React from "react";
import { product } from './data/product'
import { useLocation, useParams } from "react-router-dom";

function ExceptionComp() {
  const { id = 1001, name = 'unknown' } = useParams();
  const location = useLocation();
  const data = product.find(item => item.id === Number(id));

  if (Number(id) < 1001 || Number(id) > 1006) {
    throw new Error('ID 범위를 벗어났습니다...')
  }

  return (
    <div>
      <h3>EXCEPTION</h3>

      <div className="mb-3">
        Id: {id}<br />
        Name: {name}<br />
        Location: {decodeURIComponent(location.pathname)}
      </div>

      <div className="mb-3">
        ID: {data.id}<br />
        NAME: {data.name}<br />
        CATEGORY:{data.category}
      </div>
    </div>
  );
};
export default ExceptionComp;
