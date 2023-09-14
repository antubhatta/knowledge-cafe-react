
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
   
    return (
        <div className="rounded-lg bg-[#FFF] p-5 m-4">
            <h2 className="text-lg font-semibold ">{title}</h2>
        </div>
    );
};

export default Bookmark;