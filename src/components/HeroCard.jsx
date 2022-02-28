import { useNavigate } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  const navigate = useNavigate();
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  return (
    <div
      style={{ cursor: "pointer" }}
      className="card hvr-float"
      onClick={() => navigate(`/dashboard/heroe/${id}`)}
    >
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <img className="card-img" src={require(`../assets/images/${id}.jpg`)} alt={superhero} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">
              {alter_ego} - {first_appearance}
            </p>
            <p>
              <strong>Characters:{characters}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
