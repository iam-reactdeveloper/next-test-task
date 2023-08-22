import { Card, Text } from "../../components";
import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const TopContainer = () => {
  // const [isHovering, setIsHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardsDetailsOne = [
    {
      subHeading: "Lorem Ipsum",
      svgPath:
        "M19 21.9481V15.9481M16 18.9481H22M12 15.9481H8C6.13623 15.9481 5.20435 15.9481 4.46927 16.2526C3.48915 16.6586 2.71046 17.4373 2.30448 18.4174C2 19.1525 2 20.0844 2 21.9481M15.5 4.23888C16.9659 4.83227 18 6.26943 18 7.94812C18 9.62681 16.9659 11.064 15.5 11.6574M13.5 7.94812C13.5 10.1573 11.7091 11.9481 9.5 11.9481C7.29086 11.9481 5.5 10.1573 5.5 7.94812C5.5 5.73898 7.29086 3.94812 9.5 3.94812C11.7091 3.94812 13.5 5.73898 13.5 7.94812Z",
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

    {
      image: "/images/image1.jpg",
    },
  ];
  const cardsDetails2 = {
    subHeading: "Lorem Ipsum Lorem Ipsum",
    svgPath:
      "M6 6.94812H6.01M6 18.9481H6.01M5.2 10.9481H18.8C19.9201 10.9481 20.4802 10.9481 20.908 10.7301C21.2843 10.5384 21.5903 10.2324 21.782 9.8561C22 9.42828 22 8.86823 22 7.74812V6.14812C22 5.02802 22 4.46796 21.782 4.04014C21.5903 3.66381 21.2843 3.35785 20.908 3.16611C20.4802 2.94812 19.9201 2.94812 18.8 2.94812H5.2C4.07989 2.94812 3.51984 2.94812 3.09202 3.16611C2.71569 3.35785 2.40973 3.66381 2.21799 4.04014C2 4.46796 2 5.02802 2 6.14812V7.74812C2 8.86823 2 9.42828 2.21799 9.8561C2.40973 10.2324 2.71569 10.5384 3.09202 10.7301C3.51984 10.9481 4.0799 10.9481 5.2 10.9481ZM5.2 22.9481H18.8C19.9201 22.9481 20.4802 22.9481 20.908 22.7301C21.2843 22.5384 21.5903 22.2324 21.782 21.8561C22 21.4283 22 20.8682 22 19.7481V18.1481C22 17.028 22 16.468 21.782 16.0401C21.5903 15.6638 21.2843 15.3579 20.908 15.1661C20.4802 14.9481 19.9201 14.9481 18.8 14.9481H5.2C4.07989 14.9481 3.51984 14.9481 3.09202 15.1661C2.71569 15.3579 2.40973 15.6638 2.21799 16.0401C2 16.468 2 17.028 2 18.1481V19.7481C2 20.8682 2 21.4283 2.21799 21.8561C2.40973 22.2324 2.71569 22.5384 3.09202 22.7301C3.51984 22.9481 4.0799 22.9481 5.2 22.9481Z",

    content:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
  };

  const cardsDetails3 = [
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
      image: "/images/image2.jpg",
    },
    {
      subHeading: "Lorem Ipsum",
      svgPath:
        "M6 6.94812H6.01M6 18.9481H6.01M5.2 10.9481H18.8C19.9201 10.9481 20.4802 10.9481 20.908 10.7301C21.2843 10.5384 21.5903 10.2324 21.782 9.8561C22 9.42828 22 8.86823 22 7.74812V6.14812C22 5.02802 22 4.46796 21.782 4.04014C21.5903 3.66381 21.2843 3.35785 20.908 3.16611C20.4802 2.94812 19.9201 2.94812 18.8 2.94812H5.2C4.07989 2.94812 3.51984 2.94812 3.09202 3.16611C2.71569 3.35785 2.40973 3.66381 2.21799 4.04014C2 4.46796 2 5.02802 2 6.14812V7.74812C2 8.86823 2 9.42828 2.21799 9.8561C2.40973 10.2324 2.71569 10.5384 3.09202 10.7301C3.51984 10.9481 4.0799 10.9481 5.2 10.9481ZM5.2 22.9481H18.8C19.9201 22.9481 20.4802 22.9481 20.908 22.7301C21.2843 22.5384 21.5903 22.2324 21.782 21.8561C22 21.4283 22 20.8682 22 19.7481V18.1481C22 17.028 22 16.468 21.782 16.0401C21.5903 15.6638 21.2843 15.3579 20.908 15.1661C20.4802 14.9481 19.9201 14.9481 18.8 14.9481H5.2C4.07989 14.9481 3.51984 14.9481 3.09202 15.1661C2.71569 15.3579 2.40973 15.6638 2.21799 16.0401C2 16.468 2 17.028 2 18.1481V19.7481C2 20.8682 2 21.4283 2.21799 21.8561C2.40973 22.2324 2.71569 22.5384 3.09202 22.7301C3.51984 22.9481 4.0799 22.9481 5.2 22.9481Z",

      content:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron.",
    },
  ];

  const imageStyleWithOutHover = {
    borderRadius: "50%",
    marginTop: "70px",
    marginLeft: "20px",
    cursor: "pointer",
  };

  return (
    <main
      className={`min-h-screen bg-secondary overflow-hidden ${inter.className} mb-[10%] px-[15%] z-[0]`}
    >
      <div style={{ padding: "20px 0px 20px 0px" }}>
        <Text content="lorem ipsum" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsDetailsOne?.map((ele, ind) => {
          return (
            <div key={ind} className="flex justify-center">
              <Card
                image={ele?.image}
                subHeading={ele?.subHeading}
                content={ele?.content}
                svgPath={ele?.svgPath}
              />
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex justify-centern col-start-3">
          <Card
            subHeading={cardsDetails2?.subHeading}
            content={cardsDetails2?.content}
            svgPath={cardsDetails2?.svgPath}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsDetails3?.map((ele, ind) => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="flex justify-center w-1/2">
          <div className="w-1/2">
            <Text content="About Us" />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div
            className="w-1/2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={"/images/image3.jpg"}
              alt="here is image "
              width={410}
              height={410}
              className=""
              style={imageStyleWithOutHover}
            />
            {isHovered && (
              <div
                className="overlay"
                style={{
                  background: `rgba(0, 0, 0, 0.5) url("/images/image3full.jpg") no-repeat center`,
                  backgroundSize: "contain",
                  width: "80%",
                  height: "80%",
                  position: "fixed",
                  zIndex: "10000",
                  top: "0",
                  left: "0",
                  cursor: "zoom-out",
                }}
              />
            )}
          </div>
        </div>

        <p className="primary-500 text-base opacity-70 w-full text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
};
