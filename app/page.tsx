import DribbblePage from '../components/Dribbble';
import Socials from '@/components/Socials';
import Product from '@/components/Product';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="m-auto mt-3 sm:mt-6 w-full max-w-5xl px-8">
			<section id="intro">
				<Nav />
				<div className="h-screen flex items-center justify-start">
					<div>
						<div className="mb-10">
							<Image
								src="/Tim-Marks.jpg"
								alt="Tim Marks"
								priority={true}
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: '240px', height: 'auto', borderRadius: '8px' }}
							/>
						</div>
						<div className="m-auto">
							<h1 className="mb-6">
								Hey new friend! <span className="wave">👋</span> I'm Tim.
							</h1>
							<h3>
								A product and design leader passionate about building modern and
								delightful products.
							</h3>
						</div>
						<div className="mt-20">
							<Socials />
						</div>
					</div>
				</div>
			</section>
			<section id="product">
				<Product />
			</section>
			<section id="design">
				<h2 className="mt-20 mb-4">Design</h2>
				<p>
					Diving deep into design and the overall user journey is a passion of
					mine. Here's a few highlights posted on my{' '}
					<Link
						className={`font-medium`}
						href="https://dribbble.com/timmarks"
						target="_blank"
					>
						Dribbble.
					</Link>{' '}
				</p>
				<DribbblePage />
			</section>
			<section id="coding">
				<h2 className="mt-20 mb-4">Coding</h2>
				<p>
					I'm well versed in various no code platforms such as Framer, Webflow,
					and Squarespace, and I enjoy dabbling in code directly. Latest
					preferred stack:
				</p>
				<ul className="mt-8 flex justify-start sm:justify-between flex-col sm:flex-row w-fit sm:space-x-4">
					<li className="p-2 sm:text-center items-center mb-2 sm:mb-20 bg-white border border-gray-100 shadow-sm">
						Next JS / Typescript
					</li>
					<li className="p-2 sm:text-center items-center mb-2 sm:mb-20 bg-white border border-gray-100 shadow-sm">
						Tailwind CSS
					</li>
					<li className="p-2 sm:text-center items-center mb-2 sm:mb-20 bg-white border border-gray-100 shadow-sm">
						Supabase
					</li>
					<li className="p-2 sm:text-center items-center mb-2 sm:mb-20 bg-white border border-gray-100 shadow-sm">
						Vercel
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-10 py-10 text-center border-t border-t-1  border-gray-100">
				<p className="text-4xl">Want to chat?</p>

				<p className="text-lg mt-2">
					<Link href={`mailto:timmarks90@gmail.com`} target="_blank">
						timmarks90@gmail.com
					</Link>
				</p>

				<p className="text-sm mt-8">Built with Next JS and Tailwind CSS 🤙</p>
			</section>
		</main>
	);
}
