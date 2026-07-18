function FloatingHearts() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left:
              Math.random() * 100 + "%"
          }}
        >
          
        </span>
      ))}
    </>
  );
}

export default FloatingHearts;