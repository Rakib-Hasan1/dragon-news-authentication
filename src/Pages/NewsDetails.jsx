import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useLoaderData, useParams } from "react-router";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
    const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find(SingleNews=> SingleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto py-5 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold text-xl mb-4">Dragon News</h2>

          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
