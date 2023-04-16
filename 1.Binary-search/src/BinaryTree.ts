import {Tree} from "../interface/Tree";
import {TreeNode} from "./TreeNode";

export class BinaryTree<G> implements Tree<G> {
    root: TreeNode<G> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        return this.totalNode;
    }

    inorder(node: TreeNode<G>): void {
        if(node){
            if (node.left){
                this.inorder(node.left);
            }
            console.log(node._data);
            if(node.right){
                this.inorder(node.right);
            }
        }
    }
    insert(data: G): TreeNode<G> {
        if (!this.root) {
            this.root = new TreeNode<G>(data);
            this.totalNode++;
        } else {
            let node = new TreeNode<G>(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data <= currentNode._data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else if (data > currentNode._data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode
        }
    }

}