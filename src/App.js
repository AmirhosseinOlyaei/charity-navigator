import Navbar from "./Navbar";
import InputDD from "./InputDD";
import { useState } from "react";
function App() {
    const [articles, setArticles] = useState([]);
    const getArticles = async () => {
        const response = await fetch(
            'https://djhmrhhkgezyicxzlrsj.supabase.co/rest/v1/charities?',  {
            headers: {
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaG1yaGhrZ2V6eWljeHpscnNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MDAwNjQsImV4cCI6MTk5MzI3NjA2NH0.C7FVK762_9-UGDCy0mfTI2lmcqLqTS6NFQR8L3ErQqc",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaG1yaGhrZ2V6eWljeHpscnNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MDAwNjQsImV4cCI6MTk5MzI3NjA2NH0.C7FVK762_9-UGDCy0mfTI2lmcqLqTS6NFQR8L3ErQqc",
            },
        });
        const articles = await response.json();
        console.log(articles)
    }
    return (
        <div>
            <Navbar appName='Charity Navigator'/>
            <InputDD />
            <button onClick={() => getArticles()} className={'bg-blue-300'}>get articles</button>
        </div>
    );

}

export default App;