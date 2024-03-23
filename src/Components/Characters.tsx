import axios from "axios";
import { useEffect, useState } from "react";

type Location = {
  name: string;
};
type Origin = {
  name: string;
};
type Ricky = {
  id: number;
  name: string;
  created: string;
  image: string;
  status: string;
  origin: Origin;
  species: string;
  location: Location;
  gender: string;
  episode: [];
};
const Characters = () => {
  const [rickys, setRickys] = useState<Ricky[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    axios.get(url).then((response) => {
      setRickys(response.data.results);
      console.log(response.data.results);
    });
  }, []);
  const filteredRickys = rickys.filter((ricky) =>
    ricky.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="relative z-9">
        <h1 className="mt-20 text-3xl font-custom text-blue-dark text-center">
          Search the base
        </h1>
        <input
          type="text"
          placeholder="Search characters"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="z-9 relative block mx-auto px-2"
        />
        <div className="grid grid-cols-1 gap-3 w-[90%] max-w-[1200px] mx-auto mt-[60px] md:grid-cols-3">
          {filteredRickys.map((ricky) => (
            <div
              key={ricky.id}
              className="relative border-4 border-black cursor-pointer text-center bg-black"
            >
              <div className="flex items-center">
                <h1 className=" text-white text-2xl mr-2">{ricky.name}</h1>
                <h2
                  className={`p-1 ${
                    ricky.status === "Alive" ? "text-green" : "text-red"
                  }`}
                >
                  {ricky.status}
                </h2>
              </div>
              <img className="w-full object-cover" src={ricky.image} alt="" />
              <p className="text-white">
                {ricky.name} is a {ricky.gender} and was created on{" "}
                {ricky.created}. {ricky.name} was born on &nbsp;
                {ricky.origin.name} and now resides on {ricky.location.name}.{" "}
                {ricky.name} appears on{" "}
                <span className="text-green">{ricky.episode.length} </span>
                episodes.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Characters;
