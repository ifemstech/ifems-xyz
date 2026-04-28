import loGo from './assets/ifemslogo.jpg'
import loGO1 from './assets/ifemslogo1.jpg'
import heroImg from './assets/ifems-hero.png'




function Logos (){

    return(
        <div className='logo'>
            <img className='lego' src= {loGo} alt="logos" />
            <img  className='lego'  src={loGO1} alt="logos" />
            <img  src={heroImg} alt="IFEMS" />
        </div>
    );

}
export default Logos