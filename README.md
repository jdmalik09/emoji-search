# Emoji Search Website

## Overview
This is a simple website that allows users to search for emojis by description, aliases, or tags. The application displays matching emojis and allows users to copy them to the clipboard.

## Features
- Search for emojis using a search bar.
- Filter emojis by their description, aliases, or tags.
- Click on an emoji to copy it to the clipboard.
- Buttons to filter emojis by categories (e.g., "All", "Kiss" etc).

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Use the search bar to find emojis by typing keywords.
4. Click on any emoji to copy it to your clipboard.
5. Use the category buttons to filter emojis further.

## Code Explanation
- **HTML Structure**: The HTML file contains a search input, a display area for emojis, and buttons for filtering.
- **JavaScript Logic**:
  - The `displayEmoji` function filters the emoji list based on the search query and updates the display.
  - An event listener on the search input captures user input and calls `displayEmoji` with the current search value.
  - Clicking on an emoji copies it to the clipboard and shows an alert.
  - Buttons trigger the filtering of emojis based on predefined categories.

## Example Emoji List Format
The `emojiList` variable should be an array of objects, where each object has the following structure:
```javascript
[
  {
    emoji: "😀",
    description: "grinning face",
    aliases: ["grinning", "face"],
    tags: ["happy", "smile"]
  },
  // More emojis...
]
