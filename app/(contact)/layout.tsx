export default function Contact() {
    return (
        <div id="contact" style={{ padding: '8% 10% 0 10%', color: 'white', background: '#000', textAlign: 'center' }}>
            <h2 style={{ fontSize: '52px', fontWeight: 600 }}>Contact Us</h2>
            <br />
            <p>Any question about our products or technologies? Just text us!</p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Phone" />
                <textarea style={{ background: 'rgba(232, 232, 232, 0.25)' }} placeholder="Your Message"></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
