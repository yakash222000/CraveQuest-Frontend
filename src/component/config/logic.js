export const isPresentInFavorite=(favorite,restaurant)=>{
    for(let item of favorite){
        if(item.id === restaurant.id){
            return true;
        }
    }
    return false;
}