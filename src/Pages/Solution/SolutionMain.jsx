import React from "react";
import "../../Styles/solution/solutionmain.css";
import SolutionBanner from "../../assets/solutionBanner.png";
import Banner from "../../assets/Bcontact-three.png";
const SolutionMain = () => {
  return (
    <div>
      <section>
        <div
          className="solutionbanner__background"
          style={{
            backgroundImage: `url(${SolutionBanner})`,
          }}
        ></div>
        {/* ==============White Section============= */}
        <div className="solution__container">
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          </div>
          {/* Main  */}
          <div className="solution-main">
            <div></div>
            <div>
              <p>Luke Matthews l November 8, 2021</p>
              <h2>This is a blog post headline</h2>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </h6>
              <h6>
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante. Maecenas sodales tristique quam. Suspendisse
                fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis
                leo varius laoreet sed mollis dui. Aenean placerat nec enim ut
                finibus. Maecenas suscipit nibh eu neque egestas, non
                condimentum mi bibendum. Sed est eros, molestie consectetur
                auctor non, lobortis quis tortor. Nam cursus imperdiet massa
                volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
                tincidunt. Etiam pellentesque metus vel enim iaculis aliquam.
                Mauris at nisi sed elit gravida malesuada.
              </h6>
              {/*  */}
              <h2>This is a small blog post headline</h2>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </h6>
              <h6>
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante. Maecenas sodales tristique quam. Suspendisse
                fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis
                leo varius laoreet sed mollis dui. Aenean placerat nec enim ut
                finibus. Maecenas suscipit nibh eu neque egestas, non
                condimentum mi bibendum. Sed est eros, molestie consectetur
                auctor non, lobortis quis tortor. Nam cursus imperdiet massa
                volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
                tincidunt. Etiam pellentesque metus vel enim iaculis aliquam.
                Mauris at nisi sed elit gravida malesuada.
              </h6>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionMain;
