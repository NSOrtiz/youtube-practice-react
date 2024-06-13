export default function categories(){
    const categories=[
        "All",
        "Music",
        "Gamming",
        "Programming",
        "Sports"
    ]
    return(
        <div className="flex flex-row gap-4">{
            categories.map((category)=>{
                return(
                    <span key={`category-${category}`} className="py-2 px-4 rounded-lg bg-[#282828] hover:bg-white hover:text-black">
                        {category}
                    </span>
                )
            })
        }
        </div>
    );
}