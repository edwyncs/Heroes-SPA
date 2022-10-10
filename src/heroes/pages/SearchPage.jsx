import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { HeroItem } from "../components";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const {searchText, onInputChange} = useForm({
    searchText: q
  });
  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <1 ) return
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <div className="container-fluid mt-4">
      <h1>Search</h1>
      <hr className="mb-5"/>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Search a hero" 
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2 mb-4">
              Search
            </button>
          </form>
        </div>

        <div className="col-12 col-xxl-7">
          <h4>Results</h4>
          <hr className="mb-5"/>
          {
            (q === '')
            ?
            <div className="alert alert-primary">
              Search a hero
            </div>
            : (getHeroesByName(q).length !== 0) 
              ?
              <div className="row align-items-stretch d-flex">
                {getHeroesByName(q).map(hero => <HeroItem key={hero.id} {...hero} search={true}/>)}
              </div>
              :
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
          }
          </div>

      </div>
    </div>
  );
};