
export default async function ShopCateory({ params }) {
    const values = await params
    return <h1>Shop Page -Category {JSON.stringify(values)}</h1>
}
