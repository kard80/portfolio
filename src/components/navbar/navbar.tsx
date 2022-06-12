import './navbar.less';

function Navbar() {
    return(
        <div className='container'>
            <span>KARD SAHAPHONG</span>
            <div className='hamburger'>
                <div className='ham1'></div>
                <div className='ham2'></div>
                <div className='ham3'></div>
            </div>
        </div>
    )
}

export default Navbar;