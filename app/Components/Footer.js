import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <Image
            className="object-cover w-full h-full"
                src="/footer.jpeg"
                alt="Logo"
                width={256}
                height={256}
            />

        </footer>
    )
}