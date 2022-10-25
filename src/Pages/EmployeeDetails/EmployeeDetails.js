import React from 'react';
import './EmployeeDetails.css'
import { AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const EmployeeDetails = () => {
    // UseNavigate form React hook
    const navigate = useNavigate()

    // Handle add new employee button
    const navigateAddEmployee = () => (
        navigate('/add-employee')
    )

    // Navigate To Employee list page
    const navigateEmployeeList = () => {
        navigate('/')
    }

    // Navigate To Employee list page
    const navigateEmployeeEdit = () => {
        navigate('/edit-employee')
    }
    return (
        <div className='page_margin_top'>
            <h2 className='page_title'>Employee Details</h2>
            <div className='flex mt-6 justify-between header_button_area pb-6'>
                <button onClick={navigateAddEmployee} className='employee_detail_page_button flex justify-center items-center'><AiOutlinePlus className='plus_icon' />Add new employee</button>
                <button onClick={navigateEmployeeList} className='employee_detail_same_button px-2.5 py-3 flex items-center justify-center'>List of employees <AiOutlineUnorderedList className='employe_detail_page_icon' /></button>
            </div>
            <div className='employe_detail_content'>
                <p className='small'>Full Name</p>
                <p className='user_information'>Demo Name</p>
                <p className='small'>Email</p>
                <p className='user_information'>demo@gmail.com</p>
                <button onClick={navigateEmployeeEdit} className='employee_detail_same_button_2 flex items-center justify-center'>Edit Employee <BiEditAlt className='employe_detail_page_icon'/></button>
            </div>
        </div>
    );
};

export default EmployeeDetails;