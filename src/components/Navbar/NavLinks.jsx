import React from 'react'

const NavLinks = () => {

    const links = [
        {
            name: "Men",
            submenu: true,
            sublinks: [
                {
                    Head: "TopWear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Bottom Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Inner Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "sleep Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Foot Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
            ]
        },
        {
            name: "Women",
            submenu: true,
            sublinks: [
                {
                    Head: "TopWear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Bottom Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Inner Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "sleep Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Foot Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
            ]
        },
        {
            name: "Kid's",
            submenu: true,
            sublinks: [
                {
                    Head: "TopWear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Bottom Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Inner Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "sleep Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
                {
                    Head: "Foot Wear",
                    sublink: [
                        { name: 'T-shirt', link: "/" },
                        { name: 'Casual Shirts', link: "/" },
                        { name: 'Formal Shirts', link: "/" },
                        { name: 'T-shirt', link: "/" },
                    ]

                },
            ]
        },
    ]

    return (
        <>
            {links.map(link => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7'>{link.name}</h1>
                        {link.submenu && <div>
                            <div className='absolute top-22 hidden group-hover:block hover:block '>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                                </div>
                                <div className='bg-white p-5 grid grid-cols-3 gap-10 '>

                                    {
                                        link.sublinks.map((mysublinks) => (
                                            <div>
                                                <h1 className='text-lg font-semibold '>{mysublinks.Head}</h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li className='text-sm text-gray-600 my-2.5'>
                                                        <a href={slink.link} className='hover:text-blue-600'>{slink.name}</a>
                                                    </li>
                                                ))}

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            ))}
        </>
    )
}

export default NavLinks