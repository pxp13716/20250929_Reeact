import React from "react"

// 함수의 첫번째 매개변수는 상위 컴포넌트에서 속성으로 전달할 값을 받는 매개변수 (객체 - 읽기 전용)
function A02PropOne(props) {
  // console.log(props);
  // 구조화 분해 할당 - destructuring
  const {
    type, name, age, bool, num, add, isChecked, onAdd, arr, user,
    setAddress,
  } = props;

  const getToday = () => {
    const now = new Date();
    switch (type) {
      case 'date':
        return <h5>{now.toLocaleDateString()}</h5>;
      case 'time':
        return now.toLocaleTimeString();
      default:
        return now.toLocaleString();
    }
  }

  return (
    <div className="mb-5">
      <h3>A02PropOne</h3>

      <div className="mb-3">
        Type: {props.type} / {type} <br />
        Today: {getToday()} <br />
        Name: {props.name ?? ''} / {name} <br />
        Age: {age + 1} <br />
        Bool: {bool} <br />
        {/* 널리쉬 연산자 */}
        Num: {num ?? 0 + 1} <br />
        Address: {add} <br />
        isChecked: {isChecked ? 'T' : 'F'} <br />
        {/* 
          옵셔널 체이닝 연산자 
          객체명?.[0]       배열
          객체명?.속성명     객체
          객체명?.()        함수
          ?. 앞의 객체가 null, undefined면 ?. 뒤를 평가하지 않고 null, undefined를 반환
        */}
        onAdd: {onAdd?.(10, 20)} <br />
        Array: {arr?.[0]} / {arr?.[1]} / {arr?.[2]} <br />
        Object {user?.name} / {user?.age} / {user?.address} <br />
      </div>

      <div className="mb-3">
        <button onClick={() => setAddress('부산')}>Address</button>
      </div>
    </div>
  )
}

// deprecated - defaultProps, propTypes 모두 기술해도 무시된다
A02PropOne.defaultProps = {
  num: 200,
}
A02PropOne.propTypes = {
  // num: PropType.number,
}

export default A02PropOne
