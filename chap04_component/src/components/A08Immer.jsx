import React, { useCallback, useState } from "react";

// npm i immer
import { produce } from 'immer'

function A08Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      arr: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  const changeName = useCallback(() => {
    setPerson((person) => ({ ...person, name: '놀부' }));
  }, []);
  const changeAddress = useCallback((x) => {
    setPerson((person) => {
      const newInfo = { ...person.info, address: x };
      return { ...person, info: newInfo };
    });
  }, []);
  const changeOne = useCallback((x) => {
    setPerson((person) => {
      const newPerson = {
        ...person,
        info: {
          ...person.info,
          etc: {
            ...person.etc,
            one: x              // 실질적으로 변경될 값. 상위는 모두 새로운 객체이어야 한다
          }
        }
      };
      return newPerson
    });
  }, []);
  const addArray = useCallback(() => {
    setPerson((person) => {
      const random = Math.ceil(Math.random() * 100);
      const newArr = person.info.arr.concat(random);

      const newInfo = { ...person.info, arr: newArr };
      return { ...person, info: newInfo };
    });
  }, []);

  // immer
  const changeNameImmer = useCallback(() => {
    // const newData = produce(person, (draft) => {
    //   draft.name = 'Adam';
    // })
    // setPerson(newData);

    setPerson((person) => {
      const newData = produce(person, (draft) => {
        draft.name = 'Adam';
      })
      return newData;
    });
  }, []);
  const changeAddressImmer = useCallback((x) => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        draft.info.address = x;
      })
      return newData;
    });
  }, []);
  const changeOneImmer = useCallback((x) => {
    setPerson((person) => {
      return produce(person, (draft) => {
        draft.info.etc.one = x;
      })
    });
  }, []);
  const addArrayImmer = useCallback(() => {
    setPerson((person) => {
      const random = Math.ceil(Math.random() * 100);
      return produce(person, (draft) => {
        draft.info.arr.push(random);
      })
    });
  }, []);
  const updateArrayImmer = useCallback((idx, value) => {
    setPerson((person) => {
      return produce(person, (draft) => {
        draft.info.arr[idx] = value;
      })
    });
  }, []);
  const deleteArrayImmer = useCallback((idx) => {
    setPerson((person) => {
      return produce(person, (draft) => {
        draft.info.arr.splice(idx, 1)
      })
    });
  }, []);

  return (
    <div className="mb-5">
      <h3>A08 Immer</h3>

      <div className="mb-3">
        Name: {person.name}
        <br />

        Address: {person.info.address}
        <br />

        One: {person.info.etc.one}
        <br />

        Ary:{" "}
        {person.info.arr.map((item, i) => (
          <span key={i}>{item} </span>
        ))}
      </div>

      <div className="mb-3">
        <button onClick={changeName}>Name</button>
        <button onClick={() => changeAddress('서울')}>Address</button>
        <button onClick={() => changeOne('복잡하다...')}>One</button>
        <button onClick={addArray}>ADD</button>
        <br />

        <button onClick={changeNameImmer}>Name</button>
        <button onClick={() => changeAddressImmer('부산')}>Address</button>
        <button onClick={() => changeOneImmer('간단하다...')}>One</button>

        <button onClick={() => addArrayImmer()}>ADD</button>
        <button onClick={() => updateArrayImmer(1, 3000)}>UPDATE</button>
        <button onClick={() => deleteArrayImmer(1)}>DELETE</button>
      </div>
    </div>
  );
}
export default A08Immer;
