"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SpinLoading from "../SpinLoading";
import styles from "./styles.module.css";
import Image from "next/image";

interface Breed {
  id: string;
  name: string;
  description: string;
  reference_image_id: string;
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
    <main className={styles.main}>
      <h1 className={styles.title}></h1>
      <div className={styles.list}>
        {!data ? (
          <div className={styles.loading}>
            <SpinLoading/>
          </div>
        ) : (
          <ul className={styles.list}>
            {data.map((breed) => (
              <li key={breed.id} className={styles.cardCat}>
                <Image src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.name} width={100} height={100}/>
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
