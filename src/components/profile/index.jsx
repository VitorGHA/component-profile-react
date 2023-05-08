/* eslint-disable react/prop-types */

import "../profile/index.css"

export default function Profile({avatar, name, bio, email, phone, githubUrl, linkedinUrl}){
    return(
        <>
        <div className="container">
    <div className="profile">
        <img className="avatar" src={avatar} alt="" />

        <h1 className="name">{name}</h1>
        <hr className="underline" />
        <p className="infos">{bio}</p>
        <hr className="underline" />
        <p className="infos">{phone}</p>
        <hr className="underline" />
        <p className="infos">{email}</p>
        <hr className="underline" />
        <a className="botao" href={githubUrl}>Github</a>
        <a className="botao" href={linkedinUrl}>Linkedin</a>

        
        </div>

        </div>
    
        </>
    )
}