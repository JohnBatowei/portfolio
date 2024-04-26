import img1 from '../assets/orig1.jpeg'
import '../styles/hero.scss'
const Hero = function(){
    return(
        <div className='hero'>
            <h2> Crafting Digital Solutions to Empower Your Business  </h2>
            <div className="img">
                <img src={`${img1}`} alt="" />
            </div>
        </div>
    )
}

export default Hero