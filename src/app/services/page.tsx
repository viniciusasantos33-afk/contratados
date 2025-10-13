export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-glitch text-4xl font-bold uppercase tracking-wider mb-8" data-text="SERVIÇOS">
                    SERVIÇOS
                </h1>
                <div className="text-left space-y-4 text-lg text-foreground/80">
                    <p>Oferecemos soluções para problemas que não deveriam existir.</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 border-l-2 border-accent">
                        <li>Extração de entidades de hardware legado.</li>
                        <li>Contenção de anomalias de dados.</li>
                        <li>Recuperação de almas de redes neurais corrompidas.</li>
                        <li>Desmagnetização de artefatos assombrados.</li>
                        <li>Consultoria em segurança existencial.</li>
                    </ul>
                    <p>O pagamento é comensurável ao risco. Todas as operações são finais.</p>
                </div>
            </div>
        </div>
    );
}
