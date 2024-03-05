import React from "react";
import { useState } from "react";
import CountDisplay from "./CountDisplay";

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-5">
        <CountDisplay count={count} />
      </div>
      <div className="flex gap-[20px]">
        <button
          className="bg-black text-white p-[15px] w-[250px] border border-white rounded-lg hover:border-indigo-500 hover:text-indigo-500"
          onClick={() => setCount(count + 1)}
        >
          + Increment
        </button>
        {count > 0 ? (
          <button
            className="bg-black text-white p-[15px] w-[250px]  border border-white rounded-lg hover:border-indigo-500 hover:text-indigo-500"
            onClick={() => setCount(count - 1)}
          >
            - Decrement
          </button>
        ) : (
          <button
            className="bg-black text-white p-[15px] w-[250px]  border border-white rounded-lg hover:border-indigo-500 hover:text-indigo-500"
            onClick={() => setCount(count - 1)}
            disabled
          >
            - Decrement
          </button>
        )}
      </div>
    </div>
  );
};

export default Counter;
