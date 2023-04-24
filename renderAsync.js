function renderAsync(items, n) {
    
    const arr = [];

    for (let i = 0; i < items.length; i++) {
        items.sort((a, b) => b.priority - a.priority);
        arr.push(items[i].id);

        let children = items[i].children;
        
        if(children) {
            for (let j = 0; j < children.length; j++) {
                children.sort((a, b) => b.priority - a.priority);
                arr.push(children[j].id);
            }
        
        }


    }

    const promise = new Promise((resolve, reject) => {
        resolve(arr)
    })
    return promise;
}

const renderItems = [
          {
            "id": "A",
            "priority": 1,
            "children": [
              {
                "id": "A.1",
                "priority": 2,
                "children": [
                  {
                    "id": "A.1.1",
                    "priority": 2,
                    "children": null
                  }
                ]
              }
            ]
          },
          {
            "id": "B",
            "priority": 2,
            "children": [
              {
                "id": "B.1",
                "priority": 3,
                "children": null
              },
              {
                "id": "B.2",
                "priority": 3,
                "children": null
              },
              {
                "id": "B.3",
                "priority": 3,
                "children": null
              },
              {
                "id": "B.4",
                "priority": 1,
                "children": null
              },
              {
                "id": "B.5",
                "priority": 1,
                "children": null
              },
              {
                "id": "B.6",
                "priority": 1,
                "children": null
              }
            ]
          }
]

// const allIds = renderItems.map(item => {
//     const ids = [item.id];
//     if (item.children) {
//       ids.push(...item.children.map(child => child.id));
//     }
//     return ids;
//   }).flat();
  
//   console.log(allIds);
renderAsync(renderItems, 2).then((result) => console.log(result))
// console.log(renderAsync(renderItems, 2))