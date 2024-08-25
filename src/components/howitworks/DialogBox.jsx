import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { GoArrowUp } from 'react-icons/go';

const DialogBox = ({ evenIndexedData, oddIndexedData }) => {
  const [openIndex, setOpenIndex] = useState("1"); 

  const toggleDialog = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };


  return (
    <div className='container lg:max-w-[1140px]  mx-auto grid grid-cols-1 lg:grid-cols-2 '>
      <div className="left-section  gap-0 lg:gap-4 p-4 mb-0 lg:mb-10">
        {evenIndexedData?.map((item) => (
          <div key={item.id} className='mb-2' >
            <div
              onClick={() => toggleDialog(item.id )} 
              className={`flex flex-col cursor-pointer p-4 ${
                openIndex === item.id  ? "bg-primary text-[#FFB703] rounded-lg" : "border-primary border-y text-primary"
              }`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-sm lg:text-lg font-bold">{item.title}</h2>
                <div className="ml-2">
                  {openIndex === item.id ? <GoArrowUp  /> : <FaChevronDown  />}
                </div>
              </div>

            </div>
            {openIndex === item.id  && (
                <div className="p-4">
                   <ul className=" text-primary">
                  {item.description.split('.').map((line, index) => (
                    <li key={index} className="text-md">
                      {line}
                    </li>
                  ))}
                </ul>
                </div>
              )}
          </div>
        ))}
      </div>
      <div className="right-section gap-0 lg:gap-4 p-4 mb-10">
        {oddIndexedData?.map((item) => (
          <div className='mb-2' key={item.id}>
            <div
              onClick={() => toggleDialog(item.id )}
              className={`flex flex-col cursor-pointer p-4 ${
                openIndex === item.id  ? "bg-primary text-[#FFB703] rounded-lg" : "border-primary border-y text-primary"
              }`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-sm lg:text-lg font-bold">{item.title}</h2>
                <div className="ml-2">
                  {openIndex === item.id  ? <GoArrowUp size={20} /> : <FaChevronDown size={20} />}
                </div>
              </div>
              
            </div>
            {openIndex === item.id && (
                <div className="p-4">
                                    <ul className=" text-primary">
                  {item.description.split('.').map((line, index) => (
                    <li key={index} className="text-md">
                      {line}
                    </li>
                  ))}
                </ul>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialogBox;
