import React from 'react';
import './HeaderArea.css'
import {AiOutLineSearch, AiFillHome, AiOutLineWallet} from 'react-icons/al'
import { MdOutlineVideoLabel } from "react-icons/md";
import { FaRegFlag,FaUsers,FaPlusCircle,FaFacebookMessenger,FaBell} from "react-icons/fa";
import MainArea from '../MainArea/MainArea';
function HeaderArea () {
    return(
        <div className='homepage'>
            <div className='header'>
                <div className='first-header'>
                    <div className='logo'>
                        <img src='/images/logo.png' alt='logo' style={{height:50px, padding: 1rem}} />
                    </div>
                    <div className='search'>
                        <AiOutLineSearch style={{height: 4rem}} />
                    </div>
                </div>
                <div className='middle-header'>
                    <div className='icon'>
                        <AiFillHome fontsize="2.3 rem" />
                    </div>
                    <div className='icon'>
                        <FaRegFlag fontsize="2.3 rem" />
                    </div>
                    <div className='icon'>
                        <MdOutlineVideoLabel fontsize="2.3 rem" />
                    </div>
                    <div className='icon'>
                        <AiOutLineWallet fontsize="2.3 rem" />
                    </div>
                </div>
                <div className='third-header'>
                    <div className='plus'>
                        <FaPlusCircle fontsize="2 rem"/>
                    </div>
                    <div className='plus'>
                        <FaFacebookMessenger fontsize="2.3 rem"/>
                    </div>
                    <div className='plus'>
                        <FaBell fontsize="2.3 rem"/>
                    </div>
                    <div className='pluss'>
                    </div>
                </div>
            </div>
            <MainArea />
        </div>
    )
}

export default HeaderArea;
