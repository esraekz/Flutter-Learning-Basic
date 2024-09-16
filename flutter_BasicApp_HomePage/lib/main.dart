import 'package:flutter/material.dart';
import 'package:flutter_app/First_Page.dart';
import 'package:flutter_app/Home_Page.dart';
import 'package:flutter_app/Settings_Page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: FirstPage(),
      routes: {
        '/firstpage': (context) => FirstPage(),
        '/homepage': (context) => HomePage(),
        '/settingspage': (context) => SettingsPage(),
      }
    );
  }
}
