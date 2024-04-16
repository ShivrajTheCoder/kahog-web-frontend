import React from 'react';

export default function Input(props) {
  return (
    <div className='w-full h-fit py-3 flex flex-col'>
        {/* <label className='font-bold text-lg' htmlFor={props.id}>{props.label}</label> */}
        <input 
            className='bg-white rounded-sm py-3 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500' 
            type={props.type} 
            id={props.id} 
            name={props.name} 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange} 
            maxLength={props.maxLength} // Use maxLength prop here
        />
        <p className='text-red-500' >{props.error}</p>
    </div>
  );
}
