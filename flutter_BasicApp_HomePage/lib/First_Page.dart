import 'package:flutter/material.dart';
import 'package:flutter_app/Home_Page.dart';
import 'package:flutter_app/Profile_Page.dart';
import 'package:flutter_app/Portfolio_Page.dart';
//import 'package:flutter_app/Second_Page.dart';

class FirstPage extends StatefulWidget {
  const FirstPage({super.key});

  @override
  State<FirstPage> createState() => _FirstPageState();
}

class _FirstPageState extends State<FirstPage> {
  // this keeps track of the current page to display
  int _selectedIndex = 0;

void _navigateBottomBar(int index) {
  setState(() {
    _selectedIndex = index;
  });
}


  // the pages we have in our app
  final List _pages = [
    // homepage
    HomePage(),

    // investmentpage
    PortfolioPage(),

    // profilepage
    ProfilePage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("1st Page")),
      body: _pages[_selectedIndex], // dynamically changes the body based on selected index
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _navigateBottomBar,
        items: [
          // home
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ), // BottomNavigationBarItem

          // profile
          BottomNavigationBarItem(
            icon: Icon(Icons.account_balance),
            label: 'Investment',
          ), // BottomNavigationBarItem

          // settings
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ), // BottomNavigationBarItem
        ],
      ),
    );
  }
}


