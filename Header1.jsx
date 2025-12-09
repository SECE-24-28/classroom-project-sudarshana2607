import React from "react";

const Header=()=>
{
    let des={backgroundColor:"grey",color:"white"}
    let d ={backgroundColor:"grey",color:"white"}
    return(
        <div>
            <h1>WELCOME TO REACT</h1>
            <h1 style={des}>TIGER</h1>
            <p style={d}>The tiger (Panthera tigris) is a magnificent, 
                powerful big cat known for its distinctive orange coat with dark stripes, 
                embodying strength, grace, and courage, making it India's national animal.
                
                 As apex predators, they maintain ecosystem balance by hunting deer, wild boar, 
                 and buffalo, playing a vital role in their environments. 
                 Facing threats like habitat loss and poaching, tigers are crucial to biodiversity, 
                 prompting global conservation efforts, like India's Project Tiger, to protect these solitary, 
                 majestic creatures and their unique stripe patterns, which are as individual as human fingerprints.
            </p>
        </div>
    )
}

export default Header