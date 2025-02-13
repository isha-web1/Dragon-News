import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-[poppins]'>
           <Header/>
           <section className='w-5/6 mx-auto'>
           <LatestNews/>
           </section>
           <section className='w-5/6 mx-auto py-2'>
            <Navbar/>
           </section>
           <main className='w-5/6 mx-auto py-5 grid md:grid-cols-12 gap-3'>
            <aside className='col-span-3'>Left Navbar</aside>
            <aside className='col-span-6'>main content</aside>
            <aside className='col-span-3'>Right content</aside>
           </main>
        </div>
    );
};

export default HomeLayout;