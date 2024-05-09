import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from 'three';
 

const Computers = () => {
  
   return ( 
  
    <section className="">
    <img src={Image1} className=" w-[400px] h-[400px] object-cover "/>
  </section>     
   
  );
};


export  default Computers;
