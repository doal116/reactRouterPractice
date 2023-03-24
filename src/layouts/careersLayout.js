import {
    Outlet
} from 'react-router-dom';

export default function CareerLayout() {
    return (
        <div className='CareerLayout'>
            <h1>Careers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Outlet />
        </div>
    )
}

