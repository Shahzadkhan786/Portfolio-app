import Image from "next/image"
import React from "react"

type ProjectCardProps = {
    data: {
		title: string;
		body1: string;
		body2: string;
		image: string;
		
	};
};
const ProjectCard = ({data}: ProjectCardProps) =>{
    const {title ,body1,body2,image}=data;
    return(
        <div className='rounded-lg shadow-lg bg-grey-light w-full sm:w-1/3-g'>
            <Image 	
                aria-label={`Image of ${title}`}
                src={`/images/${image}`}
				alt={`Image of ${title}`} 
				height={250}
				width={500}
				className='w-full h-48 object-cover'
				priority={false}
            />
            <div className="p-4">
                <h3 className="text-lg font-medium">{title}</h3>
                  <p className="text-sm mt-2 min-h-50">{body1}</p>
                  <p className="text-sm mt-2 min-h-50">{body2}</p>
            </div>
        </div>
        
    )
}

export default ProjectCard