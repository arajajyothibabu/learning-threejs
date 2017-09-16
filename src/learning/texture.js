/**
 * Created by jyothi on 16/9/17.
 */
import * as THREE from 'three';

// load a texture, set wrap mode to repeat
const texture = new THREE.TextureLoader().load( "assets/water.gif" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );

texture.needsUpdate = true;

export default texture;