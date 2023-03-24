import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
    const careers = useLoaderData();
    return (
        <div className="Careers">
            {
                careers.map(career =>
                    <div key={career.id}>
                        <Link to={career.id.toString()}>
                            <h2>{career.title}</h2>
                            <p>Salary:{career.salary}</p>
                            <p>Location:{career.location}</p>
                            <p>Description:{career.description}</p>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export const careersLoader = async () => {
    const careers = await fetch('http://localhost:4000/careers');
    if(!careers.ok){
        throw Error('Careers not available.')
    }
    return careers.json();
}