import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FloatingHearts from "../components/FloatingHearts";
import ApologyCard from "../components/ApologyCard";
import ResponseButtons from "../components/ResponseButtons";
import ConfettiEffect from "../components/ConfettiEffect";

function Home() {
  const [accepted, setAccepted] = useState(false);
  const [opened, setOpened] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div
      className="home-page"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Full Screen Background Video */}
      {<video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>}

      {/* 🌑 Dark Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: -1,
        }}
      />

      <FloatingHearts />

      {accepted && <ConfettiEffect />}

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setOpened(true)}
            style={{
              position: "fixed",
              inset: 0,
              cursor: "pointer",
              zIndex: 100,
            }}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <ApologyCard
              unlocked={unlocked}
              setUnlocked={setUnlocked}
            />

            <ResponseButtons
              accepted={accepted}
              setAccepted={setAccepted}
              unlocked={unlocked}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;