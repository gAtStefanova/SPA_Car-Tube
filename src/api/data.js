import { del, get, post, put } from "./api.js";

export async function getAllCars() {
    return get("/data/cars?sortBy=_createdOn%20desc");
  }

  export async function createCar(car) {
    return post("/data/cars", car);
  }
  export async function getCarById(id) {
    return get("/data/cars/" + id);
  }
  export async function deleteCar(id){
    return del('/data/cars/'+id)
}
export async function updateCar(id,car){
    return put('/data/cars/'+id,car)
}

export async function getCarByUser(userId){
    return get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function searchCar(query){
    return get(`/data/cars?where=year%3D${query}`)
    }
/*

 
  

/*

  
 




export async function likeShow(theaterId){
    return post('/data/likes',{
        theaterId
    })
}
export async function getLikesByShowId(theaterId){
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
}

export async function getMyLikeByShowId(theaterId,userId){
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function searchBooks(query){
return get('/data/books?where='+ encodeURIComponent(`title LIKE "${query}"`))
}
window.getMyLikeByBookId=getMyLikeByBookId
*/