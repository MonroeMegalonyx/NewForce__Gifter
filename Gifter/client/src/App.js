// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostSearch from "./components/SearchForm";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";


function App() {
  return (
    <Router>
      <UserProfileProvider>
      <PostProvider>
          <Header />
          <ApplicationViews />
          </PostProvider>
      </UserProfileProvider>
    </Router>
    // <div className="App">
    //   <PostProvider>
    //     <PostSearch />
    //       <PostForm />
    //     <PostList />
    //   </PostProvider>
    // </div>
  );
}

export default App;
