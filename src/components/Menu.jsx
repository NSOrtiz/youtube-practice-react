export default function menu(){
    const menuItems = [
        {icon: '🏠', text: 'Home'},
        {icon: '🩳', text: 'Shorts'},
        {icon: '⏰', text: 'Supscriptions'},
    ];

    return (
    <aside className="col-start-1 col-end-2 row-start-2 row-end-3 p-0">
        {menuItems.map((item)=>{
            return (
                <div key={item.text} className="p-4 rounder-full rounded-lg flex flex-row gap-2 items-center hover:bg-[#282828]">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                </div>
            );
        })}
    </aside>
    );
}