import styles from "../styles/Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  addGuessedLetters: (letter: string) => void;
  disabled?: boolean;
  inactiveLetters: string[];
};

const Keyboard = ({
  activeLetters,
  disabled = false,
  addGuessedLetters,
  inactiveLetters,
}: KeyboardProps) => {
  return (
    <div className={styles.keyboard_container}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetters(key)}
            disabled={isInActive || isActive || disabled}
            key={key}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive || disabled ? styles.inactive : ""
            }`}>
            {key}
          </button>
        );
      })}
    </div>
  );
};
export default Keyboard;
