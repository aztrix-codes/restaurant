import burgerfilter from "../Assets/burgerfilter.png";
import noodlefilter from "../Assets/noodlefilter.png";
import desertfilter from "../Assets/desertfilter.png";
import drinkfilter from "../Assets/drinkfilter.png";
import homeactivedark from "../Assets/homeactivedark.png";
import homeinactivedark from "../Assets/homeinactivedark.png";
import homeinactivelight from "../Assets/homeinactivelight.png";
import menuactivedark from "../Assets/menuactivedark.png";
import menuinactivedark from "../Assets/menuinactivedark.png";
import menuinactivelight from "../Assets/menuinactivelight.png";
import historyactivedark from "../Assets/historyactivedark.png";
import historyinactivedark from "../Assets/historyinactivedark.png";
import historyinactivelight from "../Assets/historyinactivelight.png";
import promoactivedark from "../Assets/promoactivedark.png";
import promoinactivedark from "../Assets/promoinactivedark.png";
import promoinactivelight from "../Assets/promoinactivelight.png";
import settingactivedark from "../Assets/settingactivedark.png";
import settinginactivedark from "../Assets/settinginactivedark.png";
import settinginactivelight from "../Assets/settinginactivelight.png";



export const navMenu = [
    {
      id: 1,
      name: "Home",
      active: homeactivedark,
      inactivelight: homeinactivelight,
      inactivedark: homeinactivedark,
      path: "/"
    },
    {
      id: 2,
      name: "Menu",
      active: menuactivedark,
      inactivelight: menuinactivelight,
      inactivedark: menuinactivedark,
      path: "/menu"
    },
    {
      id: 3,
      name: "History",
      active: historyactivedark,
      inactivelight: historyinactivelight,
      inactivedark: historyinactivedark,
      path: "/history"
    },
    {
      id: 4,
      name: "Promos",
      active: promoactivedark,
      inactivelight: promoinactivelight,
      inactivedark: promoinactivedark,
      path: "/promos"
    },
    {
      id: 5,
      name: "Settings",
      active: settingactivedark,
      inactivelight: settinginactivelight,
      inactivedark: settinginactivedark,
      path: "/settings"
    },
    
  ];


export const filterMenu = [
    {
      id: 1,
      name: "Burgers",
      img: burgerfilter,
    },
    {
      id: 2,
      name: "Noodles",
      img: noodlefilter,
    },
    {
      id: 3,
      name: "Deserts",
      img: desertfilter,
    },
    {
      id: 4,
      name: "Drinks",
      img: drinkfilter,
    },
  ];