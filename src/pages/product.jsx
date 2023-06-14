import React from 'react'
import CardProduct from '../components/organism/CardProduct'
import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'

const data = [
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.15.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.14.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.13.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.12.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.11.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.10.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.10.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.10.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.10.000.000'
    },
    {
        id: 1,
        image: "public/images/timel.jfif",
        title: 'new title',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
        harga: 'Rp.10.000.000'
    },
]

export default function ProductPage() {
  return (
    <>
        <Header />
        <div className="flex flex-wrap justify-center items-center gap-5 mt-4 mb-14">
            {data.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body title={product.title}>
                        {product.desc}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.harga} />
                </CardProduct>
            ))}
        </div>
        <Footer />
    </>
  )
}
