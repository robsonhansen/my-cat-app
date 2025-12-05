"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Breed {
  id: string;
  name: string;
  description: string;
}

export default function Main() {
  const [data, setData] = useState<Breed[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/breeds");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Meus Gatos App</h1>
      <div>
        {!data ? (
          <div>
            <p>Carregando...</p>
          </div>
        ) : (
          <ul>
            {data.map((breed) => (
              <li key={breed.id}>
                <Link href={`/gatos/${encodeURIComponent(breed.name)}`}>
                  <h2>{breed.name}</h2>
                </Link>
                <p>{breed.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
