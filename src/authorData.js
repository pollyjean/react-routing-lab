export const convertToLink = (item) => {
  return item.replaceAll(" ", "_");
}

export const authorData = [
  {
    "author": "J.R.R Tolkien",
    "book": [
      {
        "name": "The Load of the Ring",
        "chapters": ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
        "characters": [
          "ring guy",
          "ring guy friend",
          "eye",
          "eye friend"
        ]
      }
    ]
  },
  {
    "author": "Ursula K. Le Guin",
    "book": [
      {
        "name": "Earthsea",
        "chapters": [
          "A Wizard of Earthsea",
          "The Tombs of Atuan",
          "The Farthest Shore",
          "Tehanu",
          "Tales from Earthsea",
          "The Other Wind"
        ],
        "characters": [
          "wizard",
          "nomad",
          "left hand"
        ]
      }
    ]
  }
]
