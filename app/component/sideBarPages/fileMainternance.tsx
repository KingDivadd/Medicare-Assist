'use client'
import React,{useState, useEffect} from 'react'


const FileMaintenance = () => {
    const [clickedBtn, setClickedBtn] = useState('documents')

    return (
        <div className="cont-side-bar-right w-[80%] flex items-start justify-center">
            <div className="w-full flex flex-col items-center justify-start gap-3 py-2 pr-2 pl-1 bg-white h-full">
                <span className="w-full bg-white flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 ">
                    <button type="button" onClick={()=>{setClickedBtn('client-info')}} className={clickedBtn === 'client-info'? "active-payment-btn " : "payment-btn"}>Client Info</button>
                    <button type="button" onClick={()=>{setClickedBtn('users')}} className={clickedBtn === 'users'? 'active-payment-btn': 'payment-btn'}>Users</button>
                    <button type="button" onClick={()=>{setClickedBtn('menu-role')}} className={clickedBtn === 'menu-role'? 'active-payment-btn': 'payment-btn'}>Menu Role</button>
                    <button type="button" onClick={()=>{setClickedBtn('audit')}} className={clickedBtn === 'audit'? 'active-payment-btn': 'payment-btn'}>Audit</button>
                    <button type="button" onClick={()=>{setClickedBtn('import-data')}} className={clickedBtn === 'import-data'? 'active-payment-btn': 'payment-btn'}>Import Data</button>

                </span>
                File Maintenance Page
            </div>
        </div>
    )
}

export default FileMaintenance