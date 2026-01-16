'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

//mock data - array simulating products
const allProducts = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    'Product 6',
    'Product 7',
    'Product 8',
    'Product 9',
    'Product 10',
]
const pageSize = 3

export default function Pagination() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const intialPage = Number(searchParams.get('page')) || 1
    const [page, setPage] = useState(intialPage)
    const pagedProducts = allProducts.slice((page - 1) * pageSize, page * pageSize)

    //set page size: componentDidUpdate which is called when ever the page is changing
    useEffect(() => {
        const currentPage = Number(searchParams.get('page')) || 1
        if (currentPage !== page) {
            setPage(currentPage)
        }
    }, [searchParams])
    const changePage = (newPage) => {
        //Ensure that page is within total page Count bounds
        if (newPage < 1 || newPage > Math.ceil(allProducts.length / pageSize)) {
            return
        }
        setPage(newPage)
        //update the url with new Page 
        router.push(`/products?page=${newPage}`, undefined, { shallow: true })
    }

    return <div>
        <h1>Paginated Product List</h1>
        <ul>
            {pagedProducts.map((product, index) => {
                return <li key={index}>
                    {product}
                </li>
            })}
        </ul>
        <button
            disabled={page <= 1}
            onClick={() => changePage(page - 1)}
        >Previous</button>
        <button disabled={page >= Math.ceil(allProducts.length / pageSize)}
            onClick={() => changePage(page + 1)}
        >Next</button>
        <p>Page {page} of {Math.ceil(allProducts.length / pageSize)}</p>
    </div>
}