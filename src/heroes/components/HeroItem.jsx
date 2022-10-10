import { Link } from "react-router-dom";

export const HeroItem = ({id, superhero, publisher, alter_ego, first_appearance, characters, search}) => {
    const heroImageUrl = `./assets/heroes/${ id }.jpg`;
  return (
    <div className={`col-12 col-sm-6 col-xl-4 col-lg-4 d-flex flex-wrap animate__animated animate__fadeIn ${search && 'flex'}`}>

        <div className="card mb-5 rounded-3">
            <div className="row g-0 h-100 justify-content-center justify-content-sm-center justify-content-md-start">

                <div className="card-image col-10 col-sm-10 col-md-5 align-self-center">
                    <img src={heroImageUrl} alt={superhero} className="img img-raised img-fluid rounded-3" />
                </div>
                <div className="col-md-6">
                    <div className="card-body h-100 d-flex flex-column justify-content-around">
                        <h5 className="card-title mb-2 mb-md-0">{superhero}</h5>
                        <p className="card-text mb-3 mb-md-0">{alter_ego}</p>
                        {
                            (alter_ego !== characters) && (<p className="mb-0 d-none d-lg-block ">{characters}</p>)
                        }
                        <p className="card-text mb-3 mb-md-0">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <div>   

                            <Link to={`/hero/${id}`} className="mb-2 mb-md-0 btn btnr btn-sm">
                                <i className="btn-icon fa fa-arrow-right"></i>Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};