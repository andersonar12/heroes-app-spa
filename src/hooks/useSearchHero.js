import { useState } from "react";
import { heroes } from "../services/heroes.js";

export const useSearchHero = () => {
  const [heroesFiltered, setFilter] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.trim() === "") return;
    setFilter(
      heroes.filter(
        (heroe) =>
          heroe.superhero.toLowerCase().includes(inputValue) ||
          heroe.alter_ego.toLowerCase().includes(inputValue)
      )
    );
    setInputValue("");
  };

  return { heroesFiltered, inputValue, handleInputChange, handleSearch };
};
