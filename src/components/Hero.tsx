import Image from "next/image";
import React from "react";

function Hero() {
  type HeroItem = {
    id: number;
    title: string;
    subtitle: string;
    direction: "row" | "row-reverse";
    image: string;
  };
  const hero: HeroItem[] = [
    {
      id: 1,
      title: "Search and find local events",
      subtitle:
        "Find exactly what you are looking for by filtering by date, location, and category.",
      direction: "row",
      image:
        "https://www.medina.com.tn/laravel-filemanager/photos/shares/5eefc84c093c0.jpg",
    },
    {
      id: 2,
      title: "Like and comment on events",
      subtitle:
        "Engage with events and commenting on them to share your thoughts and experiences.",
      direction: "row-reverse",
      image:
        "https://www.medina.com.tn/laravel-filemanager/photos/shares/5eefc84c093c0.jpg",
  
    },
    {
      id: 3,
      title: "Curated recommendations",
      subtitle:
        "View posts tailored to your interests and preferences, making it easier to discover new events.",
      direction: "row",
      image:
        "https://www.medina.com.tn/laravel-filemanager/photos/shares/5eefc84c093c0.jpg",
  
    },
  ];
  return (
    <section className="mt-7 md:mt-24 ">
      {hero.map((item: HeroItem) => (
        <div key={item.id} className={`flex mt-7 flex-col items-center  ${item.direction === "row-reverse" ? "lg:flex-row-reverse" : "lg:flex-row"} `}>
          <div className="flex-1 lg:w-1/2 flex  justify-center">
          <div className="h-fit p-3  w-fit ">
             <h3 className=" text-3xl font-semibold">{item.title}</h3>
                <p className='mt-2.5 text-xl font-semibold text-gray-400 max-w-[350px] mb-5 '>{item.subtitle}</p>
          </div>
           
          </div>
          <div className="flex-1 lg:w-1/2 flex justify-center ">
            <Image
            
              src={item.image}
              alt={item.title}
              width={500}
                height={600}
              className="object-cover  rounded-4xl"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;
