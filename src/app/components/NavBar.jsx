import React from "react";
import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 text-lg justify-center gap-8">
      <NavBarItem title="Treanding" param="fetchTrending" />
      <NavBarItem title="TopRated" param="fetchTopRated" />
    </div>
  );
}

export default NavBar;
