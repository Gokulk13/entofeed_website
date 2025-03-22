import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const products = [
  {
    title: "Live BSFL",
    description: "Fresh larvae ideal for reptiles, birds, and fish",
    benefits: ["High protein content", "Rich in essential nutrients", "Highly digestible"],
    image: "/lovable-uploads/Live_BSFL.webp"
  },
  {
    title: "Whole Dried BSFL",
    description: "Sun-dried larvae suitable for chickens, fishes, and pets",
    benefits: ["Long shelf life", "Easy to store", "Concentrated nutrition"],
    image: "public/lovable-uploads/Dried_BSFL.webp"
  },
  {
    title: "BSFL Oil",
    description: "Nutrient-rich oil extracted from Black Soldier Fly larvae.",
    benefits: ["Rich nutrition", "Versatile use", "Sustainable source"],
    image: "public/lovable-uploads/BSFL_Oil.webp"
  },
  {
    title: "Puffed BSFL",
    description: "Crispy larvae snacks for pet birds, reptiles, and fancy fishes",
    benefits: ["Highly palatable", "Lightweight", "Perfect for treats"],
    image: "public/lovable-uploads/Puffed_BSFL.webp"
  },
  {
    title: "BSFL Pellets",
    description: "Broken dried larvae for chicks and small birds",
    benefits: ["Easy to consume", "No waste", "Ideal for small species"],
    image: "public/lovable-uploads/BSFL_Pellet.webp"
  },
  {
    title: "BSFL Meal",
    description: "Defatted larvae powder as a protein-rich feed ingredient",
    benefits: ["Consistent quality", "Easily mixed", "High protein concentration"],
    image: "public/lovable-uploads/BSFL_Meal.webp"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-all">
              <CardHeader>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-600">{benefit}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to={`/product/${index}`} className="w-full">
                  <Button 
                    className="w-full bg-[#4daf4e] hover:bg-[#3d8c3e] text-white"
                  >
                    Buy Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
