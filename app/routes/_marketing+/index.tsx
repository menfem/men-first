import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => [{ title: 'Menfem - Home' }]

export default function Index() {
	return (
		<div className="min-h-screen bg-white">
			{/* Navbar */}
			<nav className="bg-white shadow-sm">
				<div className="container mx-auto px-4">
					<div className="flex h-16 items-center justify-between">
						<Link to="/" className="text-xl font-bold">
							MENFEM
						</Link>
						<div className="hidden space-x-8 md:flex">
							<Link
								to="/products"
								className="text-gray-600 hover:text-gray-900"
							>
								Products
							</Link>
							<Link
								to="/documentaries"
								className="text-gray-600 hover:text-gray-900"
							>
								Documentaries
							</Link>
							<Link to="/shop" className="text-gray-600 hover:text-gray-900">
								Shop
							</Link>
							<Link to="/style" className="text-gray-600 hover:text-gray-900">
								Style
							</Link>
							<Link to="/fitness" className="text-gray-600 hover:text-gray-900">
								Fitness
							</Link>
						</div>
						{/* Mobile menu button */}
						<button className="p-2 md:hidden">
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="bg-gray-50 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="mb-4 text-4xl font-bold md:text-6xl">
						Welcome to Menfem
					</h1>
					<p className="mb-8 text-xl text-gray-600">
						Discover the perfect balance of style and substance
					</p>
					<Link
						to="/shop"
						className="rounded-md bg-black px-8 py-3 text-white transition hover:bg-gray-800"
					>
						Explore Now
					</Link>
				</div>
			</section>

			{/* Content Sections */}
			<main className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Featured Products */}
					<section className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="mb-4 text-2xl font-bold">Featured Products</h2>
						<p className="mb-4 text-gray-600">
							Discover our curated selection of premium products.
						</p>
						<Link
							to="/products"
							className="font-semibold text-black hover:underline"
						>
							View Products →
						</Link>
					</section>

					{/* Documentaries */}
					<section className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="mb-4 text-2xl font-bold">Latest Documentaries</h2>
						<p className="mb-4 text-gray-600">
							Explore thought-provoking documentaries and stories.
						</p>
						<Link
							to="/documentaries"
							className="font-semibold text-black hover:underline"
						>
							Watch Now →
						</Link>
					</section>

					{/* Style Guide */}
					<section className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="mb-4 text-2xl font-bold">Style Guide</h2>
						<p className="mb-4 text-gray-600">
							Get inspired with the latest trends and style tips.
						</p>
						<Link
							to="/style"
							className="font-semibold text-black hover:underline"
						>
							Read More →
						</Link>
					</section>
				</div>
			</main>
		</div>
	)
}
