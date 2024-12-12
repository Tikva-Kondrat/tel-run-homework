const removeAllChildren = (parent) =>
    Array.from(parent.children).forEach(el => el.remove())

function createDeleteBtn(action) {
    const deleteBtn = document.createElement("button");
    deleteBtn.style.color = "red";
    deleteBtn.append("Delete")
    deleteBtn.addEventListener("click", (e) => {
        action();
        e.target.parentElement.remove();
    })
    return deleteBtn;
}
