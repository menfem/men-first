import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Home' }]

export default function Index() {
	return (
		<main className="min-h-screen">
			<div className="container mx-auto p-4">
				<h1>Menfem</h1>
			</div>
		</main>
	)
}
