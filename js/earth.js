// 기본 설정
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 텍스처 로드
const loader = new THREE.TextureLoader();
const dayMap = loader.load('../textures/earth-day-map.jpg');
const nightMap = loader.load('../textures/earth-night-map.jpg');
const cloudTexture = loader.load('../textures/earth-cloud-map.jpg');
const normalMap = loader.load('../textures/earth-normal-map.jpg');
const specularMap = loader.load('../textures/earth-specular-map.jpg');

// 셰이더 코드
const earthVertexShader = `
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vViewPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const earthFragmentShader = `
  uniform sampler2D dayMap;
  uniform sampler2D nightMap;
  uniform sampler2D normalMap;
  uniform sampler2D specularMap;
  uniform vec3 lightDirection;

  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  void main() {
    vec3 normalMapColor = texture2D(normalMap, vUv).rgb;
    vec3 mappedNormal = normalize(vNormal + (normalMapColor * 2.0 - 1.0));
    float diffuse = dot(mappedNormal, lightDirection);
    float lightingFactor = clamp(diffuse, 0.0, 1.0);
    vec4 dayColor = texture2D(dayMap, vUv);
    vec4 nightColor = texture2D(nightMap, vUv);
    vec4 baseColor = mix(nightColor, dayColor, lightingFactor);
    vec3 viewDirection = normalize(vViewPosition);
    vec3 lightReflect = normalize(reflect(-lightDirection, mappedNormal));
    float specularStrength = texture2D(specularMap, vUv).r;
    float shininess = 16.0;
    float adjustedSpecularStrength = specularStrength * 0.5;
    float specular = pow(max(dot(viewDirection, lightReflect), 0.0), shininess) * adjustedSpecularStrength;
    gl_FragColor = baseColor + vec4(vec3(specular), 1.0);
    gl_FragColor.a = baseColor.a;
  }
`;

const earthShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    dayMap: { value: dayMap },
    nightMap: { value: nightMap },
    normalMap: { value: normalMap },
    specularMap: { value: specularMap },
    lightDirection: { value: new THREE.Vector3() },
  },
  vertexShader: earthVertexShader,
  fragmentShader: earthFragmentShader,
});

// 조명
const directionalLight = new THREE.DirectionalLight(0xe1f1f5, 1.5);
directionalLight.position.set(40, 60, 10).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xe1f1f5, 0.15);
scene.add(ambientLight);

// 지구
const geometry = new THREE.SphereGeometry(1, 64, 64);
const earth = new THREE.Mesh(geometry, earthShaderMaterial);
scene.add(earth);

// 구름
const cloudMaterial = new THREE.MeshLambertMaterial({
  map: cloudTexture,
  transparent: true,
  opacity: 0.8,
  depthWrite: false,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
});
const cloudMesh = new THREE.Mesh(geometry.clone(), cloudMaterial);
cloudMesh.renderOrder = 1;
cloudMesh.scale.set(1.005, 1.005, 1.005);
scene.add(cloudMesh);

// 대기 효과
const atmosphereGlowMaterial = new THREE.ShaderMaterial({
  uniforms: {
    c: { value: 0.05 },
    p: { value: 4.0 },
    glowColor: { value: new THREE.Color(0x7ba5cf) },
    viewVector: { value: new THREE.Vector3(0, 0, 1) },
  },
  vertexShader: `
    uniform vec3 viewVector;
    uniform float c;
    uniform float p;
    varying float intensity;
    void main() {
      vec3 vNormal = normalize(normalMatrix * normal);
      intensity = pow(c - dot(vNormal, viewVector), p);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 glowColor;
    varying float intensity;
    void main() {
      gl_FragColor = vec4(glowColor, intensity * 0.6);
    }
  `,
  side: THREE.BackSide,
  blending: THREE.NormalBlending,
  transparent: true,
});
const atmosphereGlowMesh = new THREE.Mesh(geometry.clone(), atmosphereGlowMaterial);
atmosphereGlowMesh.scale.set(1.04, 1.04, 1.04);
scene.add(atmosphereGlowMesh);

// 카메라 위치
camera.position.z = .5;
camera.position.y = 1;

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.001;
  cloudMesh.rotation.y += 0.0015;
  const cameraToEarth = new THREE.Vector3().subVectors(earth.position, camera.position).normalize();
  atmosphereGlowMaterial.uniforms.viewVector.value.copy(cameraToEarth);
  const lightWorldDir = new THREE.Vector3().copy(directionalLight.position).normalize();
  earthShaderMaterial.uniforms.lightDirection.value.copy(lightWorldDir);
  renderer.render(scene, camera);
}
animate();

// 리사이즈 대응
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});