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
      <div className="container my-5">
        <div className="accordion " id="accordionPanelsStayOpenExample1">
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
                Welcome to the Utility app! I a Biswa a Fullstack developer with
                knowledge in JAVA and some of its framework, REACT and recently
                I have gained interest in GO lang and explore the world of WEB3.
                I am passionate about creating useful tools to make life easier.
                Here in this app I have merged some of the projects I used to
                build in vanila JS and HTML / CSS in the beginning of my journey
                as a Software devloper. Thank you for visiting the website.
                Although this is not a finished product and is meant for
                creating portfolio, but if you want me to add any feature or fix
                any bugs please write me at biswan8@gmail.com.I hope you find
                these tools useful and I welcome your feedback and suggestions
                for new tools or features.
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
                <strong>Expense Tracker</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                The Expense Tracker feature is perfect for managing your
                personal finances. You can use it to keep track of your
                expenses, set budgets, and monitor your spending. The Expense
                Tracker feature also allows you to categorize your expenses and
                view detailed reports to help you better understand where your
                money is going.
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
