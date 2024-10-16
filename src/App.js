import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import FilterTask from "./components/FilterTask/FilterTask";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import ".";
import TodoApp from "./components/TodoApp/TodoApp";
import { useState } from "react";
import ThemeContext from "./components/Context/Context";
import Theme from "./components/Configs/Theme";

function App() {
  const [activeTheme, setActiveTheme] = useState("green");

  return (
    <ThemeContext.Provider value={{theme: Theme[activeTheme], setActiveTheme}}>
      <div className="text-center">
        <Header />
        <div className="App mt-4">
          <TodoApp />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
