export function Repocard({ repo }) {

    return (
        <div className="flex items-center justify-center mt-4 text-fuchsia-800 pt-3">
            <div className="border border-blue-300 focus:outline-none rounded ml-5 mr-5 p-1 w-full h-18 ">

                {typeof repo === "string" ? <p>{repo}</p> : (
                    <>
                        <p>{repo.name}</p>
                        <p>{repo.description}</p>
                        <span>{repo.Language}</span>
                        <span>⭐ {repo.stargazers_count}</span>
                        <span>📝 {repo.forks_count}</span>
                        <span>👀 {repo.watchers_count}</span>

                    </>
                )}

            </div>






        </div>
    )
}