import clsx from "clsx"

export default function Video({image, title, chanel}){

    // 1 const articleClassnames = 'video-card' + (chanel === 'Tomas Smith' ? " special" : "");

    // 2 let articleClassnames = ['video-card']

    // 2 if (chanel === "Alex Dumas"){
    //    articleClassnames.push("special");
    //}

    // 2 article className={articleClassnames.join(" ")}
    //3 con clsx las nos condicionales 'video-card' condicionales: lleva booleano, {special: chanel === "Alex Dumas"} 
    return (
        <article className={clsx('flex flex-col gap-2', 
        {special: chanel === "Alex Dumas" } )}> 
            <img src={image} alt="" className="w-full rounded-lg object-cover relative"/>
            <footer className="grid gap-2 grid-cols-[3rem, 1rf]">
                {chanel && (
                    <img src={`https://api.dicebear.com/8.x/identicon/svg?seed=${chanel}`} alt="" className="col-start-1 col-end-2 w-8 h-8 rounded-lg" />
                )
                }
                {!chanel && <span>🤷‍♀️</span>}

                <p className="col-start-2 col-end-3">{title}</p>
                <p className="col-start-2 col-end-3">{chanel || "UNKNOW"}</p>
            </footer>
        </article>

    )
}