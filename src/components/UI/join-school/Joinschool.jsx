import { useState } from 'react';

const Joinschool = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [schools, setSchools] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Simulated API call or data filtering based on searchTerm
        // Replace this with your actual data fetching logic
        const filteredSchools = [
            { id: 1, name: 'School 1' },
            { id: 2, name: 'School 2' },
            { id: 3, name: 'School 3' },
        ].filter((school) =>
            school.name.toLowerCase().includes(value.toLowerCase())
        );

        setSchools(filteredSchools);
    };

    return (
        <div>
            <h1>School Search</h1>
            <input
                type="text"
                placeholder="Search for a school..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {schools.map((school) => (
                    <li key={school.id}>{school.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Joinschool;
