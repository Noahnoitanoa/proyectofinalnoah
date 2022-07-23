import { navBarlist } from '../../helpers/navbarlist';
import { NavLink } from 'react-router-dom';

const Menu = () =>{

    return(
        <nav>
            <div className='categories'>
                {navBarlist.map(navBarlist => <NavLink to={`categoria/${navBarlist.category}`} key={navBarlist.id} className={({ isActive }) => isActive ? 'ActiveCategory' : '' } >{navBarlist.category }</NavLink>)} 
            </div>
        </nav>
    )
}

export default Menu