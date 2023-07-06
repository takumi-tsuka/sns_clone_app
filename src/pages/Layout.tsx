import {Outlet,Link} from "react-router-dom";
import NavCompo from "../components/NavCompo";
function Layout(){
    return(
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav> */}
            <NavCompo/>
            <Outlet/>
        </>
    )
}

export default Layout;