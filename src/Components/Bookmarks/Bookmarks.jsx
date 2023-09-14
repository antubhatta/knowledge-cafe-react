import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
       
        <div className="md:w-1/3 bg-[#1111110D] mb-14">
            <div className="border border-solid border-1 border-indigo-600 px-12 py-5 rounded-lg m-4 bg-[#6047EC1A]">
                <h2 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {readingTime} min</h2>
            </div>

            <h2 className="text-2xl font-bold pl-4 pt-7 ">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmarks,idx)=><Bookmark key={idx} bookmark={bookmarks}></Bookmark>)
            }

        </div>

         
    
    );
};

export default Bookmarks;