import Image from "next/image"

export default function Products() {
    return (
        <div id="product" style={{ padding: '10%', color: '#fff', backgroundColor: '#000' }}>
            <h2 style={{ fontSize: '46px' }}>Products</h2>
            <div className="grid-container" style={{ padding: '3%' }}>
                <div className="grid-item" style={{ height: '65vh' }}>
                    <Image alt="sdk icon" width={100} height={100} src="/sdkicon.png" />
                    <p style={{ fontSize: '16px' }}>Server SDK for fingerprint recognition</p>
                    <h2 style={{ fontSize: '40px', fontWeight: 500, textDecoration: 'underline' }}>SDK</h2>
                    <p style={{ fontSize: '18px', fontWeight: 200, lineHeight: 1.55 }}>Detection, template extraction and matching (1:1, 1:N, M:N). Scans and photo images are supported.</p>
                </div>
                <div className="grid-item" style={{ height: '65vh' }}>
                    <Image alt="api icon" width={100} height={100} src="/apiicon.png" />
                    <p style={{ fontSize: '16px' }}>Server platform for fingerprint recognition</p>
                    <h2 style={{ fontSize: '40px', fontWeight: 500, textDecoration: 'underline' }}>REST API</h2>
                    <p style={{ fontSize: '18px', fontWeight: 200, lineHeight: 1.55 }}>Easy integration of biometric features, microservices architecture for system scaling and load balancing</p>
                </div>
                <div className="grid-item" style={{ height: '65vh' }}>
                    <Image alt="phone icon" width={100} height={100} src="/phone1.png" />
                    <p style={{ fontSize: '16px' }}>Fingers capture and recognition for mobile devices</p>
                    <h2 style={{ fontSize: '40px', fontWeight: 500, textDecoration: 'underline' }}>Mobile SDK</h2>
                    <p style={{ fontSize: '18px', fontWeight: 200, lineHeight: 1.55 }}>Touchless fingerprint acquisition and recognition with mobile phones (Android, iOS, web)</p>
                </div>
            </div>
        </div>
    )
}
