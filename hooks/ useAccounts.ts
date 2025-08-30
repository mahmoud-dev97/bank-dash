import { useEffect, useState } from "react";

export type Account = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

type UseAccountsReturn = {
  data: Account[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export const useAccounts = (): UseAccountsReturn => {
  const [data, setData] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAccounts = () => {
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchAccounts();
    }
  }, [data]);

  return { data, loading, error, refetch: fetchAccounts };
};
