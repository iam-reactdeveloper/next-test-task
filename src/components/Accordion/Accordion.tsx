import React, { useState } from "react";



export const Accordion = (props: any) => {
  const { accordionData } =props
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="space-y-2">
      {accordionData.map((item: any, index: any) => (
        <div key={index}>
          <div
            className={`flex justify-between w-full text-left font-semibold px-[15%] py-[1%] ${
              activeIndex === index
                ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                : ""
            }`}
          >
            {item.title}

            <button
              onClick={() => toggleAccordion(index)}
            >
              <span className="float-right">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
          </div>

          {activeIndex === index && (
            <div className="mt-2 px-[15%]">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};


// export const Accordion = (props: any) => {
//   const { title, content, index } = props;
//   const [isOpen, setIsOpen] = useState(false);

//   console.log(index)

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="p-4 mb-2  ">
      // <div
        // className={`flex justify-between w-full text-left font-semibold px-[15%]  ${
        //   isOpen
        //     ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        //     : ""
        // }`}
      //   // className=" pt-[4%] px-[15%]"
      // >
      //   {title}

      //   <button className="" onClick={toggleAccordion}>
      //     <span className="transform transition-transform">
      //       {isOpen ? "+" : "-"}
      //     </span>
      //   </button>
      // </div>
//       {isOpen && <div className="mt-2 px-[15%]">{content}</div>}
//     </div>
//   );
// };
