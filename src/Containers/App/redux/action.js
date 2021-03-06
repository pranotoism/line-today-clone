import {
    GET_DATA_WAITING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED
} from "./constants"

import axios from "axios"

export const fetchDataSuccess = (payload) =>{
    return {
        type:GET_DATA_SUCCESS,
        payload : payload
    }
}

export const fetchDataFailure = (error) => {
    return {
        type:GET_DATA_FAILED,
        error: error
    }
}

const getUrl = 'https://today.line.me/id/portaljson'
console.log(getUrl, 'test');

export const fetchData = () =>{
    return async function(dispatch) {
        
        axios.get(`https://today.line.me/id/portaljson`)
            .then( (response) => {
                console.log('masuk');
                const dataCategory = response.data.result.categories
                const dataTab = response.data.result.categoryList
                const payload = {categories:[], categoryTab: []}
                const categories = dataCategory.map((categories) => {
                    var obj = {name:"", articleCategory:[]}
                    obj["articleCategory"] = categories.templates
                    obj["name"] = categories.name
                    return obj
                })
                const categoryTab = dataTab.map((categories) => {
                    var obj = {name:"" , highlight: false}
                    if(categories.highlight !== undefined){
                        obj["highlight"] = categories.highlight.enable
                    }
                    obj["name"] = categories.name
                    return obj
                })
                payload["categories"] = categories;
                payload["categoryTab"] = categoryTab
                console.log(payload, 'payload')
                dispatch(fetchDataSuccess(payload))
            })
            .catch( (err) => {
                console.log(err);
                dispatch(fetchDataFailure(err))
            })
    }
}