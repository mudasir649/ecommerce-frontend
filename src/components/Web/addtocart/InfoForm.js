import React from "react";

function InfoForm({value}) {
  return (
    <>
      <div className="basis-1/2">
        <h1 className="text-[#232323] text-md uppercase font-semibold mb-7">
          {value.name}
        </h1>
        <span className="capitalize text-gray-400">{value.lable}</span>
        <div className="flex flex-row mt-2">
          <input
            type="textbox"
            className="h-8 w-[480px] p-2 text-sm capitalize border-2 broder-gray-300"
            placeholder={value.placeHolder}
          />
          <button className="bg-[#3CB878] w-32 h-8 text-white text-md uppercase">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default InfoForm;
