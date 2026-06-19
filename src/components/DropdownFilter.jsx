'use client';

import { useState } from "react"; // Added useState to track the selected root category
import { createClient } from "@/utils/supabase/client";

export default function DropdownFilter(props){
    const supabase = createClient();
    // Keep track of the currently selected parent category ID
    const [selectedRootId, setSelectedRootId] = useState("all");

    const categorySelection = async (event) => {
        const rootId = event.target.value;
        setSelectedRootId(rootId); // Save it for later use in subCategorySelection

        let query = supabase
            .from("categories")
            .select("*");
        
        if (rootId !== "all") {
            query = query.eq("parent_id", rootId);
        } else {
            query = query.is("parent_id", null);
        }
        
        const { data } = await query;
        if (data) {
            props.subCatFilter(data);
        }
    };

    const subCategorySelection = async (event) => {
        const subCatValue = event.target.value;
        
        let query = supabase
            .from("items")
            .select("*");
        
        if (subCatValue !== "all") {
            // User selected a specific subcategory
            query = query.eq("category_id", subCatValue);
        } else {
            // User selected "All" subcategories under the current root category
            if (selectedRootId === "all") {
               
                const { data: allSubCats } = await supabase
                    .from("categories")
                    .select("id")
                    .not("parent_id", "is", null);
                
                const subIds = allSubCats ? allSubCats.map(item => item.id) : [];
                query = query.in("category_id", subIds);
            } else {
                // 1. Get all subcategory IDs that belong to the currently active root category
                let { data: subcategoryData } = await supabase
                    .from("categories")
                    .select("id")
                    .eq("parent_id", selectedRootId);
                
                if (subcategoryData && subcategoryData.length > 0) {
                    // 2. Map those objects into an array of primitive IDs: [1, 2, 3]
                    const subCategoryIds = subcategoryData.map((element) => element.id);
                    query = query.in("category_id", subCategoryIds);
                } else {
                    // Fallback if the root category has no subcategories
                    props.settingImages([]);
                    return;
                }
            }
        }
        
        const { data: itemData } = await query;
        if (itemData) {
            props.settingImages(itemData);
        }
    };
    
    return (
        <div className="flex">
            <select className="text-white p-4 m-4" onChange={categorySelection}>
                <option value="all" className="bg-(--ink)">All</option>
                {
                    props.filterCat && props.filterCat.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-(--ink)">
                            {cat.category_title ? cat.category_title : "Loading..."}
                        </option>
                    ))
                }
            </select>
            <select className="text-white p-4 m-4" onChange={subCategorySelection}>
                <option value="all" className="bg-(--ink)">All</option>
                {
                    props.filterSubCat && props.filterSubCat.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-(--ink)">
                            {cat.category_title ? cat.category_title : "Loading..."}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}