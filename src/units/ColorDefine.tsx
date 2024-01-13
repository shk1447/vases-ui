import { cva, type VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';
import { cn } from './utils/tailwind';
import { ColorSystem } from '../themes/ColorSystem';



export interface ColorDefineProps {
  primary: {
    hue:number,
    saturation: number
  };
  secondary: {
    hue:number,
    saturation: number
  }
}


const cs = new ColorSystem();
export const ColorDefine: FC<ColorDefineProps> = ({
  primary,
  secondary
}) => {
  // const primary = cs.hexToHsl(props.primary);
  // const secondary = cs.hexToHsl(props.secondary);

  if(primary) cs.setPallete('primary', {...primary, lightness:50, alpha:1})
  if(secondary) cs.setPallete('secondary', {...secondary, lightness:50, alpha:1})

  
  const items = new Array(101).fill(0)
  return (
    <>
    <div style={{display:'flex', width:'100%', height:'100%', gap:'4px', fontSize:'12px'}}>
      <div style={{width:'100%', height:'100%'}}>
        색상 정의
        <div style={{height:'40px', border:'1px dashed grey', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>흑색 영역 (명도: 0~10)</div>
        <div style={{height:'120px', border:'1px dashed grey', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>어두운 영역 (명도: 10~40)</div>
        <div style={{height:'80px', border:'1px dashed grey', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>원색 영역 (명도: 40~60)</div>
        <div style={{height:'120px', border:'1px dashed grey', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>밝은 영역 (명도: 60~90)</div>
        <div style={{height:'40px', border:'1px dashed grey', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>백색 영역 (명도: 90~100)</div>
      </div>
      <div style={{width:'100%', height:'100%'}}>
        PRIMARY (색조: 260, 채도: 100)
        {items.map((d,i) => {
          return <div style={{height:'4px', background:cs.hslaToHex(cs.color('primary', i as any))}}></div>
        })}
      </div>

      <div style={{width:'100%', height:'100%'}}>
        SECONDARY (색조: 220, 채도: 50)
        {items.map((d,i) => {
          return <div style={{height:'4px', background:cs.hslaToHex(cs.color('secondary', i as any))}}></div>
        })}
      </div>

      <div style={{width:'100%', height:'100%'}}>
        SUCCESS (색조: 120, 채도: 100)
        {items.map((d,i) => {
          return <div style={{height:'4px', background:cs.hslaToHex(cs.color('success', i as any))}}></div>
        })}
      </div>
      <div style={{width:'100%', height:'100%'}}>
        ERROR (색조: 0, 채도: 100)
        {items.map((d,i) => {
          return <div style={{height:'4px', background:cs.hslaToHex(cs.color('error', i as any))}}></div>
        })}
      </div>
      <div style={{width:'100%', height:'100%'}}>
        INFO (색조: 200, 채도: 100)
        {items.map((d,i) => {
          return <div style={{height:'4px', background:cs.hslaToHex(cs.color('info', i as any))}}></div>
        })}
      </div>
      <div style={{width:'100%', height:'100%'}}>
        WARNING (색조: 40, 채도: 100)
        {items.map((d,i) => {
          return <div style={{height:'4px', background:cs.hslaToHex(cs.color('warning', i as any))}}></div>
        })}
      </div>

      <div style={{width:'100%', height:'100%'}}>
        GREY (색조: any, 채도: 0)
        {items.map((d,i) => {
          return <div style={{height:'4px', background:cs.hslaToHex(cs.color('grey', i as any))}}></div>
        })}
      </div>
      
    </div>
    </>
    
  );
};