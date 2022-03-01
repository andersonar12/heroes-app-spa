import { HeroCard } from "../components/HeroCard.jsx";
import { useSearchHero } from "../hooks/useSearchHero.js";

export const SearchScreen = () => {
  const { heroesFiltered, inputValue, handleInputChange, handleSearch } = useSearchHero(); //useSearchHero() custom hook para controlar el form search de heroes de este componente

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Find your hero"
              className="form-control"
            />
            <button type="submit" onClick={() => handleSearch} className="btn btn-secondary mt-3">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          {heroesFiltered.length > 0 ? (
            heroesFiltered.map((hero) => <HeroCard key={hero.id} hero={hero} />)
          ) : (
            <strong>No hay resultados...</strong>
          )}
        </div>
      </div>
    </div>
  );
};
