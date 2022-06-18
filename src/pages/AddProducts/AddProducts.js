import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{ 
    //   console.log(data)
    fetch('http://localhost:5000/service', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
};
  return (
    <div className="w-50 mx-auto bg-muted p-5">
      <h2> ADD PRODUCT FOR USER .. </h2>

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

        <input className="btn-dark btn" type="submit" value="AddProduct"/>
      </form>
    </div>
  );
};

export default AddProducts;
