
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddSeller = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
    
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://booking-app-server-green.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddSeller = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = ` https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const seller = {
                    name: data.name, 
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }

                // save seller information to the database
                fetch('https://booking-app-server-green.vercel.app/sellers', {
                    method:'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(seller)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/managesellers')
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=' w-96 ml-14'>
            <h2 className="text-4xl mb-5 mt-5 font-bold">Add A Seller</h2>
            <form className='bg-base-100 p-5' onSubmit={handleSubmit(handleAddSeller)}>
                <div className="form-control w-full  m-auto">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full  m-auto">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full " />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full  m-auto">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select 
                    {...register('specialty')}
                    className="select input-bordered w-full ">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                        
                        
                    </select>
                </div>
                <div className="form-control w-full  m-auto">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full  mt-4' value="Add seller" type="submit" />
            </form>
        </div>
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddSeller;