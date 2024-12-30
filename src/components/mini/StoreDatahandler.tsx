import Link from 'next/link'
import React from 'react'
import { FaList } from 'react-icons/fa'
import { IoGrid } from 'react-icons/io5'

const StoreDatahandler = () => {
    return (
        <div className='w-full px-5 md:px-10 lg:px-40 py-5 lg:py-20 flex lg:flex-row flex-col justify-between items-center'>
        <div className=' flex flex-col items-start justify-start'>
            <h2 className='text-2xl font-bold font-josefin-sans text-offBlue'>Ecommerce Acceories & Fashion item</h2>
            <p className='text-xs text-gray-400 font-normal font-lato'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className='flex justify-start flex-wrap items-center gap-5'>
        <div className='flex items-center justify-start gap-2'>
            <label htmlFor="perpage" className='text-offBlue font-lato'>Per Page:</label>
            <input type="text" className='w-14 h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-700 px-2' />
        </div>
        <div className='flex items-center justify-start gap-2'>
            <label htmlFor="perpage" className='text-offBlue font-lato font-medium'>Sort By: </label>
            <select className='h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-500'>
                <option value="best">Best Match</option>
                <option value="all">All Results</option>
            </select>
        </div>
        <div className='flex items-center justify-start gap-2'>
            <label htmlFor="perpage" className='text-offBlue font-lato flex justify-start items-center gap-3'>View: <Link href={"/shop"}><IoGrid size={15} className='text-navyBlue' /></Link>
            <Link href={"/shop/grid"}><FaList size={15} className='text-navyBlue' /></Link>
            </label>
            <input type="text" className='w-14 h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-700 px-2' />
        </div>
    </div>
    </div>
    )
}

export default StoreDatahandler