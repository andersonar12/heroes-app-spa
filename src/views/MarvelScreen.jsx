import { HeroList } from "../components/HeroList.jsx";

export const MarvelScreen = () => {
  return (
    <div className="animate__animated animate__fadeInRightBig row">
      <div className="col">
        <h1>Marvel Comics</h1>
        <HeroList publisher={"Marvel Comics"} />
      </div>
    </div>
  );
};
