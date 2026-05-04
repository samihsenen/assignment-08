'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.photoUrl || "", 
            
            callbackURL: '/auth/signin' 
        });

        if (error) {
            toast.error(error.message || "Registration failed!");
        } else {
            toast.success("Registration successful! Redirecting to login...");
            setTimeout(() => {
                router.push("/auth/signin");
            }, 2000);
        }
    };

    const handleGoogleLogin = async () => {
       
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/" 
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-[450px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
                <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Create Account</h2>
                <p className="text-slate-500 text-sm text-center mb-8">Join QurbaniHat today</p>
                
                <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1 text-left">Full Name</label>
                        <input required name="name" type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-black" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1 text-left">Email Address</label>
                        <input required name="email" type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-black" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1 text-left">Photo URL</label>
                        <input required name="photoUrl" type="url" placeholder="https://image-link.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-black" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1 text-left">Password</label>
                        <input required name="password" type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-black" />
                    </div>

                    <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg mt-4 transition-all">
                        Register Now
                    </button>
                </form>

                <div className="mt-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] flex-1 bg-slate-100"></div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Or Register With</span>
                        <div className="h-[1px] flex-1 bg-slate-100"></div>
                    </div>
                    
                    <button 
                        onClick={handleGoogleLogin}
                        className="w-full py-3 flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 font-semibold text-slate-700 transition-all shadow-sm"
                    >
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="google" />
                        Continue with Google
                    </button>
                </div>

                <p className="text-center mt-8 text-slate-500 text-sm">
                    Already have an account? <a href="/auth/signin" className="text-blue-600 font-bold hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;