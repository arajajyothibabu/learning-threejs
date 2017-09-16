/**
 * Created by jyothi on 16/9/17.
 */
import * as THREE from 'three';
import texture from './texture';

const text = (text, parameters) => {
    const geometry = new THREE.TextGeometry( text, parameters );
    const material = new THREE.MeshBasicMaterial({
        map : texture
    });

    const mesh = new THREE.Mesh( geometry, material);
    return mesh;
};

export default text;