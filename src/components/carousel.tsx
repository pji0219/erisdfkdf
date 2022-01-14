import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 스타일
const CarouselList = styled.ul`
  width: auto;
  display: flex;
  justify-content: center;
  /* position: relative; */
  overflow: hidden;
  list-style: none;

  @media all and (min-width: 1200px) {
    height: 300px;
  }

  @media all and (max-width: 1199px) {
    height: 281.94px;
  }
`;

const CarouselItem = styled.li<{ activeIdx: number }>`
  flex: 1 0 50%;
  transform: translateX(-${({ activeIdx }) => activeIdx * 100}%);
  transition: 200ms ease;

  > img {
    width: 100%;
    height: 100%;
  }

  & {
    margin: 0 15px;
  }

  @media all and (min-width: 1200px) {
    width: 1060px;
    height: 100%;
  }

  @media all and (max-width: 1199px) {
    width: 1000px;
    height: 100%;
  }

  @media all and (max-width: 768px) {
    width: 668px;
    height: 100%;
  }

  @media all and (max-width: 412px) {
    width: 312px;
    height: 100%;
  }
`;

const ArrowButton = styled.button<{ position: 'left' | 'right' }>`
  @media all and (min-width: 1200px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 260px;
          `
        : css`
            right: 220px;
          `}
  }

  @media all and (min-width: 1222px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 265px;
          `
        : css`
            right: 230px;
          `}
  }

  @media all and (min-width: 1277px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 275px;
          `
        : css`
            right: 240px;
          `}
  }

  @media all and (min-width: 1310px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 285px;
          `
        : css`
            right: 245px;
          `}
  }

  @media all and (min-width: 1335px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 290px;
          `
        : css`
            right: 250px;
          `}
  }

  @media all and (min-width: 1368px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 310px;
          `
        : css`
            right: 270px;
          `}
  }

  @media all and (min-width: 1400px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 310px;
          `
        : css`
            right: 270px;
          `}
  }

  @media all and (min-width: 1500px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 330px;
          `
        : css`
            right: 295px;
          `}
  }

  @media all and (min-width: 1534px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 340px;
          `
        : css`
            right: 305px;
          `}
  }

  @media all and (min-width: 1600px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 360px;
          `
        : css`
            right: 320px;
          `}
  }

  @media all and (min-width: 1669px) {
    position: absolute;
    top: 130px;
    z-index: 1;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 380px;
          `
        : css`
            right: 340px;
          `}
  }

  @media all and (min-width: 1900px) {
    position: absolute;
    top: 130px;
    /* z-index: 1; */
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    background: #e0e0e0;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 440px;
          `
        : css`
            right: 400px;
          `}
  }
`;

// 배너 이미지
const banners = [
  'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
  'https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg',
  'https://static.wanted.co.kr/images/banners/1453/7a978579.jpg',
  'https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg',
  'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg',
  'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg',
  'https://static.wanted.co.kr/images/banners/1451/725c6862.jpg',
  'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg',
  'https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg',
  'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg',
  'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg',
];

const Carousel: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // 이전 배너로 가기
  const handlePrev = () => {
    setActiveIdx((prev) => prev - 1);
  };

  // 다음 배너로 가기
  const handleNext = () => {
    // 배너의 길이 만큼 나누고 나머지를 구하는 이유는 맨 마지막 배너까지 갔을 때 다음 버튼을 눌러서 처음 배너로 가기 위해서
    setActiveIdx((prev) => (prev + 1) % banners.length);
  };

  return (
    <CarouselList>
      <ArrowButton onClick={handlePrev} position="left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="SvgIcon_SvgIcon__root__svg__DKYBi"
          viewBox="0 0 18 18"
          width="18"
          height="18"
        >
          <path
            d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"
            fill="#333333"
          ></path>
        </svg>
      </ArrowButton>
      {banners.map((banner, idx) => (
        <CarouselItem key={idx} activeIdx={activeIdx}>
          <img src={banner} alt="banner" />
        </CarouselItem>
      ))}
      <ArrowButton onClick={handleNext} position="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="SvgIcon_SvgIcon__root__svg__DKYBi"
          viewBox="0 0 18 18"
          width="18"
          height="18"
        >
          <path
            d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"
            fill="#333333"
          ></path>
        </svg>
      </ArrowButton>
    </CarouselList>
  );
};

export default Carousel;
