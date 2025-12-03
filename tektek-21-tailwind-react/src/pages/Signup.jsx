import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nom.trim()) {
            alert("Le nom est requis");
            return;
        }

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

        if (motDePasse.length < 8) {
            alert("Le mot de passe doit contenir au moins 8 caractères");
            return;
        }

        if (!confirmationMotDePasse.trim()) {
            alert("La confirmation du mot de passe est requise");
            return;
        }

        if (motDePasse !== confirmationMotDePasse) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        console.log("Nom:", nom);
        console.log("Email:", email);
        console.log("Mot de passe:", motDePasse);

        alert("Inscription réussie !");
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Inscription</h1>
                    <p className="text-gray-600">Créez votre compte TekTek-21</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <label className="flex flex-col">
                            <span className="text-gray-700 mb-2 font-medium">Nom complet :</span>
                            <input
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Jean Dupont"
                            />
                        </label>

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
                                placeholder="Minimum 8 caractères"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-gray-700 mb-2 font-medium">Confirmer le mot de passe :</span>
                            <input
                                type="password"
                                value={confirmationMotDePasse}
                                onChange={(e) => setConfirmationMotDePasse(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Confirmez votre mot de passe"
                            />
                        </label>

                        <button type="submit" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                            S'inscrire
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Vous avez déjà un compte ?{" "}
                            <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
