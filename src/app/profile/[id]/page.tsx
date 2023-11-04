// useParams допоможе зловити параметр динамічної сторінки id
'use client'

import { useParams } from "next/navigation"

export default function ProfileId() {
	const params = useParams();
	console.log(params.id);


	return (
		<div className='p-6 text-3xl'>
			ID Dynamic Page
		</div>
	)
}