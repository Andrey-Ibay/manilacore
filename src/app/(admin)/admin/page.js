import SidePanelAdmin from "@/components/admin/SidePanelAdmin";

export default function AdminPage(){
    return(
        <div className="flex">
            <SidePanelAdmin />
            <h1>
                This is admin page.
            </h1>
        </div>
    );
}