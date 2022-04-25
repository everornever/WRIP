import isEmpty from "lodash.isempty";
import React, { useState } from "react";


function OrteDisplay ({ort}) {
    const [orte, setOrte] = useState();
        setOrte({...orte, ort});
        console.log("Array of Orte", orte); 
    
    return (
        <>
        
        // <div>

        // </div>
        </>
    );
}

export default OrteDisplay

// const OrteDisplay = ({ort})=>{
//     const [orte, setOrte] = useState();

//     // const addOrtToDisplay = (ort)=>{
//     //     setOrte([...orte, {ort}]);
//     // }
//     if (!isEmpty(ort)) {
//         setOrte({...orte, ort});
//         console.log("Array of Orte", orte); 
//     }
    
//     return(
//         console.log("display", orte);
//         // <div>
//         //     {!isEmpty(orte) &&
//         //     orte.map(o=>(
//         //         <p>{o}</p>
//         //     ))
//         //     }
//         // </div>
        
//     );
// }

// export default OrteDisplay;