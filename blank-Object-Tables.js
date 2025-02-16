function generateTerrainDetails() {
  // Roll a random value for each terrain feature
  const howPopulatedRoll = Math.floor(Math.random() * 4) + 1; // d4
  const howDangerousRoll = Math.floor(Math.random() * 6) + 1; // d6
  const whatUseRoll = Math.floor(Math.random() * 8) + 1; // d8
  const kindOfEventRoll = Math.floor(Math.random() * 10) + 1; // d10
  const whatAntagonistsRoll = Math.floor(Math.random() * 12) + 1; // d12
  const optionalQuirkRoll = Math.floor(Math.random() * 20) + 1; // d20

  // Get descriptions based on the rolls
  const populated = howPopulated[howPopulatedRoll];
  const dangerous = howDangerous[howDangerousRoll];
  const use = whatUse[whatUseRoll];
  const kindOfEvent = whatKindOfEvent[kindOfEventRoll];
  const antagonists = whatAntagonists[whatAntagonistsRoll];
  const quirk = optionalQuirk[optionalQuirkRoll];

  // Update the HTML elements with the rolled values
  document.getElementById("display-how-populated").innerHTML = `<h4>Populated:</h4><p>${populated}</p>`;
  document.getElementById("display-how-dangerous").innerHTML = `<h4>Dangerous:</h4><p>${dangerous}</p>`;
  document.getElementById("display-what-use").innerHTML = `<h4>Use:</h4><p>${use}</p>`;
  document.getElementById("display-kind-of-event").innerHTML = `<h4>Recent Event:</h4><p>${kindOfEvent}</p>`;
  document.getElementById("display-what-antagonists").innerHTML = `<h4>Antagonists:</h4><p>${antagonists}</p>`;
  document.getElementById("display-optional-quirk").innerHTML = `<h4>Optional Quirk:</h4><p>${quirk}</p>`;
}

const howPopulated = {
  1: "TEXT",
  2: "TEXT",
  3: "TEXT",
  4: "TEXT",
};

const howDangerous = {
  1: "TEXT",
  2: "TEXT",
  3: "TEXT",
  4: "TEXT",
  5: "TEXT",
  6: "TEXT",
};
const whatUse = {
  1: "TEXT",
  2: "TEXT",
  3: "TEXT",
  4: "TEXT",
  5: "TEXT",
  6: "TEXT",
  7: "TEXT",
  8: "TEXT",
};
const whatKindOfEvent = {
  1: "TEXT",
  2: "TEXT",
  3: "TEXT",
  4: "TEXT",
  5: "TEXT",
  6: "TEXT",
  7: "TEXT",
  8: "TEXT",
  9: "TEXT",
  10: "TEXT",
};
const whatAntagonists = {
  1: "TEXT",
  2: "TEXT",
  3: "TEXT",
  4: "TEXT",
  5: "TEXT",
  6: "TEXT",
  7: "TEXT",
  8: "TEXT",
  9: "TEXT",
  10: "TEXT",
  11: "TEXT",
  12: "TEXT",
};
const optionalQuirk = {
  1: "TEXT",
  2: "TEXT",
  3: "TEXT",
  4: "TEXT",
  5: "TEXT",
  6: "TEXT",
  7: "TEXT",
  8: "TEXT",
  9: "TEXT",
  10: "TEXT",
  11: "TEXT",
  12: "TEXT",
  13: "TEXT",
  14: "TEXT",
  15: "TEXT",
  16: "TEXT",
  17: "TEXT",
  18: "TEXT",
  19: "TEXT",
  20: "TEXT",
};
