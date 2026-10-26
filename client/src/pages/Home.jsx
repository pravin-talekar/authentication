import "./Home.css";
import Navbar from "./Navbar";
import Logout from "./Logout";

function Home({user}) {

  console.log(user)
  return (
    <>
      <Navbar user={user} />
      <div className="box">
        <h1>This is Home Page - Work in Progress! </h1>
      </div>
       <Logout className="logout-btn" />
    </>
  );
}

export default Home;