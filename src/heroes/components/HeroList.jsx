import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroItem } from "./HeroItem";

export const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row h-100 align-items-stretch d-flex">
        {heroes.map(heroe =>(
            <HeroItem key={heroe.id} {...heroe}/>
        ))}
    </div>
  )
}