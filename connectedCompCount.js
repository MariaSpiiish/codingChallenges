const countConnectedComponents = (graph) => {
    let count = 0;
    const visited = new Set();

    for (let node in graph) {
        console.log(visited)
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }

    return count;
}

const explore = (graph, current, visited) => {
    if (visited.has(current)) return false;

    visited.add(current);

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    return true;
}

const edges = [
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

const buildGraph = (edges) => {
    const graph = {};

    edges.forEach((edge) => {
        const [a, b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    })

    return graph;
}

const graph = buildGraph(edges);

console.log(countConnectedComponents(graph));