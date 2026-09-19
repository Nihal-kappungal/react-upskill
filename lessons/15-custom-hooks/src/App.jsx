import React from "react";
import Counter from "./components/Counter";
import useDocumentTitle from "./hooks/useDocumentTitle";

const App = () => {
  // useDocumentTitle("My react app");
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
