import React from "react";

export function Button({onClick, className, text}){
    return(
        <button 
            type="button" 
            className={className} 
            onClick={onClick}
        >
            {text}
        </button>
    )
}