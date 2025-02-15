import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-5/6 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-semibold mb-3">Dragon News</h1>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to Category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
