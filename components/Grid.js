import { useEffect, useState } from 'react';
import Gridcolumn from './Gridcolumn';
import gridStyles from '../styles/Grid.module.scss';

const Grid = ({ images, click, url, gridA, gridB, threeGridA, threeGridB, threeGridC }) => {

    /* Thats a lot of props, yeah i know. i initialy wrote the code in 
        this component but the data was not rendered for reasons i dont 
        understand 
    */

    /* The viewport determines how many columns is shown.
        Get the initial viewport and then have a useEffect monitor changes
        in the viewport.
    */

    const [columns, setColumns] = useState(1);

    const handleResize = () => {
        if (window.innerWidth > 980) {
            setColumns(3);
        } else if (window.innerWidth > 650 && window.innerWidth < 980) {
            setColumns(2);
        } else {
            setColumns(1);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    useEffect(() => {
        handleResize();
    }, []);


    return (
        <section className={gridStyles.layout}>
            <div className={gridStyles.grid} style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}}>

                {columns === 3 ? (
                    <>
                        <Gridcolumn data={threeGridA} url={url} del={click} />
                        <Gridcolumn data={threeGridB} url={url} del={click} />
                        <Gridcolumn data={threeGridC} url={url} del={click} />
                    </>) : columns === 2 ? (
                        <>
                            <Gridcolumn data={gridA} url={url} del={click} />
                            <Gridcolumn data={gridB} url={url} del={click} />
                        </>) : (
                        <>
                            <Gridcolumn data={images} url={url} del={click} />
                        </>)
                }
            </div>
        </section>
    )
}


export default Grid;