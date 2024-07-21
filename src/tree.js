export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

export class Tree {
    constructor(array) {
        this.root = buildtree(array, 0, array.length - 1)
    }

}

class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}


const buildtree = (array, start, end) => {
    const arr = array.sort(function(a,b){return a-b})
    if (start > end) {
        return null
    }

    const mid = parseInt((start + end) / 2)

    const node = new Node(arr[mid])

    node.left = buildtree(arr, start, mid - 1)
    node.right = buildtree(arr, mid + 1, end)
    return node
}
