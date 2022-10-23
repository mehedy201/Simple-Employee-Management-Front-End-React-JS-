import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditEmployee = () => {
    // Use Navigate hooks form React
    const navigate = useNavigate();

    // Handle form Update Button
    const handleUpdateEmployeeButton = () => {
        navigate('/')
    }

    return (
        <div className='page_margin_top'>
            <h2 className='page_title'>Edit Employee</h2>
            <form onSubmit={handleUpdateEmployeeButton} className="form_css">
                {/* First Name ------------- */}
                <p className='input_label'>First Name</p>
                <input className='form_input' type="text" defaultValue={'Demo First Name'} />
                {/* Last Name ------------- */}
                <p className='input_label'>Last Name</p>
                <input className='form_input' type="text" defaultValue={'Demo First Name'} />
                {/* Email Name ------------- */}
                <p className='input_label'>Email address</p>
                <input className='form_input' type="email" defaultValue={'demo@gamil.com'} />
                <button className='block form_button' type='submit'>Update</button>
            </form>
        </div>
    );
};

export default EditEmployee;