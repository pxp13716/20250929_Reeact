import { age } from './exportOne.js'

const jumsu = (function () {
  const progName = '점수 프로그램';
  const name = `놀부 / ${age}`;

  const getName = function () {
    return name + ' ' + progName;
  };
  const getTotal = function (x, y) {
    return x + y;
  };
  const getAvg = function (total, num) {
    return total / num;
  };

  return {
    pName: progName,
    name: getName,
    getTotal,
    getAvg
  };
})();
// console.log(jumsu);

// default는 한 파일에서 1개의 요소에만 지정 할 수 있다. default가 두번 오면 에러
export default jumsu;
// export default { A: 10 }         // Error

// 개별 export는 따로 얼마든지 사용 가능하다.
export const x = 10;
export const y = 20;
