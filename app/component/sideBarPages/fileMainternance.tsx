'use client'
import React,{useState, useEffect} from 'react'
import ClientInfoPage from './sideBarComponent/clientInfoPage'
import UsersPage from './sideBarComponent/usersPage'
import MenuRolePage from './sideBarComponent/menuRolePage'
import AuditPage from './sideBarComponent/auditPage'
import ImportDataPage from './sideBarComponent/importDataPage'


const FileMaintenance = () => {
    const [clickedBtn, setClickedBtn] = useState('')

    return (
        <div className="cont-side-bar-right w-[80%] flex items-start justify-center">
            <div className="w-full flex flex-col items-center justify-start gap-3 py-2 pr-2 pl-1 bg-white h-auto">
                <span className="w-full bg-white flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 ">
                    <button type="button" onClick={()=>{setClickedBtn('client-info')}} className={clickedBtn === 'client-info'? "active-payment-btn " : "payment-btn"}>Client Info</button>
                    <button type="button" onClick={()=>{setClickedBtn('users')}} className={clickedBtn === 'users'? 'active-payment-btn': 'payment-btn'}>Users</button>
                    <button type="button" onClick={()=>{setClickedBtn('menu-role')}} className={clickedBtn === 'menu-role'? 'active-payment-btn': 'payment-btn'}>Menu Role</button>
                    <button type="button" onClick={()=>{setClickedBtn('audit')}} className={clickedBtn === 'audit'? 'active-payment-btn': 'payment-btn'}>Audit</button>
                    <button type="button" onClick={()=>{setClickedBtn('import-data')}} className={clickedBtn === 'import-data'? 'active-payment-btn': 'payment-btn'}>Import Data</button>
                </span>
                <div className="w-full flex overflow-y-auto cont-9 pr-1 bg-slate-100">
                    {clickedBtn === 'client-info' && <ClientInfoPage /> }
                    {clickedBtn === 'users' && <UsersPage /> }
                    {clickedBtn === 'menu-role' && <MenuRolePage /> }
                    {clickedBtn === 'audit' && <AuditPage /> }
                    {clickedBtn === 'import-data' && <ImportDataPage /> }
                </div>
            </div>
        </div>
    )
}

export default FileMaintenance