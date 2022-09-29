import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParam from "./SearchParam";
import { StrictMode } from "react";
import Details from "./Details";
//import Pet from "./Pet";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        {/* <h1>Adopt Me!</h1> */}
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParam />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

// const App = () => {
//   return (
//     <StrictMode>
//       <div>
//         <h1>Adopt Me!</h1>
//         <SearchParam />
//         {/* <Pet name="Luna" animal="dog" breed="Havanese" />
//       <Pet name="Pepper" animal="bird" breed="Cockatiel" /> */}
//       </div>
//     </StrictMode>
//   );
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

ReactDOM.render(<App />, document.getElementById("root"));
