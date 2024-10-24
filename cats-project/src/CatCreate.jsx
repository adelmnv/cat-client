import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CatCreate = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const navigate = useNavigate();

    const handleCreateCat = async (e) => {
        e.preventDefault();
        const newCat = { name, breed, age, photoUrl };
        await axios.post('http://localhost:3000/cats/create', newCat);
        console.log('created');
        navigate('/');
    };

    return( 
        <div className="cat-create">
            <h2>Create New Cat</h2>
            <form onSubmit={handleCreateCat}>
                <label>Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>Age:<input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </label>
                <label>Breed:<input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} required />
                </label>
                <label>Photo URL:<input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} required />
                </label>
                <button type="submit">Create Cat</button>
            </form>
        </div>
    );
};

export default CatCreate;