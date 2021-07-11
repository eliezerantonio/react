import React from "react";
const useFetch = () => {
  const [data, setData] = React.useState(null);

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    const response = await fetch(url, options);

    const json = await response.json();
    setData(json);
  }
  return { data, error, loading, request };
};

export default useFetch;
