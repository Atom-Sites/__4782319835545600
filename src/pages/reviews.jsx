import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Header from '@/components/Header'


const testimonials = [
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Leslie Alexander',
        imageUrl:
          'https://services.google.com/fh/files/misc/google_g_icon_download.png',
      },
    },
    // More testimonials...
  ]

  export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <Header />
        <Nav />

        {/*Hero for secondary pages*/}
        <div className="bg-primary-100 pt-2 lg:pt-5">
            <div className="relative px-6  lg:px-8">
                <div className="mx-auto max-w-2xl py-12 lg:py-24">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-800 md:text-4xl lg:text-6xl">Our Customer Stories</h1>
                        <p className="mt-6 text-lg leading-8 text-neutral-800">Your community is talking about us. Experience why residents in and around (the city) are raving about us. We provide top-notch (services) services that will exceed your expectations.</p>
                    </div>
                </div>
            </div>
        </div>


    {/*Review Section*/}
        {/*Wrapper Y*/}
        <div className="bg-white py-16 lg:py-20">
            {/*Wrapper X*/}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
                {/*Review*/}
                <div className="mx-auto flow-root max-w-3xl lg:mx-0 lg:max-w-none">
                    <div className="sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.handle} className="sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl bg-neutral-50 p-8 text-sm leading-6">
                                    <div className=' lg:max-h-32 lg:hover:max-h-96 transition-all ease-in-out duration-250 '>

                                    <blockquote className="text-neutral-800">
                                    <p className='lg:line-clamp-5 lg:hover:line-clamp-none'>{`“${testimonial.body}”`}</p>
                                    </blockquote>

                                    </div>

                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                <img className="h-10 w-10 rounded-full bg-neutral-50" src={testimonial.author.imageUrl} alt="Review received from (Source)" />
                                    <div>
                                        <div className="font-semibold text-neutral-800">{testimonial.author.name}</div>
                                    </div>
                                </figcaption>
                                </figure>
                            </div>))}
                    </div>

                    {/* Regular CTA*/}
                    <div className="mt-10 flex items-center justify-center">
                        <div className="flex items-center">
                            <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-primary-700 hover:bg-primary-600 transition-all ease-in text-base py-3 px-4" href="#">Get started today!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                    
        <Footer/>
        </>
    )
}