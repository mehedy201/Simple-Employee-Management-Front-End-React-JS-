import React from 'react';
import './EmployeeList.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEditAlt, BiDetail } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const EmployeeLIst = () => {
    // useNavigate hook form react
    const navigate = useNavigate()

    // Navigate to add Employee page
    const navigateAddEmployee = () => {
        navigate('/add-employee')
    }
    // Navigate to Edit Employee page
    const navigateEditEmployeePage = () => {
        navigate('/edit-employee')
    }
    // Navigate to Employee detail page
    const navigateEmployeeDetailsPage = () => {
        navigate('/employee-details')
    }
    // Delete Employee
    const deleteEmploye = () => {
        console.log('Delete User')
    }
    return (
        <div className='page_margin_top h-screen'>
            <h2 className='page_title'>Employee List</h2>
            <button onClick={navigateAddEmployee} className='employee_list_page_button flex justify-center items-center'><AiOutlinePlus className='plus_icon' />Add new employee</button>
            <div>
                <table className='w-full mt-4 justify-start'>
                    <thead  className='border-b'>
                        <tr>
                          <th className='w-3/12'><p className='table_title'>First Name</p></th>
                          <th className='w-3/12'><p className='table_title'>Last Name</p></th>
                          <th className='w-3/12'><p className='table_title'>Email</p></th>
                          <th className='w-3/12'><p className='table_last_item'>Action</p></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                          <td className='td_padding table_content'>Mehedi</td>
                          <td className='td_padding table_content'>Hasan</td>
                          <td className='td_padding table_content'>demo11@gmail.com</td>
                          <td className='td_padding flex'>
                              <button onClick={navigateEditEmployeePage} className='employee_list_btn flex'>Edit <BiEditAlt className='employee_list_table_icon'/></button>
                              <button onClick={navigateEmployeeDetailsPage} className='employee_list_btn flex'>Details <BiDetail className='employee_list_table_icon'/></button>
                              <label htmlFor="my-modal" className='employee_list_btn_delete flex cursor-pointer'>Delete <RiDeleteBinLine className='employee_list_table_icon'/></label>
                              </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal ----------------------------------------------------------- */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box set_modal_width px-11">
                <h3 className="pop_up_title text-center">Are you sure,you want to delete this employee?</h3>
                <div className="modal-action">
                  <div>
                  <label onClick={deleteEmploye} htmlFor="my-modal" className="modal_button_1 flex justify-center items-center block cursor-pointer">Yes</label>
                  <label htmlFor="my-modal" className="modal_button_2 flex justify-center items-center block cursor-pointer">No</label>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default EmployeeLIst;