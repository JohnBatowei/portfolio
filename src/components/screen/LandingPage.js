import Hero from './Hero'
import Navbar from './Navbar'
import Belt from './Belt'
import Reliability from './Reliability'
import Expert from './Expertise'
import RecentProject from './RecentProject'
import Price from './Price'
import Footer from './Footer'
import '../styles/landing-page.scss'

const LandingPage = function(){
return(
        <div className='landing-page'>
            <Navbar/>
            <Hero />
            <Belt />
            <Reliability />
            <Expert />
            <RecentProject />
            <Price />
            <Footer />
        </div>
)
}

export default LandingPage