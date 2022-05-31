import { Descendant } from "slate";

export const initialValue: Descendant[] = [
  {
    type: "newspaper_title",
    children: [{ text: "THE DAILY HERALD" }]
  },
  {
    type: "newspaper_subtitle",
    children: [
      {
        text: "Stories that matter"
      }
    ]
  },
  {
    type: "title",
    children: [
      {
        text: "SUPERMASSIVE BREAKTHROUGH"
      }
    ]
  },
  {
    type: "subtitle",
    children: [
      {
        text: "NASA Unveils First-Ever Image Of Black Hole"
      }
    ]
  },
  {
    type: "author",
    children: [
      {
        text: "Celeste E. L. Objects"
      }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Lorem ipsum"
      }
    ]
  }
];
