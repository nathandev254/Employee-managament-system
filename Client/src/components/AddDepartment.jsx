import React from "react";
import "./AddDepartment.css"; // Import the provided CSS file
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ApiDomain } from "../utils/Domain";

function AddDepartment() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    departmentName: yup.string().required(),
    // Add more validation rules for other fields if needed
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    Axios.post(`${ApiDomain}/departments`, data)
      .then(response => {
        console.log('Data posted successfully:', response.data);
        reset();
        navigate('/ManageDepartments'); // Assuming you have a route for managing departments
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <div className="Add--Department">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Department Name" {...register("departmentName")} />
        {/* Add more input fields for other department details if needed */}
        <input type="text" placeholder="Location" {...register("location")} />
        <input type="text" placeholder="Manager" {...register("manager")} />
        {/* Add more input fields as required */}
        <button className="Submit" type="submit">
          Add Department
        </button>
      </form>
    </div>
  );
}

export default AddDepartment;
