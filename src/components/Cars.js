import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"

import { Button } from "./Button"

const Cars = ({ heading }) => {
  useEffect(() => {
    Aos.init()
  }, [])

  const data = useStaticQuery(graphql`
    query CarQuery {
      allCarsJson {
        edges {
          node {
            alt
            name
            button
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getCars(data) {
    const carsArr = []
    data.allCarsJson.edges.forEach((item, idx) => {
      carsArr.push(
        <CarCard
          key={idx}
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <CarInfo>
            <TextWrap>
              <CarTitle>{item.node.name}</CarTitle>
            </TextWrap>
            <Button
              to="/cars"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </CarInfo>
        </CarCard>
      )
    })

    return carsArr
  }

  return (
    <CarsContainer>
      <CarHeader>{heading}</CarHeader>
      <CarWrapper>{getCars(data)}</CarWrapper>
    </CarsContainer>
  )
}

export default Cars

const CarsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);

  color: #fff;
`

const CarHeader = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const CarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const CarCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  bnorder-radius: 10px;
  transition: 0.2 ease;
`

const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0rem 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const CarTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
