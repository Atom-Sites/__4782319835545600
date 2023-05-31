import React, { useEffect } from 'react';
import useSWR from 'swr';

import extractValues from '@/utils/extractValues'
import Head from 'next/head';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Header({pagename}) {
    const { data: company_data, error: company_error } = useSWR('/api/staticdata?filename=company_id', fetcher);

    const { data, error } = useSWR(`/api/staticdata?filename=${pagename}.schema.json&page=true`, fetcher)


    const { title, description, imageUrl, pageName } = extractValues(data)



    useEffect(() => {
        if (!data) return;

        const { company_id } = company_data;

        const src = `https://cdn.nicejob.co/js/sdk.min.js?id=${company_id}`;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);

        // Clean up function to remove the script when the component is unmounted
        return () => {
            document.head.removeChild(script);
        };
    }, [data]);

    if (error || company_error) return <div>failed to load</div>
    if (!data || ! company_data) return <div>loading...</div>

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <meta property="og:title" content={pageName} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
        </Head>
    )
}
