import YouTubeLogo from "./YouTubeLogo"

export default function NavBar(){
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
            <div className=" flex flex-row items-center gap-1 pl-4">
                <YouTubeLogo height = "1.8rem" width="3rem"/>
                <span>Youtube</span>
            </div>
            <div className="flex justify-centeral items-center">
                <input className="w-full py-2 px4 border border-solid border-[ #282828] rounded-sm bg-transparent" type="text" placeholder="Search" />
            </div>
            <div className="flex justify-end items-end">
                <img src="https://api.dicebear.com/8.x/identicon/svg?seed=Nat" className="w-8 h-8 rounded-sm" 
                alt="" />
            </div>
        </nav>
    ) 
}

