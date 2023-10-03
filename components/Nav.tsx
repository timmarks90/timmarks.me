'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navigation = () => {
	const [activeLink, setActiveLink] = useState('');
	console.log('nav');

	useEffect(() => {
		console.log('useffect');
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const sections = document.querySelectorAll('section');

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionId = section.getAttribute('id') || '';
				if (scrollY >= sectionTop - 60) {
					setActiveLink(sectionId);
				}
			});
		};

		handleScroll(); // Initialize active link on page load
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="flex justify-between w-fit p-2 text-center m-auto items-center mb-20 bg-white border border-gray-100 shadow-sm rounded-full sm:fixed relative sm:left-0 sm:right-0 z-10">
			<Link
				href="#intro"
				passHref
				scroll={false}
				className="{activeLink === 'intro' ? 'active' : ''} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer"
			>
				Intro
			</Link>

			<Link
				href="#product"
				passHref
				scroll={false}
				className="{activeLink === 'product' ? 'active' : ''} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer"
			>
				Product
			</Link>

			<Link
				href="#design"
				passHref
				scroll={false}
				className="{activeLink === 'design' ? 'active' : ''} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer"
			>
				Design
			</Link>
			<Link
				href="#coding"
				passHref
				scroll={false}
				className="{activeLink === 'coding' ? 'active' : ''} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer"
			>
				Coding
			</Link>
		</div>
	);
};

export default Navigation;
