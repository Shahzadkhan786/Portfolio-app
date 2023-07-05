import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
	name: string;
	pages: {
		id: number;
		label: string;
		link: string;
	}[];
};

const Header = ({ name, pages }: HeaderProps) => {
	return (
		<header className='bg-orange flex flex-col relative w-full h-48'>
			<div className='flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10'>
				<nav className='text-right flex flex-row sm:gap-6 self-end gap-1'>
					{pages.map((page) => {
						return (
							<Link
								aria-label={page.label}
								key={page.id}
								href={page.link}
								className='rounded-md px-6 py-2 min-w-100 hover:bg-blue-light hover:text-orange font-display uppercase tracking-wide sm:bg-none
								bg-white'
							>
								{page.label}
							</Link>
						);
					})}
				</nav>
				<p className='text-white uppercase pl-2 sm:pl-0 text-[36px]'><b> Shahzad Akhtar </b></p>
			</div>
			<Image
				priority
				height={400}
				width={2000}
				className='w-full h-48 object-cover object-top absolute mb-6'
				src='/images/pakistan.jpg'
				alt={`Image of ${name}`}
				aria-label={`Image of ${name}`}
			/>
		</header>
	);
};
export default Header

