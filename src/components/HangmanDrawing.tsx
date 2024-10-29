import styles from "../styles/HangmanDrawing.module.css";

const HangmanDrawing = ({ numberOfGuesses }: { numberOfGuesses: number }) => {
  return (
    <div className={styles.drawing_container}>
      {BodyParts.slice(0, numberOfGuesses)}

      <div className={styles.hanging_bar} />
      <div className={styles.top_bar} />
      <div className={styles.upright_bar} />
      <div className={styles.bottom_bar} />
    </div>
  );
};
export default HangmanDrawing;

const Head = <div className={styles.head} />;

const Body = <div className={styles.body} />;

const RightArm = <div className={styles.right_arm} />;

const RightLeg = <div className={styles.right_leg} />;

const LeftArm = <div className={styles.left_arm} />;

const LeftLeg = <div className={styles.left_leg} />;

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
