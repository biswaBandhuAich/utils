import React from "react";

function About(props) {
  return (
    <>
      <div className="container my-5 text-center">
        <h2
          style={
            props.mode === "dark"
              ? {
                  color: "white",
                }
              : {
                  color: "black",
                }
          }
        >
          About the App
        </h2>
      </div>
      <div className="container">
        <div className="accordion" id="accordionPanelsStayOpenExample1">
          <div
            className="accordion-item"
            style={
              props.mode === "dark"
                ? { backgroundColor: "rgb(6, 35, 81)", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <h2 className="accordion-header">
              <button
                style={
                  props.mode === "dark"
                    ? { backgroundColor: "rgb(77 73 154)", color: "white" }
                    : { backgroundColor: "white", color: "black" }
                }
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsezero"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapsezero"
              >
                <strong>About Me & The Project</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsezero"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Welcome to the All Utility app! I a Biswa a Fullstack developer
                with knowledge in JAVA and some of its framework, REACT and
                recently I gained interest in learning GO lang and explore the
                world of WEB3 and currently I am exploring the same. I am
                passionate about creating useful tools to make life easier. Here
                in this app I have merged all the projects I used to build in
                vanila JS and HTML / CSS in the beginning of my journey as a
                Software devloper. Thank you for visiting our website. We hope
                you find our tools useful and we welcome your feedback and
                suggestions for new tools or features.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={
              props.mode === "dark"
                ? { backgroundColor: "rgb(6, 35, 81)", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <h2 className="accordion-header">
              <button
                style={
                  props.mode === "dark"
                    ? { backgroundColor: "rgb(77 73 154)", color: "white" }
                    : { backgroundColor: "white", color: "black" }
                }
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <strong>Text Utility</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Text utility tool offers a variety of useful functions to help
                you work with text. Whether you need to format your text, count
                characters or words, or convert text to lowercase or uppercase,
                our tool has got you covered.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={
              props.mode === "dark"
                ? { backgroundColor: "rgb(6, 35, 81)", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <h2 className="accordion-header">
              <button
                style={
                  props.mode === "dark"
                    ? { backgroundColor: "rgb(77 73 154)", color: "white" }
                    : { backgroundColor: "white", color: "black" }
                }
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <strong>Date Utility</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Need to work with dates? Our date utility tool offers a range of
                functions to help you manipulate and format dates. Whether you
                need to calculate the difference between two dates, format a
                date in a specific way, or convert between different date
                formats, our tool can help.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={
              props.mode === "dark"
                ? { backgroundColor: "rgb(6, 35, 81)", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <h2 className="accordion-header">
              <button
                style={
                  props.mode === "dark"
                    ? { backgroundColor: "rgb(77 73 154)", color: "white" }
                    : { backgroundColor: "white", color: "black" }
                }
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <strong>News</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Stay up-to-date with the latest news and headlines from around
                the world. Our news section features articles from reputable
                sources, covering a wide range of topics including politics,
                business, entertainment, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
