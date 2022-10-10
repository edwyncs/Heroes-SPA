import { HeroList } from "../components"

export const DcPage = () => {
  return (
  <div className="container-fluid mt-4">
    <h1>DC Comics</h1>
    <hr className="mb-5"/>

    <div className="container-fluid">
      <HeroList publisher="DC Comics"/>
    </div>
  </div>
  );
};