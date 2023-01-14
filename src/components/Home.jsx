import React from "react"
import Banner from "./banner/Banner"
import Cart from "./cart/Cart"
import TestSlider from "./testSlider"

const Home =(props)=>{
    return(
        <>
        <TestSlider/>
        <Banner />
        <div className="text-section">
            <h2>
                ТУРЫ ОТ LIVE-TYR
            </h2>
            <p>
                Сотрудничество более чем с 20 международными и национальными компаниями, работающими на отправку и прием туристов, позволяет нам качественно предоставлять услуги туристам из России, Болгарии, Румынии, Украины, Латвии, Литвы, Белоруссии, Эстонии, Молдавии и Казахстана.
            </p>
            <p>
                Международный туристический оператор является одной из международных компаний, организующих туры для туристов из России, стран бывшего СССР и Восточной Европы. TEZ TOUR основан в 1994 году.
            </p>
        </div>
        <Cart
            item={props.item}
            overlayItems={props.overlayItems}
            setOverlayItems={props.setOverlayItems}
            setSearch={props.setSearch}
            search={props.search}
            favorites={props.favorites}
            setFavorites={props.setFavorites}
        />
      </>
    )
}
export default Home