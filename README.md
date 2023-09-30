# AR7_Mart
AR7 Mart is a front-end clone of an E-commerce website developed using React.js. To make it interactive, react-three-fiber the 3D model rendering library is used. Tailwind CSS is used as the CSS library.

# Here is the project live link: https://ar7mart.netlify.app


Anti-Cheat Exam App 🌟
An App that aims to stop cheating in online exams with the power of AI and ML, co-created with Samyak Sukhdeve

We also have a web version of the app with more features and better features, check that project here



Features and Interfaces
Login Page

Login with the provided user id and password
Powered by JWT tokens
Home page

Shows all the exams assigned to the user
The user can start an exam only on the correct timeslot
Logout through button in the app bar
Exam Page

The user can answer MCQ-based questions

The user can also view their progress

image

AI-powered face motion detector

We've used Google's on-device ml-kit to track the motion of the user's face.

We can check if a user is trying to cheat by monitoring the position of their face

image

Tech stack
Frontend
Flutter
MobX + Provider
Backend
Nodejs
Express
MongoDB
Frontend
Next.js (React)
TypeScript
Redux
Other Tools
Google's on-device ML Kit
Points to remember while testing the app
First setup the backend by following instructions in this repository
When testing on android emulator, if you get a connection error use http://10.0.2.2/ instead of localhost
iOS emulator doesn't support camera, this will give an error, use a real device to test AI features.
On real devices, make sure your PC and mobile are connected to same network, use network IP address instead of localhost
Don't forgot the PORT number
Allow permissions for camera and mic when asked
Make sure the BACKEND_URL is appended with /api
Instructions
Import the project through Android Studio or clone it
https://github.com/prathamesh-mutkure/anti-cheat-exam-app.git
Install flutter packages
flutter pub get
Generate store classes
flutter packages pub run build_runner build
Create a .env file and set the following variables
BACKEND_URL
Connect your device or emulator and run the app
flutter run
The app is now running
Useful Links
Project Demo for Web version

Mobile App (Android & iOS)

Backend Repository

Project Thesis (Submitted mobile app as final year project for my diploma)

