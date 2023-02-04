import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/api/index.js";
export const useQuery = (query) => {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, query)).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return { data };
};
