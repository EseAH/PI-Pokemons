import React from "react";
import AllCards from "../components/Cards/Cardss";
import SearchBar from "../components/SearchBar";
import styles from "./Home.module.css"

export default function Home() {
    return(
        <div className={styles.Home}>
            <h2>HOME</h2>
            <SearchBar/>
            <AllCards/>
        </div>
    )
}
