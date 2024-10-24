import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CatList = () => {
  const [cats,setCats] = useState([]);

  useEffect(() =>{
    const fetchCats = async () =>{
      const response = await axios.get(`http://localhost:3000/cats`);
      setCats(response.data);
    };
    fetchCats();
  },[]);

  const handleDeleteCat = async (catId) =>{
    await axios.delete(`http://localhost:3000/cats/${catId}`);
    setCats(cats.filter(cat=>cat.id != catId));
  }


  return (
    <div className="cat-list">
      <h2>Cat List</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id} className="cat-item">
            <Link to={`/cats/${cat.id}`}>
              <img src={cat.photoUrl} alt={cat.name} className="cat-photo" />
              <span>{cat.name}</span>
            </Link>
            <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
          </li>
        ))}
        <Link to="/cats/create" className="create-cat-button">
          Create New Cat
        </Link>
      </ul>
    </div>
  );
};

export default CatList;