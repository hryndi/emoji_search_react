export type TEmojiData = [
  {
    code: string;
    character: string;
    image: string;
    name: string;
    group: string;
    subgroup: string;
  }
];

export type StateData = {
  character: string;
  name: string;
  img: string;
};

export type TemojiData2 = {
  slug: string;
  character: string;
  unicodeName: string;
  codePoint: string;
  group: string;
  subGroup: string;
  variants?: string[];
};
