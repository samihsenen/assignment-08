"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import animalsData from "../data.json";
const AllAnimalsPage = () => {
    const [animals, setAnimals] = useState(animalsData);
    const [sortOrder, setSortOrder] = useState("");


    const handleSort = (order) => {
        setSortOrder(order);
        const sortedData = [...animals].sort((a, b) => {
            if (order === "lowToHigh") return a.price - b.price;
            if (order === "highToLow") return b.price - a.price;
            return 0;
        });
        setAnimals(sortedData);
    };

    return (
        <section className="py-12 bg-gray-50 min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-7xl mx-auto px-4">


                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-[#244D3F]">All Livestock</h1>
                        <p className="text-gray-500 mt-2">আমাদের সংগ্রহের সব সুস্থ ও সবল পশু এখান থেকে বেছে নিন</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="font-bold text-[#244D3F]">Sort By:</span>
                        <select
                            className="select select-bordered w-full max-w-[150px] rounded-full border-[#244D3F] focus:outline-none text-center py-0 h-10 min-h-10 flex items-center justify-center"
                            onChange={(e) => handleSort(e.target.value)}
                            value={sortOrder}
                        >
                            <option value="">Default</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {animals.map((pet) => (
                        <div key={pet.id} className="card bg-white shadow-sm hover:shadow-2xl transition-all duration-300 rounded-[40px] overflow-hidden border border-gray-100 group">

                            <figure className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={pet.image}
                                    alt={pet.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[#244D3F] font-bold shadow-sm">
                                    ৳ {pet.price.toLocaleString()}
                                </div>
                            </figure>


                            <div className="card-body p-8">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="card-title text-2xl font-bold text-[#244D3F]">{pet.name}</h2>
                                    <div className="badge bg-[#165741e6] text-[#f7f7f7] border-none font-bold p-3">
                                        {pet.category}
                                    </div>
                                </div>

                                <div className="space-y-2 mt-4 text-gray-600 font-medium">
                                    <div className="flex justify-between border-b border-dashed pb-2">
                                        <span>Breed:</span>
                                        <span className="text-[#2D231D]">{pet.breed}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed pb-2">
                                        <span>Weight:</span>
                                        <span className="text-[#2D231D]">{pet.weight} kg</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Location:</span>
                                        <span className="text-[#2D231D]">{pet.location}</span>
                                    </div>
                                </div>

                                <div className="card-actions mt-8">
                                    <Link
                                        href={`/animals/${pet.id}`}
                                        className="btn bg-[#244D3F] hover:bg-[#2D231D] text-white w-full rounded-full border-none transition-colors duration-300"
                                    >
                                        View Full Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllAnimalsPage;