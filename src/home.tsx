const Home = () => {
  return (
    <div className="flex flex-col overflow-y-auto h-screen px-4 py-20">
      <img alt="" src="/market.png" height={64} width={64} />
      <h1 className="text-6xl w-4/5 my-4 py-4">
        <div className="font-bold">Merry Market</div> is a carefully curated
        retail market, food court & event space open year-round at 1/3 Ness Baug
        Annexe, Colaba, Mumbai
      </h1>
      <p className="text-4xl w-4/5 my-4 py-4">
        Support Small Businesses this weekend!
      </p>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNvbW11bml0eSUyMG1hcmtldHxlbnwwfDB8MHx8fDA%3D"
        loading="lazy"
      />
      <h2 className="text-4xl w-2/3 py-12 self-center text-center">
        A New Kind of Market
      </h2>
      <div className="flex gap-2 text-lg items-baseline">
        <div className="flex flex-col p-2 gap-8 w-1/3">
          <img
            alt=""
            height="80%"
            src="https://images.unsplash.com/photo-1676069945765-095550df1aa5?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvbW11bml0eSUyMG1hcmtldHxlbnwwfDF8MHx8fDA%3D"
          />
          <p>
            Merging retail, food, art, and culture, Merry Market highlights top
            retail and design concepts, restaurants, and up-and-coming players
            in the City of Dreams
          </p>
        </div>

        <div className="flex flex-col p-2 gap-8 w-1/3">
          <img
            alt=""
            height="80%"
            src="https://images.unsplash.com/photo-1668104129762-68cd2f45cc6c?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbW11bml0eSUyMG1hcmtldHxlbnwwfDF8MHx8fDA%3D"
          />
          <p>
            Retail Market Hours: <time>Thursday to Sun: 11:00AM to 7:00PM</time>
          </p>
        </div>
        <div className="flex flex-col p-2 gap-8 w-1/3">
          <img
            alt=""
            height="80%"
            src="https://images.unsplash.com/photo-1668104129767-0c53af273312?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tbXVuaXR5JTIwbWFya2V0fGVufDB8MXwwfHx8MA%3D%3D"
          />
          <p>Food Hall Hours: Mon to Sun: 11:00AM to 8:00PM</p>
        </div>
      </div>
      <h2 className="text-4xl w-2/3 py-12 self-center text-center">
        Market Events
      </h2>
      <div className="flex gap-12 items-center p-6 justify-center items-center w-full text-center border-y-8 border-black border-double">
        <div className="flex flex-col gap-6 items-center justify-center w-1/3 text-center">
          <p className="text-center">09/21</p>
          <p className="text-center text-2xl">
            Small Business Retail Pop Up Weekend!
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center  w-1/3  text-center">
          <p className="text-center">02/07</p>
          <p className="text-center text-2xl">Hack City 12/11</p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center  w-1/3  text-center">
          <p className="text-center">02/07</p>
          <p className="text-center text-2xl">
            Rock The Weekend with Arambol, Jamunes and Others!
          </p>
        </div>
      </div>
      <div className="flex items-stretch gap-8 py-12">
        <div className="border-8 border-black border-double p-6 flex justify-center items-center">
          <p className="text-4xl">
            1/3 Ness Baug Annexe, Kalaghoda, Colaba, Mumbai, Maharashtra
          </p>
        </div>
        <div className="border-8 border-black border-double p-6">
          <img
            alt=""
            src="https://www.google.com/maps/vt/data=JtMvchCEL0b6b7MBVsSCCp3p-OALdbBbSRlHr1pY9kXPjcuhHDzHf7TnzaNpEcWitvFvwPHoCmq00mnkDdBVjjDArU45ygYpCmrzCykkdUZJTh-wpMkUXVAJzJ2ambzZtpXDy-9l_wcSwcSl2G6cgWyviyRq777Igit8WeBXK3XVaSJPs2GFtVJuZshqW74uW5ZYyfzW1y7Y-Cywdj_VYVTTppa2WXubOQawgzBNL97iRqHdUtbUQczMWk7OknFDRnfsFGLKX14Q4qFW5D4LsAE3AYVDt1FRuXzD"
          />
        </div>
      </div>
      <h2 className="text-4xl w-2/3 py-12 self-center text-center">
        Interested in Becoming a Vendor?
      </h2>
      <div className="border-8 border-black border-double p-6 flex justify-center items-center">
        <p className="text-xl font-bold">
          Email: vendor.bookings@merrymarket.com
        </p>
      </div>
    </div>
  );
};

export default Home;
