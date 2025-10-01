import React from "react";
// npm i classnames
// https://www.npmjs.com/package/classnames
import cns from 'classnames'

import './css/A03Style.css';
import two from './css/A02Style2.module.css'

function A03Classnames() {
  const txt = "text";
  const isChecked = true;

  return (
    <div className="mb-5">
      <h3 className={cns('bg text space')}>A03 ClassNames Module</h3>
      <h3 className={cns('bg', { text: isChecked, space: true })}>A03 ClassNames Module</h3>
      <h3 className={cns({ bg: true, [txt]: isChecked, space: true })}>A03 ClassNames Module</h3>

      <h3 className={cns({ [two.title]: true, [two.reverse]: isChecked })}>A03 ClassNames Module</h3>
    </div >
  );
}

export default A03Classnames;
