type Method = "GET" | "POST" | "PUT" | "DELETE";

const isEmptyContent = (statusCode: number): boolean => {
    return statusCode === 202 || statusCode === 204;
};

export async function nextFetch(
    url: string,
    method: Method = "GET",
    body?: {} | Array<any>
): Promise<any> {
    const headers: Object = {
        "Content-Type": "application/json"
    };
    const options: any = {
        method,
        headers,
        dataType: "jsonp"
    };
    if (typeof body !== "undefined") {
        options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    if (!res.ok) throw new Error("HTTP Error: " + res.statusText);

    const data = await (isEmptyContent(res.status)
        ? Promise.resolve()
        : res.json());
    return data;
}

export async function fetchGist(
    path: string
): Promise<any> {
    const res = await nextFetch(
        "https://api.github.com/gists/e5d26d25aad3d3d6709b961d60e93b06"   // "https://api.github.com/users/phuud/gists"
    );
    const content = res.files && res.files[path]
        ? JSON.parse(res.files[path].content)
        : ""
  return content;
}

export default nextFetch
