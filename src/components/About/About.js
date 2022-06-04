import React from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../common/AppWrap';
import './About.scss';
import images from '../../assets';

const About = () => {
    const about = [
        {title: 'Web Development', description: 'I am a good web Developer', imgUrl: images.about01},
        {title: 'Frontend Development', description: 'I am a good Frontend Developer', imgUrl: images.about02},
        {title: 'Backend Development', description: 'I am still learn...', imgUrl: images.about03},
        {title: 'MERN Stack', description: 'I am still learn...', imgUrl: images.about04},
    ]
    return ( 
        <div className='about-div'>
            <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
            <div className='profiles'>
                {about.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale:1.1}}
                        transition={{duration: .5, type: 'tween'}}
                        className='profile-item'
                        key={about.title+index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
                        <p className='p-text' style={{marginTop:10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
     );
}
 
export default AppWrap(
    
    About , 'about', 'whitebg'
);