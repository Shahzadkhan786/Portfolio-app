import React from 'react'
import { contactMeText } from '../data/data'
import { Form } from './components/form'
import { Mail } from 'lucide-react'


const ContactMePage= () => {
    return(
        <div className='flex flex-col sm:flex flex-row'>
            <h2 className='px-16 py-4'><b>CONTACT ME:</b></h2>
            <div className='flex flex-row w-9/12 content-center m-auto gap-20'>
              <div className=" flex flex-col w-2/4">
                    <h3 className='py-4 text-[24px] '><b>{contactMeText.title}</b></h3>
                    <p>{contactMeText.body}</p>
                
              </div >
              <div className="sm:place-items-end w-2/4"><Form /></div>
            </div>
        </div>
    )
}
export default ContactMePage