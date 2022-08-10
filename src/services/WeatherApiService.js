import useSWR from "swr";

export default function Handle(){
const fetcher = (...args) => fetch(...args).then((res) => res.json());
  
    const { data, error } = useSWR(
      "https://jsonplaceholder.typicode.com/posts",
      fetcher
    );
  
    return {data}
  };