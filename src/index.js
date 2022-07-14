export const paintCards = () => {
  const li = document.querySelectorAll('li').forEach((item,index) => {
    if (!(index % 2)){
      return item.style.backgroundColor = 'red';
    }
  });
};

export const findElement = () => {
  let li = document.querySelector('li');
  while (li){
    if (li.classList.contains('likedItem')){
      return li.style.backgroundColor ='blue';
    }
    li = li.nextElementSibling;
    console.log(li);
  }
};
