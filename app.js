// app.js
import { database, ref, onValue } from './firebase.js';

// Auto-detect page type
const isVideoMode = window.location.href.includes("videoMode");

const containerId = isVideoMode ? "videoGrid" : "audioGrid";
const audioRef = ref(database, "audio/");

onValue(audioRef, (snapshot) => {
  const data = snapshot.val();
  if (!data) return;

  const grid = document.getElementById(containerId);
  grid.innerHTML = ""; // Clear previous

  Object.keys(data).forEach((key) => {
    const item = data[key];

    // Filter: video or music
    if ((isVideoMode && item.type !== "video") || (!isVideoMode && item.type !== "music")) {
      return;
    }

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>Duration: ${item.duration}</p>
    `;

    grid.appendChild(card);
  });
});