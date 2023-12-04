import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-web';
import { default as loadingJSON } from './loading-spinner.json';
import classNames from 'classnames';

export interface LoadingProps extends WithClassName {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ size, className, isLoading }) => {
  const loadingRef = useRef(null);
  const flag = useRef(false);
  const sizeRender = React.useMemo(() => {
    switch (size) {
      case 'xs':
        return 60;
      case 'sm':
        return 70;
      case 'md':
        return 80;
      case 'lg':
        return 120;
      default:
        return 120;
    }
  }, [size]);

  useEffect(() => {
    if (
      typeof window !== undefined &&
      window &&
      loadingRef.current &&
      isLoading &&
      !flag.current
    ) {
      Lottie.loadAnimation({
        container: loadingRef.current as HTMLElement, // Required
        animationData: loadingJSON, // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: 'loading', // Name for future reference. Optional.
      });
      flag.current = true;
    }
  }, [isLoading]);

  return (
    <div
      className={classNames('flex justify-center items-center', className)}
      style={{ height: sizeRender }}>
      <div ref={loadingRef} id="lottie" className="h-full"></div>
    </div>
  );
};

export default Loading;
