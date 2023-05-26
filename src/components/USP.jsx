import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function USP() {

    const { data, error } = useSWR('/api/staticdata?filename=usp', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { headerText, uspDescription, features } = data


    return (

        <div className="editable-component relative bg-white py-24 sm:py-32" data-json='usp'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                 {/*This is the section intro*/}
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">{headerText}</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-800">{uspDescription}</p>
                </div>

                 {/*This is the USP Grid*/}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

                         {/*First USP*/}
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading-7  text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-center justify-left rounded-lg bg-transparent">
                                    <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-18 h-18">
                                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                    </span>
                                </div>
                                <span className="font-extrabold">{features[0].name}</span>
                            </dt>

                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[0].description}</p>
                            </dd>
                        </div>

                         {/*Second USP*/}
                        <div className="flex flex-col ">
                            <dt className="text-base font-semibold leading-7 text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-center justify-left rounded-lg bg-transparent">
                                <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-18 h-18">
                                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                    </span>
                                </div>
                                <span className="font-extrabold">{features[1].name}</span>
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[1].description}</p>
                            </dd>
                        </div>

                        {/*Third USP*/}
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading- text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-center justify-left  rounded-lg bg-transparent">
                                <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  24 24" fill="currentColor" className="w-18 h-18">
                                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                    </span>
                                </div>
                                <span className="font-extrabold">{features[2].name}</span>
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[2].description}</p>
                            </dd>
                        </div>


                    </dl>
                </div>
            </div>
        </div>

    )
}

