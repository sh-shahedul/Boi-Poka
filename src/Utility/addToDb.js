const getStoredBook = () => {
const  storeBookSTR = localStorage.getItem('listBook')
if(storeBookSTR){
    const storeBookData = JSON.parse(storeBookSTR)
    return storeBookData;
}
else{
    return[]
}



};

const addToStoredDb = (id) => {

  const storeBookData =getStoredBook()

  if(storeBookData.includes(id)){
    alert('Id already exist')
  }
  else{
    storeBookData.push(id)
    const data  =JSON.stringify(storeBookData)  
    localStorage.setItem('listBook',data)
  }
};
export{addToStoredDb ,getStoredBook}