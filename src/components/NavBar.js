/* Hooks */
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect } from "react";

/* Utils */
import { cn } from "../lib/utils";


export default function NavBar({className,navItems,isCol = false,setMenuToggle = false}) {

  const location = useLocation();
  const navigate = useNavigate();
  const [selectedNavItem, setSelectedNavItem] = useState(
     null
  );

  useEffect(()=> {
    setSelectedNavItem(navItems.filter((navItem) => navItem.itemUrl === location.pathname)[0].id)
  },[location])
  
  /** Handles page navigation */
  function navigateToPage(page) {
    setSelectedNavItem(page.id); 
    navigate(page.itemUrl);
    setMenuToggle && setMenuToggle(false)
  }

  return (
      <nav className={cn(className)}>
        <ul className={`flex gap-6 items-center ${isCol && "flex-col"}`}>
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className={`cursor-pointer text-2xl sm:text-xl md:text-2xl font-poppins font-semibold  transition-colors duration-200 ease-in-out
                ${
                  selectedNavItem === navItem.id
                    ? "text-white"
                    : "text-slate-600"
                }
                `}
                onClick={() => navigateToPage(navItem)}
            >
              {navItem.itemName}
            </li>
          ))}
        </ul>
      </nav>
  );
}
