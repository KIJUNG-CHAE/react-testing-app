import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  // 컴포넌틀 랜더링을 먼저 해준 뒤 엘리멘트를 체크한다.

  // 테스트 구조
  // test('테스트 설명', 람다함수)
  // expect와 matcher를 비교한뒤 패스/논패스를 체킹

  // 쿼리함수
  // getBy, findBy, queryBy 종류가 있다.
  // get은 요소가 있는지 없는지 체크,
  // query는 promise를 반환,
  // find는 요소 유무 체크 후 값을 반환, getBy+waitFor(비동기 처리)
});
