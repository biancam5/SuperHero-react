import React from 'react'
  
const HeroCard = ( {hero} ) => { 
    return (
        <div className="card ">
            <div className="row">
                    <img className=" img-size m-3 "alt="hero" src={hero.image.url} />
                </div>
                    <div  className="card-body ">
                        <div className="row">
                            <div className="card-title text-danger"><div className="h1">{hero.name}</div></div>
                            <div className="container lead">
                                    <div className="display-6">Powerstats</div>
                                    <div>Intelligence: {hero.powerstats.intelligence}</div>
                                    <div>Strength: {hero.powerstats.strength}</div>
                                    <div>Speed: {hero.powerstats.speed}</div>
                                    <div>Durability: {hero.powerstats.durability}</div>
                                    <div>Power: {hero.powerstats.power}</div>
                                    <div>Combat: {hero.powerstats.combat}</div>
                                    <div className="display-6">Appearance</div>
                                    <div>Gender: {hero.appearance.gender}</div>
                                    <div>Race: {hero.appearance.race}</div>
                                    <div>Height: {hero.appearance.height[1]}</div>
                                    <div>Alignment: {hero.biography.alignment}</div>                     
                           </div>

                        </div>
                    </div>
            </div>

    )
}

export default HeroCard
