import React, { useRef, useEffect } from 'react';

const {tableau} = window;

function Tableauemb(){
    const ref = useRef(null)
    const url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
    
    
    const options = {
        device: "desktop", 
    }

    function initViz() {    
        new tableau.Viz(ref.current, url, options)
    }
    
    useEffect(() => {
        initViz();
    },[])
    
    return (
        <div>
            <p class="card-text">Stay Hungry, Stay Foolish</p>
            <div ref={ref}></div>
        </div>
    );
}

export default Tableauemb;