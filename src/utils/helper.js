export function filterData (searchText , restraunts){
    const filterData =restraunts.filter((restraunt)=>{
      return  restraunt.info.name.includes(searchText)
  
     })
     return filterData;
  };