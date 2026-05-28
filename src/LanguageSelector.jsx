export function LanguageSelector({setLanguage}) {
    return (
        <div className="flex items-center justify-center mt-4 text-fuchsia-800">
            <select id="language"  onChange={(e)=>setLanguage(e.target.value)} className="flex justify-between text-sm w-full border border-blue-300 focus:outline-none rounded ml-5 mr-5 p-1" defaultValue="null">
                <option value="null" disabled >
                Select a language
                </option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="Kotlin">Kotlin</option>
                <option value="php">PHP</option>
            </select>
        </div>
    )
}