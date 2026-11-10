export default function ServiceCard({ service }) {
    const { title, icon } = service;
    return (
        <div className="p-8 rounded-4xl bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300">
            {icon && (
                <div className="mb-4 flex justify-center">
                    <img
                        src={icon}
                        alt={title}
                        className="w-20 h-20 hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <h3 className="text-xl text-black font-roboto text-center font-semibold">{title}</h3>
        </div>
    )
}