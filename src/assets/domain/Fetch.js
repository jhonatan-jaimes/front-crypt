export const fetchGet = async (url) => {
  try {
    const res = await fetch(url, "GET");
    if (!res.ok) {
      return;
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchPost = async (url, objeto) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objeto),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error en la petición fetch: mmm", error);
  }
};
