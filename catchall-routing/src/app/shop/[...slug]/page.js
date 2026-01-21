export default async function ShopCategory({ params }) {
    const values = await params
    return <div>
        <h1>Shop Cateogry : {JSON.stringify(values)}</h1>
    </div>
}