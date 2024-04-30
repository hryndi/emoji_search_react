import { useCallback, useEffect, useState } from "react";
import { TEmojiData, StateData } from "../types";
export const useEmojiSearch = () => {
  const [searchVal, setSearchVal] = useState("smiling");
  const [fetchedData, setFetchedData] = useState<StateData[]>();
  const emojiUrl = `https://api.api-ninjas.com/v1/emoji?name=${searchVal}`;

  // const emojiFetch = useCallback(async () => {
  //   const response = await fetch(
  //     `https://www.emoji.family/api/emojis?search=${searchVal}`
  //   );
  //   const json = await response.json();
  //   console.log(json);
  // }, [searchVal]);

  const emojiFetch = useCallback(
    () =>
      fetch(emojiUrl, {
        method: "GET",
        headers: { "X-Api-Key": "id2U8W5KjKswCnPlq35VKw==NQJidGclsDVWnW31" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data: TEmojiData) => {
          console.log("data:", data);
          setFetchedData([{ character: data.character, name: data.name }]);
        })
        .catch((err) => console.error(err)),
    [emojiUrl]
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      emojiFetch();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [emojiUrl, searchVal, emojiFetch]);

  return { searchVal, setSearchVal };
};
