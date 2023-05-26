import React from 'react'

export default function CardProductDetailComponent({image, description}) {
    return (
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </a>
    )
}
 