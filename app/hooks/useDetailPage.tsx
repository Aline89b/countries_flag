"use client"
import { useState, useEffect } from 'react';
import { resultProps } from '@/types';




export default function useDetailPage() {

  const [data, setData] = useState<resultProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");

        if (!res.ok) {
          throw new Error('Request failed');
        }

        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('An error occurred');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
