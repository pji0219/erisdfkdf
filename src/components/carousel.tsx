import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 스타일
// 캐러셀 컨테이너
const CarouselList = styled.ul`
  width: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  list-style: none;

  @media all and (min-width: 1200px) {
    height: 300px;
  }

  @media all and (max-width: 1199px) {
    height: 281.94px;
  }
`;

// 배너
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

// 배너 제목 및 설명
const CarouselTitle = styled.div`
  @media all and (min-width: 1201px) {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    left: 34px;

    > .title {
      margin-left: 15px;
      color: #333333;
    }

    > .decription {
      margin-left: 15px;
      font-size: 12px;
      color: #333333;
    }

    > hr {
      height: 1px;
      margin: 0;
      border: none;
      background-color: #ececec;
    }

    > .link {
      text-decoration: none;
    }

    > .link > span {
      margin-top: 15px;
      color: #3366ff;
      font-size: 14px;
      margin-left: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      line-height: 1;
    }
  }

  @media all and (max-width: 1200px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 146px;
    background-color: #fff;
    text-align: left;
    left: 0;
  }

  > .title {
    margin-left: 15px;
    color: #333333;
  }

  > .decription {
    margin-left: 15px;
    font-size: 12px;
    color: #333333;
  }

  > hr {
    height: 1px;
    margin: 0;
    border: none;
    background-color: #ececec;
  }

  > .link {
    text-decoration: none;
  }

  > .link > span {
    margin-top: 15px;
    color: #3366ff;
    font-size: 14px;
    margin-left: 15px;
    font-weight: 700;
    display: flex;
    align-items: center;
    line-height: 1;
  }

  @media all and (max-width: 456px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 146px;
    background-color: #fff;
    text-align: left;
    left: 0;

    > .title {
      margin-left: 15px;
      color: #333333;
      font-size: 16.72px;
    }

    > .decription {
      margin-left: 15px;
      font-size: 12px;
      color: #333333;
    }

    > hr {
      height: 1px;
      margin: 0;
      border: none;
      background-color: #ececec;
    }

    > .link {
      text-decoration: none;
    }

    > .link > span {
      margin-top: 15px;
      color: #3366ff;
      font-size: 12px;
      margin-left: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      line-height: 1;
    }
  }

  @media all and (max-width: 419px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 146px;
    background-color: #fff;
    text-align: left;
    left: 0;

    > .title {
      margin-left: 15px;
      color: #333333;
      font-size: 14.72px;
    }

    > .description {
      margin-left: 15px;
      font-size: 10px;
      color: #333333;
    }

    > hr {
      height: 1px;
      margin: 0;
      border: none;
      background-color: #ececec;
    }

    > .link {
      text-decoration: none;
    }

    > .link > span {
      margin-top: 15px;
      color: #3366ff;
      font-size: 10px;
      margin-left: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      line-height: 1;
    }
  }
`;

// 버튼
const ArrowButton = styled.button<{ position: 'left' | 'right' }>`
  @media all and (min-width: 1200px) {
    position: absolute;
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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
    top: 200px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    z-index: 1;
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

// 배너 리소스
const banners = [
  {
    id: 0,
    title: '나도 개발자 되고 싶다',
    description: '프론트엔드 무료 교육과정 참여하기',
    img: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
  },
  {
    id: 1,
    title: '마케터를 위한 데이터',
    description: '잘 나가는 마케터는 무엇이 다를까!?',
    img: 'https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg',
  },
  {
    id: 2,
    title: '리크루터 커리어 가이드',
    description: '싼마이 리크루터가 되지 않기 위해',
    img: 'https://static.wanted.co.kr/images/banners/1453/7a978579.jpg',
  },
  {
    id: 3,
    title: '개발자 성장 비결 공개!',
    description: '글 쓰는 개발자들의 이야기',
    img: 'https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg',
  },
  {
    id: 4,
    title: '아는 만큼 보인다!',
    description: `노동법 '채용' 시리즈`,
    img: 'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg',
  },
  {
    id: 5,
    title: '해, 커리어 EP 02 공개',
    description: '최종 발표를 위한 마지막 관문 2라운드의 승...',
    img: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg',
  },
  {
    id: 6,
    title: '믿을 것은 데이터 뿐!',
    description: '요즘 데이터팀은 어떻게 일할까?',
    img: 'https://static.wanted.co.kr/images/banners/1451/725c6862.jpg',
  },
  {
    id: 7,
    title: 'Git? GitHub?',
    description: '협업 필수 도구 마스터 하기',
    img: 'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg',
  },
  {
    id: 8,
    title: '유저 경험을 설계 하라!',
    description: '문제를 해결하는 프로덕트 디자인',
    img: 'https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg',
  },
  {
    id: 9,
    title: '요즘 MD가 일하는 방법',
    description: '실무자가 공개하는 MD 커리어의 모든 것!',
    img: 'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg',
  },
  {
    id: 10,
    title: '스타벅스 굿즈 좋아하세요?',
    description: '사랑받는 디자인의 비밀',
    img: 'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg',
  },
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

  // 스와이프를 위한 이벤트 핸들러
  let startX: any, endX: any;

  const handleTouchStart = (event: any) => {
    startX = event.touches[0].pageX;
  };

  const handleTouchEnd = (event: any) => {
    endX = event.changedTouches[0].pageX;
    if (startX > endX) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <CarouselList>
      {/* 왼쪽 버튼 */}
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

      {/* 배너 */}
      {banners.map((banner) => (
        <CarouselItem
          key={banner.id}
          activeIdx={activeIdx}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={banner.img} alt="banner" />
          <CarouselTitle>
            <h3 className="title">{banner.title}</h3>
            <p className="description">{banner.description}</p>
            <hr />
            <a href="#" className="link">
              <span>
                바로가기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                  width="18"
                  height="18"
                >
                  <path
                    d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"
                    fill="#3366FF"
                  ></path>
                </svg>
              </span>
            </a>
          </CarouselTitle>
        </CarouselItem>
      ))}

      {/* 오른쪽 버튼 */}
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
