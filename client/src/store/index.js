import { proxy } from 'valtio';

// intro: flag that shows whether we are in the homepage or not
// color: default color
// isLogoTexture: are we displaying logo on shirt or not
// logoDecal: initial Logo decal
// fullDecal: full texture shirt decal


const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;