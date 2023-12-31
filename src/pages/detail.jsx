import { useState } from 'react';
import React from 'react';
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';

export default function DetailProduct() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex  min-h-screen">
        <div className="flex  items-center">
          <div className="flex justify-center w-full">
            <div className="w-[25%]">
              <div className="mt-5 px-20 ">
                <img src="public/images/timel.jfif" width={300} alt="gambar" />
              </div>
              <div className="mt-10 px-36 flex  ">
                <button
                  onClick={() => setCount((count) => count > 0 ? count - 1 : 0)}
                  className="bg-blue-400 w-12 rounded-lg"
                >
                  -
                </button>
                <p className="w-10 text-center">{count}</p>
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="bg-blue-400 w-12 rounded-lg"
                >
                  +
                </button>
              </div>
              <div className="mt-10 px-36">
                <button className="w-28 bg-blue-400 rounded-lg">beli</button>
              </div>
            </div>
            <div className="w-1/2">
                <div className="flex justify-between">
                    <h1 className='font-bold text-2xl'>big title</h1>
                    <img src="images/lop.svg" width={50} alt="" />
                </div>
              <div className="mt-5 px-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quisquam repellat numquam illum
                  officiis aperiam vel distinctio, accusantium possimus non rem, commodi atque eaque? Voluptates maiores
                  accusantium qui aliquid, aliquam et nam exercitationem eligendi dignissimos dolorem asperiores quo,
                  facere quasi tempora dolor sint consequatur laboriosam deleniti ipsum ipsa repudiandae quis at.
                  Repellendus expedita quos ducimus illo modi beatae, aspernatur alias iure totam repellat incidunt
                  neque accusantium nihil voluptate voluptas vero. Molestiae maiores illum quas dolore dignissimos.
                  Similique consectetur dolor voluptas, nam quisquam laborum totam, illum necessitatibus quaerat,
                  dignissimos ipsa obcaecati enim asperiores numquam debitis quae saepe corporis quam rerum et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}