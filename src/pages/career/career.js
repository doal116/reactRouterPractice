import {
    useLoaderData
} from 'react-router-dom';

export default function Career() {
    const career = useLoaderData();
    return (
        <div className='Career'>
            <h1>{career.title}</h1>
            <p>Salary:{career.salary}</p>
            <p>Location:{career.location}</p>
            <p>Description:{career.description}</p>
        </div>
    )
}

export const careerLoader = async ({ params }) => {
    const { id } = params;
    const career = await fetch('http://localhost:4000/careers/' + id);
    if(!career.ok){
        throw Error('could not find career');
    }
    return career.json();
}