import React, { useState } from 'react'

// react-hook-form 라이브러리를 이용하는 것이 좋다
function A03Event() {
  const [data, setData] = useState({
    name: '',
    address: '',
    age: '',
    date: '2024-12-25',
    sports: 'basketball',
    isChecked: true,
    language: ['React'],
    baseball: '엘지',
    four: [],
  });

  const sendData = (evt) => {
    // HTML 요소가 빌드될때 추가된 기본 자바스크립트를 실행하지 않도록 한다.
    evt.preventDefault();
    // console.log(data);

    // 직렬화
    // JavaScript 객체 => JSON Data로 변경, 클라이언트 => 서버로 전송하는 경우
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // JSON Data => JavaScript 객체로 변경. 서버 => 클라이언트로 값이 넘어오는 경우
    const jsData = JSON.parse(jsonData);
    console.log(jsData);
  };

  const changeString = (evt) => {
    // const newData = { ...data };
    // newData[evt.target.name] = evt.target.value;
    // setData(newData);

    // const newData = { ...data, [evt.target.name]: evt.target.value };
    // setData(newData);

    setData({ ...data, [evt.target.name]: evt.target.value });
  }
  const changeNumber = (evt) => {
    // 필요에 따라 사용자 값의 검증을 할 필요가 있다. 위의 changeString은 검증 없음. 필요하면 정의
    let value = Number(evt.target.value);
    if (Number.isNaN(value)) value = '';
    const newData = { ...data, [evt.target.name]: value };
    setData(newData);
  }
  const changeCheck = (evt) => {
    // const newData = { ...data, isChecked: !data.isChecked };
    const newData = { ...data, [evt.target.name]: !data[evt.target.name] };
    setData(newData);
  }
  const changeCheckBox = (evt) => {
    const value = evt.target.value;
    if (!data.language.includes(value)) {
      const newLang = [...data.language]
      newLang.push(value);
      const newData = { ...data, language: newLang };
      setData(newData);
    } else {
      const newLang = data.language.filter((item) => {
        if (item !== value) return true;
        else return false;
      });
      const newData = { ...data, language: newLang };
      setData(newData);
    }
  }
  const changeSelectBox = (evt) => {
    const elem = evt.target.selectedOptions;  // 유사배열(객체)
    const arr = Array.from(elem);             // 순수 배열
    const newFour = arr.map((item) => {       // item => <option>
      return item.value
    });
    const newData = { ...data, four: newFour };
    setData(newData);
  }

  const clearName = () => {
    const newData = { ...data, name: '' };
    setData(newData);
  }

  return (
    <div className="mb-5">
      <h3>B02 React Hook Form</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: {data.name}</label>
          <input type="text" id="name" name="name" className="form-control"
            value={data.name} onInput={changeString} />
          <button type="button" onClick={clearName}>Name</button>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address: {data.address}</label>
          <input type="text" id="address" name="address" className="form-control"
            value={data.address} onChange={changeString} />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age: {data.age + 1}</label>
          <input type="number" id="age" name="age" className="form-control"
            value={data.age} onChange={changeNumber} />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date: {data.date}</label>
          <input type="date" id="date" name="date" className="form-control"
            value={data.date} onChange={changeString} />
        </div>

        <div className="mb-3">
          RadioButton: {data.sports}<br />
          <div className="form-check">
            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === "baseball"} />
            <label htmlFor="baseball" className="form-check-label">야구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === "soccer"} />
            <label htmlFor="soccer" className="form-check-label">축구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === "basketball"} />
            <label htmlFor="basketball" className="form-check-label">농구</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
          <div className="form-check">
            <input type="checkbox" id="isChecked" name="isChecked" className="form-check-input"
              defaultChecked={data.isChecked} onChange={changeCheck} />
            <label htmlFor="isChecked" className="form-check-label">동의</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox: {data.language.join(' - ')}<br />
          <div className="form-check">
            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
              defaultChecked={data.language.includes('Angular')} onChange={changeCheckBox} />
            <label htmlFor="angular" className="form-check-label">앵귤러</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
              defaultChecked={data.language.includes('React')} onChange={changeCheckBox} />
            <label htmlFor="react" className="form-check-label">리엑트</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
              defaultChecked={data.language.includes('Vue')} onChange={changeCheckBox} />
            <label htmlFor="vue" className="form-check-label">뷰</label>
          </div>
        </div>

        <div className="mb-3">
          SelectBox: {data.baseball}<br />
          <select name="baseball" className="form-control mb-2"
            value={data.baseball} onChange={changeString}>
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <div className="mb-3">
          SelectBox Multi: {data.four.join(', ')}<br />
          <select name="four" multiple size="5" className="form-control mb-2"
            value={data.four} onChange={changeSelectBox}>
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <button type="submit" onClick={sendData}>SEND</button>
      </form>
    </div>
  )
}

export default A03Event;
