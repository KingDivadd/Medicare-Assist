'use client'
import React, {useState, useEffect} from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'
import CreatePlanModal from '../createPlanModal'
import { SmallDropDown } from '@/app/component/dropDown'

const LabTestPage = () => {
    const [menuRoleModal, setMenuRoleModal] = useState(false)
    const [selecteMenuRole, setSelecteMenuRole] = useState({})
    const [menuRoleList, setMenuRoleList] = useState<any[]>([])
    const [clickedBtn, setClickedBtn] = useState('')
    const [pageNum, setPageNum] = useState(1)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        category: false,
    });
    const [dropElements, setDropElements] = useState({
        name: '',  description: '', category: 'SELECT', planFeeLink: '', payerID: '', active: false, inactive: false, all: false

    })

    useEffect(() => {
    const item = sessionStorage.getItem('profilesTab')
    if (item === null || item.trim() === ''){
        setClickedBtn('cpt&fee')
    }else{
        setClickedBtn(item)
    }
    }, [])

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };

    const handleSelectDropdown = (dropdown: any, title:any)=>{
        setDropElements({...dropElements, [title]: dropdown}); setDropMenus({...dropMenus, [title]: false})
    }
    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('profilesTab',item)
    }

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
    }
    
    const handlePageNumber = (e:any)=>{
        const value = e.target.value
        setPageNum(value)
    }

    const handlePageIncrease = ()=>{
        setPageNum(Number(pageNum) + 1)
    }

    const handlePageDecrease = ()=>{
        setPageNum(Number(pageNum) - 1)
        if (Number(pageNum) < 2 ){
            setPageNum(1)
        }
    }

    const handleCreateCpt = ()=>{
        setMenuRoleModal(true)
        sessionStorage.setItem('profiles','procedure')
    }

    return (
        <div className="w-[90%] flex flex-col gap-3 items-center justify-start pt-[15px] ">
            <span className="w-[60%] mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    <p className="text-sm text-slate-700 text-end w-[100px]">Name</p>
                    <input onChange={handleChange} value={dropElements.name}  type="text" name="name" id="name" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                </span>
                
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    <p className="text-sm text-slate-700 text-end w-[100px]">Description</p>
                    <input onChange={handleChange} value={dropElements.description}  type="text" name="description" id="description" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                </span>
            </span>

            <span className="w-[60%] mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    <p className="text-sm text-slate-700 text-end w-[100px]">Category</p>
                    <span className="w-[250px] flex items-center justify-center">
                        <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'category'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                    </span>
                </span>
                
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    {/*  */}
                    <p className="w-[5px]"></p>
                    <span className="w-[345px] flex flex-row gap-1 items-center justify-between h-full pr-[100px] ">
                        <span className="w-auto flex flex-row items-center justify-center gap-2">
                            <input type="radio" name="status" id="active" onChange={(e:any)=> {setDropElements({...dropElements, active: e.target.checked})}} checked={dropElements.active} className='w-[16px] h-[16px] ' />
                            <label htmlFor="active" className='text-sm text-slate-700'>Active</label>
                        </span>
                        <span className="w-auto flex flex-row items-center justify-center gap-3">
                            <input type="radio" name="status" id="inactive" onChange={(e:any)=> {setDropElements({...dropElements, inactive: e.target.checked})}} checked={dropElements.inactive} className='w-[16px] h-[16px] ' />
                            <label htmlFor="inactive" className='text-sm text-slate-700'>Inactive</label>
                        </span>
                        <span className="w-auto flex flex-row items-center justify-center gap-2">
                            <input type="radio" name="status" id="all" onChange={(e:any)=> {setDropElements({...dropElements, all: e.target.checked})}} checked={dropElements.all} className='w-[16px] h-[16px] ' />
                            <label htmlFor="all" className='text-sm text-slate-700'>All</label>
                        </span>
                    </span>
                    {/*  */}
                </span>
            </span>

            <button type="button" className="px-3 mx-auto flex justify-center items-center h-[35px] rounded-[5px] text-white bg-lime-600 hover:bg-lime-700 ">Search</button>

            <div className="w-[110%] flex flex-col items-center justify-start border border-sky-600 rounded-[5px] bg-white mt-[10px]">
                <span className="h-[40px] w-full flex items-center justify-between px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                    <p className="text-sm text-white text-start font-semibold ">Search Result</p>

                    <span className="w-auto h-[30px] flex flex-row items-start justify-center gap-2 ">
                        <button onClick={handleCreateCpt} className="px-2 h-full rounded-[3px] flex justify-center items-center bg-white hover:bg-slate-100 text-sm text-slate-700">Create Lab Test</button>

                    </span>
                </span>
                <div className="w-full flex flex-col items-center justify-start min-h-[20px] border border-sky-600 border-t-0 ">
                    <span className="w-full h-[35px] bg-blue-100 flex flex-row items-center justify-between">
                        <p className="text-sm font-semibold text-sky-700 px-2 w-[20%] ">Test</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Test Type</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[7.5%] ">CPT</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Test Category</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[20%] ">Description</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[7.5%] ">LOINC ID</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Entered By</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[15%] ">Entry Date</p>
                    </span>
                    <span className="w-full flex flex-col items-center justify-start cont-11a overflow-y-auto">
                        <span className='w-full flex flex-col justif-start itmes-center'>
                            {[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5].map((data, ind)=>{
                                return (
                                    <span key={ind} className="w-full h-[35px] hover:bg-gray-100 flex flex-row items-center justify-between">
                                        <p className="text-sm  text-sky-600 px-2 w-[20%] ">Test</p>
                                        <p className="text-sm  text-slate-700 pl-3 pr-2 w-[10%] ">Test Type</p>
                                        <p className="text-sm  text-slate-700 px-2 w-[7.5%] ">CPT</p>
                                        <p className="text-sm  text-slate-700 pl-3 pr-2 w-[10%] ">Test Category</p>
                                        <p className="text-sm  text-slate-700 pl-3 pr-2 w-[20%] ">Description</p>
                                        <p className="text-sm  text-slate-700 pl-4 pr-2 w-[7.5%] ">LOINC ID</p>
                                        <p className="text-sm  text-slate-700 pl-4 pr-2 w-[10%] ">Entered B</p>
                                        <p className="text-sm  text-slate-700 pl-4 pr-2 w-[15%] ">Entry Date</p>
                                    </span> 
                                )
                            })}
                        </span>
                    </span>
                    <div className="w-full flex flex-row justify-start items-center h-[32px] border-t border-gray-300 ">
                        <span className="h-full flex flex-row items-center justify-start w-auto">
                            <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipPrevious size={18} /> </span>

                            <span onClick={handlePageDecrease} className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretLeft size={17} /> </span>

                            <p className="w-[50px] text-sm text-slate-700 text-center">Page</p>

                            <input onChange={(handlePageNumber)} value={pageNum} type="text" name="page" id="page" placeholder='' className='w-[50px] flex h-[23px] items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />

                            <p className="w-auto pl-2 px-1  text-sm text-slate-700 text-center">of 3</p>

                            <span onClick={handlePageIncrease} className="ml-[10px] h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretRight size={17} /> </span>

                            <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipNext size={19} /> </span>

                            <p className=" px-2 w-auto text-sm text-slate-700 text-center">Displaying 1 to 15 of 42 items</p>
                        </span>
                    </div>
                </div>
            </div>

            {menuRoleModal && <CreatePlanModal menuRoleList={menuRoleList} setMenuRoleList={setMenuRoleList} menuRoleModal={menuRoleModal} setMenuRoleModal={setMenuRoleModal} selectedMenuRole={selecteMenuRole} setSelectedMenuRole={setSelecteMenuRole} />}
        </div>
    )
}

export default LabTestPage