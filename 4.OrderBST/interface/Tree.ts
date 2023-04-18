import {TreeNode} from "../src/TreeNode";

export interface  Tree {
    root: TreeNode|null;
    totalNode: number;
    insertNode(data:number);
    inOrder(node:TreeNode);
    getSize();
    searchNode(data:number);
}