'use client';

import { createClient } from "@/utils/supabase/client";
export default function DropdownFilter(props){
    const supabase = createClient();

    const categorySelection = async (event) => {
        let query = supabase
            .from("categories")
            .select("*")
        
        if(event.target.value  !== "all"){
            query = query.eq("parent_id", event.target.value);
        }else{
            query = query.is("parent_id", null);
        }
        
        const { data } = await query;
        //Assigning to state
        if(data){
            props.subCatFilter(data);
        }
    }

    const subCategorySelection = async (event) => {
        //NOTE : ID NUNG SUBCATEGORY NAPUPUNTA DITO
        //Initial query
        let query = supabase
        .from("items")
        .select("*")
        
        if(event.target.value !== "all"){
            query = query.eq("category_id", event.target.value);
        }else{
            //Takes all of the NECESSARY SUBCATEGORIES based on the root category
            //takes the root category
            let { data : categoryData } = await supabase
                .from("categories")
                .select("parent_id")
                .eq("id", `${event.target.value}`)
                .single();
            //takes all the subcategories associated with the root
            //array of objects
            let { data : subcategoryData } = await supabase
                .from("categories")
                .select("*")
                .eq("id", categoryData.parent_id)
            
                //map ng bawat id na merong corresponding nung parent id
            query = query.in("category_id", subcategoryData.map((element) => element.id));
        }
        
        const { data : itemData} = await query;
        //Assigning to state
        if(itemData){
            props.settingImages(itemData)
        }
    }
    
    return(
        <div className="flex">
            <select className="text-white p-4 m-4" onChange={categorySelection}>
                <option value="all" className="bg-(--ink)">All</option>
                {
                    props.filterCat && props.filterCat.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-(--ink)">{(cat.category_title) ? (cat.category_title) : "Loading..."}</option>
                    ))
                }
            </select>
            <select className="text-white p-4 m-4" onChange={subCategorySelection}>
                <option value="all" className="bg-(--ink)">All</option>
                {
                    props.filterSubCat && props.filterSubCat.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-(--ink)">{(cat.category_title) ? (cat.category_title) : "Loading..."}</option>
                    ))
                }
            </select>
        </div>
    );
}