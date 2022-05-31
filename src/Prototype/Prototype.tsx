import React from "react";
import "./Prototype.scss";
import { Try } from "./Try/Try";
// import { ComprehensionNewspaper } from "./Newspaper/ComprehensionNewspaper";
import { Numbered as Numbered4 } from "./Numbered4/Numbered";
import { NumberedProvider as Numbered4Provider } from "./Numbered4/NumberedProvider";
export const Prototype = () => {
  return (
    <>
      {/* <Try /> */}

      <Numbered4Provider step={2}>
        <Numbered4>
          <h1>
            This is editable rich text, much better than a textarea! Since it's
            rich text, you can do things like turn a selection of text bold, or
            add a semantically rendered block quote in the middle of the page,
            like this: A wise quote.
          </h1>
        </Numbered4>

        <Numbered4>
          <p>
            This is editable rich text, much better than a textarea! Since it's
            rich text, you can do things like turn a selection of text bold, or
            add a semantically rendered block quote in the middle of the page,
            like this: A wise quote.
          </p>
        </Numbered4>

        <Numbered4>
          <ul>
            <li> hello darkness my old friend </li>
            <li> pls work tho </li>
            <li> pls work tho </li>
            <li> pls work tho </li>
            <li> pls work tho </li>
          </ul>
        </Numbered4>

        <Numbered4>
          <blockquote>
            Hi I'm a blockquote, Hi I'm a blockquote Hi I'm a blockquoteHi I'm a
            blockquoteHi I'm a blockquoteHi I'm a blockquoteHi I'm a
            blockquoteHi I'm a blockquoteHi I'm a blockquoteHi I'm a
            blockquoteHi I'm a blockquoteHi I'm a blockquoteHi I'm a blockquote
          </blockquote>
        </Numbered4>
        {/*
        <Numbered4>
          <p>
            This is editable rich text, much better than a textarea! Since it's
            rich text, you can do things like turn a selection of text bold, or
            add a semantically rendered block quote in the middle of the page,
            like this: A wise quote.
          </p>
        </Numbered4>

        <Numbered4>
          <p>
            This is editable rich text, much better than a textarea! Since it's
            rich text, you can do things like turn a selection of text bold, or
            add a semantically rendered block quote in the middle of the page,
            like this: A wise quote.
          </p>
        </Numbered4> */}
      </Numbered4Provider>
      {/* <ComprehensionNewspaper /> */}
    </>
  );
};
