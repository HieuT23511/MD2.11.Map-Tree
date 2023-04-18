import {Tree} from "../interface/Tree";
import {TreeNode} from "./TreeNode";

export class BinaryTreeNode implements Tree {
    root: TreeNode | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize() {
        return this.totalNode;
    }

    insertNode(data: number) {
        let node = new TreeNode(data);
        if (!this.root) {
            this.root = node;
            this.totalNode++;
            return this.root;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left
                    }
                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    throw new Error(`Data was existed! `)
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }

    preOrder(node: TreeNode | null) {
        if (node) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
        // if(node){
        //     console.log(node.data);
        //     if(node.left){
        //         this.preOrder(node.left);
        //     }
        //     if(node.right){
        //         this.preOrder(node.right);
        //     }
        // }
    }

    inOrder(node: TreeNode | null) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
        // if(node){
        //     this.postOrder(node.left);
        //     this.postOrder(node.right);
        //     console.log(node.data);
        // }
    }

    postOrder(node: TreeNode | null) {
        if (node) {
            this.inOrder(node.left);
            this.inOrder(node.right);
            console.log(node.data);
        }
        // if(node){
        //     if(node.left){
        //         this.postOrder(node.left);
        //     }
        //     if(node.right){
        //         this.postOrder(node.right);
        //     }
        //     console.log(node.data);
        // }
    }

    searchNode(data: number) {
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data) {
                return currentNode;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return null;
    }

    findParentNode(data: number) {
        let childrenNode = this.searchNode(data);
        if (childrenNode) {
            if (childrenNode === this.root) {
                return null;
            } else {
                let parentNode = this.root;
                while (parentNode) {
                    if (parentNode.left == childrenNode || parentNode.right == childrenNode) {
                        return parentNode;
                    } else {
                        if (data < parentNode.data) {
                            parentNode = parentNode.left;
                        } else if (data > parentNode.data) {
                            parentNode = parentNode.right;
                        }
                    }
                }
            }
        }
    }
}