import { useState } from 'react';
import './navbar.less';

function Navbar() {
    const [clickHam, setClickHam] = useState(false);
    return (
        <div className='container'>
            <span>KARD SAHAPHONG</span>
            <div
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
            </div>
        </div>
    )
}

export default Navbar;