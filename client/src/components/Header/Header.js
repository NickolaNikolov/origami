import style from './Header.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
        <ul>
            <li className="listItem"><img src="/white-origami-bird.png" alt="white origami"/></li>
            {/* <Link to="/"><NavigationItem>Home</NavigationItem></Link>
            <Link to="/about"><NavigationItem>About</NavigationItem></Link>
            <Link to="/contact-us"><NavigationItem>Contact Us</NavigationItem></Link>
            <Link to="/about/pesho"><NavigationItem>Going to 4</NavigationItem></Link>
            <Link to="/about/gosho"><NavigationItem>Going to 5</NavigationItem></Link>
            <Link to="/about/stamat"><NavigationItem>Going to 6</NavigationItem></Link>
            <Link to="/about/malinka"><NavigationItem>Going to 7</NavigationItem></Link>
            <Link to="/about/miro"><NavigationItem>Going to 8</NavigationItem></Link>
            <Link to="/about/izrael"><NavigationItem>Going to 9</NavigationItem></Link>
            <Link to="/about/isus"><NavigationItem>Going to 10</NavigationItem></Link>
            <Link to="/about/nikola"><NavigationItem>Going to 11</NavigationItem></Link> */}

            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/contact-us"><NavigationItem>Contact Us</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/pesho"><NavigationItem>Going to 4</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/gosho"><NavigationItem>Going to 5</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/stamat"><NavigationItem>Going to 6</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/malinka"><NavigationItem>Going to 7</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/miro"><NavigationItem>Going to 8</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/izrael"><NavigationItem>Going to 9</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/isus"><NavigationItem>Going to 10</NavigationItem></NavLink>
            <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/nikola"><NavigationItem>Going to 11</NavigationItem></NavLink>
        </ul>
      </nav>
    );
};

export default Header;