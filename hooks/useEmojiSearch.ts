import { useCallback, useEffect, useState } from "react";
import { TEmojiData, TemojiData2, StateData } from "../types";
export const useEmojiSearch = () => {
  const [searchVal, setSearchVal] = useState("sad");
  const [fetchedData, setFetchedData] = useState<StateData[] | null>(null);
  const [emojiCode, setEmojiCode] = useState<string>();
  const [apiImg, setApiImg] = useState<string>();

  const emojiUrl: string = `https://api.api-ninjas.com/v1/emoji?name=${searchVal}`;
  // const emojiUrl2: string = `https://emoji-api.com/emojis?search=${searchVal}&access_key=622f62cfaa2ec0620a07905e4c1c3bcb9fa2da9a`;

  //svg get request
  const svgUrl: string = `https://emojiapi.dev/api/v1/${emojiCode}.svg`;

  const emojiFetch = () => {
    fetch(emojiUrl, {
      method: "GET",
      headers: { "X-Api-Key": "id2U8W5KjKswCnPlq35VKw==NQJidGclsDVWnW31" },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data here
        console.log(data); // Log the data to the console or process it further

        setFetchedData([{ character: data[0].character, name: data[0].name, img: data[0].image }]);
        setEmojiCode(data[0].code);
        console.log(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // useEffect(() => {
  //   emojiFetch();
  //   console.log(fetchedData);
  //   console.log(emojiCode);
  // }, [emojiUrl2]);

  useEffect(() => {
    emojiFetch();
    // console.log(fetchedData);
  }, []);

  return { searchVal, fetchedData, emojiFetch, setSearchVal };
};
