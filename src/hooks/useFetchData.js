import { useEffect, useState } from 'react';

const useFetch = (url, method, body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMjMwODE2MSwiaWF0IjoxNzIyMjIxNzYxLCJqdGkiOiJhODcyMzNkMTg4MjA0YTIzYjkwMmRkMjBlZjA1MzJjNiIsInVzZXJfaWQiOjR9.5KDzs0_738yF_EfX6fnMPsydkg52OzN1LW6WA3_La58',
                    },
                    body: method === 'POST' ? JSON.stringify(body) : null,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, loading, error };
};

export default useFetch;
