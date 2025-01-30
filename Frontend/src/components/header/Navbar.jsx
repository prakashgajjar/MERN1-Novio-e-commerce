import React from 'react'

const Navbar = () => {
    return (
        <>
            <div>
                <nav className='flex justify-between h-12  m-3 mt-5'>
                    <div className='ml-2'>
                        <h1 className='text-black text-4xl font-bold'>Novio</h1>
                    </div>
                    <div>
                        <ul className='flex gap-12 text-sm mr-5 '>
                            <li>SHOP</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                            <li><img className='w-5 h-5' src="public/icons/shopping-cart.png" alt="Shopping Cart Icon" /></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 16h14" />
                            </svg>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar