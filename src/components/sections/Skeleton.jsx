export default function Skeleton(){
    return(
        <div>
            {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-300 h-64 rounded-2xl"/>
            ))}
        </div>
    );
}