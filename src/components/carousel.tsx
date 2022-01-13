import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 스타일
const CarouselItem = styled.li<{ activeIdx: number }>`
  /* outline: none; */
  background-color: skyblue;

  transform: translateX(-${({ activeIdx }) => activeIdx * 100}%);
  transition: 200ms ease;

  > img {
    width: 100%;
    height: 100%;
  }

  & {
    margin-right: 20px;
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

const CarouselList = styled.ul`
  background-color: blue;
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  list-style: none;
  box-sizing: border-box;

  @media all and (min-width: 1200px) {
    height: 300px;
  }

  @media all and (max-width: 1199px) {
    height: 281.94px;
  }
`;

const ArrowButton = styled.button<{ position: 'left' | 'right' }>`
  @media all and (min-width: 1200px) {
    position: absolute;
    top: 100px;
    z-index: 1;
    padding: 8px 12px;
    font-size: 48px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: none;
    margin: 0;
    cursor: pointer;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `}
  }

  @media all and (min-width: 1400px) {
    position: absolute;
    top: 100px;
    z-index: 1;
    padding: 8px 12px;
    font-size: 48px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: none;
    margin: 0;
    cursor: pointer;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 50px;
          `
        : css`
            right: 25px;
          `}
  }

  @media all and (min-width: 1500px) {
    position: absolute;
    top: 100px;
    z-index: 1;
    padding: 8px 12px;
    font-size: 48px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: none;
    margin: 0;
    cursor: pointer;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 85px;
          `
        : css`
            right: 65px;
          `}
  }

  @media all and (min-width: 1534px) {
    position: absolute;
    top: 100px;
    z-index: 1;
    padding: 8px 12px;
    font-size: 48px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: none;
    margin: 0;
    cursor: pointer;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 120px;
          `
        : css`
            right: 80px;
          `}
  }

  @media all and (min-width: 1600px) {
    position: absolute;
    top: 100px;
    z-index: 1;
    padding: 8px 12px;
    font-size: 48px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: none;
    margin: 0;
    cursor: pointer;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 150px;
          `
        : css`
            right: 110px;
          `}
  }

  @media all and (min-width: 1669px) {
    position: absolute;
    top: 100px;
    z-index: 1;
    padding: 8px 12px;
    font-size: 48px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: none;
    margin: 0;
    cursor: pointer;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 180px;
          `
        : css`
            right: 140px;
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
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 이전 배너로 가기
  const handPrev = () => {
    setActiveIdx((prev) => prev - 1 + banners.length);
  };

  // 다음 배너로 가기
  const handNext = () => {
    // 배너의 길이 만큼 나누고 나머지를 구하는 이유는 맨 마지막 배너까지 갔을 때 다음 버튼을 눌러서 처음 배너로 가기 위해서
    setActiveIdx((prev) => (prev + 1) % banners.length);
  };

  return (
    <CarouselList>
      <ArrowButton position="left">버튼</ArrowButton>
      {banners.map((banner, idx) => (
        <CarouselItem key={idx} activeIdx={activeIdx}>
          <img src={banner} alt="banner" />
        </CarouselItem>
      ))}
      <ArrowButton position="right">버튼</ArrowButton>
    </CarouselList>
  );
};

export default Carousel;
