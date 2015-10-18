//获取元素相对于屏幕左边,上边的距离，利用offsetLeft，offsetTop
function getPosition(node){
	var left=node.offsetLeft;
	var top=node.offsetTop;
	var parent=node.offsetParent;
	if (left!=null) {
		left+=parent.offsetLeft;
		top+=parent.offsetTop;
		parent=parent.offsetParent;
	};
	return {"left":left,"top":top};
}