import React, { useEffect, useState } from 'react';
import AppWrap from '../../common/AppWrap';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss';
import { myProjects } from '../../common/myProjects';
import MotionWrap from '../../common/MotionWrap';

const Work = () => {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        setWorks(myProjects);
        setFilterWork(myProjects);
        
    },[])
    
    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);
    
        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);
    
          if (item === 'all') {
            setFilterWork(works);
          } else {
              setFilterWork(works.filter(work => work.tag.includes(item)));
          }
        }, 500);
      };
      
    return ( 
        <div className='work-div'>
            <h2 className="head-text">My Creative <span>Portfolio</span></h2>
            <div className='my-work'>
            <div className="work-filter">
                {['task', 'web App', 'react JS','angular' ,'all'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    
                    className={`work-filter-item flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="work-portfolio"
            >
                {filterWork.map((work, index) => (
                <div className="work-item flex" key={index}>
                    <div
                    className="work-img flex"
                    >
                    <img src={work.img} alt={work.name} />

                    <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        className="work-hover flex"
                    >
                        <a href={work.url} target="_blank" rel="noreferrer">

                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="flex"
                        >
                            <AiFillEye />
                        </motion.div>
                        </a>
                        <a href={work.code} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="flex"
                        >
                            <AiFillGithub />
                        </motion.div>
                        </a>
                    </motion.div>
                    </div>

                    <div className="work-content flex">
                    <h4 className="bold-text center">{work.name}</h4>
                    <p className="p-text center" style={{ marginTop: 10 }}>{work.description}</p>

                    <div className="work-tag app__flex">
                        <p className="p-text">{work.tag[0]}</p>
                    </div>
                    </div>
                </div>
                ))}
            </motion.div>
            </div>
        </div> 
     );
}
 
export default AppWrap(
    MotionWrap(Work, 'work'),
    'work'
);