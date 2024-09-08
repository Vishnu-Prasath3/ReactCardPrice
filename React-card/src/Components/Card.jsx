import React from "react";
import "./Card.css"
export default function ({title,subtitle,freDetails=[],feeDetails=[]}){

    return( 

       <>                     
    <div className="card">
    
    <div className="title1"> <p>{title}</p>
    <h1>{subtitle}</h1>
    <hr></hr>
    </div>
<div>
<ul className="fre-details">
    
{freDetails.map((e,index)=>(
        <li key={index}>{e}</li>
        ))
    } </ul>
    <ul className="free-details">
    {feeDetails.map((e,index)=>(
            <li key={index}>{e}</li>  ))}
</ul>
            
</div>
        <button type="button" className="btn btn-primary">button</button>
      
    </div>
    </>
    )
}
        
    