// Times of day to greet.
const day = ['morning', 'afternoon', 'evening'];
// People who greet
const greeter = ['robot', 'dog', 'human'];
const greeterLim = [['circuit', 'sensor'], ['paw', 'ear'], ['arm', 'toe']];
// Adjectives
const adj = ['aching', 'restless', 'normal', 'perky'];

const r = n => Math.floor(Math.random()*n);
const greet = () => `Good ${day[r(day.length)]}, my ${greeter[x = r(greeter.length)]} ${greeterLim[x][r(greeterLim[x].length)]}s are ${adj[r(adj.length)]}.`;
console.log(greet());