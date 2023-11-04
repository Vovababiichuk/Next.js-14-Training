'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Profile() {
  const router = useRouter();

  return (
    <div>
      <h1 className="p-6 text-3xl">My list of profiles</h1>
      <div className="pl-6 mb-2">
        <u className="list-none no-underline text-blue-400 flex flex-col gap-2">
          <li
            onClick={() => router.push('/profile/1')}
            className="cursor-pointer transition ease-in-out delay-100 hover:text-red-400">
            Profile 1 (router.push - onClick)
          </li>
          <li
            onClick={() => router.push('/profile/2')}
            className="cursor-pointer transition easy-in-out delay-100 hover:text-red-400">
            Profile 2 (router.push - onClick)
          </li>
          <li
            onClick={() => router.push('/profile/3')}
            className="cursor-pointer transition ease-in-out delay-100 hover:text-red-400">
            Profile 3 (router.push - onClick)
          </li>
        </u>
      </div>

      <hr className="mb-2" />

      <div className="pl-6 mb-2">
        <ul className="list-none no-underline text-yellow-400 flex flex-col gap-2">
          <li>
            <Link
              href="/profile/1"
              className="cursor-pointer transition ease-in-out delay-100 hover:text-blue-400">
              Profile 1 (Link)
            </Link>
          </li>
          <li>
            <Link
              href="/profile/2"
              className="cursor-pointer transition easy-in-out delay-100 hover:text-blue-400">
              Profile 2 (Link)
            </Link>
          </li>
          <li>
            <Link
              href="/profile/3"
              className="cursor-pointer transition ease-in-out delay-100 hover:text-blue-400">
              Profile 3 (Link)
            </Link>
          </li>
        </ul>
      </div>

      <hr className="mb-2" />

      <a href="https://tailwindcss.com/docs/transition-property" className='ml-6 text-purple-400 mb-2 block'>Tailwind (outside link- a)</a>

      <hr className="mb-2" />

      <Link
        className='ml-6 text-green-500'
        href={{
          pathname: '/profile/4',
          query: {
            userName: 'John Doe',
          }
        }}
        
        >Query Link</Link>
    </div>
  );
}
