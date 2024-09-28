import { popularGames } from "./emulated-server-files/popular-games";

const data = JSON.stringify([
  {
    id: "popular",
    content: popularGames
  }

]); 

export const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data)
  }, 2000);
});

export function getCategory(id, data) {
  return data.filter((category) => category.id == id);
}

