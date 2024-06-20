import { User } from "lucia";
import { useState, useEffect } from "react";

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetUser = async () => {
      const res = await fetch("/api/auth/current-user");
      const data = await res.json();

      setUser(data);
      setIsLoading(false);
    };

    fetUser();
  }, []);

  return { user, isLoading };
}
