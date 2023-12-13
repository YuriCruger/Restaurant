import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ResponsiveProps {
    mobileSrc: string
    tabletSrc: string
    desktopSrc: string
    alt: string
}

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  @media screen and (min-width: 768px) {
    max-width: 570px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 450px;
    margin-bottom: -75px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 550px;
  }
`;

const ResponsiveImage = ({ mobileSrc, tabletSrc, desktopSrc, alt }: ResponsiveProps) => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    const width = window.innerWidth;
    if (width < 768) {
      return 'mobile';
    }
    if (width < 1024) {
      return 'tablet';
    }
    return 'desktop';
  }

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imageUrl;

  if (screenSize === 'mobile') {
    imageUrl = mobileSrc;
  } else if (screenSize === 'tablet') {
    imageUrl = tabletSrc;
  } else {
    imageUrl = desktopSrc;
  }

  return <StyledImage src={imageUrl} alt={alt}/>;
};

export default ResponsiveImage;
