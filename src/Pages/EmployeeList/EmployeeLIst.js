import React from 'react';
import './EmployeeList.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEditAlt, BiDetail } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';

const EmployeeLIst = () => {
    return (
        <div className='container employee_page'>
            <h2 className='page_title'>Hi Employee</h2>
            <button className='employee_list_page_button flex justify-center items-center'><AiOutlinePlus className='plus_icon' />Add new employee</button>

            <div>
                <table className='w-full mt-4 justify-start'>
                    <thead  className='border-b'>
                        <tr>
                          <th className='w-3/12 th_padding'>First Name</th>
                          <th className='w-3/12 th_padding'>Last Name</th>
                          <th className='w-3/12 th_padding'>Email</th>
                          <th className='w-3/12 th_padding'>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                          <td className='td_padding table_content'>Mehedi</td>
                          <td className='td_padding table_content'>Hasan</td>
                          <td className='td_padding table_content'>demo11@gmail.com</td>
                          <td className='td_padding flex'>
                              <button className='employee_list_btn flex'>Edit <BiEditAlt className='employee_list_table_icon'/></button>
                              <button className='employee_list_btn flex'>Details <BiDetail className='employee_list_table_icon'/></button>
                              <button className='employee_list_btn_delete flex'>Delete <RiDeleteBinLine className='employee_list_table_icon'/></button>
                              </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeLIst;