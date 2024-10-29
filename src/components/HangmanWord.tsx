import styles from "../styles/HangmanWord.module.css";

type HangmanWordProps = {
  guessedLetters: string[];
  reveal?: boolean;
  wordToGuess: string;
};

const HangmanWord = ({
  guessedLetters,
  reveal = false,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div className={styles.word_container}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className={styles.letter}>
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? styles.visible
                : styles.hidden
            } ${
              reveal && !guessedLetters.includes(letter)
                ? styles.textred
                : styles.textwhite
            }`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
export default HangmanWord;
