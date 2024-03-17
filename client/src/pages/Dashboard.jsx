import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get('/profile');
                setUser(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : !!user ? (
                <h2>Hi {user.name}!</h2>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
}
