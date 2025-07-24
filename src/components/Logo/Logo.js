import Tilt from 'react-parallax-tilt';
import brain from './brain.png'

const Logo=()=> {
    return(
        <div className="ma4 mt0" >
            <Tilt>
                <div className="br4 shadow-2 pa3" style={{ width:'150px', height: '150px', background: 'darkturquoise'}}>
                 <img alt='logo' src={brain} style={{paddingTop: '5px'}}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo; 