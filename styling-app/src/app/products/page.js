import Image from "next/image"

export async function fetchProducts() {
    const url = `https://fakestoreapi.com/products`
    const response = await fetch(url)
    return response.json()
}

export default async function ProductsPage() {
    const products = await fetchProducts()
    return <div style={{ marginLeft: 150, marginTop: 10 }}>
        <h1>Products</h1>
        {products.map(product => {
            return <section key={product.id}>
                <h2>{product.id}</h2>
                <h3>{product.title}</h3>
                <Image
                    src={product.image}
                    height={100}
                    width={100}
                    alt="Image"
                />
            </section>
        })}
    </div>
}