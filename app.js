const Person = function (props) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      {
        className: "title",
      },
      "React IS rendered"
    ),
    React.createElement(
      Person,
      {
        name: "Yihua",
        occupation: "instructor",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Andrei",
        occupation: "Lead instructor",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Emily",
        occupation: "teacher",
      },
      null
    ),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
