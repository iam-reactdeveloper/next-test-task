import React from "react";
import Image from "next/image";

export const Card = (props: any) => {
  const { image, subHeading, content,svgPath } = props;
  return (
    <>
      <div className="max-w-sm z-[-1] shadow-lg">
        {image && (
          <Image src={image} alt="here is image " width={410} height={410} />
        )}
        <div>
          <div className="font-bold text-xl mb-2">{subHeading}</div>
          <p className="primary-500 text-base opacity-70">{content}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 25"
          fill="none"
          className="mt-3"
        >
          <path
            d={svgPath}
            stroke="#20AB76"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* )} */}
      </div>
    </>
  );
};
