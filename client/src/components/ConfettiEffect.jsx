import Confetti from "react-confetti";

function ConfettiEffect() {
  return (
    <Confetti
      recycle={false}
      numberOfPieces={400}
    />
  );
}

export default ConfettiEffect;