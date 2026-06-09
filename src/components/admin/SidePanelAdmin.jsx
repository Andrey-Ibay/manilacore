import Link from "next/link";

export default function SidePanelAdmin(props){
    return(
        <div className="flex flex-col">
            <h2>{props.name}</h2>
            <Link href={"/admin"}>Dashboard</Link>
            <Link href={"/admin/requests"}>Requests</Link>
            <Link href={"/admin/activity-logs"}>Activity Logs</Link>
            <Link href={"/admin/recycling-bin"}>Recycling Bin</Link>
        </div>
    );
}