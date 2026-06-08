import Link from "next/link";

export default function SidePanelAdmin(){
    return(
        <div className="flex flex-col">
            <h2>This is a sidepanel</h2>
            <Link href={"admin/requests"}>Requests</Link>
        </div>
    );
}