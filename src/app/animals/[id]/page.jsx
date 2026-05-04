'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast"; 
import animalsData from "../../data.json"; 

const AnimalDetails = ({ params }) => {
    const unwrappedParams = React.use(params);
    const id = unwrappedParams.id;

    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const [animal, setAnimal] = useState(null);

    
    useEffect(() => {
        if (!isPending && !session) {
            router.push("/auth/signin"); 
        }
    }, [session, isPending, router]);

    
    useEffect(() => {
        if (id) {
            const found = animalsData.find(a => a.id === parseInt(id));
            setAnimal(found);
        }
    }, [id]);

    
    const handleBooking = (e) => {
        e.preventDefault();
        toast.success("Success! Your livestock booking has been placed.", {
            duration: 4000,
            position: 'top-center',
            style: {
                borderRadius: '10px',
                background: '#244D3F', 
                color: '#fff',
            },
        }); 
        e.target.reset(); 
    };

    
    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!animal) {
        return <div className="text-center mt-20 font-bold text-red-500 text-xl font-sans">Animal not found!</div>;
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
            <Toaster /> 
            <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                
                
                <div className="md:w-1/2 h-[450px] md:h-auto relative">
                    <img 
                        src={animal.image} 
                        alt={animal.name} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full font-bold text-[#244D3F] shadow-sm text-sm tracking-wide">
                        {animal.category}
                    </div>
                </div>

               
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-3 tracking-tight">{animal.name}</h1>
                    <p className="text-[#244D3F] font-black text-3xl mb-8">৳ {animal.price.toLocaleString()}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-slate-50 p-5 rounded-[1.5rem] border border-slate-100 font-sans">
                            <p className="text-slate-400 text-[10px] uppercase font-black tracking-[0.15em] mb-1">Weight</p>
                            <p className="font-bold text-slate-800 text-lg">{animal.weight} KG</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-[1.5rem] border border-slate-100 font-sans">
                            <p className="text-slate-400 text-[10px] uppercase font-black tracking-[0.15em] mb-1">Breed</p>
                            <p className="font-bold text-slate-800 text-lg">{animal.breed}</p>
                        </div>
                    </div>

                    <div className="mb-10 text-slate-600 leading-relaxed text-lg font-sans">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Description</h4>
                        <p>{animal.description}</p>
                    </div>

                    <div className="h-[1px] bg-slate-100 mb-10"></div>

                  
                    <form onSubmit={handleBooking} className="flex flex-col gap-5">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 font-sans">Livestock Booking</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            <input required type="text" placeholder="Full Name" 
                                className="w-full p-4 bg-white border border-slate-400 rounded-2xl outline-none focus:border-[#244D3F] focus:ring-4 focus:ring-[#244D3F]/10 transition-all text-slate-800 placeholder:text-slate-400 font-sans" />
                            
                            <input required type="email" placeholder="Email Address" 
                                className="w-full p-4 bg-white border border-slate-400 rounded-2xl outline-none focus:border-[#244D3F] focus:ring-4 focus:ring-[#244D3F]/10 transition-all text-slate-800 placeholder:text-slate-400 font-sans" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input required type="tel" placeholder="Phone Number" 
                                className="w-full p-4 bg-white border border-slate-400 rounded-2xl outline-none focus:border-[#244D3F] focus:ring-4 focus:ring-[#244D3F]/10 transition-all text-slate-800 placeholder:text-slate-400 font-sans" />
                            
                            <input required type="text" placeholder="Delivery Address" 
                                className="w-full p-4 bg-white border border-slate-400 rounded-2xl outline-none focus:border-[#244D3F] focus:ring-4 focus:ring-[#244D3F]/10 transition-all text-slate-800 placeholder:text-slate-400 font-sans" />
                        </div>
                        
                        <button type="submit" 
                            className="w-full py-5 bg-[#244D3F] hover:opacity-90 text-white font-bold rounded-2xl shadow-xl shadow-[#244D3F]/20 active:scale-[0.98] transition-all duration-200 mt-2 font-sans">
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetails;