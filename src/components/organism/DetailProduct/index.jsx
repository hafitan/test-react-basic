import React from 'react'

export default function Detail() {
    const {children} = props
  return (
    <>
        <div className="rounded-lg bg-gradient-to-r from-violet-500 to-sky-500 p-1 shadow-xl">
            <div className="w-full max-w-xs bg-white rounded-lg">
                {children}
            </div>
        </div>
    </>
  )
}

const Header = (props) => {
    const {image} = props
    return (
        <div className="">
            <a href="">
                <img src={image} alt="gambar" width={400} className='p-2 rounded-t-lg' />
            </a>
        </div>
    )
}

const Body = (props) => {
    const {title, children} = props
    return (
        <>
            <div className="px-5">
                <h5 className="text-5xl font-bold text-slate-900">{title}</h5>
                <p className="mt-3 text-slate-300 text-base text-justify">{children}</p>
            </div>
        </>
    )
}

const Footer = (props) => {
    const {price} = props
    return (
        <>
            <div className="flex justify-center items-center">
                <p>Harga: {price}</p>
            </div>
            <div className="w-full px-4 mt-2">
                <Link to='/detail'>
                    <button className="w-full mb-2 rounded-lg text-white p-2 bg-blue-600">Buy</button>
                </Link>
            </div>
        </>
    )
}

Detail.Header = Header
Detail.Body = Body
Detail.Footer = Footer