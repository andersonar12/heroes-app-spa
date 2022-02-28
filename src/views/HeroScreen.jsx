import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../services/heroes.js";

export const HeroScreen = () => {
  let { id } = useParams();
  const heroe = getHeroesById(id);
  console.log(heroe);

  //Si no consigue el heroe redireccionamos al dashboard
  const navigate = useNavigate();
  useEffect(() => !heroe && navigate(-1), []);
  //Si no consigue el heroe redireccionamos al dashboard

  const { superhero, publisher, alter_ego, first_appearance, characters } = heroe || {};
  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src={require(`../assets/images/${id}.jpg`)}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h2>
          <strong>{superhero}</strong>{" "}
        </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>
        <h3>Characters</h3>
        <p>{characters}</p>
        <button
          className="btn btn-secondary"
          onClick={
            () => navigate(-1) /* con "-1" le indicamos para retroceder a la pagina anterior */
          }
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
