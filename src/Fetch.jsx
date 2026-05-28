export function Fetch({fetchRepo}) {
    return(
        <div className="flex items-center justify-center mt-4 text-fuchsia-800 ">
            <button className=" w-full border border-blue-300 focus:outline-none rounded ml-5 mr-5 p-1" onClick={fetchRepo}>Fetch</button>
        </div>
    )
}