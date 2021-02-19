import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

  const { data, loading } = useFetchGifs(category);

  // Este hook sirve para correr una petición solamente una vez cuando se carga
  // hasta que hay una actualización en el componente que lo ejecuta, que en este caso sería el padre
  // que en este caso estaría el AddCategories, en el cual, al crear un componente se ejecutaría "por primera vez".

  return (
    <div className="categoriesList">
      <div className="categoryTitle">
        <h3> { category } </h3>
      </div>
      { loading && <strong className="animate__animated animate__flash">Cargando...</strong> }
      <div className="categoryContent">
      { 
        data.map((img) => (
          <div className={`${img.title.toLowerCase().replace(/\s/gi, "-")}-item card animate__animated animate__fadeIn`}>
            <GifGridItem key={img.id} { ...img } />
            <div className="titleParragraph">
              <span>{ img.title }</span>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default GifGrid;
