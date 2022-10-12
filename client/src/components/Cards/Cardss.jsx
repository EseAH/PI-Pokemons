import React, {useEffect, useState} from "react"
import { useDispatch, useSelector} from "react-redux"
import { getPokemons } from "../../redux/actions"
import { Link } from "react-router-dom"
import Card from "../Card/Card"
import Paginado from "../Paginado"
import Filters from "../Filter"
import style from "./Cardss.module.css";
//import Loading from "./Loading"

export default function AllCards() {
    const allPokemons = useSelector((state) => state.pokemons)
    const dispatch = useDispatch()
    //------
    const [currentPage, setCurrentPage] = useState(1) // pagina actual, setee pag act. Pagina 1
    const [cardsPerPage, _setCardsPerPage] = useState(12) // card por pagina (12)
    const indexOfLastCard = currentPage * cardsPerPage // 9 indice de la ult card de la pag
    const indexOfFirstCard = indexOfLastCard - cardsPerPage // 0 indice de la primer card de la pag
    const currentCards = allPokemons.slice(indexOfFirstCard, indexOfLastCard)
    const [order, setOrder] = useState('')

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <>
            <div>
                <div>
                    <Filters setCurrentPage={setCurrentPage} setOrder={setOrder}/>
                </div>
                <Paginado
                    cardsPerPage={cardsPerPage}
                    allPokemons={allPokemons.length}
                    paginado= {paginado}
                />
                <div>
                    <button onClick={(e) => {handleClick(e)}}>
                        Reload pokemons
                    </button>
                </div>
                <div className={style.container}>
                {currentCards.length > 0 ? (
                    currentCards.map((e) => (
                    <Link key={e.id} to={`/pokemons/${e.id}`}>
                        <Card
                            name={e.name}
                            image={e.image}
                            types={e.types}
                            id={e.id}
                        />
                    </Link>
                    ))
                ) : (
                    <h3>Loading...</h3>
                    // <Loading/>
                )}
                </div>
            </div>
        </>
    )
}