// import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { useState } from "react";
import { TEmojiClickData } from "../types";
import { styled as mStyled } from "@mui/material";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
const StyledBox = mStyled(Box)`
  background: linear-gradient(90deg, #a4e1de 10%, #a9ddfb 40%, #96ff9a 90%);
  border-radius: 15px;
  width: 650px;
  display: grid;
  gap: 1rem;
  align-items: center;
  align-content: center;
  padding: 1rem;
  
  @media all and (min-width: 651px) {
    margin:1rem

  }
  @media all and (max-width: 650px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    overflow-y: auto;
    
  }
`;
const StyledDiv = mStyled(Box)`
  background-color: aliceblue;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
`;
const StyledButton = mStyled(Button)`
  @media all and (max-width: 310px) {
    font-size: 12px;
  }
`;

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState<TEmojiClickData>();

  const emojiOnClick = (emojiData: TEmojiClickData) => {
    setSelectedEmoji(emojiData);
    console.log(emojiData);
  };

  return (
    <StyledBox boxShadow={4}>
      <Typography textAlign={"center"} variant="h5" fontWeight={600}>
        Emoji Picker
      </Typography>
      <StyledDiv>
        {selectedEmoji ? (
          <>
            <Emoji unified={selectedEmoji.unified} size={52} />
            <Typography fontWeight={500}>{selectedEmoji.names[1] || selectedEmoji.names[0]}</Typography>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <StyledButton
                onClick={() => {
                  navigator.clipboard.writeText(selectedEmoji?.emoji || "");
                }}
              >
                {" "}
                copy emoji
              </StyledButton>
              <StyledButton
                onClick={() => {
                  navigator.clipboard.writeText(selectedEmoji?.unified || "");
                }}
              >
                {" "}
                copy unified code
              </StyledButton>
            </ButtonGroup>
          </>
        ) : (
          <Typography fontWeight={500} variant="h6">
            Please, select emoji to copy.
          </Typography>
        )}
      </StyledDiv>
      <EmojiPicker width={"100%"} onEmojiClick={emojiOnClick} />
    </StyledBox>
  );
}

export default App;
