import React, { useRef } from 'react';
import AppWrap from '../../common/AppWrap';
import MotionWrap from '../../common/MotionWrap';
import images from '../../assets';
import './Contact.scss';
const Contact = () => {
    const name = useRef()
    const email = useRef()
    const message = useRef()
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        
        window.open(`mailto:muhammed.o.nasser@gmail.com?subject=${name.current.value+ ' + ' + email.current.value}&body=${message.current.value}`)
        
        name.current.value = ''
        email.current.value = ''
        message.current.value = ''
    };

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
                
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' name='name' ref={name}  />
                    <input type='email' placeholder='E-Mail' name='email' ref={email}  />
                    <textarea placeholder='You Message' name='message'  rows='9' ref={message}></textarea>
                    <input type='submit' value='Send' resize='false' />
                </form>
            </div>
        </div>
     );
}
 
export default AppWrap(MotionWrap(Contact, 'contact'),'contact' , 'whitebg');