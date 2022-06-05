import React from 'react';
import { motion } from 'framer-motion';

import images from '../../assets';
import AppWrap from '../../common/AppWrap';
import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}
const Header = () => {
    return ( 
        <div>
            <div className='container'>
                <div className='header'>
                <motion.div
                    whileInView={{x:[-100, 0], opacity: [0, 1]}}
                    transition={{duration: 0.5}}
                    className='header-info'
                >
                    <div className='header-badge'>
                        <div className='header-title-name d-flex'>
                            <span>👋</span>
                            <div>
                                <p>Hello, I am</p>
                                <h1>Muhammed</h1>
                            </div>
                        </div>

                        <div className='header-title-job'>
                            <p>Web Developer</p>
                            <p>Freelancer</p>
                        </div>

                        <div className='cv'>
                            <a href={images.cv} target='_blank' download className='download capitalize'>download <span className='upperCase'>cv</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity:[0,1]}}
                    transition={{duration: 0.5, delayChildren: 0.5}}
                    className='header-info header-img'
                >
                    <img src={images.muhammed} alt="profile_bg" />
                    <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />               
                </motion.div>

                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='header-circles'
                >
                    {[images.flutter, images.redux, images.sass].map((img,index) => (
                        <div key={index}>
                            <img src={img} alt="profile_bg" />
                        </div>
                    ))}
                </motion.div>
            </div>
            </div>
        </div>
     );
}
 
export default AppWrap(Header, 'home');
