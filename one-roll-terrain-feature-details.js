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
  1: "Almost unpopulated for something like it",
  2: "Very few settlers or workers there",
  3: "Average or more population density",
  4: "A rush of people have gone there",
};

const howDangerous = {
  1: "Safer than usual for someplace like it",
  2: "There's one notable kind of danger there",
  3: "It's got some site-specific flavors of peril",
  4: "It's unusually dangerous in several ways",
  5: "It will quickly kill the unprepared or unwary",
  6: "It's a death zone for all but the strongest",
};
const whatUse = {
  1: "A rare and precious resource is found there",
  2: "Ancient sites and relics are common there",
  3: "It's sacred land to a group or religion",
  4: "Controlling it has military significance",
  5: "It has substantial productive infrastructure",
  6: "A major trade route goes through it",
  7: "Uncontrolled, it's a nest of raiders and worse",
  8: "A mighty Working is still functioning there",
};
const whatKindOfEvent = {
  1: "A significant battle was fought there",
  2: "A mad prophet tried to start a faith there",
  3: "A usurper and supporters fled into it",
  4: "A resource strike drew numerous people",
  5: "A major nest of bandits are raiders formed",
  6: "A rich ancient ruin was discovered there",
  7: "An uncanny plague erupted in the area",
  8: "Some grim and terrible thing was awoken",
  9: "A community of outcasts or marginals formed",
  10: "A natural or uncanny disaster struck there",
};
const whatAntagonists = {
  1: "Violent secessionist rebels",
  2: "Angry cultists of a local faith",
  3: "Locals who resent interloping outsiders",
  4: "A type of cunning, dangerous beast",
  5: "Relic-creatures of ancient settlements",
  6: "Elemental emanations of the disordered land",
  7: "A hostile sentient monster civilization",
  8: "Brutal envoys of the central government",
  9: "Raiders and bandits driven into the area",
  10: "Rapacious local lords and gang bosses",
  11: "Remnants of a furious native population",
  12: "Outsider remnants with a bitter grudge",
};
const optionalQuirk = {
  1: "It has significant magical structures in it",
  2: "It has a place in the national origin legend",
  3: "It is entirely man-made by ancient arts",
  4: "Time and space somehow slip there",
  5: "The magical power there attracts wizards",
  6: "It subtly changes those who live there",
  7: "It's holy land to a particular faith",
  8: "It was formerly a different kind of terrain",
  9: "It has human-worked vistas of beauty",
  10: "It was formerly an Outsider stronghold",
  11: "A significant part of it is subterranean",
  12: "It'd expand were it not for ancient wards",
  13: "It was a nature preserve of a megastructure",
  14: "It's maintained by an ancient artificial mind",
  15: "Magic is somehow warped in its area",
  16: "The flora nad fauna are queasily 'off'",
  17: "The locals once populated it more heavily",
  18: "Rulership of the feature is widely disputed",
  19: "It's riddled with caves and delvings",
  20: "A unique type of sentient lives there",
};
