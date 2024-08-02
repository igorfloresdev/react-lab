import React from 'react'
import { FaFlask, FaGithub } from 'react-icons/fa6'
import Button from './Button'

export default function NavBar({ children }) {
  return (
    <div className='navbar bg-base-300 px-4'>
      <div className='flex-none'>{children}</div>
      <div className='flex-1 justify-center'>
        <a className='btn btn-ghost text-xl' href='/'>
          React Labs
          <FaFlask />
        </a>
      </div>
      <div className='flex-none'>
        <Button className='btn-ghost'>
          <FaGithub size={30} />
        </Button>
      </div>
    </div>
  )
}
