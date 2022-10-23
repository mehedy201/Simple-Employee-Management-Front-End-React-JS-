import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.css'

const AddEmployee = () => {
    // Use Navigate form react hook
    const navigate = useNavigate();

    // Handle Form Function
    const handleAddEmployeeButton = () => {
        navigate('/edit-employee')
    }
    return (
        <div className='page_margin_top'>
            <h2 className='page_title'>Add Employee</h2>
            <form onSubmit={handleAddEmployeeButton} className="form_css">
                {/* First Name ------------- */}
                <p className='input_label'>First Name</p>
                <input className='form_input' type="text" placeholder='Write here' />
                {/* Last Name ------------- */}
                <p className='input_label'>Last Name</p>
                <input className='form_input' type="text" placeholder='Write here' />
                {/* Email Name ------------- */}
                <p className='input_label'>Email address</p>
                <input className='form_input' type="email" placeholder='Email address here' />
                <button className='block form_button' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddEmployee;