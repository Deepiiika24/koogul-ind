import API_URL from "../Utils/Url.js";

const request = async (route, method, data = null, token = null, params = {}) => {
  try {
    const url = new URL(`${API_URL}${route}`);
    
    // Append query parameters if provided
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    console.log(`Sending ${method} request to:`, url.toString());

    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const options = {
      method,
      headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
      console.log("Request Body:", options.body);
    }

    const response = await fetch(url, options);
    console.log("Response Status:", response.status);

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Response Error:", responseData);
      throw new Error(responseData.message || `Error: ${response.status}`);
    }

    console.log("Response Data:", responseData);
    return responseData;
  } catch (e) {
    console.error("API Error:", e.message);
    throw e;
  }
};

// API Methods
export const getData = (route, token = null, params = {}) => request(route, "GET", null, token, params);
export const postData = (route, data, token = null) => request(route, "POST", data, token);
export const putData = (route, data, token = null) => request(route, "PUT", data, token);
export const deleteData = (route, token = null) => request(route, "DELETE", null, token);
