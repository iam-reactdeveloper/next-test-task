import { InfiniteScroll } from "../components";
import Navbar from "../components/Navbar/Navbar";
import {
  AccordianSection,
  MiddleContainer,
  TopContainer,
} from "../container";

export default function Home() {
  return (
    <>
      <Navbar />
      <TopContainer />
      <InfiniteScroll />
      <MiddleContainer />
      <AccordianSection />
    </>
  );
}
