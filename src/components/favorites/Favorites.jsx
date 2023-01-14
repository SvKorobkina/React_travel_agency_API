import React from 'react';
import axios from 'axios';
import style from "./favorites.module.css";
import FavoritesItem from './item/FavoritesItem';
import { AppContext } from '../../App';

const Favorites =(props)=>{

    const context = React.useContext(AppContext)

    const onAddOverlay = (obj)=>{
        axios.post('https://638632f3beaa64582676413d.mockapi.io/cart', obj)
        context.setOverlayItems([...props.overlayItems, obj]);
      }

      const onDeleteFav =(id)=>{
        console.log(id);
        axios.delete(`https://638632f3beaa64582676413d.mockapi.io/favorites/${id}`)
        context.setFavorites((fav) => fav.filter(item => item.id !==id));
    }
  
      return (
          <div className={style.cart_section}>
              <div className={style.search}>
                  <h1>Избранные туры</h1>
              </div>
              <div className={style.cart}>
                  { props.favorites.map(obj => {
                          return (
                              <FavoritesItem
                                  key={obj.id}
                                  id={obj.id}
                                  title={obj.title}
                                  price={obj.price}
                                  img={obj.img}
                                  onDeleteFav={
                                      (id) => {
                                        onDeleteFav(id)
                                      }
                                  }
                                  onPlus={(cartObj)=>{
                                      console.log(cartObj)
                                      onAddOverlay(cartObj)
                                  }   
                                  }
                              />
                          )
                      })
  
                  }
  
              </div>
          </div >
      )
  
}

export default Favorites;