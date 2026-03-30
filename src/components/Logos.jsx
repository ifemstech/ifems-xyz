import loGo from './assets/ifemslogo.jpg'
import loGO1 from './assets/ifemslogo1.jpg'



function Logos (){

    return(
        <div className='logo'>
            <img className='lego' src= {loGo} alt="logos" />
            <img  className='lego'  src={loGO1} alt="logos" />
        </div>
    );

}
export default Logos