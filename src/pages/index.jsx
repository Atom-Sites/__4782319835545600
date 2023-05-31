import React, { useEffect } from 'react'

import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Service'
import Header from '@/components/Header'

import USP from '@/components/USP'
import Testimonials from '../components/Testimonials'
import extractValues from '@/utils/extractValues'
import Head from 'next/head';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Home() {
    const { data, error } = useSWR('/api/staticdata?filename=index.schema.json&page=true', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { title, description, imageUrl, pageName } = extractValues(data)

    console.log(data);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta property="og:title" content={pageName} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageUrl} />
            </Head>
            <Header />
            <Nav />
            <Hero />
            <USP />
            <Services />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    )
}
