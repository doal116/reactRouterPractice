import {
    NavLink, Outlet
} from 'react-router-dom';

export default function HelpLayout() {
    return (
        <div className='HelpLayout'>
            <h1>Help section</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button>
                <NavLink to="faq">FAQ</NavLink>
            </button>
            <button>
                <NavLink to="contact">Contacts</NavLink>
            </button>
            <Outlet />
        </div>
    )
}