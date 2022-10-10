import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <div className="container-fluid mt-4">
      <h1>Marvel Comics</h1>
      <hr className="mb-5"/>

      <div className="container-fluid">
        <HeroList publisher="Marvel Comics"/>
      </div>
    </div>
  )
}