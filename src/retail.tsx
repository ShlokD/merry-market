import { useState } from "preact/hooks";

const stalls = [
  {
    name: "Groovy Gadgets",
    items: [
      "Vintage electronics",
      "Retro gaming consoles",
      "Collectible vinyl records",
    ],
    image:
      "https://images.unsplash.com/photo-1587731556938-38755b4803a6?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlueWwlMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    name: "The Spice Odyssey",
    items: [
      "Exotic spices from around the world",
      "Gourmet herbs and seasonings",
      "Infused oils and vinegars",
    ],
    image:
      "https://images.unsplash.com/photo-1590237581598-988d27565521?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY2UlMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    name: "Threads of Time",
    items: [
      "Handcrafted textiles and garments",
      "Vintage clothing and accessories",
      "Artisan-made jewelry and home décor",
    ],
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdhZGdldCUyMHNob3B8ZW58MHwwfDB8fHww",
  },
  {
    name: "The Book Nook",
    items: [
      "Rare and out-of-print books",
      "First editions and signed copies",
      "Antique maps and globes",
    ],
    image:
      "https://images.unsplash.com/photo-1572617494814-03b70644cbef?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMHNob3B8ZW58MHwwfDB8fHww",
  },
  {
    name: "Nature's Apothecary",
    items: [
      "Organic and natural skincare products",
      "Herbal remedies and supplements",
      "Essential oils and aromatherapy supplies",
    ],
    image:
      "https://images.unsplash.com/photo-1566707675793-3ec9e5590bb6?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2tpbmNhcmUlMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    name: "Melodies and Mayhem",
    items: [
      "New and vintage musical instruments",
      "Collectible band merchandise",
      "Music lessons and workshops",
    ],
    image:
      "https://images.unsplash.com/photo-1568663041326-6348c761f7af?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    name: "The Toy Emporium",
    items: [
      "Classic toys from all eras",
      "Educational toys and games",
      "Handmade dolls and puppets",
    ],
    image:
      "https://images.unsplash.com/photo-1589863465747-f337e97f8f3d?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95JTIwc2hvcHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "The Pet Pavilion",
    items: [
      "Unique pet accessories and apparel",
      "Gourmet pet food and treats",
      "Grooming and training services",
    ],
    image:
      "https://images.unsplash.com/photo-1516453734593-8d198ae84bcf?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwc2hvcHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "The Culinary Corner",
    items: [
      "Artisanal kitchenware and cookware",
      "Gourmet cooking ingredients",
      "Cooking classes and demonstrations",
    ],
    image:
      "https://images.unsplash.com/photo-1670768554366-8da3e60f1af8?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1dGxlcnklMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    name: "The Hobby Hive",
    items: [
      "Supplies for various hobbies and crafts",
      "Classes and workshops for beginners and experts",
      "A community space for hobbyists to connect and collaborate",
    ],
    image:
      "https://images.unsplash.com/photo-1613899344656-f45996fea5ad?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9iYnklMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D",
  },
];

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1563018172-de687e951983?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsZWElMjBtYXJrZXQlMjBzdGFsbHN8ZW58MHwwfDB8fHww";
const Retail = () => {
  const [selectedImage, setSelectedImage] = useState(DEFAULT_IMG);

  return (
    <div className="flex flex-col overflow-y-auto h-screen px-4 py-20 items-center gap-12">
      <div className="flex items-center gap-4 my-4">
        <h1 className="text-8xl w-2/3 font-bold">The Retail Market</h1>
        <p className="text-lg w-1/3 text-center">
          Retail Market Hours: <time>Thursday to Sun: 11:00AM to 7:00PM</time>
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <img className="w-1/3" src={selectedImage} alt="" />

        <div className="grid grid-cols-3 gap-4  w-2/3">
          {stalls.map((stall, i) => {
            return (
              <button
                key={`stall-${i}`}
                className="flex flex-col gap-4 text-left p-2 cursor-pointer hover:bg-black hover:text-white"
                onClick={() => setSelectedImage(stall.image)}
              >
                <p className="text-3xl">{stall.name}</p>
                <p>{stall.items[0]}</p>
                <p>{stall.items[1]}</p>
                <p>{stall.items[2]}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Retail;
