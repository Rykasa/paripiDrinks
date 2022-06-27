import { useEffect } from "react";
import { Plus } from "phosphor-react";
import { CreditCard } from "../../components/CreditCard";
import * as C from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { NewCard } from "../../components/NewCard";
import { useCart } from "../../hooks/useCartContext";
import { Message } from "../../components/Message";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export function Payment(){
  const { state, toggleModal, showMessage, showError, clearCart  } = useCart()
  const navigate = useNavigate()

  function handleShowMessage(){
    const hasCardSelected = state.cards.find((card) => card.isSelected === true )
    if(hasCardSelected){
      showMessage()
      showError('', false)
      clearCart()
    }else{
      showError('Select a card', true)
    }
  }

  useEffect(() =>{
    if(state?.cart.length < 1){
      navigate('/')
    }
  }, [])

  return(
    <C.Container>
      {state?.isModalOpen && <NewCard item={state?.singleCard} />}
      {state?.isMessageOpen && <Message />}
      <C.Heading>Payment</C.Heading>
      <C.Center>
        <C.Title>saved cards</C.Title>
        {state?.cards.length > 0 ? (
          <Swiper
            spaceBetween={0}
            slidesPerView={1.15}
            grabCursor
            className="slider"
            breakpoints={{750: {slidesPerView: 2}, 850: {slidesPerView: 2.15}}}
          >
            <C.CardWrapper>
              {state.cards.map((card, index) =>{
                return(
                  <SwiperSlide key={index}>
                    <CreditCard item={card} id={index} />
                  </SwiperSlide>
                )
              })}
            </C.CardWrapper>
          </Swiper>
        ) : (
          <C.EmptyDiv>
            <C.emptyTitle>No card registered</C.emptyTitle>
          </C.EmptyDiv>
        )}
        <C.AddButton
          type="button"
          onClick={toggleModal}
        >
          new card
          <Plus />
        </C.AddButton>
        <C.PayButton
          type="button"
          onClick={handleShowMessage}
          disabled={state?.cards.length < 1}
        >
          Pay</C.PayButton>
        <ErrorMessage />
      </C.Center>
    </C.Container>
  )
}