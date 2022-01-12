// Times of day to greet.
const day = ['morning', 'afternoon', 'evening'];
// People who greet
const greeter = ['robot', 'dog', 'human'];
// Limbs based on the greeted person.
const greeterLim = [['circuit', 'sensor'], ['paw', 'ear'], ['arm', 'toe']];
// Adjectives
const adj = ['aching', 'restless', 'normal', 'perky'];

// Chooses a random integer between 0 and n - 1 inclusive
const r = n => Math.floor(Math.random()*n);
// Returns random string of the form "Good [Time of Day], my [person] [person limb]s are [adjective]"
const greet = () => `Good ${day[r(day.length)]}, my ${greeter[x = r(greeter.length)]} ${greeterLim[x][r(greeterLim[x].length)]}s are ${adj[r(adj.length)]}.`;
console.log(greet());