import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Preloader from "../components/Preloader";

function UserHomePage(props: { pathname: string }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.pathname == "/home/google/newtask" || "/home/google/newtask-2") {
      setLoading(false);
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="max-w-[100vw] sm:mb-0 mb-20  min-h-screen  flex bg-[#130f40]">
          <section
            onClick={() => {
              setIsSidebarOpen(true);
            }}
            className="sm:min-h-screen"
          >
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </section>
          <main
            className="min-w-full min-h-screen"
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}

export default UserHomePage;
