const initialState = {
    cartProducts: []
}

const likeReducer = (state = initialState,action)=>{
    switch(action.type){
        case "LIKE_MUSIC":
            return ({
                likedProduct:[action.productData,...state.likedProduct]
            })
        case "DISLIKE_MUSIC":
            let indexOfRemovedItem = state.likedProduct.findIndex(product=>product._id===action.id)
            state.likedProduct.splice(indexOfRemovedItem,1)
            return({
                likedProduct:[...state.likedProduct]
            })
        default:
            return state
    }
}

export { likeReducer }