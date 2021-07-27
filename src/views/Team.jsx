import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { searchHero } from '../axios/heroAxios'
import SuperCard from '../components/SuperCard'
import SuperTeams from '../components/SuperTeams'

const Team = () => {
    const [heroes, setHeroes] = useState()
    const [selectedHero, setSelectedHero] = useState()
    const [team, setTeam] = useState([])
    const [teamSaved, setTeamSaved] = useState(false)
    const [repeatedHero, setRepeatedHero] = useState(false)
    const [focused, setFocused] = useState(false)


    useEffect(() => {
        if(localStorage.teamMaker && JSON.parse(localStorage.teamMaker).heroes) {
            setTeam(JSON.parse(localStorage.teamMaker).heroes)
        }
    }, [])

    const HandleChange = (e) => {
        var characterCount = e.target.value.length

        if (characterCount < 3) {
        }
        setHeroes(null)

        if (characterCount >= 3) {
            (async () => {
                setHeroes(await searchHero(e.target.value))
            })()
        }
    }

    const HandleMouseDown = (hero) => {
        setSelectedHero(hero)
    }

    const AddToTeam = (hero) => {
        setTeamSaved(false)
        setRepeatedHero(false)

        if (localStorage.teamMaker && JSON.parse(localStorage.teamMaker).heroes.length > 0) {
            var jsonTeamMaker = JSON.parse(localStorage.teamMaker) 

            var repeated = false
            jsonTeamMaker.heroes.forEach((ch) => {
                if (ch.id === hero.id) {
                    setRepeatedHero(true)
                    repeated = true
                }
            })

            if (!repeated && jsonTeamMaker.heroes.length < 6) {
                jsonTeamMaker.heroes.push(hero)
                localStorage.setItem("teamMaker", JSON.stringify(jsonTeamMaker))
            }
        }
        else {
            localStorage.setItem("teamMaker", JSON.stringify({
                "heroes": [ hero ]
            }))
        }

        setTeam(JSON.parse(localStorage.teamMaker).heroes)
    }

    const SaveTeam = () => {
        if (localStorage.teams) {
            let teamsJson = JSON.parse(localStorage.teams)
            teamsJson.push(team)

            localStorage.setItem("teams", JSON.stringify(teamsJson))
            
        } else {
            localStorage.setItem("teams", JSON.stringify([team]))
        }

        localStorage.removeItem("teamMaker")
        setTeam([])
        setTeamSaved(true)
    }

    return (
        <>
            <div className="form-group row">
              <input className="form-control border-danger w-100"  type="search" onBlur={() => setFocused(false)} onFocus={() => setFocused(true)} placeholder="Search your hero..." onChange={HandleChange}/>
            </div>

            {heroes?
            focused?
            <ul className="position-relative list-group">
                <div className="position-absolute w-100">
                {heroes.results? 
                    heroes.results.map(hero => (
                        <li className="list-group-item  sticky-top"  key={hero.id} action onMouseDown={ () => HandleMouseDown(hero)}>
                            {hero.name}&nbsp;
                            <span className="badge badge-pill badge-secondary  ">
                                        {hero.biography.alignment}
                            </span>
                            </li>
                    )) : 
                    <div>No results</div>
            }
            </div>
            </ul> 
            : <></>
            : <></>
            }
            {selectedHero ?
            <div> 
                <SuperCard hero={selectedHero} /> 
                <button className="btn-primary w-100" onClick={() => AddToTeam(selectedHero)}>Add to team</button>
                {repeatedHero ? <div className="alert alert-danger" role="alert">This hero already exist in your team, choose an other one :)!</div> : 
                "" } 

            </div>
            : <></> 
            }
        
        {team && team.length > 0 ? 
        
        <div>
            <SuperTeams team={team}/>
            
            <button className="btn btn-danger w-100" disabled={team.length > 5 ? false : true} onClick={SaveTeam}>SAVE MY TEAM</button>

        </div>
        : ""
        }
            {teamSaved ? <div className="alert alert-warning" role="alert">Congratulations! Your team was already  saved! <Link to="/">View my teams</Link></div> : ""}
        
        </>
   )
}



export default Team;
