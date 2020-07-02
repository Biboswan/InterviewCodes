// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element, Create a function to find that same element
// in tree B

function reversePath(element, root) {
  const path = new Array();

  let pt = element;

  while (pt.parent) {
    const ind = pt.parent.children.indexOf(pt);
    path.push(ind);
    pt = pt.parent;
  }

  pt = root;
  while (path.length > 0) {
    pt = pt.children[path.pop()];
  }
}
