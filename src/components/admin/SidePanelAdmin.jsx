import Link from "next/link";

export default function SidePanelAdmin(props){
    return(
        <div className="w-72 bg-[#1b120d] border-r border-[#3a2818] flex flex-col justify-between">
            <div>
                {/* Profile (Roof) */}
                <div className="p-8 border-b border-[#3a2818]">
                    <div className="w-14 h-14 rounded-full bg-[#c9a54c]/20 border border-[#c9a54c] flex items-center justify-center text-[#c9a54c] text-xl font-bold">
                        {props.name?.charAt(0)}
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-white">{props.name}</h2>
                    <p className="text-sm text-white/50">Administrator</p>
                </div>

                {/* Navigation (Floors) */}
                <nav className="flex flex-col p-4 gap-2">
                    <Link href="/admin" className="px-6 py-4 text-white/80 uppercase tracking-widest border border-transparent hover:border-[#c9a54c] hover:text-[#c9a54c] transition-all">
                        Dashboard
                    </Link>

                    <Link href="/admin/requests" className="px-6 py-4 text-white/80 uppercase tracking-widest border border-transparent hover:border-[#c9a54c] hover:text-[#c9a54c] transition-all">
                        Requests
                    </Link>

                    <Link href="/admin/activity-logs" className="px-6 py-4 text-white/80 uppercase tracking-widest border border-transparent hover:border-[#c9a54c] hover:text-[#c9a54c] transition-all">
                        Activity Logs
                    </Link>

                    <Link href="/admin/recycling-bin" className="px-6 py-4 text-white/80 uppercase tracking-widest border border-transparent hover:border-[#c9a54c] hover:text-[#c9a54c] transition-all">
                        Recycling Bin
                    </Link>
                </nav>
            </div>

            {/* Footer (Foundation) */}
            <div className="p-6 border-t border-[#3a2818]">
                <p className="text-xs tracking-widest text-white/40 uppercase">
                    City of Manila
                </p>
            </div>
        </div>
    );
}