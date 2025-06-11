window.celestialData = [
    {
        name: "Sun",
        type: "Star",
        radius: 696340, // km
        mass: 1.989e30, // kg
        surfaceTemperature: 5505, // °C (photosphere)
        axialTilt: 7.25, // degrees
        surfaceGravity: 274, // m/s²
        rotationPeriod: 25, // days
        description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma."
    },
    {
        name: "Mercury",
        type: "Planet",
        radius: 2439.7, // km
        mass: 3.3011e23, // kg
        surfaceTemperature: 167, // °C (average)
        distanceFromSun: 57909050, // km
        axialTilt: 0.034, // degrees
        surfaceGravity: 3.7, // m/s²
        orbitPeriod: 87.97, // days
        rotationPeriod: 58.646, // days
        parent: "Sun",
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun."
    },
    {
        name: "Venus",
        type: "Planet",
        radius: 6051.8, // km
        mass: 4.8675e24, // kg
        surfaceTemperature: 464, // °C (average)
        distanceFromSun: 108208000, // km
        axialTilt: 177.4, // degrees (retrograde rotation)
        surfaceGravity: 8.87, // m/s²
        orbitPeriod: 224.7, // days
        rotationPeriod: 243.018, // days
        parent: "Sun",
        description: "Venus is the second planet from the Sun and has a thick atmosphere that traps heat."
    },
    {
        name: "Earth",
        type: "Planet",
        radius: 6371, // km
        mass: 5.972e24, // kg
        surfaceTemperature: 15, // °C (average)
        distanceFromSun: 149598262, // km
        axialTilt: 23.44, // degrees
        surfaceGravity: 9.807, // m/s²
        orbitPeriod: 365.25, // days
        rotationPeriod: 0.997, // days
        parent: "Sun",
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life."
    },
    {
        name: "Moon",
        type: "Satellite",
        radius: 1737.4, // km
        mass: 7.342e22, // kg
        surfaceTemperature: [-173, 127], // °C (range)
        distanceFromPlanet: 384400, // km (from Earth)
        axialTilt: 6.68, // degrees
        surfaceGravity: 1.62, // m/s²
        orbitPeriod: 27.3, // days
        rotationPeriod: 27.3, // days
        parent: "Earth",
        description: "The Moon is Earth's only natural satellite and the fifth largest satellite in the Solar System."
    },
    {
        name: "Mars",
        type: "Planet",
        radius: 3389.5, // km
        mass: 6.417e23, // kg
        surfaceTemperature: -63, // °C (average)
        distanceFromSun: 227943820, // km
        axialTilt: 25.19, // degrees
        surfaceGravity: 3.71, // m/s²
        orbitPeriod: 687, // days
        rotationPeriod: 1.026, // days
        parent: "Sun",
        description: "Mars is the fourth planet from the Sun and is often referred to as the 'Red Planet' due to its reddish appearance."
    },
    {
        name: "Phobos",
        type: "Moon",
        radius: 11.1, // km
        mass: 1.0659e16, // kg
        surfaceTemperature: -40, // °C (average)
        distanceFromPlanet: 9377, // km (from Mars)
        axialTilt: 0, // degrees
        surfaceGravity: 0.0057, // m/s²
        orbitPeriod: 0.3189, // days
        rotationPeriod: 0.3189, // days
        parent: "Mars",
        description: "The larger and innermost moon of Mars, with an irregular shape and heavily cratered surface."
    },
    {
        name: "Deimos",
        type: "Moon",
        radius: 6.2, // km
        mass: 1.4762e15, // kg
        surfaceTemperature: -40, // °C (average)
        distanceFromPlanet: 23460, // km (from Mars)
        axialTilt: 0, // degrees
        surfaceGravity: 0.003, // m/s²
        orbitPeriod: 1.2624, // days
        rotationPeriod: 1.2624, // days
        parent: "Mars",
        description: "The smaller and outermost moon of Mars, with a smooth surface and fewer craters than Phobos."
    },
    {
        name: "Hubble",
        type: "Space Telescope",
        radius: 0.0132, // km 
        mass: 11110, // kg
        distanceFromPlanet: 547, // km (orbital altitude)
        orbitPeriod: 0.0667, // days
        parent: "Earth",
        description: "The Hubble Space Telescope is a large telescope in space that observes distant stars and galaxies. It was launched in 1990 and orbits at an altitude of ~547 km."
    },
    {
        name: "TESS",
        type: "Space Telescope",
        radius: 0.0012, // km 
        mass: 350, // kg
        distanceFromPlanet: 108000, // km (at perigee)
        orbitPeriod: 13.7, // days
        parent: "Earth",
        description: "TESS is a space telescope designed to search for exoplanets using the transit method. It was launched in 2018 and operates in a highly elliptical orbit."
    },
    {
        name: "ISS",
        type: "Space Station",
        radius: 0.073, // km (73m)
        mass: 419725, // kg
        distanceFromPlanet: 408, // km (orbital altitude)
        orbitPeriod: 0.0639, // days
        parent: "Earth",
        description: "The International Space Station is a modular space station in low Earth orbit used for scientific research. It orbits at an altitude of ~408 km and has been operational since 1998."
    },
    {
        name: "Jupiter",
        type: "Planet",
        radius: 69911, // km
        mass: 1.898e27, // kg
        surfaceTemperature: -108, // °C (at 1 bar level)
        distanceFromSun: 778340821, // km
        axialTilt: 3.13, // degrees
        surfaceGravity: 24.79, // m/s² (at 1 bar level)
        orbitPeriod: 4332.59, // days
        rotationPeriod: 0.414, // days
        parent: "Sun",
        description: "Jupiter is the largest planet in the Solar System and is known for its Great Red Spot."
    },
    {
        name: "Europa",
        type: "Moon",
        radius: 1560.8, // km
        mass: 4.8e22, // kg
        surfaceTemperature: -160, // °C (average)
        distanceFromPlanet: 670900, // km (from Jupiter)
        axialTilt: 0.1, // degrees
        surfaceGravity: 1.315, // m/s²
        orbitPeriod: 3.551, // days
        rotationPeriod: 3.551, // days
        parent: "Jupiter",
        description: "One of Jupiter's Galilean moons with a smooth icy surface and potential subsurface ocean."
    },
    {
        name: "Io",
        type: "Moon",
        radius: 1821.6, // km
        mass: 8.9319e22, // kg
        surfaceTemperature: -143, // °C (average)
        distanceFromPlanet: 421700, // km (from Jupiter)
        axialTilt: 0, // degrees
        surfaceGravity: 1.796, // m/s²
        orbitPeriod: 1.769, // days
        rotationPeriod: 1.769, // days
        parent: "Jupiter",
        description: "The most volcanically active body in the Solar System, with over 400 active volcanoes."
    },
    {
        name: "Callisto",
        type: "Moon",
        radius: 2410.3, // km
        mass: 1.0759e23, // kg
        surfaceTemperature: -139, // °C (average)
        distanceFromPlanet: 1883000, // km (from Jupiter)
        axialTilt: 0, // degrees
        surfaceGravity: 1.236, // m/s²
        orbitPeriod: 16.689, // days
        rotationPeriod: 16.689, // days
        parent: "Jupiter",
        description: "Jupiter's second-largest moon and the most heavily cratered object in the Solar System."
    },
    {
        name: "Saturn",
        type: "Planet",
        radius: 58232, // km
        mass: 5.683e26, // kg
        surfaceTemperature: -139, // °C (at 1 bar level)
        distanceFromSun: 1426666422, // km
        axialTilt: 26.73, // degrees
        surfaceGravity: 10.44, // m/s² (at 1 bar level)
        orbitPeriod: 10759, // days
        rotationPeriod: 0.446, // days
        parent: "Sun",
        description: "Saturn is the sixth planet from the Sun and is famous for its prominent ring system."
    },
    {
        name: "Dione",
        type: "Moon",
        radius: 561.4, // km
        mass: 1.095e21, // kg
        surfaceTemperature: -186, // °C (average)
        distanceFromPlanet: 377400, // km (from Saturn)
        axialTilt: 0, // degrees
        surfaceGravity: 0.232, // m/s²
        orbitPeriod: 2.7369, // days
        rotationPeriod: 2.7369, // days
        parent: "Saturn",
        description: "A mid-sized moon of Saturn with a bright icy surface and wispy terrain features."
    },
    {
        name: "Titan",
        type: "Moon",
        radius: 2574.7, // km
        mass: 1.3452e23, // kg
        surfaceTemperature: -179.5, // °C (average)
        distanceFromPlanet: 1221870, // km (from Saturn)
        axialTilt: 0.348, // degrees
        surfaceGravity: 1.352, // m/s²
        orbitPeriod: 15.945, // days
        rotationPeriod: 15.945, // days
        parent: "Saturn",
        description: "Saturn's largest moon and the only moon in the Solar System with a substantial atmosphere."
    },
    {
        name: "Uranus",
        type: "Planet",
        radius: 25362, // km
        mass: 8.681e25, // kg
        surfaceTemperature: -197, // °C (at 1 bar level)
        distanceFromSun: 2870658186, // km
        axialTilt: 97.77, // degrees (sideways rotation)
        surfaceGravity: 8.69, // m/s² (at 1 bar level)
        orbitPeriod: 30685, // days
        rotationPeriod: 0.718, // days
        parent: "Sun",
        description: "Uranus is the seventh planet from the Sun and has a unique sideways rotation."
    },
    {
        name: "Neptune",
        type: "Planet",
        radius: 24622, // km
        mass: 1.024e26, // kg
        surfaceTemperature: -201, // °C (at 1 bar level)
        distanceFromSun: 4498396441, // km
        axialTilt: 28.32, // degrees
        surfaceGravity: 11.15, // m/s² (at 1 bar level)
        orbitPeriod: 60190, // days
        rotationPeriod: 0.671, // days
        parent: "Sun",
        description: "Neptune is the eighth and farthest planet from the Sun in the Solar System."
    },
    {
        name: "Pluto",
        type: "Dwarf Planet",
        radius: 1188.3, // km
        mass: 1.303e22, // kg
        surfaceTemperature: -229, // °C (average)
        distanceFromSun: 5906440628, // km
        axialTilt: 122.53, // degrees
        surfaceGravity: 0.62, // m/s²
        orbitPeriod: 90560, // days
        rotationPeriod: 6.387, // days
        parent: "Sun",
        description: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune."
    }
];
