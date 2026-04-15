import { useCallback, useEffect, useState } from 'react';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { productsApi } from 'src/mocks/products';
import ProductBody from './product-body';

function Component() {
  const isMountedRef = useRefMounted();
  const [product, setProduct] = useState(null);
  const getProduct = useCallback(async () => {
    try {
      const response = await productsApi.getProduct();
      if (isMountedRef()) {
        setProduct(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);
  useEffect(() => {
    getProduct();
  }, [getProduct]);
  if (!product) {
    return null;
  }
  return <ProductBody product={product} />;
}
export default Component;
