import photos from "@/app/mock-data/photo"
// import Image from "next/image"
import Frame from "@/app/components/frame"

export default async function PhotoDetailsPage({ params }) {
    const id = (await params).id
    const photo = photos.find(photo => photo.id === id)
    return <div className="container mx-auto my-10">
        {/* <Image alt="Your Image"
            src={photo.imageSrc}
            height={100}
            width={100}
            className="w-full object-cover aspect-square"
        /> */}
        <Frame photo={photo} />

    </div>
}