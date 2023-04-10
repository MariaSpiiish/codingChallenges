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

const hasPath = (graph, src, dst, visited) => {
    if(src === dst) return true;
    if(visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst, visited) === true) {
            return true;
        }
    }

    return false;
    
}

const graph = buildGraph(edges);

console.log(hasPath(graph, 'PHX', 'BKK', new Set()));