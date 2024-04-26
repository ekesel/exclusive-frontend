import Cookies from 'js-cookie';


export const dataToUrlParams = (data) => {
  let queryString = new URLSearchParams()
  for(let key in data){
    let value = data[key].toString()
    queryString.append(key, value);
  }
  return queryString.toString();
}

const handleError = async (error) => {
  let detail = {detail: "Connection Error"};
  let status = 'connection_error'
  if(error.status){
    status = error.status;
    try{
      detail = await error.json()
    }catch(err){
      detail = {detail: "Something went wrong"}
    }
  }
  return {...detail}
}

export const _getCSRFHeader = () => {
  let header = {}
  let csrf_token = Cookies.get('csrftoken')
  header['X-CSRFToken'] = csrf_token
  return header
}

export const  GetCall = async (URL, DATA, HEADER={}) => {
  try{
    let FINAL_URL = URL;
    if(typeof(DATA)=="object" && !!Object.keys(DATA).length){
      FINAL_URL = URL + "?" + dataToUrlParams(DATA);
    }
    const response = await fetch(FINAL_URL, {
      headers: {
        ...HEADER,
        ..._getCSRFHeader()
      }
    })
    if(response.ok){
      return {response: response, data: await response.json()};
    }else{
      throw(response)
    }
  }catch(error){
    throw(await handleError(error));
  }
}

export const PostCall = async (URL, DATA, HEADER={Accept: 'application/json', 'Content-Type': 'application/json'}, responseRequired=true) => {
  try{
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        ...HEADER,
        ..._getCSRFHeader()
      },
      body: JSON.stringify(DATA)
    })
    if(responseRequired){
      if(response.ok){
        return {response: response, data: await response.json()};
      }else{
        throw(response)
      }
    }
  } catch(err) {
    throw(err);
  }
}

export const PatchCall = async (URL, DATA, HEADER={Accept: 'application/json', 'Content-Type': 'application/json'}, responseRequired=true) => {
  try{
    const response = await fetch(URL, {
      method: 'PATCH',
      headers: {
        ...HEADER,
        ..._getCSRFHeader()
      },
      body: JSON.stringify(DATA)
    })
    if(responseRequired){
      if(response.ok){
        return {data: await response.json(), details: response};
      }else{
        throw(response)
      }
    }
  } catch(err) {
    throw(err);
  }
}

export const DEFAULT_HEADER = {
  Accept: "application/json",
  "Content-Type": "application/json",
};