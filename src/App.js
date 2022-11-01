import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import CategoryChosenOption from "./components/CategoryChosenOption";
import CategoryList from "./components/CategoryList";
import CategoryOption from "./components/CategoryOption";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const categoryOptions = [
    "strategy",
    "hidden-roles",
    "dexterity",
    "push-your-luck",
    "roll-and-write",
    "deck-building",
    "engine-building",
  ];
  const [selectCategoryOption, setCategoryOption] = useState(null);
  const handleClick = (value) => {
    setCategoryOption(value);
  };
  return (
    <div className="App">
      <Header />
      <CategoryChosenOption displayValue={selectCategoryOption} />
      <CategoryList>
        {categoryOptions.map((category, index) => {
          return (
            <CategoryOption key={index + 1} optionVal={category} handleClick={handleClick} />
          );
        })}
      </CategoryList>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/hidden-roles" element={<HiddenRoles />} />
        <Route path="/dexterity" element={<Dexterity />} />
        <Route path="/push-your-luck" element={<PushYourLuck />} />
        <Route path="/roll-and-write" element={<RollAndWrite />} />
        <Route path="/deck-building" element={<DeckBuilding />} />
        <Route path="/engine-building" element={<EngineBuilding />} />
      </Routes>
    </div>
  );
}

export default App;
