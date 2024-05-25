import './banner.css'
import profile from '../../assets/profile.jpg'

function Banner() {
    return (
        <header className='banner'>
            <nav>
                <ul>
                    <li><h1>TierList Maker</h1></li>
                    <li><a href='https://github.com/IgorOdSilva'><img src={profile} className='userProfile'></img></a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Banner