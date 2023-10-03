import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Socials() {
	return (
		<div>
			<ul className="flex items-center my-10">
				<Link href="https://www.linkedin.com/in/timmarks90/" target="_blank">
					<li className="mr-6 p-2 hover:bg-gray-100 hover:cursor-pointer hover:rounded-md">
						<Image
							src="/linkedin.png"
							alt="LinkedIn"
							width="0"
							height="0"
							sizes="100vw"
							className="social"
						/>
					</li>
				</Link>
				<Link href="https://dribbble.com/timmarks" target="_blank">
					<li className="mr-6 p-2 hover:bg-gray-100 hover:cursor-pointer hover:rounded-md">
						<Image
							src="/dribbble.png"
							alt="Dribbble"
							width="0"
							height="0"
							sizes="100vw"
							className="social"
						/>
					</li>
				</Link>
				<Link href="https://twitter.com/Timmarks90" target="_blank">
					<li className="mr-6 p-2 hover:bg-gray-100 hover:cursor-pointer hover:rounded-md">
						<Image
							src="/x.png"
							alt="X"
							width="0"
							height="0"
							sizes="100vw"
							className="social"
						/>
					</li>
				</Link>
				<Link href="https://github.com/timmarks90" target="_blank">
					<li className="mr-6 p-2 hover:bg-gray-100 hover:cursor-pointer hover:rounded-md">
						<Image
							src="/github.png"
							alt="Github"
							width="0"
							height="0"
							sizes="100vw"
							className="social"
						/>
					</li>
				</Link>
				<Link href={`mailto:timmarks90@gmail.com`} target="_blank">
					<li className="mr-6 p-2 hover:bg-gray-100 hover:cursor-pointer hover:rounded-md">
						<Image
							src="/email.png"
							alt="Email"
							width="0"
							height="0"
							sizes="100vw"
							className="social"
						/>
					</li>
				</Link>
			</ul>
		</div>
	);
}

export default Socials;
