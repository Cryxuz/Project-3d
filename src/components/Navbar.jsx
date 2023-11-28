import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='w-14 h-14 rounded-full bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text text-xl px-5'>Paul</p>
      </NavLink>
      <nav className='flex md:text-lg gap-2 md:gap-20 font-medium h-10 rounded-lg md:bg-white items-center justify-center md:shadow-md px-8'>
        <NavLink to='/about' className={({ isActive }) => isActive ?
        'text-blue-500' : 'text-black'} >
         About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ?
        'text-blue-500' : 'text-black'} >
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ?
        'text-blue-500' : 'text-black'} >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar