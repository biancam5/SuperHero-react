import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHero = () => {

    return (
        <>
            <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                    <div class="navbar-brand  text-black-50"><Link as={Link} className="text-reset text-decoration-none" to="/">HOME</Link></div>
                    <div className="mr-auto">
                        <Link as={Link} className="nav-link  text-white "  to="/teammaker">Make your Hero team</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarHero
