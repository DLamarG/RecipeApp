export async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }
  
  
  export async function register(context) {
    const base_url = import.meta.env.VITE_BASE_URL
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(context)
      }
      const body = await basicFetch(`http://${base_url}/api/v1/signup/`,payload)
      console.log(body, "API CALL")
      return body
    }
    
  export async function login(context) {
    const base_url = import.meta.env.VITE_BASE_URL
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch(`http://${base_url}/api/v1/get-token/`, payload)
    localStorage.setItem("token", body.token)
    return body.token
  }
  

  export async function addRecipe(context) {
    const base_url = import.meta.env.VITE_BASE_URL
    const userToken = localStorage.getItem("token")
    let formData = new FormData()
    formData.append("title", context.title)
    formData.append("ingrediants", context.ingrediants)
    formData.append("picture", context.picture)
    const payload = {
      method: "POST",
      headers: {
        "Authorization": `Token ${userToken}`
      },
      body: formData
    }
    const body = await basicFetch(`http://${base_url}/api/v3/myrecipes/`, payload)
    console.log(body)
    return {"success": "Your new recipe has been added!"}
  }


  export async function getRecipes(context) {
    const base_url = import.meta.env.VITE_BASE_URL
    const userToken = localStorage.getItem("token")
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${userToken}`
      },
    }
    const body = await basicFetch(`http://${base_url}/api/v3/myrecipes/`, payload)
    console.log(body)
    return body
  }