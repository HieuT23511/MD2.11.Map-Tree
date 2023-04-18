export class TreeNode<G>{
    public _data : G;
    public left: TreeNode<G> | null
    public right: TreeNode<G> | null
    constructor(data : G) {
        this._data = data;
        this.left = null;
        this.right = null;
    }
}