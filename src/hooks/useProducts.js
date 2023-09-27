import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`https://coffee-time-server-snowy.vercel.app/products`);
      return response.json();
    },
  });
  return [products]
};

export default useProducts;
