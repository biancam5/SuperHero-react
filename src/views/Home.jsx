import {Link} from 'react-router-dom'
import SuperTeams from "../components/SuperTeams"


const Home = () => {

    const superTeams = localStorage.teams ? JSON.parse(localStorage.teams) : {}

    return (
        <>
        {superTeams && superTeams.length > 0 ?
            <div className="container">

                {superTeams.map( (currentTeam, index) => (
                    <div  key={index}>
                        <div className="row">
                            <div className=" h1 mt-3">Team<span className=" badge rounded-pill bg-danger">{index+1}</span></div>
                        </div>
                        <SuperTeams team={currentTeam}/>
                    </div>
                ))}

            </div>

        : <div class="alert alert-success" role="alert">You don´t have any team <Link to="/teammaker">Create a new team</Link></div>
    }
        </>
    )
}

export default Home