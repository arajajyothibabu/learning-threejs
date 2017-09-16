/**
 * Created by jyothi on 16/9/17.
 */
import * as THREE from 'three';

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

/*
 * After material we will need a Geometry or BufferGeometry
 * with some vertices (it's recommended to use a BufferGeometry as it's more performant,
 * however for simplicity we'll use a Geometry here):
 */

const geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));

/*
 * Note that lines are drawn between each consecutive pair of vertices, but not between the first and last (the line is not closed.)
 * Now that we have points for two lines and a material, we can put them together to form a line.
 */

const line = new THREE.Line(geometry, material);

export default line;