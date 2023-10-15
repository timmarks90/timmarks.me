import Link from 'next/link';

interface DribbbleShot {
	id: number;
	html_url: string;
	images: {
		two_x: string;
	};
	title: string;
}

async function DribbbleFetch() {
	const res = await fetch(
		`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_ACCESS_TOKEN}`
	);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export default async function DribbblePage() {
	const data = await DribbbleFetch();
	const limitedData = data.slice(0, 8);
	return (
		<div>
			<ul className="flex justify-between flex-wrap">
				{limitedData.map((shot: DribbbleShot) => (
					<li key={shot.id} className="py-8 sm:pr-8 w-full sm:w-1/2">
						<Link href={shot.html_url} target="_blank">
							<img
								src={shot.images.two_x}
								alt={shot.title}
								className="w-full rounded-sm"
							/>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
