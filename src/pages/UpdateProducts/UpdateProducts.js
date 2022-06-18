import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateProducts = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const [users, setUsers] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  /* === update put product ==== */
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/service/${id}`;
    fetch(url, {
      method: "PUt", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log("Success:", result);
      });
  };

  return (
    <div className="d-flex aligns-items-center justify-content-center">
      <div className="w-25 mx-auto border p-2">
        <h4 className="text-success">update product</h4>
        <small>{id}</small>
        <img className="img-fluid" src={users.img} alt="" />
        <h4>Name:- {users.name}</h4>
        <p>
          <small>{users.description}</small>
        </p>
        <h4>price: {users.price}</h4>
        <p>quantity: {users.quantity}</p>
      </div>
      <div className="w-50 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="d-block w-75 my-3 bd-highlight form-control"
            placeholder="your name"
            type="text"
            {...register("name")}
          />
          <input
            className="d-block w-75 my-3 bd-highlight form-control"
            placeholder="Your email"
            type="email"
            {...register("email")}
          />
          <input
            className="d-block w-75 my-3 bd-highlight form-control"
            placeholder="description"
            type="text"
            {...register("description")}
          />
          <input
            className="d-block w-75 my-3 bd-highlight form-control"
            placeholder="price"
            type="number"
            {...register("price")}
          />
          <input
            className="d-block w-75 my-3 bd-highlight form-control"
            placeholder="quantity"
            type="number"
            {...register("quantity")}
          />
          <input
            className="d-block w-75 my-3 bd-highlight form-control"
            placeholder="img-url"
            type="text"
            {...register("img")}
          />

          <input className="btn-dark btn" type="submit" value="AddProduct" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
