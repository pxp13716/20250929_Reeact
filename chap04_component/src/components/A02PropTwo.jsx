import React from "react"

function A02PropTwo(props) {
  const {
    type = 'all', name = 'UNKNOWN', age = 0, bool = true,
    num = 0, add = 'UNKNOWN', isChecked = true,
    arr = [],
    user = {},
    onAdd = () => { },
    setAddress = () => { },
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
      <h3>A02PropTwo</h3>

      <div className="mb-3">
        Type: {type} <br />
        Today: {getToday()} <br />
        Name: {name} <br />
        Age: {age + 1} <br />
        Bool: {bool} <br />
        Num: {num ?? 0 + 1} <br />
        Address: {add} <br />
        isChecked: {isChecked ? 'T' : 'F'} <br />
        onAdd: {onAdd(10, 20)} <br />
        Array: {arr[0]} / {arr[1]} / {arr[2]} <br />
        Object {user.name} / {user.age} / {user.address} <br />
      </div>

      <div className="mb-3">
        <button onClick={() => setAddress('부산')}>Address</button>
      </div>
    </div>
  )
}

export default A02PropTwo
