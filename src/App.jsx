import { Route, Routes, Navigate } from "react-router";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Create from "./components/Create/Create";
import Contact from "./components/Contact/Contact";
import EditTask from "./components/EditTask/EditTask";
import Footer from "./components/Footer/Footer";
import SignUP from "./components/SignUp/SignUP";
import { useSelector } from "react-redux";
import TaskView from "./components/TaskView/TaskView";
import CalendarPage from "./components/Calender/Calendar";
import LogIn from "./components/LogIn/LogIn";

function App() {
  const { isLogin } = useSelector(state => state.taskReducer);

  return (
    <>
      {isLogin ? (
        <>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="/task" element={<TaskView />} />
            <Route path="/calendar" element={<CalendarPage />} />
            {/* Fallback to /home if no route matches */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUP />} />
          {/* Fallback to / if no route matches */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
