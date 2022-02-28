import { HeroList } from "../components/HeroList.jsx";

export const DcScreen = () => {
  return (
    <div className="animate__animated animate__fadeInRightBig row">
      <div className="col">
        <h1>DC Comics</h1>
        <HeroList publisher={"DC Comics"} />
      </div>
    </div>
  );
};
