"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useState, useEffect } from "react";
import SpinLoading from "../SpinLoading";

interface Breed {
  id: string;
  name: string;
  description: string;
}

export default function Main() {
  const [data, setData] = useState<Breed[] | null>(null);

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
      <h1>.</h1>
      <div>
        {!data ? (
          <div>
            <SpinLoading/>
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
