const Events = () => {
  return (
    <div className="flex flex-col overflow-y-auto h-screen px-4 py-20 items-center gap-12">
      <div className="flex items-center gap-4 my-4">
        <h1 className="text-8xl w-2/3 font-bold">Merry Market Community</h1>
        <p className="text-lg w-1/3 text-center">
          Our mixed-use space hosts ongoing events, podcasts & artists in
          residence
        </p>
      </div>
      <hr className="border-4 border-double border-black w-full" />
      <div className="flex items-center my-8 justify-center gap-8 w-full">
        <img
          src="/music.png"
          height="48"
          width="48"
          alt=""
          className="animate-bounce"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-7xl font-bold">Market Radio</h2>
          <p>Podcasted from the market</p>
        </div>
        <img
          src="/music.png"
          height="48"
          width="48"
          alt=""
          className="animate-bounce"
        />
      </div>

      <div className="flex gap-12 items-center p-6 justify-center items-center w-full text-center border-y-8 border-black border-double">
        <div className="flex flex-col gap-6 items-center justify-center w-1/3 text-center">
          <p className="text-center">11/27</p>
          <p className="text-center text-2xl">S3E42: Family Business</p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center  w-1/3  text-center">
          <p className="text-center">10/09</p>
          <p className="text-center text-2xl">
            Challenge Cup MVP Kristen Hamilton and NC Courage's Tyler Lussi
            Interviews + Saying Farewell to USWNT Legends + NWSL Predictions
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center  w-1/3  text-center">
          <p className="text-center">02/07</p>
          <p className="text-center text-2xl">Episode 13: Sarinya Srisakul</p>
        </div>
      </div>

      <h2 className="text-7xl self-center text-center font-bold">Features</h2>

      <div className="grid grid-cols-2 place-items-center gap-8">
        <div className="relative">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1618176580189-c299faaa585c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWNpYW5zfGVufDB8MXwwfHx8MA%3D%3D"
          />
          <p className="p-8 bg-white font-bold absolute bottom-3 w-4/5 border-2 border-black text-2xl">
            MM Community -- Izakaya
          </p>
        </div>
        <div className="relative">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1619516513368-cb90b3407258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljaWFuc3xlbnwwfDF8MHx8fDA%3D"
          />
          <p className="p-8 bg-white font-bold absolute bottom-3 w-4/5 border-2 border-black text-2xl">
            MM Community -- Joe's Steam Rice
          </p>
        </div>
        <div className="relative">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1598997669607-543667f775a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWNpYW5zfGVufDB8MXwwfHx8MA%3D%3D"
          />
          <p className="p-8 bg-white font-bold absolute bottom-3 w-4/5 border-2 border-black text-2xl">
            MM Community -- Bereop Tech
          </p>
        </div>
        <div className="relative">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1519681467212-9792db1989c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWNpYW5zfGVufDB8MXwwfHx8MA%3D%3D"
          />
          <p className="p-8 bg-white font-bold absolute bottom-3 w-4/5 border-2 border-black text-2xl">
            MM Community -- Jamunes
          </p>
        </div>
      </div>

      <div className="flex self-center items-center justify-center p-8 w-full text-center my-8 border-y-8 border-black border-double">
        <div className="w-1/3 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <p className="text-center">09/21</p>
            <p className="text-center text-2xl">
              Small Business Retail Pop Up Weekend!
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <p className="text-center">02/07</p>
            <p className="text-center text-2xl">Hack City 12/11</p>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold">Merry Market Events</h2>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <p className="text-center">02/07</p>
            <p className="text-center text-2xl">
              Rock The Weekend with Arambol, Jamunes and Others!
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center  text-center">
            <p className="text-center">02/07</p>
            <p className="text-center text-2xl">Taiwanese Wave</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
