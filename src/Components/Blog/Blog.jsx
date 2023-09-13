// import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
export default function Blog({blog,handleBookMarks}){
    // console.log(blog)
    // console.log(handleBookMarks)
    const {title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className="mb-20">
           
            <img className="w-full h-[400px]" src={cover} alt="" />
           
            <div className="flex justify-between items-center mt-8 mb-4">
                <div className="flex items-center gap-6">
                <img className="rounded-full w-[60px] h-[60px]" src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min_read</span>
                    <button onClick={()=>handleBookMarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className="text-4xl mb-4">{title}</h3>
            {
                hashtags.map((hash,idx)=><span key={idx}><a href=""> {hash}</a></span>)
            }
            
        </div>
    )
}
// Blog.PropTypes={
//     blog:PropTypes.object.isRequired
// }

