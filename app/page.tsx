import Image from "next/image";
import React from "react";
import { aboutMeData } from "./data/data";

const AboutMePage = () => {
	return (
		<div className='flex flex-col items-center'>
			<section className='flex sm:flex-row sm:w-10/12 items-center flex-col w-full'>
				<div className=' fixed-w w-full sm:w-1/3-g flex justify-center mt-12 rounded-full border-2'>
					<Image
						priority={false}
						width={480}
						height={640}
						aria-label={"image of WhatsApp Image 2023-05-28 at 12.53.47 PM.jpeg"}
						alt={"WhatsApp Image 2023-05-28 at 12.53.47 PM.jpeg"}
						src={"/images/Shahzad.png"}
						className='profileImage'
					/>
				</div>
				<div className='sm:ml-20 sm:mt-0  sm:w-2/3 w-full mt-6 ml-0 p-10'>
					<h2 className=''> {aboutMeData.title}</h2>
					<p className='text-base'> {aboutMeData.body}</p>
				</div>
			</section>
			<section className='bg-orange w-full p-4 text-center h-48'>
				 <b>{aboutMeData.highlightedBody}</b>
			</section>
			<section className='flex sm:flex-row sm:w-10/12 p-10 items-center w-full flex-col'>
				<div className='flex flex-col  w-full mb-10 sm:mb-0 sm:w-7/12'>
					 {aboutMeData.body2}
				</div>
				<div className='sm:w-5/12 sm:ml-10 w-full ml-0 border-4'>
					<Image
						priority={false}
						width={500}
						height={250}
						aria-label={"image of kaitlyn-baker-vZJdYl5JVXY-unsplash"}
						alt={"kaitlyn-baker-vZJdYl5JVXY-unsplash"}
						src={"/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg"}
						className='h-250 object-cover w-500'
					/>
				</div>
			</section>
		</div>
	);
};

export default AboutMePage;
