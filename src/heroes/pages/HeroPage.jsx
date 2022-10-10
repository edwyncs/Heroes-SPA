import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const {heroId} = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]); 
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1)
  }

  if(!hero){
    return <Navigate to='/marvel'/>
  }

  return (
    <div className="container-fluid">
      <div className="row mt-5 animate__animated animate__fadeInLeft">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className="img img-fluid rounded-4 "/>
        </div>

        <div className="col-12 col-md-8 d-flex justify-content-center align-items-start">
          <div className="row col-12 col-lx-11">
            <h3 className="mb-5 mt-5 mt-md-0">{hero.superhero}</h3>
            <ul className="list-group mb-5">
              <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
              <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
              <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
            </ul>

            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>
            <button className="btn btn-outline-primary mt-5 mb-5" onClick={onNavigateBack}>
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};