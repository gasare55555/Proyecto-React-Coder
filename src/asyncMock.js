import { popularGames } from "./emulated-server-files/popular-games";
import { anticipatedGames } from "./emulated-server-files/anticipated-games";
import { educationalGames } from "./emulated-server-files/educational-games";

const data = JSON.stringify([
  {
    id: "popular",
    content: popularGames
  },
  {
    id: "anticipated",
    content: anticipatedGames
  },
  {
    id: "educational",
    content: educationalGames
  }
]); 

export const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export function getCategory(id, parsedResponse) {
  const category = parsedResponse.find((category) => category.id == id);
  if (category) {
    return category.content;
  }
}

export function getItem(id, parsedResponse) {
  let data;

  for (const category of parsedResponse) {
    const item = category.content.find((item) => item.id == id);
    if (item) {
      data = item;
      break;
    }
  }

  return data;
}

export function getValues(data, array, property) {
  return data[array].map((object) => object[property]);
}
