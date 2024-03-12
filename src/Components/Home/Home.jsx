import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>

            <section className="bg-[url('https://images.unsplash.com/photo-1664902270856-e6774c9df737?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover pt-20 md:pt-40 h-screen flex items-center">
                <div className="container mx-auto px-8  text-center justify-center lg:flex">
                    <div className="text-center flex-row justify-center items-center lg:text-center lg:w-1/2">
                        <h1 className="text-4xl text-center  lg:text-5xl xl:text-6xl font-bold leading-none text-white">The hospital you trust to care for those you love</h1>
                        <p className="text-xl text-white  text-center lg:text-2xl mt-6 font-light">Free landing page template to promote your business startup
                            and generate leads for the offered services</p>

                        <button className=' bg-white pl-10 pr-10 pt-2 pb-2 mt-5 rounded-lg items-center text-black ' >Meet Our Specialists</button>

                    </div>

                </div>
            </section >

            <section className="bg-blue-400 bg-cover py-64 md:pt-40  flex items-center">
                <div className="container mx-auto px-8  text-center justify-center lg:flex">
                    <div className="text-center flex-col justify-center items-center lg:text-center lg:w-1/2">
                        <h1 className="text-1xl text-center  lg:text-2xl xl:text-3xl  leading-none text-white pb-8 border-b-2">Our Medical Service</h1>

                        <p className="text-white  text-center lg:text-1xl mt-6 mb-6 font-light">Medical service means any medical treatment or any medical, surgical, diagnostic, chiropractic, dental, hospital, nursing, ambulances, and other related services, and drugs, medicine, crutches and prosthetic appliances, braces and supports and where necessary, physical restorative services.
                            Medical service means any medical treatment or any medical, surgical, diagnostic, chiropractic, dental, hospital, nursing, ambulances, and other related services, and drugs, medicine, crutches and prosthetic appliances, braces and supports and where necessary, physical restorative services.</p>

                        <button className=' bg-blue-300 pl-10 px-10 py-3 mt-5 rounded-lg items-center text-white ' >Meet Our Specialists</button>

                    </div>

                </div>
            </section >

            <section className="bg-slate-100 bg-cover py-64  px-64 flex items-center gap-5">


                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Oncologists</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Audiologist</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Dentist</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>


            </section >


            <section className="bg-slate-200 bg-cover py-64  px-64 flex items-center gap-5">


                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">News</h2>
                        <p className=" text-sm dark:text-gray-400">Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources. Resources.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col bg-slate-300 p-5 rounded-lg">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Blog</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">It Sector hire</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>12 March, 2024</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-slate-300 p-5 rounded-lg">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Blog</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">It Sector hire</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>12 March, 2024</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-slate-300 p-5 rounded-lg">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Blog</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">It Sector hire</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>12 March, 2024</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-slate-300 p-5 rounded-lg">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Blog</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">It Sector hire</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>12 March, 2024</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </section>




        </>
    );
}