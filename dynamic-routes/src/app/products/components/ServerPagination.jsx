import Link from 'next/link'
import './styles.css'

export default function ServerPagination({ currentPage, totalPages }) {
    console.log(currentPage)
    return (
        <nav>
            {currentPage > 1 ? (
                <Link href={`/products?page=${currentPage - 1}`}>
                    Previous    |
                </Link>
            ) : (
                <span className="disabled">Previous | </span>
            )}
            {currentPage < totalPages ? (
                <Link href={`/products?page=${currentPage + 1}`}>
                    Next
                </Link>
            ) : (
                <span className="disabled">Next</span>
            )}
            <div>
                <span>Page {currentPage} of {totalPages}</span>
            </div>

        </nav>
    )
}
