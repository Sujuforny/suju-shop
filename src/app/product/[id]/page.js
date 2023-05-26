import { getProduct } from '@/app/page';
import CardProductDetailComponent from '@/components/CardProductDetailComponent';
import CardComponent from '@/components/CardComponent';
import React from 'react'


//Get API product
export async function getProductDetail(id) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const data = await res.json();
    return data;
}
export async function generateMetadata({ params }) {
        // read route params
        const id = params.id
    
        // fetch data
        const product = await getProductDetail(id)
    
        return {
        title: product.title,
        description: product.description,
        image: product.images,
        openGraph: {
            type: "website",
            
            
            url: `https://escuelajs.co/product/${id}`,
            title: product.title,
            description: product.description,
            images: [
            {
                url: product.images,
                width: 800,
                height: 600,
            },
            ],
        },
        }
    }
export default async function page({ params }) {
    const productDetail = await getProductDetail(params.id);
    const product = await getProduct();
    return (
        <main className=' pt-44 px-24'>
            <h1 className='text-center pb-5'>Detail Product</h1>
            <section className='flex justify-center'>
            <CardProductDetailComponent image={productDetail.images} description={productDetail.description} />
            </section>
            <section className="flex flex-row flex-wrap items-center justify-between pb-24 pt-10 ">
                {
                    product.map((product) => (
                        <CardComponent id={product.id} title={product.title} price={product.price} image={product.images[0]} />
                    ))
                }
            </section>
        </main>
    )
}
