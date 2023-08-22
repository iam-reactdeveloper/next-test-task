import { useState } from "react";
import { Header } from "../../container";
import { CloseIcon, MenuIcon } from "../../Icons";
import Link from "next/link";

function NavLink(props: any) {
  const { to, children } = props;
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav(props: any) {
  const { open, setOpen } = props;
  return (
    <div
      className={`bg-[#000]  absolute top-0 left-0 h-screen w-screen  bg-secondary ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center  filter drop-shadow-md h-20">
        <Header />
      </div>
      <div className="flex flex-col ml-4 z-[9999999]">
        <Link
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Lorem
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Ipsum
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-red  px-4 py-4 h-20 items-center ">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Header />
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <CloseIcon/> : <MenuIcon />}
        </div>
      </div>
    </nav>
  );
}
