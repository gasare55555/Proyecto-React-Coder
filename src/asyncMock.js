import { popularGames } from "./emulated-server-files/popular-games";

const data = JSON.stringify([
  {
    id: "Popular",
    content: popularGames
  }

]); 

export const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data)
  }, 2000);
});

