import "../../src/styles/landing-page/landing-page.css";
import teslaImage from "../assets/images/cars/tesla.jpg";
import toyotaImage from "../assets/images/cars/toyota.jpg";
import fordImage from "../assets/images/cars/ford_mustang.jpg";
import hondaImage from "../assets/images/cars/honda_civic.jpg";
import fordTruck from "../assets/images/cars/ford-truck.jpg";
import jeep from "../assets/images/cars/jeep.jpg";
import mercedez from "../assets/images/cars/mercedez.jpg";
import nissan from "../assets/images/cars/nissan.jpg";

import harleyImage from "../assets/images/motorcycles/harleyImage.png";
import nmaxImage from "../assets/images/motorcycles/nmax.jpg";
import hondaCbr from "../assets/images/motorcycles/hondaCbr.jpg";
import kawasakiImage from "../assets/images/motorcycles/kawasaki.jpg";
import ducatiImage from "../assets/images/motorcycles/ducati.jpg";

export const allCars = [
  {
    id: 1,
    vehicle_type: 'Car',
    condition: 'Used',
    type: "Sedan",
    make: "Tesla",
    model: "Model 3",
    price: 45000,
    monthlyPrice: 599,
    image: teslaImage,
  },
  {
    id: 2,
    vehicle_type: 'Car',
    condition: 'New',
    type: 'SUV',
    make: 'Toyota',
    model: 'RAV4',
    price: 1000000,
    monthlyPrice: 499,
    image: toyotaImage,
  },
  {
    id: 3,
    vehicle_type: 'Car',
    condition: 'New',
    type: "Coupe",
    make: "Ford",
    model: "Mustang",
    price: 35000,
    monthlyPrice: 499,
    image: fordImage,
  },
  {
    id: 4,
    vehicle_type: 'Car',
    condition: 'Used',
    type: "SUV",
    make: "Honda",
    model: "Civic",
    price: 22000,
    monthlyPrice: 299,
    image: hondaImage,
  },
  {
    id: 5,
    vehicle_type: 'Car',
    condition: 'Used',
    type: "SUV",
    make: "Jeep",
    model: "Wrangler",
    price: 30000,
    monthlyPrice: 450,
    image: jeep,
  },
  {
    id: 6,
    vehicle_type: 'Car',
    condition: 'New',
    type: "Pick-up Truck",
    make: "Ford",
    model: "F-150",
    price: 40000,
    monthlyPrice: 550,
    image: fordTruck,
  },
  
  // {
  //   id: 7,
  //   make: "Mercedez-Benz",
  //   model: "C250",
  //   type: "Coupe",
  //   price: 40000,
  //   monthlyPrice: 550,
  //   image: mercedez,
  // },
  // {
  //   id: 8,
  //   make: "Nissan",
  //   model: "R36",
  //   type: "Supercar",
  //   price: 1000001,
  //   monthlyPrice: 550,
  //   image: nissan,
  // },
  // {
  //   id: 9,
  //   make: "Nissan",
  //   model: "R36",
  //   type: "Supercar",
  //   price: 1000001,
  //   monthlyPrice: 550,
  //   image: nissan,
  // },
];

export const allMotorcycles = [
  {
    id: 1,
    vehicle_type: 'Motorcycle',
    condition: 'Used',
    type: "Cruiser",
    make: "Harley-Davidson",
    model: "Street 750",
    price: 7599,
    monthlyPrice: 150,
    image: harleyImage,
  },
  {
    id: 2,
    vehicle_type: 'Motorcycle',
    condition: 'New',
    type: "Scooters",
    make: "Yamaha",
    model: "NMax 155",
    price: 10000,
    monthlyPrice: 150,
    image: nmaxImage,
  },
  {
    id: 3,
    vehicle_type: 'Motorcycle',
    condition: 'New',
    type: "Sports Bike",
    make: "Honda",
    model: "CBR series",
    price: 7599,
    monthlyPrice: 150,
    image: hondaCbr,
  },
  {
    id: 4,
    vehicle_type: 'Motorcycle',
    condition: 'Used',
    type: "Sports Bike",
    make: "Kawasaki",
    model: "ZX25r",
    price: 7599,
    monthlyPrice: 150,
    image: kawasakiImage,
  },
  {
    id: 5,
    vehicle_type: 'Motorcycle',
    condition: 'New',
    type: "Sports Bike",
    make: "Ducati",
    model: "1299 Pinegali",
    price: 80000,
    monthlyPrice: 580,
    image: ducatiImage,
  },
];
