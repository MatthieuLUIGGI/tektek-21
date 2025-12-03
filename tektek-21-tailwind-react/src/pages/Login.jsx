import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert("L'email est requis");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("L'email n'est pas valide");
            return;
        }

        if (!motDePasse.trim()) {
            alert("Le mot de passe est requis");
            return;
        }

        console.log("Email:", email);
        console.log("Mot de passe:", motDePasse);

        alert("Connexion réussie !");
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Connexion</h1>
                    <p className="text-gray-600">Accédez à votre compte TekTek-21</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <label className="flex flex-col">
                            <span className="text-gray-700 mb-2 font-medium">Email :</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="jean.dupont@exemple.fr"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-gray-700 mb-2 font-medium">Mot de passe :</span>
                            <input
                                type="password"
                                value={motDePasse}
                                onChange={(e) => setMotDePasse(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Votre mot de passe"
                            />
                        </label>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-gray-600">Se souvenir de moi</span>
                            </label>
                            <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                                Mot de passe oublié ?
                            </a>
                        </div>

                        <button type="submit" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                            Se connecter
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Vous n'avez pas de compte ?{" "}
                            <Link to="/signup" className="text-green-600 hover:text-green-700 font-medium">
                                S'inscrire
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
