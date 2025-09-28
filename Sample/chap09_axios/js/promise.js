const one = (ms) => {
  // resolve => then이 전달한 함수
  // reject => catch가 전달한 함수
  const promise = new Promise((resolve, reject) => {
    if (ms < 1000) reject(new Error('시간이 너무 짧습니다'));
    else {
      setTimeout(() => {
        const result = 3000;
        resolve({ result, status: 200, statusText: 'OK' })
      }, ms)
    }
  });
  return promise;
}

/*
one(2000)
  .then((resp) => {
    console.log('성공', resp)

    // return 뒤의 구문을 프라미스 객체로 감싸서 실행 - 프라미스 객체가 된다
    // 결과 처리는 다음 then이 받아 처리
    return five(1500);
  })
  .then((resp) => {   // 위의 return five(1500);에 대한 성공 처리
    console.log(resp);

    return resp.result;
  })
  .then((resp) => {   // 위의 return resp.result;에 대한 성공 처리
    console.log(resp);
  })
  .catch((err) => {
    console.error('실패', err)
  })
*/

// ES2017
// async ~ await (함수 기반으로 구현)
const getPromise = async (ms) => {
  try {
    const resp1 = await one(ms);   // 결과가 도착할때까지 대기
    console.log(resp1)
    const resp2 = await one(resp1.result);
    console.log(resp2);

    console.log(resp2.result + 10000);
  } catch (err) {
    console.error(err)
  }
}
getPromise(2000)
