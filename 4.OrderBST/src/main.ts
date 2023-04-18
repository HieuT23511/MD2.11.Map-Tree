import {BinaryTreeNode} from "./BinaryTreeNode";

let tree = new BinaryTreeNode();
tree.insertNode(15)
tree.insertNode(4)
tree.insertNode(26)
tree.insertNode(2)
tree.insertNode(8)
tree.insertNode(24)
tree.insertNode(38)
tree.insertNode(6)
// console.log(tree)
// console.log(tree.getSize())
// tree.inOrder(tree.root);
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);
// console.log(tree.searchNode(16))
console.log(tree.findParentNode(16));