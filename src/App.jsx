import './App.css'
import { LanguageSelector } from './languageSelector'
import { Repocard } from './Repocard'
import { Fetch } from './Fetch'
import { useState } from 'react'


function App() {
  const [language, setLanguage] = useState("")
  const [repo, setRepo] = useState("The repository will be displayed here") // Starting 
  
    async function fetchRepo() {
        let response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars`)
        if (!response.ok) {
        console.log("Error fetching data")
        }
        let data = await response.json()
        let randonIndex = Math.floor(Math.random() * data.items.length)
        let randomRepo = ( data.items[randonIndex]);
        setRepo(randomRepo);
    }
    

  return (
    <div className="h-screen w-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: "url('/bgimg.jpg')" }}>
      <div className="  bg-blue-200/30 backdrop-blur-none rounded-xl pb-5">
        <h1 className="text-2xl font-bold text-fuchsia-700 text-center p-4">Github Repository Finder</h1>
        <LanguageSelector setLanguage={setLanguage} />
        <Repocard repo={repo} />
        <Fetch fetchRepo={fetchRepo}/>
      </div>
    </div>
  )
}

export default App
