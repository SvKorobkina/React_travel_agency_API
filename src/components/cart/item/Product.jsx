import style from './product.module.css';
import React from 'react';
import { AppContext } from '../../../App';

const Product = (props) => {

    const context = React.useContext(AppContext)

    const [added, setAdded ] = React.useState(context.isAdded);
    const [fav, setFav ] = React.useState(false);

    const onClickFav =()=>{
        setFav(!fav);
        let id = props.id 
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        props.favBtn({title, description, price, img,id, myId});
    }

    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id 
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        props.onPlus({title, description, price, img,id, myId});
    }

    return (
        <div className={style.cart_item}>
            {
             context.isFav(props.myId) === true ?

             <button 
             className={style.fav_btn_add} 
             onClick={onClickFav}>Добавлен в избранное
             </button>
                :
            <button 
            className={style.fav_btn} 
            onClick={onClickFav}>Добавить в избранное
            </button>
           
            }

            <img className={style.cart_img} src={props.img} alt=""></img>
            <p className={style.cart_title}>{props.title} </p>
            <p className={style.cart_description}>Сочи Из Москва - 7 Ночей
                <br />05.12.22 - 2 взрослых</p>
            <p className={style.price}>Цена:</p>
            <div className={style.cart_price}>
                <span>{props.price}</span>
                <button className={  style.add_cart} 
                onClick={onClickAdd} > { context.isAdded(props.myId) ?  
                <img width={13}
                 src={context.isAdded(props.myId) ? '/img/icon.png':'' }
                 alt=""/>:'Оставить заявку' }
               
                </button>
                
            </div>
        </div>
    )
}
export default Product