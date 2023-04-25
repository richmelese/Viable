import React from "react";
import "../../Styles/news/newspost.css";
import Swiper from "./Swiper";
const NewsPost = () => {
  return (
    <div>
      <section>
        <div className="post__container">
          <p>All Posts</p>
          <Swiper />
        </div>
      </section>
    </div>
  );
};

export default NewsPost;
