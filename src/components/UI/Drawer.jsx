import { FaAlignJustify } from 'react-icons/fa6'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'
export default function Drawer({ data, children }) {
  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content w-screen h-screen'>
        <NavBar>
          <label htmlFor='my-drawer' className='btn btn-ghost drawer-button'>
            <FaAlignJustify size={18} />
          </label>
        </NavBar>
        <div className='px-56 mt-14'>{children}</div>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4 flex'>
          {data.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
