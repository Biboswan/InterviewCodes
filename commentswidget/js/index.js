const submitComment = () => {
  const commentList = document.querySelector("#comment-list");
  const textarea = document.querySelector("#comment-box");
  const comment = document.createElement("li");
  comment.classList.add("comment");
  const commentText = document.createElement("div");
  commentText.innerHTML = textarea.value;
  comment.append(commentText);
  comment.append(createButtonsListHTML());
  textarea.value = "";
  commentList.append(comment);
  //textarea
};
const createButtonsListHTML = () => {
  const buttonSection = document.createElement("section");
  buttonSection.innerHTML = `<button>Reply</button><button>Like</button><button>Delete</button>`;
  return buttonSection;
};
