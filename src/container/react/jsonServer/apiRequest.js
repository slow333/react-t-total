const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if(!response.ok) throw Error('App 로딩에 문제가 있습니다.')
  } catch(err){
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}

export default apiRequest;