import Image from "next/image"

export default function Advantages() {
    return (
        <div id="advantages" style={{ padding: '4% 10%', color: 'white', background: '#8145c2' }}>
            <h2 style={{ fontSize: '52px', fontWeight: 600 }}>Advantages</h2>
            <div className="grid-container" style={{ padding: '3%' }}>
                <div className="grid-item" style={{ height: '40vh' }}>
                    <Image alt="rocket" width={50} height={50} src="/rocket.png" color="white" />
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>Superior accuracy</p>
                    <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.55 }}>Neural network based technology provides extremely high recognition accuracy for verification and identification</p>
                </div>
                <div className="grid-item" style={{ height: '40vh' }}>
                    <Image alt="fingerprint" width={50} height={50} src="/fingerprint.png" />
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>All types of fingerprints</p>
                    <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.55 }}>Processing of photo images and standard scans (flats, rolls, latents) with one technology creating templates compatible between each other</p>
                </div>
                <div className="grid-item" style={{ height: '40vh' }}>
                    <Image alt="template1" width={50} height={50} src="/template1.png" />
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>Fixed size of biometric template</p>
                    <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.55 }}>Fingerprint biometric templates always have standard size - 512 bytes regardless of fingerprint or image type</p>
                </div>
                <div className="grid-item" style={{ height: '40vh' }}>
                    <Image alt="flash" width={50} height={50} src="/flash.png" />
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>High matching speed</p>
                    <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.55 }}>Matching performance is 100+ million matches per 1 s on one modern CPU and up to 1 billion matches per 1 s using batch mode or GPU</p>
                </div>
                <div className="grid-item" style={{ height: '40vh' }}>
                    <Image alt="dpi" width={50} height={50} src="/dpi.png" />
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>DPI tolerant technology</p>
                    <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.55 }}>Algorithm works with images or scans from 250 dpi and higher and doesn&apos;t require exact DPI values (for example, exactly 500 dpi)</p>
                </div>
                <div className="grid-item" style={{ height: '40vh' }}>
                    <Image alt="accuracy" width={50} height={50} src="/accuracy.png" />
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>Identification with the highest confidence</p>
                    <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.55 }}>By capturing of 4 fingers at once with our mobile SDK you can guarantee almost 100% reliable and user-friendly identification</p>
                </div>
            </div>
        </div>
    )
}
