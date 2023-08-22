import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Preloader from "../components/Preloader";

function UserHomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="max-w-[100vw]  min-h-screen flex bg-[#130f40]">
          <section
            onClick={() => {
              setIsSidebarOpen(true);
            }}
            className="min-h-screen"
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
