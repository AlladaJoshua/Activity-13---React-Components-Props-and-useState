import React from "react";

const Header = (props) => {
  return (
    <div>
      {props.count > 5 ? (
        <h1 className="text-[55px] font-bold text-red-500">{props.title}</h1>
      ) : (
        <h1 className="text-[55px] font-bold text-white">{props.title}</h1>
      )}
    </div>
  );
};

export default Header;
