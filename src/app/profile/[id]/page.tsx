// useParams допоможе зловити параметр динамічної сторінки id
'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ProfileId() {
  const params = useParams();
  const router = useRouter();
	console.log(router)

  return (
    <div>
      <div className="p-6 text-3xl">Profile page id: {params.id}</div>

      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
