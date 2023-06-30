import React from 'react';
import './Input.css';
function Input({selectedType, typeChange}) {

   
    return (
        <div className='container'>
            <h2>Choose the type of activity:</h2>
        <div className='centered-dropdown'>
            <select id="list"  value={selectedType} onChange={typeChange}>
        <option></option>
        <option value="recreational" >Recreational</option>
        <option value="education">Education</option>
        <option value="social">Social</option>
        <option value="diy">DIY</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>

        </select>
        </div>
        </div>
    
    );
    
}

export default Input;