import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import LoadingEffect from "../Components/LoadingEffect";

const HomeLayout = () => {
  const {state} = useNavigation();
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto my-4">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto my-4">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
         {state == "loading" ? <LoadingEffect></LoadingEffect> : <Outlet></Outlet> } 
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
