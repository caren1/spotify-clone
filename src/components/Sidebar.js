import React from 'react'
import { useStateValue } from '../StateProvider'

import './Sidebar.css'

import SidebarOption from './SidebarOption'

import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

function Sidebar() {

    const [{ playlists }] = useStateValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption key="home" title="Home" Icon={HomeIcon}/>
            <SidebarOption key="search" title="Search" Icon={SearchIcon}/>
            <SidebarOption key="library" title="Your library" Icon={LibraryMusicIcon}/>
            <br />
            <strong className="sidebar__title">Playlists</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.name} title={playlist.name}/>
            ))}
        </div>
    )
}

export default Sidebar
