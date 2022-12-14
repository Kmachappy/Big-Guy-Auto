import React, { FC } from "react";
import { AiFillRightCircle } from "react-icons/ai";

type Props = {
    text: string;
}

const BottomFooterItem: FC<Props> = ({ text }) => {
    return (
        <li className="mb-1.5 ">
            <a href="#" className="flex items-center text-sm text-slate-200 hover:text-red-500 transition-all my-3 font-medium"><AiFillRightCircle className=" inline-block mx-1 text-main-red" />{text}</a>
        </li>
    )
}

export default BottomFooterItem;
