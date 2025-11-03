import { Component } from "@angular/core";

@Component({
    selector:'app-lists',
    templateUrl:'./lists.component.html',
    styleUrls:['./lists.component.scss']
})
export class ListsComponent{


// 1️⃣ Products
 productsText:string = 'Top 10 Popular Products You Can Buy Online';
  products:string[] = [
  'Laptop', 'Watch', 'Pen', 'Book', 'Mobile', 'Bag', 'Shoes', 'Tablet', 'Camera', 'Charger'
];

// 2️⃣ Fruits
 fruitsText:string = 'List of Delicious and Healthy Fruits';
  fruits:string[] = [
  'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Strawberry', 'Papaya', 'Watermelon', 'Kiwi'
];

// 3️⃣ Colors
 colorsText:string = '10 Common Colors Used in Design';
  colors:string[] = [
  'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Gray'
];

// 4️⃣ Cities
 citiesText:string = 'Top 10 Cities in India You Should Know About';
 cities:string[] = [
  'Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad', 'Bangalore', 'Kolkata', 'Surat', 'Jaipur', 'Indore'
];

// 5️⃣ Subjects
 subjectsText:string= '10 Important School Subjects for Students';
 subjects:string[]= [
  'Math', 'Science', 'English', 'History', 'Geography', 'Computer', 'Economics', 'Physics', 'Chemistry', 'Biology'
];

// 6️⃣ Vehicles
 vehiclesText:string = 'Different Types of Vehicles We Use Every Day';
 vehicles:string[] = [
  'Car', 'Bike', 'Scooter', 'Bus', 'Truck', 'Train', 'Bicycle', 'Boat', 'Helicopter', 'Airplane'
];

// 7️⃣ Animals
 animalsText:string = '10 Popular Animals Found Around the World';
 animals:string[]= [
  'Dog', 'Cat', 'Elephant', 'Tiger', 'Lion', 'Zebra', 'Horse', 'Deer', 'Monkey', 'Rabbit'
];

// 8️⃣ Sports
 sportsText:string = 'Most Popular Sports Played Globally';
sports:string[]= [
  'Cricket', 'Football', 'Tennis', 'Badminton', 'Hockey', 'Volleyball', 'Basketball', 'Baseball', 'Golf', 'Table Tennis'
];

// 9️⃣ Countries
 countriesText:string = '10 Famous Countries Across the World';
 countries:string[] = [
  'India', 'USA', 'Canada', 'Japan', 'Germany', 'France', 'Brazil', 'Australia', 'China', 'Italy'
];

// 🔟 Languages
 languagesText:string = 'Major Languages Spoken Across India';
 languages:string[]= [
  'English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Telugu', 'Bengali', 'Kannada', 'Punjabi', 'Malayalam'
];
}







