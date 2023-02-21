//undirected graph

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

// the graph
const adjecencyList = new Map();

// add node
const addNode = (airport) => {
    adjecencyList.set(airport, [])
};

// add edge
const addEdge = (origin, destination) => {
    adjecencyList.get(origin).push(destination);
    adjecencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjecencyList)
