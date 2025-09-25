import 'dart:math';

import 'package:flutter/material.dart';
import 'package:wether_app/components/PlanetCart.dart';
import 'package:wether_app/components/PlanetTiles.dart';
import 'package:wether_app/models/planet.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<PlanetModel> pList = [];
  late PlanetModel lPlanet;

  @override
  void initState() {
    pList.add(PlanetModel(name: "Mercury", iconPath: "img/mercury1.png"));
    pList.add(PlanetModel(name: "earth", iconPath: "img/mercury1.png"));
    pList.add(PlanetModel(name: "venus", iconPath: "img/mercury1.png"));
    pList.add(PlanetModel(name: "jupeter", iconPath: "img/mercury1.png"));
    pList.add(PlanetModel(name: "pluto", iconPath: "img/mercury1.png"));
    List<PlanetModel> planetList = [
      PlanetModel(
        name: "Mercury",
        description:
            "The smallest planet in our solar system and closest to the Sun.",
        mass: 0.33,
        gravity: 3.7,
        day: 58.6,
        escapeVelocity: 4.3,
        meanTemp: 167,
        distanceFromSun: 57.9,
      ),
      PlanetModel(
        name: "Venus",
        description:
            "Second planet from the Sun, with a thick, toxic atmosphere.",
        mass: 4.87,
        gravity: 8.87,
        day: 243,
        escapeVelocity: 10.4,
        meanTemp: 464,
        distanceFromSun: 108.2,
      ),
      PlanetModel(
        name: "Earth",
        description: "Our home planet, the only known planet with life.",
        mass: 5.97,
        gravity: 9.8,
        day: 1,
        escapeVelocity: 11.2,
        meanTemp: 15,
        distanceFromSun: 149.6,
      ),
      PlanetModel(
        name: "Mars",
        description: "The red planet, known for its iron oxide surface.",
        mass: 0.642,
        gravity: 3.71,
        day: 1.03,
        escapeVelocity: 5.0,
        meanTemp: -65,
        distanceFromSun: 227.9,
      ),
      PlanetModel(
        name: "Jupiter",
        description: "The largest planet, a gas giant with a Great Red Spot.",
        mass: 1898,
        gravity: 24.8,
        day: 0.41,
        escapeVelocity: 59.5,
        meanTemp: -110,
        distanceFromSun: 778.5,
      ),
      PlanetModel(
        name: "Saturn",
        description: "Known for its prominent ring system, a gas giant.",
        mass: 568,
        gravity: 10.4,
        day: 0.45,
        escapeVelocity: 35.5,
        meanTemp: -140,
        distanceFromSun: 1434,
      ),
      PlanetModel(
        name: "Uranus",
        description: "An ice giant with a tilted axis and faint rings.",
        mass: 86.8,
        gravity: 8.87,
        day: 0.72,
        escapeVelocity: 21.3,
        meanTemp: -195,
        distanceFromSun: 2871,
      ),
      PlanetModel(
        name: "Neptune",
        description: "The farthest planet, an ice giant with strong winds.",
        mass: 102,
        gravity: 11.0,
        day: 0.67,
        escapeVelocity: 23.5,
        meanTemp: -200,
        distanceFromSun: 4495,
      ),
    ];

    Random random = Random();
    int randomNumber = random.nextInt(7); // 0 to 6 inclusive
    lPlanet = planetList[randomNumber];
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("img/bgImg.png"),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.only(
                left: 10,
                right: 10,
                top: 50,
                bottom: 20,
              ),
              width: double.infinity,

              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage("img/Navbar.png"),
                  fit: BoxFit.cover,
                ),

                borderRadius: BorderRadius.circular(20),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    padding: EdgeInsets.all(10),
                    child: Icon(Icons.menu, color: Colors.white),
                    decoration: BoxDecoration(
                      border: Border.all(width: 2),
                      borderRadius: BorderRadius.circular(100),
                    ),
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text("Milky Way", style: TextStyle(color: Colors.grey)),
                      Text(
                        "Solar System",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 35,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  Container(
                    padding: EdgeInsets.all(10),
                    child: Icon(Icons.person_2, color: Colors.white),
                    decoration: BoxDecoration(
                      border: Border.all(width: 2),
                      borderRadius: BorderRadius.circular(100),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 150,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: pList.length,
                itemBuilder: (context, index) {
                  return Padding(
                    padding: EdgeInsets.only(right: 10),
                    child: PlanetTiles(planet: pList[index]),
                  );
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(30),
                child: Container(
                  alignment: Alignment.topLeft,
                  padding: EdgeInsets.all(10),
                  width: double.infinity,
                  height: 200,
                  decoration: BoxDecoration(
                    color: Color.fromARGB(175, 9, 21, 34),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Planet of the day",
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontSize: 25,
                        ),
                      ),
                      SizedBox(height: 10),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Image.asset(lPlanet.iconPath, width: 100),
                          SizedBox(width: 10),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  lPlanet.name.toUpperCase(),
                                  style: TextStyle(
                                    color: Colors.indigoAccent,
                                    fontSize: 25,
                                  ),
                                ),
                                Text(
                                  lPlanet.description ??
                                      "no description availibale",
                                  style: TextStyle(color: Colors.white),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),

            Padding(
              padding: const EdgeInsets.all(20),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: Container(
                  width: double.infinity,

                  decoration: BoxDecoration(
                    color: Color.fromARGB(175, 9, 21, 34),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(10),
                        child: Text(
                          "Solar System",
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(10),
                        child: Text(
                          """The Solar System consists of the Sun and all objects bound to it by gravity, including planets, moons, asteroids, and comets.
There are eight planets in the Solar System: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.
Besides planets, the Solar System also contains dwarf planets, meteoroids, and the Kuiper Belt, which is a region of icy bodies beyond Neptune.
""",
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
