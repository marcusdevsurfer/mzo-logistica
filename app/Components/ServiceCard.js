export default function ServiceCard({ service }) {
    const { title, description } = service;
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-2xl text-gray-900 font-display" >{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    )
}