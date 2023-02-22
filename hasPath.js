// directed graph

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const hasPath = (graph, src, dst) => {
    const queue = [ src ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false;
}

console.log(hasPath(graph, 'a', 'b'))