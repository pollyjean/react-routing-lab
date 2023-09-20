export const convertToLink = (item) => {
  return item.replaceAll(" ", "_");
}

export const convertToName = (item) => {
  return item.replaceAll("_", " ");
}

export const authorData = [
  {
    "author": "J.R.R Tolkien",
    "book": [
      {
        "name": "The Load of the Ring",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3"],
        "characters": [
          "ring guy",
          "ring guy friend",
          "eye",
        ]
      },
      {
        "name": "The Load of the Ring II",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3"],
        "characters": [
          "ring guy",
          "ring guy friend",
          "eye",
          "eye friend"
        ]
      },
      {
        "name": "The Load of the Ring III",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
        "characters": [
          "ring guy",
          "ring guy friend",
          "eye",
          "eye friend",
          "thief"
        ]
      }
    ]
  },
  {
    "author": "Ursula K. Le Guin",
    "book": [
      {
        "name": "Earthsea",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3"],
        "characters": [
          "wizard",
          "nomad",
          "left hand"
        ]
      },
      {
        "name": "Earthsea II",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3"],
        "characters": [
          "wizard",
          "nomad",
          "right hand"
        ]
      },
      {
        "name": "Earthsea III",
        "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
        "characters": [
          "wizard",
          "nomad",
          "no hand"
        ]
      }
    ]
  }
]
