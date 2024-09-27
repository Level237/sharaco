// src/components/Articles.jsx  
import React from 'react';  
import { useQuery } from '@tanstack/react-query';  
import axios from 'axios';  

const fetchArticles = async () => {  
    const { data } = await axios.get('http://localhost:8000/api/articles');  
    return data;  
};  

const Articles = () => {  
    const { data, error, isLoading } = useQuery(['articles'], fetchArticles);  

    if (isLoading) return <div>Chargement...</div>;  
    if (error) return <div>Erreur: {error.message}</div>;  

    return (  
        <div>  
            <h1>Liste des Articles</h1>  
            <ul>  
                {data.map(article => (  
                    <li key={article.id}>{article.title}</li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default Articles;