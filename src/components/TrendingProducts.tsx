import React from 'react'
import ProductCard, { ProductType } from './mini/ProductCard'
import Heading from './mini/Heading'
import PromotedCategory from './mini/PromotedCategory'
import ProductBar from './mini/ProductBar'

const TrendingProducts = () => {
    const products: ProductType[] = [{title: "Cantilever chair", image:'/product11.png', price: 26.00, discountPrice: 49.00}, {title: "Cantilever chair", image:'/product12.png', price: 26.00, discountPrice: 49.00}, {title: "Cantilever chair", image:'/product13.png', price: 26.00, discountPrice: 49.00}, {title: "Cantilever chair", image:'/product14.png', price: 26.00, discountPrice: 49.00}]

    const minproducts: ProductType[] = [{title: "Executive Seat Chair", price: 32.00, image: "/product15mini.png"}, {title: "Executive Seat Chair", price: 32.00, image: "/product16mini.png"}, {title: "Executive Seat Chair", price: 32.00, image: "/product17mini.png"}]
    return (
        <div className='w-full px-5 lg:px-40 py-10'>
            <Heading text='Trending Products' />
            <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5 lg:gap-10'>
                {products.map((product, index) => (
                    <ProductCard key={index} data={product} designType='SIMPLE 1/4' />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4">
                <div className='md:col-span-3'>
                    <PromotedCategory title='23% off in all products' btn='Shop Now' image={{src: '/promoted.png', width: 200, height: 200}} isActive={false} />
                </div>
                <div className='md:col-span-3'>
                    <PromotedCategory title='23% off in all products' image={{src: '/promoted2.png', width: 312, height: 173}} isActive={true} btn='View Collection' />
                </div>
                <div className='flex md:col-span-6 lg:col-span-2 flex-col md:flex-row lg:flex-col gap-2'>
                    {minproducts.map((product, index) => (<ProductBar key={index} data={product} />))}
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts