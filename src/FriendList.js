import { Link } from "react-router-dom";
import cow from './cow.jpg';


function FriendList() {
    return(
        <div>
            <Link to="/">
                <img src={cow}/>
            <button>
                Go Back
           </button>
           </Link>
        </div>
    )
};

export default FriendList;