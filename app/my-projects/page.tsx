import React from 'react'
import {projects} from "../data/data"
import ProjectCard from './components/project-card'

function MyProjects(){
    return(
        <div className="flex flex-col w-11/12 content-center m-auto">
            <h2 className="text-2xl font-bold mb-4">My Projects:</h2>
            <div className="flex flex-row flex-wrap gap-10 mt-6">
                {projects.map((project) =>{
                    return <ProjectCard data={project} />
                    
                })}
            </div>
        </div>
    )
}
export default MyProjects

