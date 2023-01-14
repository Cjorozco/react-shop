import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios.get(API);
		setProducts(response.data);
	}, []);

  return products;
}

export default useGetProducts;
