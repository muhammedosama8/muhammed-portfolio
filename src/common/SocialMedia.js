import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const SocialMedia = () => {
    return (
        <div className='social'>
            <div>
                <a href='https://github.com/muhammedosama8' target='_blank' rel='noreferrer'><IoLogoGithub /></a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/muhammed-osama-08081998/' target='_blank' rel="noreferrer"><IoLogoLinkedin /></a>
            </div>
            <div>
                <a href='https://www.facebook.com/profile.php?id=100012566054127' target='_blank' rel="noreferrer"><FaFacebookF /></a>
            </div>
        </div>
    );
}
 
export default SocialMedia;