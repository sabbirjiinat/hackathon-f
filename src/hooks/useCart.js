import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';

const useCart = () => {
  const { user } = useContext(AuthContext)


  const {  data: cart = [], refetch} = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
        const response = await fetch(`https://coffee-time-server-snowy.vercel.app/carts?email=${user?.email}`)
        return response.json();
    },
  })

  return [cart, refetch]
};

export default useCart;