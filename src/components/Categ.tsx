
import Image from "next/image";
import React from "react";

async function Categ() {
  
  type CardItem = {
    id: number;
    title: string;
    image: string;
  };

  const cards: CardItem[] = [
    {
      id: 1,
      title: "Select topic",
      image:
        "https://www.medina.com.tn/laravel-filemanager/photos/shares/5eefc84c093c0.jpg",
    },
    {
      id: 2,
      title: "Set area",
      image:
        "https://www.medina.com.tn/laravel-filemanager/photos/shares/5eefc84c093c0.jpg",
    },
    {
      id: 3,
      title: "Share events",
      image:
        "https://www.medina.com.tn/laravel-filemanager/photos/shares/5eefc84c093c0.jpg",
    },
  ];
  return (
    <section className="mt-7 md:mt-24">
      <div className="flex flex-row flex-wrap justify-evenly">
        {cards.map((item: CardItem) => (
          <div
            key={item.id}
            className="bg-blue-400 sm:flex-1/2 mt-7 mx-4 max-w-[400px] h-[500px]"
          >
            <Image
              src={
                "https://www.medina.com.tn/laravel-filemanager/photos/shares/5eefc84c093c0.jpg"
              }
              alt="Categ Image"
              width={800}
              height={200}
              className="object-cover w-full h-full rounded-2xl "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categ;
