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
    make: "Tesla",
    model: "Model 3",
    type: "Sedan",
    price: 45000,
    monthlyPrice: 599,
    image: teslaImage,
  },
  {
    id: 2,
    make: "Toyota",
    model: "Camry",
    type: "Sedan",
    price: 25000,
    monthlyPrice: 349,
    image: toyotaImage,
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    type: "Coupe",
    price: 35000,
    monthlyPrice: 499,
    image: fordImage,
  },
  {
    id: 4,
    make: "Honda",
    model: "Civic",
    type: "SUV",
    price: 22000,
    monthlyPrice: 299,
    image: hondaImage,
  },
  {
    id: 5,
    make: "Jeep",
    model: "Wrangler",
    type: "SUV",
    price: 30000,
    monthlyPrice: 450,
    image: jeep,
  },
  {
    id: 6,
    make: "Ford",
    model: "F-150",
    type: "Truck",
    price: 40000,
    monthlyPrice: 550,
    image: fordTruck,
  },
  {
    id: 7,
    make: "Mercedez-Benz",
    model: "C250",
    type: "Coupe",
    price: 40000,
    monthlyPrice: 550,
    image: mercedez,
  },
  {
    id: 8,
    make: "Nissan",
    model: "R36",
    type: "Supercar",
    price: 1000001,
    monthlyPrice: 550,
    image: nissan,
  },
  {
    id: 9,
    make: "Nissan",
    model: "R36",
    type: "Supercar",
    price: 1000001,
    monthlyPrice: 550,
    image: nissan,
  },
];

export const allMotorcycles = [
  {
    id: 1,
    make: "Harley-Davidson",
    model: "Street 750",
    type: "Cruiser",
    price: 7599,
    monthlyPrice: 150,
    image: harleyImage,
  },
  {
    id: 2,
    make: "Yamaha",
    model: "NMax 155",
    type: "Scooters",
    price: 10000,
    monthlyPrice: 150,
    image: nmaxImage,
  },
  {
    id: 3,
    make: "Honda",
    model: "CBR series",
    type: "Sports Bike",
    price: 7599,
    monthlyPrice: 150,
    image: hondaCbr,
  },
  {
    id: 4,
    make: "Kawasaki",
    model: "ZX25r",
    type: "Sports Bike",
    price: 7599,
    monthlyPrice: 150,
    image: kawasakiImage,
  },
  {
    id: 5,
    make: "Ducati",
    model: "1299 Pinegali",
    type: "Sports Bike",
    price: 80000,
    monthlyPrice: 580,
    image: ducatiImage,
  },
];
