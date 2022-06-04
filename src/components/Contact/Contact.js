import React from 'react';
import AppWrap from '../../common/AppWrap';
import MotionWrap from '../../common/MotionWrap';
import images from '../../assets';
import './Contact.scss';
const Contact = () => {
    return ( 
        <div>
            <h2 className="head-text">Take a coffee & chat with me</h2>
            <div className='contactMe'>
                <div className='email_phone'>
                    <div className='email'>
                        <img src={images.email} alt='email' />
                        <p>muhammed.o.nasser@gmail.com</p>
                    </div>
                    <div className='mobile'>
                        <img src={images.mobile} alt='mobile' />
                        <p>+201009170794</p>
                    </div>
                </div>

                <form>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='E-Mail' />
                    <textarea placeholder='You Message'  rows='9'></textarea>
                    <input type='submit' value='Send' resize='false' />
                </form>
            </div>
        </div>
     );
}
 
export default AppWrap(MotionWrap(Contact, 'contact'),'contact' , 'whitebg');