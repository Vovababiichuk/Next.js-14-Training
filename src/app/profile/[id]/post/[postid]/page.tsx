'use client'
import { useParams } from "next/navigation"

export default function ProfilePostId() {
	const params = useParams();

	console.log('id')
	console.log(params)
	console.log(params.id)
	console.log(params.postid)

	return (
		<div className='p-6 text-3xl'>
			Post ID Page
		</div>
	)
}