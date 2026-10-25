import "./Home.css";
import Navbar from "./Navbar";

function Home({user}) {

  console.log(user)
  return (
    <>
      <Navbar user={user} />
      <div className="box">
        <h1>This is Home Page - Work in Progress! </h1>
      </div>
    </>
  );
}

export default Home;