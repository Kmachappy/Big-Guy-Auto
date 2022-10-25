import React from 'react'
import Image from 'next/image';
import Logo from 'public/images/logo.png';
import PhoneIcon from 'public/images/icons/header-phone.png';
import TimerIcon from 'public/images/icons/header-timer.png';
import {AiFillPhone,AiFillClockCircle} from 'react-icons/ai';

const TopHeader = () => {
    return (
        // main container
        <div className='py-0 xs:py-1 sm:py-3'>

            {/* content container mx-auto */}
            <div className='container mx-auto flex flex-col justify-between items-center px-4 transition-all lg:flex-row'>

                {/* logo */}

                <a className='max-h-[80px]' href="/">
                    <Image
                        src={Logo}
                        alt='Logo'
                        width={300}
                        height={80}
                    />
                </a>

                {/* end logo */}

                {/* phone and hours  */}
                <div className='flex flex-col items-center h-full w-3/4 md:w-auto md:flex-row md:justify-evenly lg:justify-center'>

                    {/* call us now */}
                    <div className='flex w-full justify-center border-main-green items-center px-4 pb-3 md:pb-0 border-b md:border-r md:border-b-0'>
                        <div className=' mr-2 mt-1'>

                        <AiFillPhone className='rotate-90 text-main-red text-3xl'/>
                        </div>

                        <div className='flex flex-col ml-1.5 w-36'>
                            <p className=' font-semibold text-sm'>Call Us Now</p>
                            <p className=' font-medium text-sm'>+1 (818) 645 7172</p>
                            <p className=' font-semibold text-sm'>Hablamos Espanol!</p>
                        </div>
                    </div>
                    {/* end call us now */}

                    {/* hours */}
                    <div className='flex w-full justify-center items-center px-4 py-3 md:py-0'>
                        <div className='mr-2 mt-1'>
                        <AiFillClockCircle className='text-main-red text-3xl'/>

                        </div>
                        <div className='flex flex-col ml-1.5 w-36'>
                            <p className='font-semibold text-sm'>Opening Hours</p>
                            <p className='font-medium text-sm'>Mon - Fri 8:00 - 5:00</p>
                        </div>
                    </div>
                    {/* end hours */}

                </div>
                {/* end phone and hours */}

            </div>
            {/* end content container */}

            {/* // end of main container */}
        </div>
    );
}

export default TopHeader;