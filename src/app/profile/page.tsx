'use client'

import { useRouter} from 'next/navigation';

export default function Profile() {
	const router = useRouter();

  return (
    <div>
      <h1 className="p-6 text-3xl">My list of profiles</h1>
      <div className='pl-6'>
        <u className='list-none no-underline text-blue-400 flex flex-col gap-2'>
          <li onClick={() => router.push('/profile/1')} className='cursor-pointer transition ease-in-out delay-100 hover:text-red-400'>Profile 1</li>
          <li onClick={() => router.push('/profile/2')} className='cursor-pointer transition easy-in-out delay-100 hover:text-red-400'>Profile 2</li>
          <li onClick={() => router.push('/profile/3')} className='cursor-pointer transition ease-in-out delay-100 hover:text-red-400'>Profile 3</li>
        </u>
      </div>
    </div>
  );
}
