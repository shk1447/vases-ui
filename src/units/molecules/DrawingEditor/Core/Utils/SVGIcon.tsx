import React from 'react';
import { ReactSVG } from 'react-svg';
import { SvgIcon_Props } from '../Interfaces/Utils';

const SVGIcon = (props: SvgIcon_Props): JSX.Element => {
  return (
    <ReactSVG
      src={props.iconSrc}
      beforeInjection={svg => {
        svg.setAttribute('style', `width: ${props.width ?? 20}px`);
        svg.setAttribute('style', `height: ${props.height ?? 20}px`);
        svg.setAttribute('fill', `${props.fill ?? '#FFFFFF'}`);
      }}
    />
  );
};

export default SVGIcon;
