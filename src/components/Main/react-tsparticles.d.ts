// src/react-tsparticles.d.ts

declare module "react-tsparticles" {
    import { Component } from "react";
  
    interface IParticlesProps {
      id?: string;
      options: any; // You can replace 'any' with a more specific type if needed
    }
  
    export default class Particles extends Component<IParticlesProps> {}
  }
  