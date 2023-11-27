import { useState } from "preact/hooks";
const stalls = [
  {
    name: "Ramen Rendezvous",
    foodType: "Ramen",
    image:
      "https://images.unsplash.com/photo-1478749485505-2a903a729c63?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbWVuJTIwcmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Pizza Paradise",
    foodType: "Pizza",
    image:
      "https://images.unsplash.com/photo-1511091252864-6d6841e35878?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpZSUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww",
  },
  {
    name: "Gelatos Guzzlers",
    foodType: "Gelato",
    image:
      "https://images.unsplash.com/photo-1678660303861-3de00c5cb3d7?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VsYXRvJTIwcmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Sushi Serenity",
    foodType: "Sushi",
    image:
      "https://images.unsplash.com/photo-1562436261-d78cc04a8dd5?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzaWFuJTIwcmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Asian Symphony",
    foodType: "Asian",
    image:
      "https://plus.unsplash.com/premium_photo-1661320811782-c1192cccd564?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXNpYW4lMjByZXN0YXVyYW50fGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    name: "Salad Bliss",
    foodType: "Salads",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWQlMjByZXN0YXVyYW50fGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    name: "Gelato Galaxy",
    foodType: "Icecream",
    image:
      "https://images.unsplash.com/photo-1627373717559-17b8b84b2c84?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2VsYXRvJTIwcmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Curry Craze",
    foodType: "Curry",
    image:
      "https://images.unsplash.com/photo-1678969406353-ead12b1f258a?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1cnJ5JTIwcmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Falafel Fiesta",
    foodType: "Mediterranean",
    image:
      "https://images.unsplash.com/photo-1541754202-9eb0e8c13b6c?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFsYWZlbCUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww",
  },
  {
    name: "Pies Parlor",
    foodType: "Bakery",
    image:
      "https://images.unsplash.com/photo-1685156328658-da6116852b4c?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpZSUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww",
  },
];

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1553321846-ad6616f5d1db?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGNvdXJ0fGVufDB8MHwwfHx8MA%3D%3D";

const Food = () => {
  const [selectedImage, setSelectedImage] = useState(DEFAULT_IMG);
  return (
    <div className="flex flex-col overflow-y-auto h-screen px-4 py-20 items-center gap-12">
      <div className="flex items-center gap-4 my-4">
        <h1 className="text-8xl w-2/3 font-bold">The Food Hall</h1>
        <p className="text-lg w-1/3 text-center">
          Food Hall Hours: Mon to Sun: 11:00AM to 8:00PM
        </p>
      </div>
      <div className="flex gap-4 items-stretch">
        <img className="w-1/3" src={selectedImage} alt="" />
        <div className="grid grid-cols-3 gap-4 w-2/3">
          {stalls.map((stall, i) => {
            return (
              <button
                key={`stall-${i}`}
                className="flex flex-col gap-4 p-2 cursor-pointer hover:bg-black hover:text-white"
                onClick={() => setSelectedImage(stall.image)}
              >
                <p>{stall.foodType}</p>
                <p className="text-3xl text-left">{stall.name}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Food;
