var container, stats, gui, promptSound;
var switchCamera, scene, renderer;
var roamingCamera, cameraControl;
var sunLight;
var ambientLight;
var goRoaming = false, roamingStatus = false;
var tween;
var trackCamera = new Map();
var renderCamera;
var needSet = true;
var curBody = "Galaxy", nextBody = curBody;
var saveCur, saveNext;
var orbitDraw = new Map();
var clock = new THREE.Clock();
var tick = 0;
var params = {
    Camera: "Galaxy",
};
var calculateParams;
var orbitParams;
var cometParams;
var control;
var firstflag = true;

var options = {
    position: new THREE.Vector3(),
    positionRandomness: .3,
    velocity: new THREE.Vector3(),
    velocityRandomness: 3.0,
    color: 0x000011,
    colorRandomness: .2,
    turbulence: 0.,
    lifetime: 2.,
    size: 10,
    sizeRandomness: 2
};

var spawnerOptions = {
    spawnRate: 15000,
    horizontalSpeed: 1.5,
    verticalSpeed: 1.33, timeScale: 1,
};

$('.progress').progressInitialize();

var progressBar = $('#control');

progressBar.click(function (e) {
    e.preventDefault();
    progressBar.progressSet(0);
    pre();
    $(this).removeAttr('onclick');
});


function pre() {
    var manifest = [
        "res/callisto/diffuse.jpg",
        "res/deimos/diffuse.jpg",
        "res/deimos/bump.jpg",
        "res/dione/diffuse.jpg",
        "res/earth/diffuse.jpg",
        "res/earth/bump.jpg",
        "res/earth/clouds.png",
        "res/earth/night.png",
        "res/earth/spec.jpg",
        "res/effects/flare.jpg",
        "res/europa/diffuse.jpg",
        "res/io/diffuse.png",
        "res/jupiter/clouds.png",
        "res/jupiter/diffuse.jpg",
        "res/jupiter/ring.png",
        "res/loading/loading.gif",
        "res/mars/diffuse.jpg",
        "res/mars/bump.jpg",
        "res/mercury/diffuse.jpg",
        "res/mercury/bump.jpg",
        "res/moon/diffuse.jpg",
        "res/moon/bump.jpg",
        "res/neptune/diffuse.jpg",
        "res/neptune/ring.png",
        "res/phobos/diffuse.jpg",
        "res/phobos/bump.jpg",
        "res/pluto/diffuse.jpg",
        "res/saturn/diffuse.png",
        "res/saturn/bump.png",
        "res/saturn/clouds.png",
        "res/saturn/ring.png",
        "res/CubeMap/nx.png",
        "res/CubeMap/ny.png",
        "res/CubeMap/nz.png",
        "res/CubeMap/px.png",
        "res/CubeMap/py.png",
        "res/CubeMap/pz.png",
        "res/sol/diffuse.png",
        "res/titan/diffuse.jpg",
        "res/uranus/diffuse.jpg",
        "res/uranus/ring.png",
        "res/venus/diffuse.jpg",
        "res/venus/bump.jpg",
        "res/venus/clouds.jpg",
    ];
    $.preLoad(manifest, {
        each: function (count) {
            progressBar.progressSet(count * 2);
            progressBar.attr({'data-loading': (parseInt(count / manifest.length * 100)).toString() + "%"});
        },
        all: function () {
            progressBar.progressSet(100);
            progressBar.attr({'data-loading': (100).toString() + "%"});
            init();
            animate();
        }
    });
}

function initScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
}

function initCamera() {
    roamingCamera = new cameraParameters(3000, 200, "Astronaut");
    switchCamera = new cameraParameters(3000, 200, "Sun");
    switchCamera.setCamera();
    trackCamera["Galaxy"] = new cameraParameters(7000, 200, "Sun");
    trackCamera["Galaxy"].theta = 80.0;
    trackCamera["Galaxy"].phi = 0.0;
    var planets = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
    for (var i in planets) {
        trackCamera[planets[i]] = new cameraParameters(3.0 * celestialBodies[planets[i]].radius, 3.0 * celestialBodies[planets[i]].radius, planets[i]);
    }
    // camera chuyển đến Hubble
    // trackCamera["Hubble"] = new cameraParameters(3.0 * celestialBodies["Hubble"].radius, 3.0 * celestialBodies["Hubble"].radius, "Hubble");
    // trackCamera["ISS"] = new cameraParameters(3.0 * celestialBodies["ISS"].radius, 3.0 * celestialBodies["ISS"].radius, "ISS");
    // trackCamera["TESS"] = new cameraParameters(3.0 * celestialBodies["TESS"].radius, 3.0 * celestialBodies["TESS"].radius, "TESS");

    // camera chuyển đến các vệ tinh 
    var satellites = ["Moon", "Phobos", "Deimos", "Europa", "Io", "Callisto", "Dione", "Titan", "ISS", "Hubble", "TESS"];
    for (var i in satellites) {
        trackCamera[satellites[i]] = new cameraParameters(3.0 * celestialBodies[satellites[i]].radius, 3.0 * celestialBodies[satellites[i]].radius, satellites[i]);
    }
}

function initLight() {
    // Add light
    sunLight = new THREE.PointLight(0xFFFFFF, 1.0);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);
    ambientLight = new THREE.AmbientLight(0xFFFFFF);
    ambientLight.intensity = 0;
    scene.add(ambientLight)
    sunLight.castShadow = true;
}


function drawOrbit(celestialBody) {
    var radius = celestialBody.orbit.semiMajorAxis;
    var angle = celestialBody.orbit.inclination / 180.0 * Math.PI;
    var size = 360 / radius;
    var orbit = new THREE.Geometry();
    var e = celestialBody.orbit.eccentricity;
    var material = new THREE.LineBasicMaterial({vertexColors: true});
    for (var i = 0; i <= radius; i++) {
        var segment = (i * size) * Math.PI / 180;
        var r = radius * (1 - e * e) / (1 + e * Math.cos(segment));
        orbit.vertices.push(new THREE.Vector3((Math.cos(segment) * r) * Math.cos(angle),
            (Math.cos(segment) * r) * Math.sin(angle),
            Math.sin(segment) * r));
        var color1 = new THREE.Color(0xffffff);
        var quad = (radius / 4.0);
        if (i < quad) {
            color1.setRGB((0 + (4 * i / radius) * 100) / 255, (50 + (4 * i / radius) * 50) / 255, 100.0 / 255);
        } else if (i >= quad && i < 2 * quad) {
            color1.setRGB((100 - (4 * i / radius - 1) * 100) / 255, (100 - (4 * i / radius - 1) * 50) / 255, 100.0 / 255);
        } else if (i >= 2 * quad && i < 3 * quad) {
            color1.setRGB((0 + (4 * i / radius - 2) * 100) / 255, (50 + (4 * i / radius - 2) * 50) / 255, 100.0 / 255);
        } else {
            color1.setRGB((100 - (4 * i / radius - 3) * 100) / 255, (100 - (4 * i / radius - 3) * 50) / 255, 100.0 / 255);
        }

        orbit.colors.push(color1);
    }
    return new THREE.Line(orbit, material);
}


function initRender() {
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, preserveDrawingBuffer: true});
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // renderer.shadowMapEnabled = true;
    // renderer.shadowMapSoft = true;
    // renderer.shadowMap.enabled = true;
    // renderer.shadowCameraNear = 3;
    // renderer.shadowCameraFar = 100;
    // renderer.shadowMapDarkness = 0.2;
    // renderer.shadowCameraFov = 50;
    // renderer.shadowMapBias = 0.0039;
    // renderer.shadowMapWidth = 1024;
    // renderer.shadowMapHeight = 1024;
}

function initObjects() {
    // Add sky box
    var skyboxTextureFilenames = [
        "res/CubeMap/px.png", "res/CubeMap/nx.png",
        "res/CubeMap/py.png", "res/CubeMap/ny.png",
        "res/CubeMap/pz.png", "res/CubeMap/nz.png"
    ];
    var materialArray = [];
    var skyGeometry = new THREE.CubeGeometry(10000000, 10000000, 10000000);
    for (var i = 0; i < 6; i++)
        materialArray.push(new THREE.MeshBasicMaterial({
            map: textureLoader.load(skyboxTextureFilenames[i]),
            side: THREE.BackSide
        }));
    var skyBox = new THREE.Mesh(skyGeometry, materialArray);
    skyBox.rotateX(Math.PI / 2);
    scene.add(skyBox);
    var orbits = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"/*, "Ship", "Hubble", "ISS"*/]; 
    for (var i in orbits) {
        orbitDraw[orbits[i]] = drawOrbit(celestialBodies[orbits[i]]);
    }
    for (var objKey in celestialBodies) {
        celestialBodies[objKey].generateObjectsOnScene(scene);
    }
    for (var objKey in celestialBodies) {
        if (celestialBodies[objKey].parent != null)
            celestialBodies[objKey].parent = celestialBodies[celestialBodies[objKey].parent];
    }
}


function initGui() {
    var calculate = gui.addFolder('Calculate');
    calculateParams = {
        Sun: true,
        Mercury: true,
        Venus: true,
        Earth: true,
        Mars: true,
        Jupiter: true,
        Saturn: true,
        Uranus: true,
        Neptune: true,
        Pluto: true
    };
    for (var i in calculateParams)
        calculate.add(calculateParams, i);
    var orbit = gui.addFolder('Orbit');
    orbitParams = {
        Mercury: true,
        Venus: true,
        Earth: true,
        Mars: true,
        Jupiter: true,
        Saturn: true,
        Uranus: true,
        Neptune: true,
        Pluto: true
    };
    for (var i in orbitParams)
        orbit.add(orbitParams, i);
    gui.add(params, 'Camera', ["Galaxy", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]).onChange(function (val) {
        nextBody = val;
        if (nextBody != switchCamera.body || (curBody == "Galaxy" && nextBody == "Sun")) {
            initTween();
            cameraCopy(switchCamera, trackCamera[curBody]);
            setTween(curBody, nextBody);
            tween.start();
        }
        // thêm 
        showCelestialInfo(nextBody);
    });

    // Thêm Nhóm các vệ tinh tự nhiên và nhân tạo
    var satellites = [
        "Moon", "Phobos", "Deimos", "Europa",
        "Io", "Callisto", "Dione",  "Titan",
        "ISS", "Hubble", "TESS" // vệ tinh nhân tạo
    ];  
    var satelliteParams = { Satellite: satellites[0] };
    gui.add(satelliteParams, 'Satellite', satellites).name("Satellites").onChange(function(val) {
        nextBody = val;
        params.Camera = val;
        if (nextBody != switchCamera.body || (curBody == "Galaxy" && nextBody == "Sun")) {
            initTween();
            cameraCopy(switchCamera, trackCamera[curBody]);
            setTween(curBody, nextBody);
            tween.start();
        }
        curBody = nextBody;
        showCelestialInfo(nextBody);
    });

    control = new function () {
        this.Roam = function () {
            if (roamingStatus == false) {
                roamingCamera.camera.position.x = celestialBodies["Astronaut"].objectGroup.position.x;
                roamingCamera.camera.position.y = celestialBodies["Astronaut"].objectGroup.position.y;
                roamingCamera.camera.position.z = celestialBodies["Astronaut"].objectGroup.position.z;
                goRoaming = true;
                initTween();
                if (curBody != "Earth") {
                    saveNext = calculateParams["Earth"];
                    calculateParams["Earth"] = false;
                }
                cameraCopy(switchCamera, trackCamera[curBody]);
                setTween(curBody, null, celestialBodies["Astronaut"].objectGroup.position.x, celestialBodies["Astronaut"].objectGroup.position.y, celestialBodies["Astronaut"].objectGroup.position.z);
                tween.start();
            } else {
                cameraControl.dispose();
                roamingStatus = false;
                initTween();
                setTween(null, curBody, roamingCamera.camera.position.x, roamingCamera.camera.position.y, roamingCamera.camera.position.z);
                tween.start();
            }
        };
         
        this.Light = 1.0;
        this.Ambient = 0.0;
        this.TimeScale = 1.0;
        this.Screenshot = function () {
            var dataURL = renderer.domElement.toDataURL();
            var newWindow = window.open()
            var img = newWindow.document.createElement("img");
            img.src = dataURL;
            newWindow.document.body.appendChild(img);
        }
    };

    gui.add(control, 'Light', 0.0, 2.0)
        .onChange(function (val) {
            window.removeEventListener('mousedown', onWindowMouseDown, false);
            sunLight.intensity = val;
        })
        .onFinishChange(function () {
            window.addEventListener('mousedown', onWindowMouseDown, false);
        });
    gui.add(control, 'Ambient', 0.0, 1.0)
        .onChange(function (val) {
            window.removeEventListener('mousedown', onWindowMouseDown, false);
            ambientLight.intensity = val;
        })
        .onFinishChange(function () {
            window.addEventListener('mousedown', onWindowMouseDown, false);
        });
    gui.add(control, 'TimeScale', 0.0, 10.0)
        .onChange(function (val) {
            window.removeEventListener('mousedown', onWindowMouseDown, false);
            globalTime.scale = val;
        })
        .onFinishChange(function () {
            window.addEventListener('mousedown', onWindowMouseDown, false);
        });
    gui.add(control, "Roam");
    gui.add(control, "Screenshot");
    gui.autoPlace = false;
    // mới
}


function init() {
    container = document.getElementById('container');
    promptSound = document.getElementById('promptSound');
    initCamera();
    initScene();
    initLight();
    initObjects();
    initRender();
    renderCamera = trackCamera["Galaxy"];
    stats = new Stats();
    gui = new dat.GUI();
    gui.close();
    window.addEventListener('mousedown', onWindowMouseDown, false);
    window.addEventListener('mousemove', onWindowMouseMove, false);
    window.addEventListener('mouseup', onWindowMouseUp, false);
    window.addEventListener('mousewheel', onMouseWheelChange, false);
    window.addEventListener('DOMMouseScroll', onMouseWheelChange, false);
    window.addEventListener('resize', onWindowResize, false);
    initGui()
    // thêm 
    initCelestialInfo();
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    if (roamingStatus)
        cameraControl.handleResize();
    renderCamera.aspect = window.innerWidth / window.innerHeight;
    renderCamera.camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    if (roamingStatus) {
        cameraControl.update(clock.getDelta());
    }
    render();
    stats.update();
}


function showCelestialInfo(name) {
    const panel = document.getElementById('celestial-info');
    const toggleBtn = document.getElementById('toggle-button');

    if (!panel || !toggleBtn) {
        console.error("Không tìm thấy panel hoặc nút toggle");
        return;
    }
    
    panel.style.display = 'block';
    toggleBtn.style.display = 'block';

    if (name === "Galaxy") {
        panel.style.display = 'none';
        toggleBtn.style.display = 'none';
        return;
    }

    const data = window.celestialData.find(obj => obj.name === name);
    if (!data) return;
    
    panel.classList.remove('collapsed');

    document.getElementById('celestial-name').textContent = data.name;
    document.getElementById('celestial-type').textContent = data.type;

    updateField('celestial-radius', data.radius, true);
    updateField('celestial-mass', data.mass, false, true);
    
    const tempElement = document.getElementById('celestial-temperature');
    if (Array.isArray(data.surfaceTemperature)) {
        updateField('celestial-temperature', `${data.surfaceTemperature[0]} to ${data.surfaceTemperature[1]}`);
    } else {
        updateField('celestial-temperature', data.surfaceTemperature);
    }
    
    updateField('celestial-distance-sun', data.distanceFromSun, true);
    updateField('celestial-distance-parent', data.distanceFromPlanet, true);
    
    updateField('celestial-axial-tilt', data.axialTilt);
    updateField('celestial-gravity', data.surfaceGravity);
    updateField('celestial-orbit', data.orbitPeriod);
    updateField('celestial-rotation', data.rotationPeriod);
    updateField('celestial-parent', data.parent);
    updateField('celestial-description', data.description);
}

// Hàm cập nhật các trường thông tin và ẩn nếu giá trị thiếu
function updateField(id, value, isNumber = false, isExponential = false) {
    const element = document.getElementById(id);
    if (!element) return;

    const parent = element.closest('p'); 
    
    if (value === undefined || value === null) {
        parent.style.display = 'none'; 
    } else {
        parent.style.display = ''; 
        if (isNumber) {
            element.textContent = value.toLocaleString();
        } else if (isExponential) {
            element.textContent = value.toExponential(3);
        } else {
            element.textContent = value;
        }
    }
}

function initCelestialInfo() {
    const panel = document.getElementById('celestial-info');
    const toggleBtn = document.getElementById('toggle-button');
    
    if (!panel || !toggleBtn) {
        console.error("Không tìm thấy panel hoặc nút toggle");
        return;
    }
  
    panel.classList.add('collapsed');

    toggleBtn.addEventListener('click', function() {
        panel.classList.toggle('collapsed');
        this.textContent = panel.classList.contains('collapsed') ? '⊕' : '⊖';
    });
}
