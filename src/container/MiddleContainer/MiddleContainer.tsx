import { Card, Text } from '../../components';
import React from 'react'

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const MiddleContainer = () => {
  const cardsDetailsOne = [
    {
      subHeading: "Lorem Ipsum",
      svgPath:
        "M6 6.94812H6.01M6 18.9481H6.01M5.2 10.9481H18.8C19.9201 10.9481 20.4802 10.9481 20.908 10.7301C21.2843 10.5384 21.5903 10.2324 21.782 9.8561C22 9.42828 22 8.86823 22 7.74812V6.14812C22 5.02802 22 4.46796 21.782 4.04014C21.5903 3.66381 21.2843 3.35785 20.908 3.16611C20.4802 2.94812 19.9201 2.94812 18.8 2.94812H5.2C4.07989 2.94812 3.51984 2.94812 3.09202 3.16611C2.71569 3.35785 2.40973 3.66381 2.21799 4.04014C2 4.46796 2 5.02802 2 6.14812V7.74812C2 8.86823 2 9.42828 2.21799 9.8561C2.40973 10.2324 2.71569 10.5384 3.09202 10.7301C3.51984 10.9481 4.0799 10.9481 5.2 10.9481ZM5.2 22.9481H18.8C19.9201 22.9481 20.4802 22.9481 20.908 22.7301C21.2843 22.5384 21.5903 22.2324 21.782 21.8561C22 21.4283 22 20.8682 22 19.7481V18.1481C22 17.028 22 16.468 21.782 16.0401C21.5903 15.6638 21.2843 15.3579 20.908 15.1661C20.4802 14.9481 19.9201 14.9481 18.8 14.9481H5.2C4.07989 14.9481 3.51984 14.9481 3.09202 15.1661C2.71569 15.3579 2.40973 15.6638 2.21799 16.0401C2 16.468 2 17.028 2 18.1481V19.7481C2 20.8682 2 21.4283 2.21799 21.8561C2.40973 22.2324 2.71569 22.5384 3.09202 22.7301C3.51984 22.9481 4.0799 22.9481 5.2 22.9481Z",

      content:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron.",
    },
    {
      subHeading: "Lorem Ipsum Lorem Ipsum",
      svgPath:
        "M6 6.94812H6.01M6 18.9481H6.01M5.2 10.9481H18.8C19.9201 10.9481 20.4802 10.9481 20.908 10.7301C21.2843 10.5384 21.5903 10.2324 21.782 9.8561C22 9.42828 22 8.86823 22 7.74812V6.14812C22 5.02802 22 4.46796 21.782 4.04014C21.5903 3.66381 21.2843 3.35785 20.908 3.16611C20.4802 2.94812 19.9201 2.94812 18.8 2.94812H5.2C4.07989 2.94812 3.51984 2.94812 3.09202 3.16611C2.71569 3.35785 2.40973 3.66381 2.21799 4.04014C2 4.46796 2 5.02802 2 6.14812V7.74812C2 8.86823 2 9.42828 2.21799 9.8561C2.40973 10.2324 2.71569 10.5384 3.09202 10.7301C3.51984 10.9481 4.0799 10.9481 5.2 10.9481ZM5.2 22.9481H18.8C19.9201 22.9481 20.4802 22.9481 20.908 22.7301C21.2843 22.5384 21.5903 22.2324 21.782 21.8561C22 21.4283 22 20.8682 22 19.7481V18.1481C22 17.028 22 16.468 21.782 16.0401C21.5903 15.6638 21.2843 15.3579 20.908 15.1661C20.4802 14.9481 19.9201 14.9481 18.8 14.9481H5.2C4.07989 14.9481 3.51984 14.9481 3.09202 15.1661C2.71569 15.3579 2.40973 15.6638 2.21799 16.0401C2 16.468 2 17.028 2 18.1481V19.7481C2 20.8682 2 21.4283 2.21799 21.8561C2.40973 22.2324 2.71569 22.5384 3.09202 22.7301C3.51984 22.9481 4.0799 22.9481 5.2 22.9481Z",

      content:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    },
  ];


  const cardsDetailsFour = [
    {},
      {
        image: "/images/image4.jpg",
      },
      {
        subHeading: "Lorem Ipsum",
        svgPath:
          "M6 6.94812H6.01M6 18.9481H6.01M5.2 10.9481H18.8C19.9201 10.9481 20.4802 10.9481 20.908 10.7301C21.2843 10.5384 21.5903 10.2324 21.782 9.8561C22 9.42828 22 8.86823 22 7.74812V6.14812C22 5.02802 22 4.46796 21.782 4.04014C21.5903 3.66381 21.2843 3.35785 20.908 3.16611C20.4802 2.94812 19.9201 2.94812 18.8 2.94812H5.2C4.07989 2.94812 3.51984 2.94812 3.09202 3.16611C2.71569 3.35785 2.40973 3.66381 2.21799 4.04014C2 4.46796 2 5.02802 2 6.14812V7.74812C2 8.86823 2 9.42828 2.21799 9.8561C2.40973 10.2324 2.71569 10.5384 3.09202 10.7301C3.51984 10.9481 4.0799 10.9481 5.2 10.9481ZM5.2 22.9481H18.8C19.9201 22.9481 20.4802 22.9481 20.908 22.7301C21.2843 22.5384 21.5903 22.2324 21.782 21.8561C22 21.4283 22 20.8682 22 19.7481V18.1481C22 17.028 22 16.468 21.782 16.0401C21.5903 15.6638 21.2843 15.3579 20.908 15.1661C20.4802 14.9481 19.9201 14.9481 18.8 14.9481H5.2C4.07989 14.9481 3.51984 14.9481 3.09202 15.1661C2.71569 15.3579 2.40973 15.6638 2.21799 16.0401C2 16.468 2 17.028 2 18.1481V19.7481C2 20.8682 2 21.4283 2.21799 21.8561C2.40973 22.2324 2.71569 22.5384 3.09202 22.7301C3.51984 22.9481 4.0799 22.9481 5.2 22.9481Z",

        content:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron.",
      },
    ];
  return (
    <main className={` bg-secondary ${inter.className} pt-[4%] px-[15%]`}>
      <Text content={"lorem ipsum dolor set"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsDetailsOne?.map((ele, ind) => {
          return (
            <div key={ind} className="flex justify-center">
              <Card
                subHeading={ele?.subHeading}
                content={ele?.content}
                svgPath={ele?.svgPath}
              />
            </div>
          );
        })}
      </div>
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsDetailsFour?.map((ele, ind) => {
          return (
            <div key={ind} className={`flex justify-center `}>
              <Card
                subHeading={ele?.subHeading}
                content={ele?.content}
                svgPath={ele?.svgPath}
                image={ele.image}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

