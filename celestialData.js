window.celestialData = [
    {
        name: "Sun",
        type: "Star",
        radius: 696340, // km 
        shineColor: "#ffeeaa",
        orbitPeriod: "N/A",
        rotationPeriod: 600, // giờ
        parent: "None",
        atmosphere: true,
        hasRing: false,
        description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma."
    },
    {
        name: "Mercury",
        type: "Planet",
        radius: 2439.7, // km 
        shineColor: "#9999ff",
        orbitPeriod: 87.97, // ngày
        rotationPeriod: 1407.509405, // giờ
        parent: "Sun",
        atmosphere: false,
        hasRing: false,
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun."
    },
    {
        name: "Venus",
        type: "Planet",
        radius: 6051.8, // km
        shineColor: "#9999ff",
        orbitPeriod: 224.7, // ngày 
        rotationPeriod: 5832.443616, // giờ 
        parent: "Sun",
        atmosphere: true,
        hasRing: false,
        description: "Venus is the second planet from the Sun and has a thick atmosphere that traps heat."
    },
    {
        name: "Earth",
        type: "Planet",
        radius: 6371, // km 
        shineColor: "#6666ff",
        orbitPeriod: 365.25, // ngày 
        rotationPeriod: 23.93447117, // giờ 
        parent: "Sun",
        atmosphere: true,
        hasRing: false,
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life."
    },
    {
        name: "Moon",
        type: "Satellite",
        radius: 1737.4, // km 
        shineColor: "#ff9988",
        orbitPeriod: 27.3, // ngày 
        rotationPeriod: 655.2, // giờ 
        parent: "Earth",
        atmosphere: false,
        hasRing: false,
        description: "The Moon is Earth's only natural satellite and the fifth largest satellite in the Solar System."
    },
    {
        name: "Mars",
        type: "Planet",
        radius: 3389.5, // km 
        shineColor: "#ff9988",
        orbitPeriod: 687, // ngày 
        rotationPeriod: 24.622962156, // giờ 
        parent: "Sun",
        atmosphere: true,
        hasRing: false,
        description: "Mars is the fourth planet from the Sun and is often referred to as the 'Red Planet' due to its reddish appearance."
    },
    {
        name: "Hubble",
        type: "Space Telescope",
        radius: 0.0132, // km 
        shineColor: "#ffffff",
        orbitPeriod: 1.6, // giờ 
        rotationPeriod: "N/A",
        parent: "Earth",
        atmosphere: false,
        hasRing: false,
        description: "The Hubble Space Telescope is a large telescope in space that observes distant stars and galaxies. It was launched in 1990 and orbits at an altitude of ~547 km."
    },
    {
        name: "TESS",
        type: "Space Telescope",
        radius: 0.0012, // km 
        shineColor: "#ffffff",
        orbitPeriod: 13.7, // ngày
        rotationPeriod: "N/A",
        parent: "Earth",
        atmosphere: false,
        hasRing: false,
        description: "TESS is a space telescope designed to search for exoplanets using the transit method. It was launched in 2018 and operates in a highly elliptical orbit."
    },
    {
        name: "ISS",
        type: "Space Station",
        radius: 0.073, // km 
        shineColor: "#ffffff",
        orbitPeriod: 1.533, // giờ 
        rotationPeriod: "N/A",
        parent: "Earth",
        atmosphere: false,
        hasRing: false,
        description: "The International Space Station is a modular space station in low Earth orbit used for scientific research. It orbits at an altitude of ~408 km and has been operational since 1998."
    },
    {
        name: "Jupiter",
        type: "Planet",
        radius: 69911, // km 
        shineColor: "#9999ff",
        orbitPeriod: 4332.59, // ngày 
        rotationPeriod: 9.93, // giờ 
        parent: "Sun",
        atmosphere: true,
        hasRing: true,
        description: "Jupiter is the largest planet in the Solar System and is known for its Great Red Spot."
    },
    {
        name: "Saturn",
        type: "Planet",
        radius: 58232, // km 
        shineColor: "#9999ff",
        orbitPeriod: 10759, // ngày 
        rotationPeriod: 10.7, // giờ 
        parent: "Sun",
        atmosphere: true,
        hasRing: true,
        description: "Saturn is the sixth planet from the Sun and is famous for its prominent ring system."
    },
    {
        name: "Uranus",
        type: "Planet",
        radius: 25362, // km 
        shineColor: "#9999ff",
        orbitPeriod: 30685, // ngày 
        rotationPeriod: 17.24, // giờ 
        parent: "Sun",
        atmosphere: true,
        hasRing: true,
        description: "Uranus is the seventh planet from the Sun and has a unique sideways rotation."
    },
    {
        name: "Neptune",
        type: "Planet",
        radius: 24622, // km 
        shineColor: "#9999ff",
        orbitPeriod: 60190, // ngày 
        rotationPeriod: 16.11, // giờ 
        parent: "Sun",
        atmosphere: true,
        hasRing: true,
        description: "Neptune is the eighth and farthest planet from the Sun in the Solar System."
    },
    {
        name: "Pluto",
        type: "Dwarf Planet",
        radius: 1188.3, // km 
        shineColor: "#9999ff",
        orbitPeriod: 90560, // ngày 
        rotationPeriod: 153.292944, // giờ 
        parent: "Sun",
        atmosphere: false,
        hasRing: false,
        description: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune."
    }
];