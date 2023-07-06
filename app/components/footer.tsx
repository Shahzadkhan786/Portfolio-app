import { Mail, Phone, Github } from "lucide-react";

import React from 'react'

const Footer= () =>{
    return(
        <footer className="bg-orange w-full shadow-footer mt-12 py-4 fixed bottom-0 "> 
            <div className="flex items-center justify-center gap-6">
                <a href='mailto:https://mail.google.com' aria-label=''><Mail className="icons-contactme font-bold h-35 w-35" /></a>  
                <a href='03407145223' aria-label=''><Phone className="icons-contactme font-bold h-35 w-35" /></a>  
                <a href='https://github.com/Shahzadkhan786' aria-label=''><Github className="icons-contactme font-bold h-35 w-35" /></a>  
            </div>
        </footer>
    )
}

export default Footer
