const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories:`, itemRef.length);
itemRef.forEach(el =>
{
    console.log(el.firstElementChild.textContent);
        console.log(`Elements:`, el.lastElementChild.children.length)
})
