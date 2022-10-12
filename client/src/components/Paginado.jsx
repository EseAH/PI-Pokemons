import React from "react";
import styles from "./Paginado.module.css"

export default function Paginado({ cardsPerPage, allPokemons, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={styles.paginado}>
                {pageNumbers?.map((number) => (
                    <li key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>;
                    </li>
                ))}
            </ul>
        </nav>
    );
}
