import Form from "./Form";
import Results from "./Results";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-center mb-8 mdtext-2xl">Movie/Series Finder</h1>
      <Form />
      <Results />
    </div>
  );
};

export default Homepage;
