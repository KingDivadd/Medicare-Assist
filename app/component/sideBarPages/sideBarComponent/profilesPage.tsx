'use client'
import React, {useState, useEffect} from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'
import CreateCptModal from './createCptModal'
import CptFeesPage from './profilesComponent/cpt&feesPage'
import PlanPage from './profilesComponent/planPage'

const ProfilesPage = () => {
    const [clickedBtn, setClickedBtn] = useState('')

    useEffect(() => {
    const item = sessionStorage.getItem('profilesTab')
    if (item === null || item.trim() === ''){
        setClickedBtn('cpt&fee')
    }else{
        setClickedBtn(item)
    }
    }, [])

    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('profilesTab',item)
    }


    return (
        <div className='w-full flex flex-col justify-start align-center gap-3 bg-white rounded-[5px] px-2 py-2 overflow-y-auto'>
            <div className="w-full flex flex-col justify-start items-center rounded-[6px]">
                <span className="w-[98%] mx-auto flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 ">
                    <button type="button" onClick={()=>{handleClickedBtn('cpt&fee')}} className={clickedBtn === 'cpt&fee'? "active-payment-btn " : "payment-btn"}>CPT & FEE</button>
                    <button type="button" onClick={()=>{handleClickedBtn('insuranceCarriers')}} className={clickedBtn === 'insuranceCarriers'? 'active-payment-btn': 'payment-btn'}>Insurance Carriers</button>
                    
                    <button type="button" onClick={()=>{handleClickedBtn('fuDenailCodes')}} className={clickedBtn === 'fuDenailCodes'? 'active-payment-btn': 'payment-btn'}>F/U Denial Codes</button>
                    <button type="button" onClick={()=>{handleClickedBtn('labTest')}} className={clickedBtn === 'labTest'? 'active-payment-btn': 'payment-btn'}>Lab Test</button>
                    <button type="button" onClick={()=>{handleClickedBtn('scheduleReasons')}} className={clickedBtn === 'scheduleReasons'? 'active-payment-btn': 'payment-btn'}>Schedule Reasons</button>
                    <button type="button" onClick={()=>{handleClickedBtn('referringProvider')}} className={clickedBtn === 'referringProvider'? 'active-payment-btn': 'payment-btn'}>Referring Provider</button>
                    <button type="button" onClick={()=>{handleClickedBtn('inventory')}} className={clickedBtn === 'inventory'? 'active-payment-btn': 'payment-btn'}>Inventory</button>
                </span>
                {clickedBtn === 'cpt&fee' &&  <CptFeesPage /> }
                {clickedBtn === 'insuranceCarriers' &&  <PlanPage /> }
            </div>
            
        </div>
    )
}

export default ProfilesPage