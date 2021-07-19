import { postMarketplaceListing, fetchMarketplaceListings } from "../apis/marketplace";

export const SET_MARKETPLACE_LISTING = 'SET_MARKETPLACE_LISTING'
export const ADD_MARKETPLACE_LISTING = 'ADD_MARKETPLACEADD_LISTING'

const setMarketPlaceListing = (listing) => {
    return {
        type: SET_MARKETPLACE_LISTING,
        listing
    }
}

// thunk
export const getMarketPlaceListings = () => {
  return dispatch => {
    return fetchMarketplaceListings()
      .then(data => {
        return dispatch(setMarketPlaceListing(data))
      })
  }
}

//----------------------------------------------------------------

const addMarketplaceListingToStore = (newListing) => {
  return {
    type: ADD_MARKETPLACE_LISTING,
    newListing
  }
}
      
export const createMarketplaceLising = (listing) => { 
  return dispatch => {
    return postMarketplaceListing(listing)
      .then(newListing => { 
        return dispatch(addMarketplaceListingToStore(newListing))
      })
  }
}
