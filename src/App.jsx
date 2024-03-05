import Header from "./Components/Header";
import Counter from "./Components/Counter";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <div className="flex justify-center items-center flex-col flex-grow">
          <Header title="This is the title" count={count} />
          <Counter count={count} setCount={setCount} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
