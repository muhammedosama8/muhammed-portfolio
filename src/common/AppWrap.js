import React from 'react';

import NavigationDots from './NavigationDots';
import SocialMedia from './SocialMedia';

const AppWrap = (Component, idName, className) => function HOC() {
    return ( 
        <div id={idName} className={`app_container ${className}`}>
            <SocialMedia />
            
            <div className="wrapper app__flex">
                <Component />
            </div>
            <NavigationDots active={idName} />
        </div>
     );
}
 
export default AppWrap;