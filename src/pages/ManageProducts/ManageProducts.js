import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect( () => {
       fetch('http://localhost:5000/service')
       .then(res => res.json())
       .then(data => setUsers(data))
    },[])
 
    const handleDelete = id => {
        const yes = window.confirm('are sure delete')
        if(yes){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               const remaning = users.filter(user => user._id !== id)
               setUsers(remaning)
            })
        }
    }
//   update comonet id 
    const handleUpdateProduct = id => {
        navigate(`/update/product/${id}`)
    }

    return (
        <div className='container'>
            <h2>user {users.length}</h2>
            <div className="row g-5">
                {
                    users.map(user => <div className='col-md-4'>
                       <div className="border p-3">
                       <img className='img-fluid rounded' src={user.img} alt="" />
                        <h3>name: {user.name}</h3>
                        <p><small>{user.description}</small></p>
                        <h4>price: {user.price}</h4>
                        <p>quantity: {user.quantity}</p>
                         <button onClick={()=> handleDelete(user._id)} className='btn btn-danger'>Delete</button>
                         <button onClick={()=> handleUpdateProduct(user._id)} className='btn btn-success ms-3'>Update</button>
                       </div>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;