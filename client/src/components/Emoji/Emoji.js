import React, { useState } from "react";
import { Emoji, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
// BRANDON ADDED IMPORT
import "../../pages/Performance/index"


const mockData = [
  {
    day: "Monday",
    emojis: [
      {
        emoji: {
          colons: ":+1:",
          emojiType: "apple",
          emoticons: [],
          id: "+1",
          name: "Thumbs Up Sign",
          native: "👍",
          short_names: ["+1", "thumbsup"],
          skin: 1,
          unified: "1f44d",
        },
      },
      {
        emoji: {
          colons: ":trophy:",
          emojiType: "apple",
          emoticons: [],
          id: "trophy",
          name: "Trophy",
          native: "🏆",
          short_names: ["trophy"],
          skin: null,
          unified: "1f3c6",
        },
      },
    ],
  },
];
const emojiTypeList = ["apple"];

function AddEmoji(props) {
  const [emojiList, setEmojiList] = useState([mockData[0].emojis]);
  const [emojiType, setEmojiType] = useState(null);
  console.log(emojiType);
  console.log(emojiList);
  const onClickButton = (e) => {
    // BRANDON ADDED IF STATEMENT

      console.log(e.target.name);
      setEmojiType(e.target.name);

    
  };

  const onSelect = (emoji) => {

    console.log("a",{ emoji });
    setEmojiList([...emojiList, emoji]);
    setEmojiType(null);
  };

 
  return (
    <>
      <p>
        {emojiTypeList.map((name) => (
          <button onClick={onClickButton} name={name} key={name} i class="far fa-smile">  
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
              recent: "Frequently Used",
              people: "People",
              foods: "Foods",
              activity: "Activity",
              places: "Places",
              objects: "Objects",
              symbols: "Symbols",
              flags: "Flags",
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
              onClick={(emoji) =>  ({ ...emoji, emojiType })}
              key={i}
            />
          ))
        : null}
    </>
  );
}

export default AddEmoji;
