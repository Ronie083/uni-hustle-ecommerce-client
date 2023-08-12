import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data, isLoading } = useQuery([], async () => {
    const res = await fetch("Products.json");
    return res.json();
  });

  return [data, isLoading];
};

export default useProducts;
