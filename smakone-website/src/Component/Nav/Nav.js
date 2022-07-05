import React, { useState } from 'react'
import HeadlessSlideOver from './HeadlessSlideOver';
import Logo_SMAK1 from '../../Image/Logo_SMAK1.webp'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../Hooks';
import { useLocation } from 'react-router-dom';

//Import component
import Dropdown from './Dropdown'

//Import icons
import {BiBuildings} from 'react-icons/bi';

const Nav = (props) => {
    const location = useLocation();
    const mainPath = (location.pathname);
    const path = mainPath.toLowerCase();
    console.log(path)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const scrollPosition = useScrollPosition();

    let menuArray = [true, false, false];
    const [menu, setMenu] = useState(menuArray);
    const [show, setShow] = useState(false);

    const setMenuValue = (props) => {
        let newArr = [...menu];
        newArr[props] = !newArr[props];
        setMenu(newArr);
    }

    function openHandler() {
        setIsHeadlessOpen(true);
        setShow(true)
    }

    function closeHandler() {
        setIsHeadlessOpen(false);
        setShow(false)
    }

    const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);

    return (
    <>
    <div className='Circle'></div> 
    <nav className=''>
        <div className={classNames(
            scrollPosition > 0 ? 'bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]' : 'lg:bg-inherit lg:drop-shadow-none bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]',
            'md:flex md:flex-rows lg:flex-wrap items-center pt-4 sm:pt-5 sm:pb-4 md:py-3 lg:px-18 md:px-10 px-4 lg:py-0 w-full fixed top-0 left-0 justify-between z-50 transition-all duration-200'
        )}>
        <div className='lg:grid-cols-none grid grid-cols-3 pb-3 sm:pb-0'>
            <Link to="/" className="rounded-lg cursor-pointer col-span-2">
            <div className=''>
                <img className='object-scale-down h-5 md:h-6 lg:h-7 ' alt='smakone' src={Logo_SMAK1}/>
            </div>
            </Link>
            <div aria-label="toggler" className="flex justify-end items-center pr-2 md:hidden">
            <button aria-label="open" id="open" onClick={() => openHandler()} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 18H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button aria-label="close" id="close" onClick={() => closeHandler()} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            </div>
        </div>
        <HeadlessSlideOver
                open={isHeadlessOpen}
                setOpen={setIsHeadlessOpen}
                title="Item Details"
        >
        <div id="Main" className={`transform ease-in-out transition duration-500 flex justify-start items-start h-full  w-full bg-white flex-col`}>
        {/* <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-black rounded ">
                <svg className="fill-stroke " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4 ">Placeholder</p>
            </button> */}
        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
            <button onClick={()=>setMenuValue(0)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                <p className="text-sm leading-5 uppercase">Sekilas Pandang</p>
                <svg id="icon1" className={`${menu[0] ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div id="menu1" className={`${menu[0] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
                <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                    <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-base leading-4  ">Sejarah, Visi, dan Misi</p>
                </button>
                <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">  
                    <BiBuildings size={20} />
                    <p className="text-base leading-4"><Link to="/tentang_smak1/Fasilitas">Fasilitas</Link></p>
                </button>
                <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-base leading-4  ">Logo</p>
                </button>
                <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-base leading-4  ">Lagu Tema</p>
                </button>
            </div>
        </div>
        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
            <button onClick={()=>setMenuValue(1)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                <p className="text-sm leading-5 uppercase">OSIS</p>
                <svg id="icon2" className={`${menu[1] ? '' : 'rotate-180'} transform `} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className={`${menu[1] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
                <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                    <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-base leading-4  ">Tentang OSIS</p>
                </button>
                <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-base leading-4  ">E-Magazine</p>
                </button>
                <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-base leading-4  ">Ass1st</p>
                </button>
            </div>
        </div>
        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
        <button onClick={()=>setMenuValue(2)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
            <p className="text-sm leading-5  uppercase">Kehidupan SMUKIERS</p>
            <svg id="icon3" className={`${menu[2] ? '' : 'rotate-180 '} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
        <div className={`${menu[2] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Kehidupan SMUKIERS</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Tips Belajar</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Kegiatan Setelah Kelas</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Alumni</p>
            </button>
        </div>
        </div>
        <div className="flex flex-col justify-start items-center px-6 w-full">
        <button onClick={()=>setMenuValue(3)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
            <p className="text-sm leading-5  uppercase">Kegiatan</p>
            <svg id="icon3" className={`${menu[3] ? '' : 'rotate-180 '} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
        <div className={`${menu[3] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>  
                <p className="text-base leading-4  ">Kegiatan</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Smakonecup</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Soundscape</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Smukiez Theater Night</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">KR1ZA</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Seni</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Science Club</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Pramuka</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">OneCast</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">The Duke of Edinburgh’s International Award</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Model United Nation dan English Debate Society</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Smukiez Theater Night</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-black  text-gray-500 rounded px-3 py-2  w-full md:w-52">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-4  ">Smukiez Theater Night</p>
            </button>
        </div>
        </div>
    </div>
    </HeadlessSlideOver>
        <div className='lg:items-center lg:w-auto w-full sm:pt-1 lg:py-5 leading-normal hidden md:block '>
            <div className='flex flex-rows place-items-center gap-4 sm:gap-8 md:gap-0 md:justify-end lg:justify-center'>
            <Dropdown
                title="Tentang SMAK 1"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                ${
                path==="/tentang_smak1" 
                || path==="/tentang_smak1/sejarah"
                || path==="/tentang_smak1/fasilitas"
                || path==="/tentang_smak1/logo"     
                || path==="/tentang_smak1/lagu"
                ? "link-underline-static" : "link-underline"
            }`} 
                dir1='/tentang_smak1'
                dir2='/tentang_smak1/Sejarah'
                dir3='/tentang_smak1/Fasilitas'
                dir4='/tentang_smak1/Logo'
                dir5='/tentang_smak1/Lagu' 
                menu1="Sekilas Pandang"
                menu2="Sejarah, Visi, dan Misi"
                menu3="Fasilitas"
                menu4="Logo"
                menu5="Lagu Tema"
                smak1={true}
            />
            <Dropdown
                title='OSIS'
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                ${
                path==='/osis' 
                || path==='/osis/bph' 
                || path==='/osis/bidang1' 
                || path==='/osis/bidang2'
                || path==='/osis/bidang3'
                || path==='/osis/bidang4'
                || path==='/osis/bidang5' 
                || path==='/osis/bidang6'
                || path==='/osis/bidang7' 
                || path==='/osis/bidang8' 
                || path==='/osis/bidang9' 
                || path==='/osis/bidang10'
                || path==='/osis/emagz'
                || path==='/osis/ass1st' 
                || path==='/osis/ass1st/kedokteran' 
                || path==='/osis/ass1st/farmasi' 
                || path==='/osis/ass1st/keguruan' 
                || path==='/osis/ass1st/sosiologi'
                || path==='/osis/ass1st/akutansi' 
                || path==='/osis/ass1st/hukum'
                || path==='/osis/ass1st/psikologi' 
                || path==='/osis/ass1st/teknik_sipil' 
                || path==='/osis/ass1st/pertambangan' 
                ? "link-underline-static" : "link-underline"
            }`} 
                dir1='/OSIS'
                dir2='/OSIS/Emagz'
                dir3='/OSIS/ASS1ST'
                menu1='Tentang Osis'
                menu2='E-Magazine'
                menu3='Ass1st'
                osis = {true}
            />
            <Dropdown
                title='Kehidupan SMUKIERS'
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                ${
                path==='/kehidupan_smukiers' 
                || path==='/kehidupan_smukiers'
                || path==='/kehidupan_smukiers/tips'
                || path==='/kehidupan_smukiers/kegiatan'
                || path==='/kehidupan_smukiers/alumni'
                || path==='/kehidupan_smukiers/alumni/billystevanus'
                || path==='/kehidupan_smukiers/alumni/scottmoses'
                || path==='/kehidupan_smukiers/alumni/nicolecharlene' 
                ? "link-underline-static" : "link-underline"
                }`}
                dir1='/Kehidupan_smukiers'
                dir2='/Kehidupan_smukiers/Tips'
                dir3='/Kehidupan_smukiers/Kegiatan'
                dir4='/Kehidupan_smukiers/Alumni'
                menu1='Kehidupan SMUKIERS'
                menu2='Tips Belajar'
                menu3='Kegiatan Setelah Kelas'
                menu4='Alumni'
                Kehidupan ={true}
            />
            <Dropdown
                title='Kegiatan'
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                ${
                path==='/kegiatan' 
                || path==='/kegiatan/soc' 
                || path==='/kegiatan/soundscape'
                || path==="/kegiatan/stn"
                || path==='/kegiatan/kr1za'
                || path==='/kegiatan/seni'
                || path==='/kegiatan/scj'
                || path==='/kegiatan/pramuka'
                || path==='/kegiatan/onecast'
                || path==='/kegiatan/dofe'
                || path==='/kegiatan/muneds'
                || path==='/kegiatan/lainnya' 
                ? "link-underline-static" : "link-underline"
                }`}
                dir1='/Kegiatan'
                dir2='/Kegiatan/soc'
                dir3='/Kegiatan/soundscape'
                dir4="/Kegiatan/stn"
                dir5='/Kegiatan/KR1ZA'
                dir6='/Kegiatan/Seni'
                dir7='/Kegiatan/scj'
                dir8='/Kegiatan/pramuka'
                dir9='/Kegiatan/onecast'
                dir10='/Kegiatan/DoFE'
                dir11='/Kegiatan/muneds'
                dir12='/Kegiatan/lainnya'
                menu1='Kegiatan'
                menu2='Smakonecup'
                menu3='Soundscape'
                menu4='Smukiez Theater Night'
                menu5='KR1ZA'
                menu6='Seni'
                menu7='Science Club'
                menu8='Pramuka'
                menu9='OneCast'
                menu10='The Duke of Edinburgh’s International Award'
                menu11='Model United Nation dan English Debate Society'
                kegiatan={true}              
                />
            </div>
          </div>
      </div>
    </nav>
    
    </>
  )
}

export default Nav