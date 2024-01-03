import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div>
          <div>card1</div>
          <h2>PokemonCard</h2>
          <h4></h4>
          <button onClick={() => navigate("/pokemon-card")}>
            Go to PokemonCard
          </button>
        </div>
        <div>
          <div>card2</div>
          <h2>ObjectsDissolve</h2>
          <h4>content</h4>
          <div onClick={() => navigate("/objects-dissolve")}>
            Go to ObjectsDissolve
          </div>
        </div>
        <div>
          <div>card3</div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            ScrollingAnimation
          </h2>
          <h4>content</h4>
          <div
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => navigate("/scrolling-animation")}
          >
            ScrollingAnimation
          </div>
        </div>
        <div>
          <div>card4</div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            LoadingAnimation
          </h2>
          <h4>content</h4>
          <div
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => navigate("/loading-animation")}
          >
            LoadingAnimation
          </div>
        </div>
      </div>
      <h1 className="font-serif text-2xl">Hello World</h1>
    </>
  );
};

export default Home;
