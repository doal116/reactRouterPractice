import {
    NavLink, Outlet
} from 'react-router-dom'
import BreadCrum from '../pages/breadCrum'

export default function RootLayout() {
    return (
        <div className='RootLayout'>
            <header>
                <h1>JobHunt</h1>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='aboutUs'>About us</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='careers'>Careers</NavLink>
                </nav>
                <BreadCrum />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>all copyrights@2023 reserved to jobHunt.</p>
            </footer>
        </div>
    )
}