import axios from "axios"
import { deleteComment } from "../../controllers/videoController";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const BtnDeleteComment = document.getElementById("BtnDeleteComment");

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) +1;
}

const decreaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) -1;
}

// const handleDeleteComment = (event) => {
//     event.preventDefault();
//     const clickBtn = event.target;
//     const comList = clickBtn.parentNode;
//     commentList.removeChild(comList);
//     decreaseNumber();
// }

const addComment = (comment) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    BtnDeleteComment.appendChild(li);
    commentList.prepend(li);
    increaseNumber();
}

const sendComment = async (comment) => {
//  console.log(comment);
 const videoId = window.location.href.split("/videos/")[1];
 const response = await axios({
     url: `/api/${videoId}/comment`,
     method: "POST",
     data: {
         comment
     }
 }).then(res =>{
     const userId = res.data.id;
     console.log(userId);
     if(res.status === 200){
        addComment(comment);
     }
 });
};

const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
}

function init(){
    addCommentForm.addEventListener("submit", handleSubmit);
    
}

if(addCommentForm){
    init();
}