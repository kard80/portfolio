import './about.less';
import linkedin from '../../assets/linkedin.svg'
import gmail from '../../assets/gmail.svg'
import line from '../../assets/line.svg'

export default function About() {
    return (
        <div style={{ position: 'relative', top: '50px' }}>
            <div id='home' className='main-section black intro'>
                <span className='font-24'>I'm</span>
                <span className='font-72'>KARD SAHAPHONG</span>
                <span className='font-36'>a Software Engineer</span>
            </div>
            <div id='about-me' className='section'>
                <h1>About Me</h1>
                <p>
                    Hello World! I'm a Software Engineer with 2 years experiences.
                    My familiar stacks are HTML, CSS, Javascript, React, Angular, NodeJS and Golang.
                    Actually, I was graduate with Bachelor degree in Psychology field but with interesting
                    in technology and Web development, I decided to shift my expertise and got web development
                    certificate from Codecamp by Thai Programmer Associated.
                </p>
            </div>
            <div id='experience' className='section black'>
                <div style={{justifySelf:'center'}}>
                    <p>
                        2021-Current
                        <b> Software Engineer </b>
                        (Refinitiv)
                    </p>
                    <p>
                        2020-2021
                        <b> Backend Developer </b>
                        (Gridwhiz)
                    </p>
                </div>
                <h1 style={{ justifySelf: 'flex-start' }}>Experience</h1>
            </div>
            <div id='contact' className='section'>
                <h1>Contact</h1>
                <div style={{ textAlign: 'left' }}>
                    <p onClick={() => navigator.clipboard.writeText('kard.sp2@gmail.com')}>
                        <img src={gmail} className='icon' alt='#' />
                        <span> kard.sp2@gmail.com</span>
                    </p>
                    <p>
                        <img src={line} className='icon' alt='#' />
                        <span> kard80</span>
                    </p>
                    <p>
                        <img src={linkedin} className='icon' alt='#' />
                        <span> Kard Sahaphong</span>
                    </p>

                </div>
            </div>
        </div>
    )
}