import { render, screen, fireEvent, queryByTitle } from '@testing-library/react';
import App from './App';
// import {getRecipes} from './App';


it("checkButtonRender", () => {
  const {queryByTitle} = render(<App/>);
  const btn = queryByTitle("testbtn");
  expect(btn).toBeTruthy();
})

// test('getRecipes', () => {
//   expect(getRecipes()).toBe(null);
// });

// describe("clickBtn", () => {
//   it("onClick", () => {
//     const {queryByTitle} = render(<App/>);
//     const btn = queryByTitle("testbtn");
//     fireEvent.call(btn)
//   })
// })


it("checkCard", () => {
  const {queryByTitle} = render(<App/>);
  const btn = queryByTitle("testdiv");
  expect(btn).toBeTruthy();
})