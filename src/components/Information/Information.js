import React from 'react';
import AppWrap from '../../common/AppWrap';
import MotionWrap from '../../common/MotionWrap';
import './Information.scss';

const Information = () => {
    return ( 
        <div>
            <h2 className="head-text">Personal <span>Information</span></h2>

            <div className='information'>
                <h2 className='welcome'>Hello, i'm <span>Muhammed Osama</span></h2>
                <h3 className='descriptoin'>" I am a talented Front end Developer From Egypt. I develop websites. I have graduated in Computer Science. Interested in trying to keep up with modern and modern designs, and taking care of web features, while maintaining ease of use, and maximizing the benefit of simplicity and elegance, are the controls that we commit to in all my projects. "</h3>
                <div className='line' />
                <div className='personal-information'>
                    <h4 className='info-title'>personal information</h4>
                    
                    <div className='info'>
                        <div className='full-name'>
                            <h5>Full Name:</h5>
                            <p>Muhammed Osama Farouq Nasser</p>
                        </div>
                        <div className='bod'>
                            <h5>D.O.B:</h5>
                            <p>8 / 8 / 1998</p>
                        </div>
                        <div className='address'>
                            <h5>address:</h5>
                            <p>Giza - Cairo</p>
                        </div>
                        <div className='e-mail'>
                            <h5>e-mail:</h5>
                            <p>muhammed.o.nasser@gmail.com</p>
                        </div>
                        <div className='phone'>
                            <h5>phone:</h5>
                            <p>01009170794</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AppWrap(
    MotionWrap(Information, 'information'), 'information', 'whitebg'
);