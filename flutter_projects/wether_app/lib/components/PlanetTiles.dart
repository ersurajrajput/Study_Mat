import 'package:flutter/material.dart';
import 'package:wether_app/models/planet.dart';

class PlanetTiles extends StatelessWidget {
  final PlanetModel planet;
  const PlanetTiles({super.key, required this.planet});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(50),
        child: Container(
          decoration: BoxDecoration(color: Color(0xFF091522)),
          child: Padding(
            padding: const EdgeInsets.all(15),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset(planet.iconPath, width: 30),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: Text(
                    planet.name,
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
