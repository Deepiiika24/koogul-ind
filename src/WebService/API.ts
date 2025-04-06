import API_URL from '../Utils/Url';

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestParams {
  [key: string]: string | number | boolean;
}

interface RequestOptions {
  route: string;
  method: HttpMethod;
  data?: any;
  token?: string | null;
  params?: RequestParams;
}

const request = async <T = any>({
  route,
  method,
  data = null,
  token = null,
  params = {},
}: RequestOptions): Promise<T> => {
  try {
    const url = new URL(`${API_URL}${route}`);

    // Add query parameters
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key]))
    );

    console.log(`Sending ${method} request to:`, url.toString());

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
      console.log("Request Body:", options.body);
    }

    const response = await fetch(url.toString(), options);
    console.log("Response Status:", response.status);

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Response Error:", responseData);
      throw new Error(responseData.message || `Error: ${response.status}`);
    }

    console.log("Response Data:", responseData);
    return responseData;
  } catch (e: any) {
    console.error("API Error:", e.message);
    throw e;
  }
};

// Exported HTTP method wrappers with generic response typing
export const getData = <T = any>(
  route: string,
  token: string | null = null,
  params: RequestParams = {}
) => request<T>({ route, method: "GET", token, params });

export const postData = <T = any>(
  route: string,
  data: any,
  token: string | null = null
) => request<T>({ route, method: "POST", data, token });

export const putData = <T = any>(
  route: string,
  data: any,
  token: string | null = null
) => request<T>({ route, method: "PUT", data, token });

export const deleteData = <T = any>(
  route: string,
  token: string | null = null
) => request<T>({ route, method: "DELETE", token });

