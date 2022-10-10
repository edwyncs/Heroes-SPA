import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context";

export const Navbar = () => {

    const navigate = useNavigate();

    const {user, logout} = useContext(AuthContext);

    const onLogout = () => {
        // console.log('logout');
        logout();
        navigate('/login',{
            replace: true
        })
    };

  return (
    <>
    
        <nav className="navbar navbar-expand-lg navbar-dark p-2">
            <Link className="navbar-brand" to="/">Associations</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>


                <div className="navbar-nav text-nowrap">
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>

                    <div>
                        <button
                            className="nav-item nav-link btn btn-outline-primary p-2"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
};