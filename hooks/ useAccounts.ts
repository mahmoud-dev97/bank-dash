import { useEffect, useState } from "react";

export type Account = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};
export const useAccounts = () => {
  const [data, setData] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAccounts = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const d = await res.json();
    setData(d);
    setLoading(false);
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchAccounts();
    }
  }, [data]);

  return { data, loading };
};
