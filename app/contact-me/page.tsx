import React from 'react'
import { contactMeText } from '../data/data'
import { Form } from './components/form'
import { Mail, Phone } from 'lucide-react'


const ContactMePage= () => {
    return(
        <div className='flex flex-col sm:flex flex-row'>
            <h2 className='px-16 py-4'><b>CONTACT ME:</b></h2>
            <div className='flex flex-row w-9/12 content-center m-auto gap-20'>
              <div className=" flex flex-col w-2/4">
                    <h3 className='py-4 text-[24px] '><b>{contactMeText.title}</b></h3>
                    <p>{contactMeText.body}</p>
                <div className="pt-8 absolute bottom-20 ">
                    <p><Mail className="inline-flex"/>shahzadaktarkhanjadoon567@gmail.com</p>
                    <p><Phone className="inline-flex"/>+92340 7145223</p>
                </div>
              </div >
              <div className="sm:place-items-end w-2/4"><Form /></div>
            </div>
        </div>
    )
}
export default ContactMePage