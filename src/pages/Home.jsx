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
          <h2>ScrollingAnimation</h2>
          <h4>content</h4>
          <div onClick={() => navigate("/scrolling-animation")}>
            Go to ScrollingAnimation
          </div>
        </div>
        <div>
          <div>card4</div>
          <h2>project title</h2>
          <h4>content</h4>
        </div>
      </div>
      <h1 className="font-serif text-2xl">Hello World</h1>
    </>
  );
};

export default Home;
