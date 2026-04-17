import { useEffect, useState } from "react";
import axios from "axios";
import echo from "src/services/echo";

export default function Analysis() {
  const [products, setProducts] = useState([]);

  // 🔹 charger les produits au départ
  useEffect(() => {
    axios.get("http://localhost:8000/api/v2/products").then((res) => {
      console.log("all data", res);
      setProducts(res.data);
    });
  }, []);

  // 🔥 écouter les nouveaux produits
  useEffect(() => {
    echo.channel("products").listen(".product.created", (e) => {
      console.log("new product added", e);
      setProducts(prev => [e.product, ...prev]);
    });

    return () => {
      console.log("unsubscribing from products channel");
      echo.leave("products");
    };
  }, []);

  return (
    <div>
      <h2>Liste des produits</h2>

      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price} FCFA
        </div>
      ))}
    </div>
  );
}
