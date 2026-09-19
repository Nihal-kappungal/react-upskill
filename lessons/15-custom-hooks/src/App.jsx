import React from "react";
import Counter from "./components/Counter";
import useDocumentTitle from "./hooks/useDocumentTitle";
import LocalStorage from "./components/LocalStorage";

const App = () => {
  // useDocumentTitle("My react app");
  return (
    <div>
      {/* <Counter /> */}
      <LocalStorage />
    </div>
  );
};

export default App;
