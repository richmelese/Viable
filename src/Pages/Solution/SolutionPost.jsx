import React from "react";
import "../../Styles/solution/solutionpost.css";
import Picture from "../../assets/post.png";
const SolutionPost = () => {
  return (
    <div>
      <section>
        <div className="Post__container">
          <h1>Read More Post</h1>
        </div>
        {/* ========All post========= */}
        <div className="content__post">
          <div>
            <div class="card">
              <div class="container">
                <img src={Picture} alt="" />
                <h4>How to Reduce Checkout Abandonment for more Conversions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card">
              <div class="container">
                <img src={Picture} alt="" />
                <h4>How to Reduce Checkout Abandonment for more Conversions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card">
              <div class="container">
                <img src={Picture} alt="" />
                <h4>How to Reduce Checkout Abandonment for more Conversions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPost;
