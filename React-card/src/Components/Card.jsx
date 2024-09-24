import React from "react";
import "./Card.css"
export default function ({title,subtitle,offer=[],paid=[]}){

    return( 
       <>
       <div className="main-comp">                     
    <div className="card">
    <div className="title1"> <p>{title}</p>
    <h1>{subtitle}</h1>
    <hr></hr>
    </div>
<div>
<ul className="fre-details">
    {/* free things were added */}

    {offer.map((e,index)=>(
        <li key={index}>{e}</li>
        ))
    } </ul>

    {/* cost should be paid */}
    <ul className="free-details">
    {paid.map((e,index)=>(
            <li key={index}>{e}</li>  ))}
</ul>            
</div>
        <button type="button" className="btn btn-primary">button</button>
    </div>
    </div>
    </>
    )
}
        
    