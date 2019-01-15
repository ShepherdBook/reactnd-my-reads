import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App renders as expected", () => {
  const app = renderer.create(<App />);

  let tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
