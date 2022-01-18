import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */
const gltfLoader = new GLTFLoader()

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const textureLoader = new THREE.TextureLoader()

const cubeTextureLoader = new THREE.CubeTextureLoader()

// const envMapTexture = cubeTextureLoader.load([
//     'textures/envMap/px.png',
//     'textures/envMap/nx.png',
//     'textures/envMap/py.png',
//     'textures/envMap/ny.png',
//     'textures/envMap/pz.png',
//     'textures/envMap/nz.png'

// ])

const normalMap = textureLoader.load('textures/normalMap/normalMap3.jpeg')
const imgMap = textureLoader.load('textures/textureMap.jpeg')

// const letterMaterial2 = new THREE.MeshPhysicalMaterial({
//     roughness: 0.3,
//     thickness: 0.5,
//     transmission: 0.6,
//     metalness: 0,
//     envMap: envMapTexture,
//     envMapIntensity: 1.5,
//     reflectivity: 1,
//     clearcoat: 0.9,
//     normalMap: normalMap

// })

const letterMaterial = new THREE.MeshBasicMaterial(0xffffff)

//Test Plane
const planeShape = new THREE.PlaneGeometry(5,5)
const planeMaterial = new THREE.MeshStandardMaterial({
    map: imgMap
})

const lightDirectional = new THREE.DirectionalLight(0xfff0dd, 1);
lightDirectional.position.set(0, 5, 10);
scene.add(lightDirectional);

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
    scrub: 3,
    ease: 'none',
})
const sections = document.querySelectorAll('.section')

gltfLoader.load(
    '/models/letter-c/glTF/Letter_C.gltf',
    (gltf) => {
       
        gltf.scene.children[1].castShadow = true
        gltf.scene.children[1].receiveShadow = true
        
        gltf.scene.children[1].material = letterMaterial
        gltf.scene.position.set(-0.3, 0.7, 0.1)
        gltf.scene.rotation.set(2, 1, 0)
        gltf.scene.scale.set(12, 12, 12)
        scene.add(gltf.scene)
    
        //Animation
        gsap.from(gltf.scene.position, {
            x: -0.6,
            y: 0.8,
            z: 0.1,
            duration: 2,
            ease: 'expo',
        })
        gsap.from(gltf.scene.rotation, {
            x: 2,
            y: 1,
            z: 0,
            duration: 2,
            ease: 'expo',
        })
        gsap.to(gltf.scene.position, {
            x: 0,
            y: 0,
            z: 0,
            scrollTrigger: {
                trigger: sections[1],
            }
        })
        gsap.to(gltf.scene.rotation, {
            x: 0,
            z: 0,
            y: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
    }
)

gltfLoader.load(
    '/models/letter-l/glTF/Letter_L.gltf',
    (gltf) => {

        gltf.scene.children[1].castShadow = true
        gltf.scene.children[1].receiveShadow = true
  
        gltf.scene.children[1].material = letterMaterial
        
        gltf.scene.position.set(0,-2, -3)
        gltf.scene.rotation.set(1, 1, 3)
        gltf.scene.scale.set(12, 12, 12)
        scene.add(gltf.scene)
    
        //Animation
        gsap.from(gltf.scene.position, {
            x: 0.4,
            y: 0.9,
            z: -0.8,
            duration: 2,
            ease: 'expo',
        })
        gsap.from(gltf.scene.rotation, {
            x: 1,
            y: 1,
            z: 0.2,
            duration: 2,
            ease: 'expo',
        })
        gsap.to(gltf.scene.position, {
            x: 1,
            y: 0,
            z: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
        gsap.to(gltf.scene.rotation, {
            x: 0,
            z: 0,
            y: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
    }
)
gltfLoader.load(
    '/models/letter-a/glTF/Letter_A.gltf',
    (gltf) => {

        gltf.scene.children[1].castShadow = true
        gltf.scene.children[1].receiveShadow = true
        gltf.scene.position.set(5,-1, 2)
        gltf.scene.rotation.set(2, 1, 0)
        gltf.scene.scale.set(12, 12, 12)
        gltf.scene.children[1].material = letterMaterial
        scene.add(gltf.scene)
    
        //Animation
        gsap.from(gltf.scene.position, {
            x: 4,
            y: -1,
            z: 0.6,
            duration: 2,
            ease: 'expo',
        })
        gsap.from(gltf.scene.rotation, {
            x: 2,
            y: 1,
            z: 0,
            duration: 2,
            ease: 'expo',
        })
        gsap.to(gltf.scene.position, {
            x: 2,
            y: 0,
            z: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
        gsap.to(gltf.scene.rotation, {
            x: 0,
            z: 0,
            y: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
    

    }
)
gltfLoader.load(
    '/models/letter-r/glTF/Letter_R.gltf',
    (gltf) => {

        gltf.scene.castShadow = true
        gltf.scene.receiveShadow = true
        

        gltf.scene.position.set(6,2, 1)
        gltf.scene.rotation.set(3, 0, 1)
        gltf.scene.scale.set(12, 12, 12)
        gltf.scene.children[1].material.metalness = 0
        gltf.scene.children[1].material = letterMaterial
        scene.add(gltf.scene)
    
        //Animation
        gsap.from(gltf.scene.position, {
            x: -1,
            y: 0.5,
            z: -0.6,
            duration: 2,
            ease: 'expo',
        })
        gsap.from(gltf.scene.rotation, {
            x: 3,
            y: 0,
            z: 1,
            duration: 2,
            ease: 'expo',
        })
        gsap.to(gltf.scene.position, {
            x: 3,
            y: 0,
            z: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
        gsap.to(gltf.scene.rotation, {
            x: 0,
            z: 0,
            y: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
    


    }
)
gltfLoader.load(
    '/models/letter-i/glTF/Letter_I.gltf',
    (gltf) => {

        gltf.scene.castShadow = true
        gltf.scene.receiveShadow = true
        gltf.scene.position.set(-2,-2, -1)
        gltf.scene.rotation.set(3, 2, 0)
        gltf.scene.scale.set(12, 12, 12)
        gltf.scene.children[1].material.metalness = 0
        gltf.scene.children[1].material = letterMaterial
        scene.add(gltf.scene)
    
        //Animation
        gsap.from(gltf.scene.position, {
            x: 0.9,
            y: 0.1,
            z: -0.4,
            duration: 2,
            ease: 'expo',
        })
        gsap.from(gltf.scene.rotation, {
            x: 3,
            y: 2,
            z: 0,
            duration: 2,
            ease: 'expo',
        })
        gsap.to(gltf.scene.position, {
            x: 3.7,
            y: 0,
            z: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
        gsap.to(gltf.scene.rotation, {
            x: 0,
            z: 0,
            y: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
    


    }
)
gltfLoader.load(
    '/models/letter-t/glTF/Letter_T.gltf',
    (gltf) => {

        gltf.scene.castShadow = true
        gltf.scene.receiveShadow = true
        gltf.scene.position.set(5,-2, -3)
        gltf.scene.rotation.set(3, 1, 1)
        gltf.scene.scale.set(12, 12, 12)
        gltf.scene.children[1].material.metalness = 0
        gltf.scene.children[1].material = letterMaterial
        scene.add(gltf.scene)
    
        //Animation
        gsap.from(gltf.scene.position, {
            x: 5,
            y: -2,
            z: -3,
            duration: 2,
            ease: 'expo',
        })
        gsap.from(gltf.scene.rotation, {
            x: 3,
            y: 1,
            z: 1,
            duration: 2,
            ease: 'expo',
        })
        gsap.to(gltf.scene.position, {
            x: 4.4,
            y: 0,
            z: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
        gsap.to(gltf.scene.rotation, {
            x: 0,
            z: 0,
            y: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
    }
)
gltfLoader.load(
    '/models/letter-y/glTF/Letter_Ygltf.gltf',
    (gltf) => {
        gltf.scene.castShadow = true
        gltf.scene.receiveShadow = true
        gltf.scene.position.set(-2.5,4.5, -1)
        gltf.scene.rotation.set(2, 3, 0)
        gltf.scene.scale.set(12, 12, 12)
        gltf.scene.children[1].material.metalness = 0
        gltf.scene.children[1].material = letterMaterial
        scene.add(gltf.scene)
    
        //Animation
        gsap.from(gltf.scene.position, {
            x: 4.2,
            y: 2,
            z: -1,
            duration: 2,
            ease: 'expo',
        })
        gsap.from(gltf.scene.rotation, {
            x: 1.2,
            y: 3,
            z: 0,
            duration: 2,
            ease: 'expo',
        })
        gsap.to(gltf.scene.position, {
            x: 5.45,
            y: 0,
            z: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
        gsap.to(gltf.scene.rotation, {
            x: 0,
            z: 0,
            y: 0,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
    


    }
)




// /**
//  * Floor
//  */
// const floor = new THREE.Mesh(
//     new THREE.PlaneGeometry(10, 10),
//     new THREE.MeshStandardMaterial({
//         color: '#444444',
//         metalness: 0,
//         roughness: 0.5
//     })
// )
// floor.receiveShadow = true
// floor.rotation.x = - Math.PI * 0.5
// scene.add(floor)

/**
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0xffffff, 5)
// scene.add(ambientLight)

// gui.add(ambientLight, 'intensity').min(0).max(3).step(0.1)

const directionalLight = new THREE.DirectionalLight(0xffdac1, 5.5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
//directionalLight.shadow.camera.far = 15
//directionalLight.shadow.camera.left = - 7
//directionalLight.shadow.camera.top = 7
//directionalLight.shadow.camera.right = 7
//directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 5, 0, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2.7, 0.4, 3)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

window.addEventListener('scroll', () => {
    scrollY = window.scrollY

    console.log(scrollY)
})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()