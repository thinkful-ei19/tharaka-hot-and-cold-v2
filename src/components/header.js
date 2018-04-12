import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

// export default function Header(props) {
//     return (
//         <header>
//             <TopNav />
//             {/* <InfoModal /> */}
//             <h1>HOT or COLD</h1>
//         </header>
//     );
// };



export default function Header(props) {
    return (
        <header>
            <TopNav showModButton={() => props.showModButton()}/>
            {props.showMod ? <InfoModal showMainButton={() => props.showMainButton()}/> : ""}
            <h1>HOT or COLD</h1>
        </header>
    );
};
