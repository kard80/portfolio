// import { useState } from 'react';
import './navbar.less';

function Navbar() {
    // const [clickHam, setClickHam] = useState(false);
    return (
        <div className='container'>
            <p>KARD SAHAPHONG</p>
            <div className='list'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about-me'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div></div>
            {/* <div
                className='hamburger'
                onClick={() => setClickHam(!clickHam)}
            >
                <div
                    className='ham1'
                    style={{ transform: clickHam ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}
                ></div>
                <div
                    className={clickHam ? '' : 'ham2-appear'}
                    style={{ height: clickHam ? '0' : '3px' }}
                ></div>
                <div
                    className='ham3'
                    style={{ transform: clickHam ? 'rotate(-45deg) translate(4px, -3px)' : 'none' }}
                ></div>
            </div> */}
        </div>
    )
}

export default Navbar;