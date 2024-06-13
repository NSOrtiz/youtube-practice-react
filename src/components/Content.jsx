import Categories from "./Categories"
import Video from "./Video"

export default function content(){

    const videos =[
        {
            image: 'https://cdn.pixabay.com/photo/2019/12/27/14/29/vinyl-4722544_640.jpg',
            title: 'Electronic music 2024',
            chanel: "Dj-Tunner"
        }, 
        {
            image: 'https://cdn.pixabay.com/photo/2024/04/10/12/14/podcast-8687965_640.jpg',
            title: 'Conversations Unplugged',
            chanel: "Tomas Smith"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2024/04/08/10/36/podcast-8683196_640.jpg',
            title: 'Echoes of Wisdom',
            chanel: "Mr. Wilson"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2017/07/31/21/10/people-2561105_640.jpg',
            title: 'Archery for beginners',
            chanel: "Alex Dumas"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2017/11/02/16/54/exercise-2911788_640.jpg',
            title: 'CrossFit Games',
            chanel: "Destreza CrossFit"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/04/09/14/39/knife-1318163_640.jpg',
            title: 'Basic military tools',
            chanel: "StrongMan"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/01/09/12/20/hamburg-3071437_640.jpg',
            title: '10 places to visiti in Hamburg',
            chanel: "TravelWithMe"
        }
    ]

    return <section className="col-start-2 col-end-3 row-start-2 row-end-3">
        <Categories />
        <section className="grid grid-cols-4 gap-4 pt-4">
            {
                videos.map((video)=>{
                    return (
                    <Video 
                    key={`vide-${video.title}`}
                    image={video.image}
                    title={video.title}
                    chanel={video.chanel}
                    />
                )
                })
            }

        </section>
    </section>
}