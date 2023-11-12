'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navigation = () => {
	const [activeLink, setActiveLink] = useState('');
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true); // Component is now mounted
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		const handleScroll = () => {
			const sections = document.querySelectorAll('section');
			let activeSection = '';

			sections.forEach((section) => {
				const sectionTop = section.offsetTop - 60;
				const sectionHeight = section.offsetHeight;
				const isBottomOfPage =
					window.innerHeight + window.scrollY >= document.body.offsetHeight;

				if (
					(window.scrollY >= sectionTop &&
						window.scrollY < sectionTop + sectionHeight) ||
					(isBottomOfPage && section.id === 'coding')
				) {
					activeSection = section.getAttribute('id') || '';
				}
			});

			setActiveLink(activeSection);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Call it to set initial active section

		return () => window.removeEventListener('scroll', handleScroll);
	}, [isMounted]);

	return (
		<div className="flex justify-between w-fit p-2 text-center m-auto items-center mb-20 bg-white border border-gray-100 shadow-sm rounded-full fixed left-0 right-0 z-10">
			<Link
				href="#intro"
				className={`${
					activeLink === 'intro' ? 'active' : ''
				} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer`}
			>
				Intro
			</Link>

			<Link
				href="#product"
				passHref
				className={`${
					activeLink === 'product' ? 'active' : ''
				} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer`}
			>
				Product
			</Link>

			<Link
				href="#design"
				passHref
				className={`${
					activeLink === 'design' ? 'active' : ''
				} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer`}
			>
				Design
			</Link>
			<Link
				href="#coding"
				passHref
				className={`${
					activeLink === 'coding' ? 'active' : ''
				} px-2 sm:px-4 py-2 hover:bg-gray-100 hover:rounded-full hover:cursor-pointer`}
			>
				Coding
			</Link>
		</div>
	);
};

export default Navigation;
