import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';

const FootIcons = () => {
    const icons = [
        { icon: <FaFacebook /> },
        { icon: <FaLinkedin /> },
        { icon: <FaSquareInstagram /> },
        { icon: <AiFillTikTok /> }
    ];

    return (
        <div className='text-white absolute bottom-14 w-full  flex text-lg justify-center gap-5'>
            {icons.map((ic, index) => (
                <span key={index}>
                    {ic.icon}
                </span>
            ))}
        </div>
    );
};

export default FootIcons;
