import React from 'react'
import SuperHero from './SuperHero'

const SuperTeams = ({team}) => {
    return (
        <div>
            <div className="row">
                {team ? 
                team.map(currentHero => (
                    <SuperHero key={currentHero.id} hero={currentHero} />
                )) : "" 
            }

            </div>
        </div>
    )
}

export default SuperTeams
