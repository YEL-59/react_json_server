import { useState, useEffect } from "react";
import "./App.css";
import Bloglist from "./Bloglist";

function App() {
  //let name="tofayel"
  const [name, Setname] = useState("mario");
  const handleClick = () => {
    Setname("tofayel");
  };

  const [blogs, Setblogs] = useState(
    null
    //[] {title:'hey this is title 1',body:'lorem5......',author:'kobi yakub',id:1},
    // {title:'hey this is title 1',body:'lorem5......',author:'kobi jakir',id:2},
    // {title:'hey this is title 1',body:'lorem5......',author:'kobi rafi',id:3},
    // {title:'hey this is title 1',body:'lorem5......',author:'kobi riyad',id:4},
  );
  const [ispending, Setispending] = useState(true);
const [error,Seterror]=useState(null)


  const handleDelete = (id) => {
    const newblog = blogs.filter((blog) => blog.id !== id);
    Setblogs(newblog);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("  http://localhost:8000/blogs")
        .then((res) => {
          //console.log(res)
          if (!res.ok) {
            throw Error("could not fetch the data for database");
          }
          return res.json();
        })
        .then((data) => {
          //console.log(data)
          Setblogs(data);
          Setispending(false);
          Seterror(null)
        })
        
        .catch((err) => {
          //console.log(err.message);
          Setispending(false)
          Seterror(err.message)
        });
    }, 1000);
  }, []);
  return (
    <div className="App">
      {error && <div>
        {error}
      </div>}
      <h1 className="text-3xl bg-black text-white p-4">
        {/* Ami {name} ami yakub er lok! */}
        hey this is {name} how are you
      </h1>
      {ispending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} handleDelete={handleDelete}></Bloglist>}
      {/* <button type="" onClick={handleClick}>
        click it!
      </button>
      <Bloglist blogs={blogs} handleDelete={handleDelete}></Bloglist>
      <Bloglist
        blogs={blogs.filter((b) => b.author === "kobi yakub")}
        title="kobi yakub"
      ></Bloglist> */}
    </div>
  );
}

export default App;
