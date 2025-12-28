import React, {useState} from 'react';
import References from './Reference';

function Ref(){
    const [showRef, setShowRef] = useState(false);
    if(showRef){
        return(
            <div className="ref">
                <References />
                <button type="button" onClick={() => setShowRef(false)}>Remove References</button>
            </div>
        );
    }

    return(
        <div className="ref">
            <button type="button" onClick={() => setShowRef(true)}>Add References</button>
        </div>
    );
}

export default Ref;