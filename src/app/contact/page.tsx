export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-glitch text-4xl font-bold uppercase tracking-wider mb-8" data-text="CONTATO">
                    CONTATO
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                    Você não nos contacta. Se o seu problema for... único... um sinal será enviado. Sintonize a frequência morta da sua televisão à meia-noite. Ouça o chiado entre as estações de rádio. Se for digno, a chamada será completada.
                </p>
                <p className="text-accent font-mono text-sm animate-pulse">
                    [ERR: PROTOCOL_NOT_FOUND]
                </p>
                 <p className="text-lg text-foreground/80 leading-relaxed">
                    Não tente nos ligar de novo.
                </p>
            </div>
        </div>
    );
}
