import Logo from '../images/Logo.png'
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <>
          <div>
            <Link to={'/'}>
                <figure>
                    <img src={Logo} alt=""/>
                </figure>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Blog</Link>
                    </li>
                </ul>
            </nav>
          </div>
        </>
    )
}