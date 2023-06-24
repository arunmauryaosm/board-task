import React from 'react'
import { RxDashboard } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { BsFillTagsFill, BsTags } from 'react-icons/bs';
import { FaRegThumbsUp } from 'react-icons/fa';
import { ImSwitch } from 'react-icons/im';
import { MdNotificationsNone, MdOutlineIncompleteCircle } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Dashboard = () => {

  const user = useSelector(selectUser)
    const navigate = useNavigate()


  return (
    <div className='flex m-6'>
      <div className='bg-black h-screen w-1/6 rounded-3xl text-white'>
        <p className='text-center text-4xl font-bold mt-16 tracking-wider' >Board.</p>

        <div className='px-10 pt-20' >
          <p className='flex text-xl font-bold gap-4 py-5'> <RxDashboard size={30} /> <Link to={Dashboard}> Dashboard</Link></p>
          <p className='flex text-xl font-bold gap-4 py-5'> <BsFillTagsFill size={30} /> <Link to={Dashboard}> Transactions</Link></p>
          <p className='flex text-xl font-bold gap-4 py-5'> <MdDateRange size={30} /> <Link to={Dashboard}> Schedules</Link></p>
          <p className='flex text-xl font-bold gap-4 py-5'> <BiUserCircle size={30} /> <Link to={Dashboard}> Users</Link></p>
          <p className='flex text-xl font-bold gap-4 py-5'> <FiSettings size={30} /> <Link to={Dashboard}> Settings</Link></p>
        </div>

      </div>
      <div className='w-4/5 mx-20 ' >



        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/dashboard" class="flex">

              <span class="text-2xl font-bold">Dashboard</span>
            </a>
            <div class="flex md:order-2">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border rounded-2xl " placeholder="Search..." />
              </div>
              <p className='px-5'> <MdNotificationsNone size={40} /> </p>
              <p className='font-bold text-2xl my-auto'> {user.email} </p>
              <p className='px-3 flex text-red-700 cursor-pointer rounded-xl mx-3' onClick={() => auth.signOut(navigate('/'))} >  <ImSwitch size={40}/> </p>
            </div>
          </div>
        </nav>


        <div className='flex gap-20 mt-10' >

          <div className='bg-[#DDEFE0] w-80  p-5 rounded-2xl'>
            <div className='float-right'>
              <p >
                <MdOutlineIncompleteCircle size={50} />
              </p>
            </div>
            <p className='text-lg m-2 mt-10' >Total Revenues</p>
            <p className='text-2xl font-bold m-2'>$2,129,430</p>
          </div>


          <div className='bg-[#F4ECDD] w-80  p-5 rounded-2xl'>
            <div className='float-right'>
              <p >
                <BsTags size={50} />
              </p>
            </div>
            <p className='text-lg m-2 mt-10' >Total Revenues</p>
            <p className='text-2xl font-bold m-2'>$2,129,430</p>
          </div>


          <div className='bg-[#EFDADA] w-80  p-5 rounded-2xl'>
            <div className='float-right'>
              <p >
                <FaRegThumbsUp size={50} />
              </p>
            </div>
            <p className='text-lg m-2 mt-10' >Total Revenues</p>
            <p className='text-2xl font-bold m-2'>$2,129,430</p>
          </div>

          <div className='bg-[#DEE0EF] w-80  p-5 rounded-2xl'>
            <div className='float-right'>
              <p >
                <CgProfile size={50} />
              </p>
            </div>
            <p className='text-lg m-2 mt-10' >Total Users</p>
            <p className='text-2xl font-bold m-2'>892</p>
          </div>

        </div>


        <div className='mt-10 bg-slate-100 h-96 rounded-3xl'>

          <div>
            <p className='p-5 font-bold text-3xl'>Activities</p>
          </div>

        </div>

        <div className='flex gap-20'>

        <div className='bg-slate-50 h-64 w-1/2 mt-10 rounded-2xl'>
          <p className='m-10 font-bold text-2xl'>Top Products</p>
        </div>

        <div className='bg-slate-50 h-64 w-1/2 mt-10 rounded-2xl'>
          <p className='m-10 font-bold text-2xl'>Today's schedule</p>
        </div>

        </div>



      </div>
    </div>
  )
}

export default Dashboard    