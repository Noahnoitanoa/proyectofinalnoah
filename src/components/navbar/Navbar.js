import '../../sass/app.scss'
import { Link } from 'react-router-dom'
import WidgetCart from '../widgetCart/WidgetCart'
import { useContext } from 'react'
import CarritoContext from '../../context/CarritoContext'
import { obtenerCategorias } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'
import Menu from '../menu/Menu'

const Navbar = () => {
  const { carrito } = useContext(CarritoContext)

  const { cargando, data } = useAsync(() => obtenerCategorias(), [])

  return (
    <header>
      <div className="marca">
        <div>
          <img src='https://i.pinimg.com/originals/d2/2a/fd/d22afd46bef16db19fbf16ca9752fa6a.jpg' alt="Logo"></img>
        </div>
        <div>
          <Link to='/'>

            <h1>A todo color </h1>
            <h6>"Tu tienda de productos de manicura"</h6>            
          </Link>
        </div>
      </div>
      <nav>
        <ul className="menu-horizontal">
          { !cargando && <Menu categorias={data} /> }
        </ul>
      </nav>
      <div className="cart">
        { carrito.length > 0 && <WidgetCart />}
      </div>
    </header>
  );
}

export default Navbar
