import React, { useState } from "react";
import { Emoji, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const emojiTypeList = [
  "apple",
  "google",
  "twitter",
  "emojione",
  "messenger",
  "facebook",
];

function Emoji() {
  const [emojiList, setEmojiList] = useState([]);
  const [emojiType, setEmojiType] = useState(null);

  const onClickButton = (e) => {
    setEmojiType(e.target.name);
  };

  const onSelect = (emoji) => {
    console.log({ emoji });
    setEmojiList([...emojiList, emoji]);
    setEmojiType(null);
  };
  return (
    <>
      <p>
        {emojiTypeList.map((name) => (
          <button onClick={onClickButton} name={name} key={name}>
            {name}
          </button>
        ))}
      </p>
      {emojiType && (
        <Picker
          onSelect={(emoji) => onSelect({ ...emoji, emojiType })}
          set={emojiType}
          i18n={{
            search: "Search",
            categories: {
              search: "Result",
            },
          }}
          style={{
            position: "absolute",
            zIndex: "1",
          }}
        />
      )}
      {emojiList.length
        ? emojiList.map(({ id, emojiType }, i) => (
            <Emoji
              emoji={id}
              size={32}
              set={emojiType}
              onClick={(emoji) => onSelect({ ...emoji, emojiType })}
              key={i}
            />
          ))
        : null}
    </>
  );
}

export default Emoji;
