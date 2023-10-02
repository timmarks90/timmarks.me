import React from 'react';
import Link from 'next/link';

const Product = () => {
	return (
		<div>
			<h2 className="">Product</h2>
			<div>
				<div className="card">
					<div className="sm:flex sm:justify-between sm:content-center pb-2">
						<p className="text-2xl sm:text-4xl font-bold">Lob</p>
						<div className="flex flex-col sm:items-end">
							<p className="text-md sm:text-lg font-medium text-gray-500">
								Director of Product
							</p>
							<p className="text-gray-400">2021-Current</p>
						</div>
					</div>
					<p>
						I help run the product team at{' '}
						<Link
							className={`font-medium`}
							href="https://www.lob.com"
							target="_blank"
						>
							Lob
						</Link>
						, a marketplace platform that makes it easy for customers to send
						and automate large scale direct mail campaigns.
					</p>
				</div>
				<div className="card">
					<div className="sm:flex sm:justify-between sm:content-center pb-2">
						<div className="flex">
							<p className="text-2xl sm:text-4xl font-bold pr-4">Gubagoo</p>
							<p className="bg-green-100 text-green-700 rounded-full px-4 flex items-center text-sm font-medium">
								Acquired
							</p>
						</div>
						<div className="flex flex-col sm:items-end">
							<p className="text-md sm:text-lg font-medium text-gray-500">
								Director of Product
							</p>
							<p className="text-gray-400">2018-2021</p>
						</div>
					</div>
					<p>
						I ran the product team at{' '}
						<Link
							className={`font-medium`}
							href="https://www.gubagoo.com"
							target="_blank"
						>
							Gubagoo
						</Link>
						, where we built products enabling automotive dealerships and their
						customers to sell and buy cars fully online.
					</p>
				</div>
				<div className="card">
					<div className="sm:flex sm:justify-between sm:content-center pb-2">
						<div className="flex">
							<p className="text-2xl sm:text-4xl font-bold pr-4">Cohley</p>
						</div>
						<div className="flex flex-col sm:items-end">
							<p className="text-md sm:text-lg font-medium text-gray-500">
								Design Consultant
							</p>
							<p className="text-gray-400">2020-2022</p>
						</div>
					</div>
					<p>
						I designed core product experiences and built the the marketing .com
						website for{' '}
						<Link
							className={`font-medium`}
							href="https://www.cohley.com"
							target="_blank"
						>
							Cohley
						</Link>
						, a leading social marketplace that connects brands with social
						media influencers.
					</p>
				</div>
				<p>
					See more on{' '}
					<Link
						className={`font-medium`}
						href="https://www.linkedin.com/in/timmarks90/"
						target="_blank"
					>
						LinkedIn
					</Link>{' '}
				</p>
			</div>
		</div>
	);
};

export default Product;
