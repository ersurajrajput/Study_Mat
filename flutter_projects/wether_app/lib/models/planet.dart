class PlanetModel {
  String name;
  String iconPath;
  String? description;
  double? mass; // optional
  double? gravity; // optional (fixed typo: "garvity" → "gravity")
  double day; // default value if not provided
  double? escapeVelocity; // optional
  double? meanTemp; // optional
  double? distanceFromSun; // optional (fixed typo: "distence" → "distance")

  PlanetModel({
    required this.name,
    this.iconPath = "img/mercury1.png",
    this.description,
    this.mass,
    this.gravity,
    this.day = 1, // default value = 1 if not provided
    this.escapeVelocity,
    this.meanTemp,
    this.distanceFromSun,
  });
}
