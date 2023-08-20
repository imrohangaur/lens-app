import Image from "next/image"

export default function Markets() {
    return (
        <div id="markets" style={{ padding: '10%', color: '#8145c2', backgroundColor: 'black' }}>
            <h2 style={{ fontSize: '52px', fontWeight: 600, color: 'white' }}>Markets</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', margin: '2% 0' }}>
                <div className="marketsize">
                    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '3%' }}>National ID</h2>
                    <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.55, color: 'white' }}>National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a &quot;must-have&quot; biometric modality in such systems&colon; it&apos;s reliable, unique for any individuals including identical twins and changes less over time than face.<br />
                        Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customer&apos;s budget&colon; numbers of
                        required matching servers is up to 100 times less than the same numbers for &quot;traditional&quot; recognition algorithms.</p>
                </div>
                <div>
                    <Image alt="id_sm" width={1000} height={821} sizes="150vw" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)' }} src="/id_sm.png" />
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'space-between', alignItems: 'center', margin: '3% 0' }}>
                <div>
                    <Image alt="bank_sm" width={1000} height={837} sizes="150vw" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)' }} src="/bank_sm.png" />
                </div>
                <div className="marketsize">
                    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '3%' }}>Banks</h2>
                    <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.55, color: 'white' }}>Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer&apos;s identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn&apos;t require memorizing.<br />
                        Our technologies unlock fingerprint recognition for user&apos;s online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', margin: '3% 0' }}>
                <div className="marketsize">
                    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '3%' }}>Governmental services</h2>
                    <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.55, color: 'white' }}>Biometric identification and verification expedite and secure providing of digital governmental services. Its especially convenient for elder citizens, who often have difficulties with online authorization and memorizing lot of different passwords, which stops them from using digital services.
                        Fingerprint recognition provides high accuracy of identification, especially when several fingers are used. It contains different biometric data and reliability of recognition is increasing not several times, but by orders of magnitude.<br />
                        Our technologies allow to acquire fingerprints by a scanner and a phone with compatible templates, as well as to use fingerprints acquired by a phone and converted to standard format (WSQ) in legacy systems.</p>
                </div>
                <div>
                    <Image alt="gov_sm" width={1000} height={848} sizes="150vw" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)' }} src="/gov_sm.png" />
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'space-between', alignItems: 'center', margin: '3% 0' }}>
                <div>
                    <Image alt="police_sm" width={1000} height={829} sizes="150vw" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)' }} src="/police_sm.png" />
                </div>
                <div className="marketsize">
                    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '3%' }}>Police and migration</h2>
                    <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.55, color: 'white' }}>Our algorithms demonstrate superior accuracy of neural networks working with national scale databases of tens or hundreds of millions individuals. Specially trained algorithms of detection and segmentation allow to automatically process fingerprint cards, segmenting flat and roll fingerprints of different quality, checking right/left hands and finger positions.<br />
                        Mobile finger acquisition opens new possibilities for law enforcement, making fingerprint recognition possible without a scanner, but with an ordinary mobile phone. Our technologies can not just capture, but also run fingerprints against a database stored locally on a phone. It makes a check against relatively small databases (less than 10,000-100,000 fingers) fast and fully mobile - it requires only phone application instead of expensive mobile biometric terminals.</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', margin: '3% 0' }}>
                <div className="marketsize">
                    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '3%' }}>Forensics</h2>
                    <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.55, color: 'white' }}>Quality of latents collected from a crime scene is usually far away from ideal: its &quot;dirty&quot;, partial, with artifacts. In many cases forensic experts should process it manually.
                        Unlike &quot;traditional&quot; algorithms, neural networks can identify even partial fingerprints automatically. Furthermore, ability of machine algorithms to recognize complicated patterns surpasses human&apos;s, so the algorithm can automatically find list of candidates and human can validate it manually.
                        Our SDK also have detection and segmentation algorithms for processing fingerprint cards and all types of fingerprints on it automatically.</p>
                </div>
                <div>
                    <Image alt="forensic_sm" width={1000} height={830} sizes="150vw" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)' }} src="/forensic_sm.png" />
                </div>
            </div>
        </div>
    )
}
