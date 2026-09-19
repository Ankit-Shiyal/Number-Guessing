# 🎯 Number Guessing Game

Live Link: https://number-guessing-wine.vercel.app/

A simple and interactive **Number Guessing Game** built using **HTML, CSS, JavaScript, and Bootstrap**.

The player has to guess a randomly generated number between **1 and 100**. The game provides hints such as **"Try a higher number"** or **"Try a lower number"** until the correct number is guessed.

## 🚀 Features

* 🎲 Random number generation
* 🔢 Guess a number between 1 and 100
* 💡 Higher/Lower hints
* 🚫 Prevents duplicate guesses
* 📊 Tracks the number of attempts
* 📝 Displays previous guesses
* ❌ Input validation
* 🔄 New Game button
* 💾 Saves game data using Local Storage
* ⌨️ Supports Enter key for submitting a guess
* 📱 Responsive and simple UI using Bootstrap

## 🛠️ Technologies Used

* **HTML5** – Structure of the game
* **CSS3** – Styling and layout
* **JavaScript** – Game logic and DOM manipulation
* **Bootstrap 5** – UI styling and responsive design
* **Local Storage** – Saving game data in the browser

## 📂 Project Structure

```text
Number-Guessing-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎮 How to Play

1. Open the game in your browser.
2. Enter a number between **1 and 100**.
3. Click **Submit Guess**.
4. The game will provide a hint:

   * **Try a higher number** – if your guess is smaller than the target.
   * **Try a lower number** – if your guess is larger than the target.
   * **Correct number** – if your guess matches the target.
5. Your attempts and previous guesses will be displayed.
6. Click **New Game** to start a new game.

## ✅ Input Validation

The game validates the user's input and displays an error message when:

* No number is entered.
* The entered value is invalid.
* The number is less than 1.
* The number is greater than 100.
* The same number is guessed more than once.

## 💾 Local Storage

The game uses the browser's **Local Storage** to save game information.

The following data can be stored:

```javascript
{
    attempts: 5,
    guesses: [20, 50, 70, 80, 75],
    gameOver: true
}
```

The data is stored using the key:

```text
guessGame
```

## 🔄 New Game

Clicking the **New Game** button:

* Generates a new target number.
* Resets attempts to `0`.
* Clears previous guesses.
* Clears feedback messages.
* Enables the Submit button again.
* Removes the saved game data from Local Storage.

## 📚 Learning Outcomes

This project helped practice:

* JavaScript variables
* Functions
* Conditional statements
* Arrays
* DOM manipulation
* Event listeners
* `Math.random()`
* `Math.floor()`
* Input validation
* `localStorage`
* JSON
* Bootstrap classes
* Basic CSS styling

* ## 📸 Screenshot

### Number Guessing Game

<img width="597" height="396" alt="Screenshot 2026-09-19 123631" src="https://github.com/user-attachments/assets/d3a75c16-f6df-4aa3-ae2c-b955bbbb07fc" />


## 👨‍💻 Author

**Ankit Shiyal**
---

