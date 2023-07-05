import React from "react";
import logo from "../../assets/image/logo-chocolate-frog.png"
import { Button } from "../Button/Button";

export function Header({homeButtons, infosButtons, statsButtons}){
    return(
        <header>
            <img src={logo} alt="Logo Chocolate Frog" />
            { homeButtons && ( 
                <div>
                    <Button 
                        // className={}
                        // onClick={navigateTo}
                        text="Personagens"            
                    />
                    <Button 
                        // className={}
                        // onClick={navigateTo}
                        text="Estatísticas" 
                    />
                </div>
            )}
            { infosButtons && ( 
                <div>
                    <Button 
                        // className={}
                        // onClick={navigateTo}
                        text="Estatísticas"            
                    />
                    <Button 
                        // className={}
                        // onClick={navigateTo}
                        text="Home" 
                    />
                </div>
            )}
            { statsButtons && ( 
                <div>
                    <Button 
                        // className={}
                        // onClick={navigateTo}
                        text="Personagens"            
                    />
                    <Button 
                        // className={}
                        // onClick={navigateTo}
                        text="Home" 
                    />
                </div>
            )}
        </header>
    )
}