import ServerPagination from '@/app/products/components/ServerPagination'

// Mock product data (replace with DB/API fetch in production)
const allProducts = [
    'Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5',
    'Product 6', 'Product 7', 'Product 8', 'Product 9', 'Product 10'
]
const pageSize = 3
export default async function ProductsPage({ searchParams }) {
    //searchParam is promise
    const resolvedSearchParams = await searchParams
    const page = Number(resolvedSearchParams.page) || 1
    const totalPages = Math.ceil(allProducts.length / pageSize)
    const pagedProducts = allProducts.slice((page - 1) * pageSize, page * pageSize)
    return (
        <main>
            <h1>Products</h1>
            <ul>
                {pagedProducts.map((product, i) => (
                    <li key={i}>{product}</li>
                ))}
            </ul>
            <ServerPagination currentPage={page} totalPages={totalPages} />
        </main>
    )


}