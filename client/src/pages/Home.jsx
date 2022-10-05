import React from "react";
import { Link } from "react-router-dom";
import AllCards from "../components/Cards/Cardss";
import SearchBar from "../components/SearchBar";
import Nav from "../components/Nav/Nav";
import styles from "./Home.module.css"

export default function Home() {
    return(
        <div className={styles.Home}>
            <Nav/>
            <h2>HOME</h2>
            <SearchBar/>
            <AllCards/>
            <Link to="/create"><button>To create</button></Link>
            <Link to="/types"><button>Types</button></Link>
        </div>
    )
}
