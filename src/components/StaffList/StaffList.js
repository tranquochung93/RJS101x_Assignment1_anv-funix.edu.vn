import React from 'react'
import './StaffList.css'
import { useState } from 'react'
import { STAFFS } from '../../const/staffs';
import { DEPARTMENTS } from '../../const/staffs';
import dateFormat from 'dateformat'; 
function StaffList() {

    let [selectStaff, setSelectStaff] = useState(null)

    const handleClick = (id) => {
        setSelectStaff(STAFFS[id])
    }

    return (
        <div>
            <div className="heading">
                <h1>ỨNG DỤNG QUẢN LÝ STAFFS</h1>
            </div>
            <div className="name ">
                {STAFFS.map(staff => (
                    <div className="list"
                        key={staff.id}
                        onClick={() => handleClick(staff.id)}
                    >
                         {staff.name}
                       
                    </div>
                ))}
            </div>
            <div id="result">
                {selectStaff && (
                    <ul>
                        <li>HỌ VÀ TÊN:{selectStaff.name}</li>
                        <li>NGÀY SINH:{dateFormat(selectStaff.doB, "dd/mm/yyyy")}</li>
                        <li>NGÀY VÀO CÔNG TY:{dateFormat(selectStaff.startDate, "dd/mm/yyyy")}</li>
                        <li> PHÒNG BAN:{selectStaff.department.name} </li>
                        <li>SỐ NGÀY NGHỈ CÒN LẠI:{selectStaff.annualLeave}</li>
                        <li>SỐ NGÀY ĐÃ LÀM THÊM:{selectStaff.overTime}</li>
                    </ul>
                )}
            </div>
        </div >
    )
}

export default StaffList
