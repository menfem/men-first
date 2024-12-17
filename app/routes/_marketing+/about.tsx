import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [
		{ title: "About MenFem - Men's Product & Marketing Reviews" },
		{
			name: 'description',
			content:
				"MenFem provides expert reviews and insights on men's fashion, fitness products, and design, helping men make informed decisions about their lifestyle choices.",
		},
	]
}

export default function AboutRoute() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="relative px-6 lg:px-8">
				<div className="mx-auto max-w-3xl pb-32 pt-20">
					<div>
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Elevating Men's Lifestyle Choices
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								At MenFem, we're dedicated to helping men make informed
								decisions about products and services that enhance their
								lifestyle, with a focused expertise in design, fashion, and
								fitness.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Services Section */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Services
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							Comprehensive reviews and insights tailored for the modern man
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							{/* Design Reviews */}
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									Design Reviews
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Expert analysis of product design, from tech gadgets to home
										furnishings, focusing on aesthetics, functionality, and
										value.
									</p>
								</dd>
							</div>

							{/* Fashion Insights */}
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									Fashion & Clothing
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										In-depth reviews of men's fashion, from everyday essentials
										to luxury items, helping you build a versatile and stylish
										wardrobe.
									</p>
								</dd>
							</div>

							{/* Fitness Equipment */}
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									Fitness Solutions
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Comprehensive reviews of fitness equipment, supplements, and
										workout gear, backed by real testing and expert analysis.
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>

			{/* Mission Statement */}
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-4xl">
						<h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Mission
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							MenFem is committed to providing honest, detailed, and practical
							reviews that help men make confident decisions about their
							purchases. We believe that well-informed choices lead to better
							lifestyle outcomes, whether it's choosing the right workout
							equipment, updating your wardrobe, or selecting products that
							align with your personal style.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
