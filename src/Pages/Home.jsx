import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="hero min-vh-100 py-5 " id="hero">
        <div className="container">
          <div className="row d-flex align-items-center ">
            <div className="col-lg-6 col-md-12">
              <h1 className="display-6 font-bold mt-5  mb-5">
                Bite The World of Cheesecake Wonders
              </h1>
              <span className="mt-5 pt-5 mb-5">
                We always make our customer happy by providing <br /> as many
                choices as possible{" "}
              </span>

               <div className="col-lg-6 col-md-12 d-flex d-lg-none">
              <img
                src="/src/assets/img/Heroimage.svg"
                alt="cake"
                className="w-100 h-100"
              />
            </div>


              <div className="d-flex btns mt-2 mt-lg-5">
                <Link className="rounded-pill text-bold w-auto p-3 px-5 text-center"> Get Started</Link>
                <Link className="watch rounded-pill text-bold w-auto p-3 px-3 text-center w-lg-25">
                  {" "}
                  Watch Demo &nbsp; <FaCirclePlay />{" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-lg-flex d-none">
              <img
                src="/src/assets/img/Heroimage.svg"
                alt="cake"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="About" id="about">
        <div className="container">
          <div className="row d-flex align-items-center gx-5">
            <div className="col-lg-6 col-md-12">
              <img
                src="/src/assets/img/AboutUs.svg"
                alt="cake2"
                className="h-100 w-100"
              />
            </div>

            <div className="col-lg-6 col-md-12">
              <h1>We Love CheeseCake🍰</h1>
              <span className="mt-2 font-bold">
                Discover Our Cheesecake Story
              </span>

              <div className="mt-5 mb-5">
                <p>
                  At Cheesecake Love, quality is our cornerstone. Each
                  cheesecake is crafted with the finest ingredients, meticulous
                  attention to detail, and a dash of creativity.{" "}
                </p>

                <p className="mt-5">
                  We believe in delivering not just desserts but moments of
                  sheer indulgence.
                </p>
              </div>

              <div className="read-btn rounded-pill w-25 p-3 px-3">
              <Link className=" rounded-pill  text-bold  w-auto">
                Read More
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
