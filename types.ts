import { EmojiStyle } from "emoji-picker-react";
import { SkinTones } from "emoji-picker-react";
export type TEmojiClickData = {
  activeSkinTone: SkinTones;
  unified: string;
  unifiedWithoutSkinTone: string;
  emoji: string; // the emoji character, for example: '😀'. Emoji ID in custom emojis
  isCustom: boolean; // whether the emoji is a custom emoji or not
  names: string[];
  imageUrl: string; // the url of the emoji image with the current emoji style applied
  getImageUrl: (emojiStyle: EmojiStyle) => string;
};

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
