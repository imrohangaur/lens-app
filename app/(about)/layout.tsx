export default function About() {
    return (
        <div id="about" className="about-bg">
            <div className="artboard">
                <div className="card">
                    <div className="card__side card__side--back">
                        <div className="card__details">
                            <p style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.55, color: 'white', textAlign: 'left' }}>Neurodactyl is a technology start-up founded in 2023 by specialists in machine vision and deep learning technologies. We have vast experience on biometric markets and have been working with different biometric technologies starting from 2014, when neural network based facial recognition technologies have completely changed the market. Today we are focused on creating cutting edge algorithms in fingerprint recognition, striving to bring a new life and power of new mobile technologies to the market of old-school biometrics.
                                <br />
                                We aim to make identification powered by biometrics convenient, easy and reliable and help to protect personal and financial data in new digital reality.
                                <br />
                                Besides fingerprint recognition our R&D team also doing research in other biometrics like face, voice and iris.</p>
                        </div>
                    </div>
                    <div className="card__side card__side--front">
                        <div className="card__theme">
                            <div className="card__theme-box">
                                <p className="card__title">About us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
