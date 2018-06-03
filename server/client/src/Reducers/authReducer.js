import { FETCH_USER } from "../Actions/types"

// import React from 'react'
export default function(state = null, action){
  console.log(action)
  switch(action.type){
    case FETCH_USER:
      return action.payload || false

    default: 
      return state
  }
}