import 'package:flutter/material.dart';
import 'package:wether_app/screens/HomeScreen.dart';
import 'package:sleek_circular_slider/sleek_circular_slider.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();

    // Simulate a delay to move to the next screen
    Future.delayed(Duration(seconds: 10), () {
      // Navigate to your Home Screen
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => HomeScreen()),
      );
    });
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
        child: Center(
          child: Stack(
            alignment: Alignment.center,
            children: [
              // Spinner
              SleekCircularSlider(
                appearance: CircularSliderAppearance(
                  size: 200,
                  spinnerMode: true,
                  customWidths: CustomSliderWidths(
                    trackWidth: 2,
                    progressBarWidth: 6,
                    handlerSize: 0,
                    shadowWidth: 0,
                  ),
                  customColors: CustomSliderColors(
                    trackColor: Colors.white,
                    progressBarColor: Colors.white,
                  ),
                ),
              ),

              // Logo (or text) in the center
              Image.asset(
                "img/logo.png",
                width: 100,
                height: 100,
                fit: BoxFit.contain,
              ),
              // Or replace with text for testing:
              // Text("LOGO", style: TextStyle(color: Colors.white, fontSize: 24)),
            ],
          ),
        ),
      ),
    );
  }
}
