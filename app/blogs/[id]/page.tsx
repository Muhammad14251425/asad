import { blogData } from "@/lib/blog"
import Image from "next/image"
import { redirect } from "next/navigation"

interface SelectedBlogzProps {
    params: {
        id: string
    }
}

const SelectedBlogz = ({ params }: SelectedBlogzProps) => {
    const filteredBlogs = blogData.find((blog) => blog.id === Number(params.id))
    if (filteredBlogs) {
        return (
            <div className='max-w-6xl mx-auto mt-10 px-3 sm:px-6 md:px-10 lg:px-0'>
                <div className='flex items-center justify-center text-gray-500 gap-4'>
                    <h4 className='rounded-full px-4 py-0.5 bg-yellow-200 ' >Popular Articles</h4>
                    <h3>October 23,2023</h3>
                </div>
                <div className="mt-6 space-y-8">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl max-w-5xl mx-auto text-center" >{filteredBlogs.heading1}</h2>
                    <p className="text-left">{filteredBlogs?.paragraph1}</p>
                    <h2 className="text-3xl font-semibold">{filteredBlogs.heading2}</h2>
                    <p className="text-lg">{filteredBlogs.paragraph2}</p>
                    {filteredBlogs.image1 &&
                        <Image
                            src={filteredBlogs.image1}
                            alt={filteredBlogs.heading2}
                            width={600}
                            height={600}
                            className="w-full h-[500px] object-cover"
                        />}
                    <p className="text-lg">{filteredBlogs.belowFirstImage}</p>
                    <h2 className="text-3xl font-semibold">{filteredBlogs.heading3}</h2>
                    <p className="text-lg">{filteredBlogs.paragraph3}</p>
                    {filteredBlogs.image2 &&
                        <Image
                            src={filteredBlogs.image2}
                            alt={filteredBlogs.heading3}
                            width={600}
                            height={600}
                            className="w-full h-[500px] object-cover"
                        />}
                    <p className="text-lg">{filteredBlogs.belowSecoundImage}</p>

                    <h2 className="text-3xl font-semibold">{filteredBlogs.heading4}</h2>
                    <p className="text-lg">{filteredBlogs.paragraph4}</p>
                    {filteredBlogs.image3 &&
                        <Image
                            src={filteredBlogs.image3}
                            alt={filteredBlogs.heading4}
                            width={600}
                            height={600}
                            className="w-full h-[500px] object-cover"
                        />}
                    <p className="text-lg">{filteredBlogs.belowThirdImage}</p>
                </div>
                <p className="mt-10 text-xs">{filteredBlogs.Note}</p>
            </div>
        )
    } else {
        redirect("/blogs")
    }
}

export default SelectedBlogz