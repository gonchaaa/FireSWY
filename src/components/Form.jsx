import React, { useState } from 'react';
import '../index.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let tempErrors = {};
    tempErrors.fullName = data.fullName ? "" : "Xananı doldurun.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email) ? "" : "Email düzgün daxil edilməyib.";
    tempErrors.phone = data.phone.length > 9 ? "" : "Xananı düzgün doldurun doldurun.";
    tempErrors.city = data.city ? "" : "Xananı doldurun.";
    return tempErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = validate(formData);
    setErrors(tempErrors);
    const isComplete = !Object.values(tempErrors).some(x => x !== '');
    if (isComplete) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: ''
      }); 
    }
  };

  return (
    <div className='w-full flex justify-center items-center pb-10 min-h-[80vh]'>
      <div className='w-[90%] lg:w-[50%] border-[1px] rounded-md border-black p-[20px]'>
        <h5 className='font-medium text-xl text-center'>Qeydiyyat</h5>
        <form onSubmit={handleSubmit} className='flex flex-wrap gap-[30px] mt-10'>
          <input
            className='w-[80%] m-auto border-b-[1px] border-black outline-none'
            type="text"
            name="fullName"
            placeholder="Ad və Soyad"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="w-[80%] m-auto text-red-500 text-xs">{errors.fullName}</p>}
          <input
            className='w-[80%] m-auto border-b-[1px] border-black outline-none'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="w-[80%] m-auto text-red-500 text-xs">{errors.email}</p>}
          <input
            className='w-[80%] m-auto border-b-[1px] border-black outline-none'
            type="number"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="w-[80%] m-auto text-red-500 text-xs">{errors.phone}</p>}
          <input
            className='w-[80%] m-auto border-b-[1px] border-black outline-none'
            type="text"
            name="city"
            placeholder="Yaşadığınız şəhər"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="w-[80%] m-auto text-red-500 text-xs">{errors.city}</p>}
          <button 
            type='submit'
            className={`w-[80%] m-auto rounded-md py-[20px] ${!Object.values(errors).some(x => x) ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'}`}
          >
            Göndər
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
