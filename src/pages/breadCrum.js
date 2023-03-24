import {
    Link,
    useLocation
} from 'react-router-dom';

export default function BreadCrum() {
    const path = useLocation();
    let currentLink = '';
    const crumbs = path.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <Link key={crumb} to={currentLink}> &gt; {crumb}</Link>
            )
        })
    return (
        <div className='Crums'>
            {crumbs}
        </div>

    )
}