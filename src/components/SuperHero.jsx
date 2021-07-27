import React from 'react' 

const SuperHero = ( {hero} ) => {
    return (
            <div  key={hero.id} className="card  ">
                <div className="row">
                    <div className="col-4">
                        <img className=" img-size" alt ="hero"src={hero.image.url} />
                    </div>
                    <div  className="card-body p-0">
                        <div className="row">
                            <div className="ml-3">
                                <h5 class="card-title">
                                    <span className="h3">{hero.name}&nbsp;
                                    <span className="badge badge-pill badge-primary  ">
                                        {hero.biography.alignment}
                            </span>
                            </span>        
                                    </h5>
                            </div>
                        </div>

                        <div className="container lead">
                                <div><b>Intelligence:</b> {hero.powerstats.intelligence}</div>
                                <div><b>Strength:</b> {hero.powerstats.strength}</div>
                                <div><b>Speed: </b>{hero.powerstats.speed}</div>

                                <div><b>Durability:</b> {hero.powerstats.durability}</div>
                                <div><b>Power:</b> {hero.powerstats.power}</div>
                                <div><b>Combat: </b>{hero.powerstats.combat}</div>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default SuperHero
