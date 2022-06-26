import { Plus } from "phosphor-react";
import { CreditCard } from "../../components/CreditCard";
import * as C from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { NewCard } from "../../components/NewCard";
import { useCart } from "../../hooks/useCartContext";
import { Message } from "../../components/Message";

export function Payment(){
  const { state, toggleModal, showMessage  } = useCart()

  return(
    <C.Container>
      {state?.isModalOpen && <NewCard />}
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
          onClick={showMessage}
        >
          Pay</C.PayButton>
      </C.Center>
    </C.Container>
  )
}