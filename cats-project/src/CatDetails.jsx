import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CatDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cat, setCat] = useState(null);

  useEffect(()=>{
    const fetchCat = async () =>{
      const respose = await axios.get(`http://localhost:3000/cats/${id}`);
      setCat(respose.data);
    };
    fetchCat();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCat((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateCat = async () => {
    await axios.put(`http://localhost:3000/cats/${cat.id}`, cat);
    navigate('/');
  };

  const handleDeleteCat = async () => {
    await axios.delete(`http://localhost:3000/cats/${cat.id}`);
    navigate('/');
  };

  if (!cat) return <div>Cat with id {id} is not found</div>;

  return (
    <div className="cat-details">
      <img src={cat.photoUrl} alt={cat.name} className="cat-detail-photo" />
      <div className='cat-info'>
        <p>Name: <input type="text" name="name" value={cat.name} onChange={handleChange} /></p>
        <p>Age: <input type="number" name="age" value={cat.age} onChange={handleChange} /></p>
        <p>Breed: <input type="text" name="breed" value={cat.breed} onChange={handleChange} /></p>
        <button onClick={handleUpdateCat}>Update Cat</button>
        <button onClick={handleDeleteCat}>Delete Cat</button>
      </div>
    </div>
  );
};

export default CatDetails;