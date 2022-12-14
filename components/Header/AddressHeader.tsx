import React from "react";
import { AiFillGoogleSquare, AiFillFacebook } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5'
import { FaYelp } from 'react-icons/fa';
import Link from 'next/link'
const AddressHeader = () => {
    return (
        <div className="py-0 sm:py-1 bg-main">
            <div className="container mx-auto px-4 font-medium text-white">

                <div className="flex items-center justify-between">


                    <div className="flex flex-1 justify-start items-center">
                        <Link href="https://goo.gl/maps/NDWdQpDaeGu8Q34E6">
                            <div className="py-2 flex justify-center items-center">
                                <IoLocation className="inline-block mr-2 text-main-red text-3xl sm:text-xl " /> <p className="hover:text-main-red text-xs sm:text-sm inline">
                                    1517 Truman St, San Fernando, CA 91340
                                </p>
                            </div>
                        </Link>

                    </div>

                    <div className=" flex flex-1 justify-end items-center">
                        <Link href="https://goo.gl/maps/NDWdQpDaeGu8Q34E6">
                            <div>
                                <AiFillGoogleSquare className="inline-block mx-2 text-main-red text-4xl flex-initial rounded-3xl" />
                            </div>
                        </Link>
                        <Link href="https://www.yelp.com/biz/big-guy-auto-body-san-fernando-2">
                            <div>
                                <FaYelp className="inline-block mx-2 text-main-red text-3xl flex-initial rounded-3xl" />
                            </div>
                        </Link>
                        <Link href="https://www.facebook.com/Big.Guy.Auto.Body.Repair">
                            <div>
                                <AiFillFacebook className="inline-block mx-2 text-main-red text-4xl flex-initial rounded-3xl" />
                            </div>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AddressHeader;