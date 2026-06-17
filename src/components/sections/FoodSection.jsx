"use client";

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import FoodCard from "@/components/components_function/foodCard";

const FoodSection = ({ setToggleFullDetails, setDetailSlide, setFullData }) => {
  const [foodTab, setFoodTab] = useState("Dishes");

  /* Dishes Information */
  const dishes = [
    {
      title: "Mami",
      subtitle: "Soup — Noodle Soup",
      description: "A comforting Filipino noodle soup made with a savory meat broth, cabbage, and boiled eggs.",
      image: "bg-[url('/assets/foods_img/dishes/mami.png')]"
    },
    {
      title: "Beef Pares",
      subtitle: "Ulam — Braised",
      description: "Tender braised beef brisket cooked in a sweet, star anise-infused soy sauce broth.",
      image: "bg-[url('/assets/foods_img/dishes/beef_pares.png')]"
    },
    {
      title: "Kare-Kare",
      subtitle: "Ulam — Peanut Stew",
      description: "A rich stew featuring oxtail and vegetables cooked in a thick, savory peanut sauce.",
      image: "bg-[url('/assets/foods_img/dishes/kare_kare.png')]"
    },
    {
      title: "Arroz Caldo",
      subtitle: "Soup — Rice Porridge",
      description: "A hearty ginger-infused chicken rice porridge topped with toasted garlic and scallions.",
      image: "bg-[url('/assets/foods_img/dishes/arroz_caldo.png')]"
    },
    {
      title: "Sinigang",
      subtitle: "Ulam — Sour Soup",
      description: "A classic Filipino soup known for its distinctively sour broth infused with tamarind and filled with vegetables.",
      image: "bg-[url('/assets/foods_img/dishes/sinigang.png')]"
    },
    {
      title: "Adobo",
      subtitle: "Ulam — Vinegar & Soy Stew",
      description: "Meat marinated and simmered in a savory tang of soy sauce, vinegar, garlic, and peppercorns.",
      image: "bg-[url('/assets/foods_img/dishes/adobo.png')]"
    },
    {
      title: "Tinola",
      subtitle: "Ulam — Ginger Broth",
      description: "A refreshing chicken soup cooked with green papaya, chili leaves, and a ginger-flavored broth.",
      image: "bg-[url('/assets/foods_img/dishes/tinola.png')]"
    },
    {
      title: "Dinuguan",
      subtitle: "Ulam — Savory Stew",
      description: "A rich, dark stew made of pork offal simmered in a savory, spiced pig's blood gravy.",
      image: "bg-[url('/assets/foods_img/dishes/dinuguan.png')]"
    }
  ];

  /* Street Foods Information */
  const streetFoods = [
    {
      title: "Kwek-Kwek",
      subtitle: "Street Food — Deep-Fried",
      description: "Hard-boiled quail eggs coated in an orange batter and deep-fried until crispy.",
      image: "bg-[url('/assets/foods_img/street_foods/kwek_kwek.png')]"
    },
    {
      title: "Isaw",
      subtitle: "Street Food — Grilled Skewer",
      description: "Popular street-style grilled chicken or pork intestines heavily marinated and served on skewers.",
      image: "bg-[url('/assets/foods_img/street_foods/isaw.png')]"
    },
    {
      title: "Balut",
      subtitle: "Street Food — Boiled Egg",
      description: "A fertilized duck egg with a nearly-developed embryo, boiled and eaten right out of the shell.",
      image: "bg-[url('/assets/foods_img/street_foods/balut.png')]"
    },
    {
      title: "Fishball",
      subtitle: "Street Food — Deep-Fried",
      description: "Fried skewered round fish paste snacks typically dipped in sweet, sour, or spicy sauces.",
      image: "bg-[url('/assets/foods_img/street_foods/fishball.png')]"
    },
    {
      title: "Banana Cue",
      subtitle: "Street Food — Sweet Snack",
      description: "Deep-fried Saba bananas coated in caramelized brown sugar and served on a bamboo stick.",
      image: "bg-[url('/assets/foods_img/street_foods/banana_que.png')]"
    },
    {
      title: "Kikiam",
      subtitle: "Street Food — Deep-Fried",
      description: "A savory, brown-hued seasoned ground pork and minced vegetable log wrapped in bean curd skin.",
      image: "bg-[url('/assets/foods_img/street_foods/kikiam.png')]"
    },
    {
      title: "Betamax",
      subtitle: "Street Food — Grilled Skewer",
      description: "Barbecued blocks of solidified chicken or pork blood named after the classic video tapes.",
      image: "bg-[url('/assets/foods_img/street_foods/betamax.png')]"
    },
    {
      title: "Calamares",
      subtitle: "Street Food — Deep-Fried",
      description: "Deep-fried, heavily-battered squid rings commonly sold as a crunchy street side treat.",
      image: "bg-[url('/assets/foods_img/street_foods/calamares.png')]"
    }
  ];

  /* Desserts Information */
  const desserts = [
    {
      title: "Halo-Halo",
      subtitle: "Dessert — Shaved Ice",
      description: "A popular layered dessert made of crushed ice, evaporated milk, and various sweet ingredients like ube and leche flan.",
      image: "bg-[url('/assets/foods_img/desserts/halo_halo.png')]"
    },
    {
      title: "Leche Flan",
      subtitle: "Dessert — Custard",
      description: "A rich, creamy caramel custard dessert made from egg yolks, condensed milk, and evaporated milk.",
      image: "bg-[url('/assets/foods_img/desserts/leche_flan.png')]"
    },
    {
      title: "Bibingka",
      subtitle: "Dessert — Rice Cake",
      description: "A traditional baked Christmas rice cake made with coconut milk and topped with salted egg and cheese.",
      image: "bg-[url('/assets/foods_img/desserts/bibingka.png')]"
    },
    {
      title: "Puto Bumbong",
      subtitle: "Dessert — Rice Cake",
      description: "A purple steamed glutinous rice snack cooked in bamboo tubes and topped with butter, sugar, and grated coconut.",
      image: "bg-[url('/assets/foods_img/desserts/puto_bumbong.png')]"
    },
    {
      title: "Turon",
      subtitle: "Dessert — Fried Snack",
      description: "Deep-fried saba banana and jackfruit slices wrapped in a spring roll wrapper and coated with caramelized sugar.",
      image: "bg-[url('/assets/foods_img/desserts/turon.png')]"
    },
    {
      title: "Taho",
      subtitle: "Dessert — Sweet Tofu",
      description: "A warm comforting snack made of fresh silken tofu, sweet arnibal syrup, and chewy sago pearls.",
      image: "bg-[url('/assets/foods_img/desserts/taho.png')]"
    },
    {
      title: "Biko",
      subtitle: "Dessert — Rice Cake",
      description: "A sweet sticky rice cake made with coconut milk and brown sugar, topped with toasted coconut curds.",
      image: "bg-[url('/assets/foods_img/desserts/biko.png')]"
    },
    {
      title: "Sapin-Sapin",
      subtitle: "Dessert — Rice Cake",
      description: "A vibrant, multi-layered glutinous rice and coconut milk cake featuring distinct flavors in every color.",
      image: "bg-[url('/assets/foods_img/desserts/sapin_sapin.png')]"
    }
  ];

  /* Beverages Information */
  const beverages = [
    {
      title: "Palamig",
      subtitle: "Beverage — Sweet Refreshment",
      description: "A generic term for sweet, chilled street side drinks commonly infused with various local fruit extracts and syrups.",
      image: "bg-[url('/assets/foods_img/beverages/palamig.png')]"
    },
    {
      title: "Kapeng Barako",
      subtitle: "Beverage — Coffee",
      description: "A strong, pungent, and full-bodied coffee brewed from Liberica beans grown in Batangas and Cavite.",
      image: "bg-[url('/assets/foods_img/beverages/kapeng_barako.png')]"
    },
    {
      title: "Sago't Gulaman",
      subtitle: "Beverage — Sweet Refreshment",
      description: "A classic sweet drink made from brown sugar syrup, water, brown gelatin cubes, and chewy tapioca pearls.",
      image: "bg-[url('/assets/foods_img/beverages/sagot_gulaman.png')]"
    },
    {
      title: "Buko Juice",
      subtitle: "Beverage — Fruit Juice",
      description: "The naturally refreshing and hydrating water of young coconuts, often served with shreds of its tender meat.",
      image: "bg-[url('/assets/foods_img/beverages/buko_juice.png')]"
    },
    {
      title: "Calamansi Juice",
      subtitle: "Beverage — Fruit Juice",
      description: "A tart citrus drink made from freshly squeezed Philippine limes, sweetened with sugar or honey.",
      image: "bg-[url('/assets/foods_img/beverages/calamansi_juice.png')]"
    },
    {
      title: "Tsokolate Tablea",
      subtitle: "Beverage — Hot Chocolate",
      description: "A rich, thick hot cocoa drink made from dissolved traditional Filipino roasted cacao paste tablets.",
      image: "bg-[url('/assets/foods_img/beverages/tsokolate_tablea.png')]"
    },
    {
      title: "Salabat",
      subtitle: "Beverage — Herbal Tea",
      description: "A warming ginger tea traditionally brewed to soothe sore throats, especially during the colder seasons.",
      image: "bg-[url('/assets/foods_img/beverages/salabat.png')]"
    },
    {
      title: "Lambanog",
      subtitle: "Beverage — Alcoholic Spirit",
      description: "A potent, traditional Filipino distilled palm liquor made from fermented coconut or nipa palm sap.",
      image: "bg-[url('/assets/foods_img/beverages/lambanog.png')]"
    }
  ];

  const updateFullDataDishes = (num) => {
    if (num === 0) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Mami',
        subtitle: 'Soup — Noodle Soup · Nationwide',
        tags: ['Comfort Food', 'Noodle Soup', 'Chinese-Filipino', 'Merienda', 'Beef or Chicken'],
        esc: 'Mami is a beloved Chinese-Filipino noodle soup featuring fresh egg noodles submerged in a comforting, slow-simmered savory meat broth. It is traditionally generously loaded with shredded chicken or tender braised beef brisket, chopped cabbage, crisp scallions, and hard-boiled or toasted eggs. Created by iconic street vendor Ma Mon Luk in the early 20th century, it has evolved into an indispensable Filipino comfort staple enjoyed at all hours of the day.',
        facts: [
          ['Type', 'Noodle Soup / Merenda'],
          ['Origin', 'Binondo, Manila (by Ma Mon Luk)'],
          ['Key Ingredients', 'Egg noodles, meat broth, cabbage, egg'],
          ['Variations', 'Beef Mami, Chicken Mami, Pork Mami'],
          ['Serving Temp', 'Served steaming hot'],
          ['Legacy', 'The grandfather of modern Filipino comfort soups']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/mami.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/mami_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/mami_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 1) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Beef Pares',
        subtitle: 'Ulam — Braised · Manila, Philippines',
        tags: ['Braised Beef', 'Paresan', 'Garlic Rice', 'Star Anise', 'Street Food Style'],
        esc: 'Beef Pares is a wildly popular culinary duo consisting of tender, melt-in-your-mouth braised beef brisket cooked alongside a clear garlic broth and garlic fried rice. The beef is slow-cooked in a unique, sweet-and-savory soy sauce gravy deeply infused with fragrant star anise, ginger, and brown sugar. It represents an everyday working-class food culture, famously sold at roadside "Paresan" stalls across urban areas.',
        facts: [
          ['Type', 'Braised Meat (Ulam)'],
          ['Origin', 'Metro Manila, Philippines'],
          ['Key Ingredients', 'Beef brisket, star anise, soy sauce, garlic rice'],
          ['Flavor Profile', 'Sweet, savory, and aromatic'],
          ['Traditional Side', 'Clear beef broth and chili-garlic oil'],
          ['Legacy', 'The ultimate late-night comfort meal for workers and travelers']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/beef_pares.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/beef_pares_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/beef_pares_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 2) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Kare-Kare',
        subtitle: 'Ulam — Peanut Stew · Pampanga, Philippines',
        tags: ['Peanut Stew', 'Oxtail', 'Bagoong Alamang', 'Kapampangan Cuisine', 'Fiesta Food'],
        esc: 'Kare-Kare is a prestigious Filipino stew coated in a rich, velvety peanut sauce made from ground roasted peanuts and toasted rice flour. It traditionally highlights gelatinous cuts of oxtail, beef tripe, or pork hocks mixed with local vegetables like eggplant, string beans, and banana blossoms. Because the stew itself is intentionally mild, it relies entirely on a side of pungent, sautéed shrimp paste (bagoong) to unlock its final, iconic flavor profile.',
        facts: [
          ['Type', 'Meat & Vegetable Stew (Ulam)'],
          ['Origin', 'Pampanga region'],
          ['Key Ingredients', 'Oxtail/beef, peanut butter, toasted rice flour, vegetables'],
          ['Essential Pairing', 'Sautéed shrimp paste (Bagoong alamang)'],
          ['Occasion', 'Fiestas, Sunday family dinners, and milestones'],
          ['Legacy', 'One of the crown jewels of traditional Filipino gastronomy']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/kare_kare.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/disheskare_kare_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/kare_kare_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 3) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Arroz Caldo',
        subtitle: 'Soup — Rice Porridge · Nationwide',
        tags: ['Rice Porridge', 'Ginger', 'Chicken Congee', 'Toasted Garlic', 'Comfort Food'],
        esc: 'Arroz Caldo is a deeply comforting, Spanish-influenced thick ginger rice porridge simmered for hours until the grains break down into a velvety texture. It is cooked with bone-in chicken pieces that infuse the base with rich marrow flavors, accented strongly by fresh ginger and saffron-like safflower (kasubha). Served roaring hot, it is always garnished with a heavy handful of golden toasted garlic bits, crisp scallions, and a hard-boiled egg.',
        facts: [
          ['Type', 'Rice Porridge / Savory Breakfast'],
          ['Origin', 'Filipino adaptation of Chinese congee with a Spanish name'],
          ['Key Ingredients', 'Glutinous rice, chicken, fresh ginger, toasted garlic'],
          ['Best Accompaniment', 'Calamansi, fish sauce (patis), and tokwa\'t baboy'],
          ['Common Use', 'Go-to remedy for rainy days or when feeling under the weather'],
          ['Legacy', 'The absolute baseline symbol of warmth and recovery in local homes']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/arroz_caldo.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/arroz_caldo_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/arroz_caldo_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 4) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Sinigang',
        subtitle: 'Ulam — Sour Soup · Nationwide',
        tags: ['Sour Soup', 'Tamarind Base', 'Comfort Stew', 'National Favorite', 'Vegetable Rich'],
        esc: 'Sinigang is a universally adored, sour-savory Filipino soup defined by its vibrant, lip-puckering tamarind broth base. It can feature a wide array of proteins ranging from pork ribs (sinigang na baboy) and beef to shrimp or fish, all cooked down alongside native vegetables like taro, radish, water spinach (kang kong), okra, and string beans. Its distinct sourness serves as an incredibly refreshing counter to the hot tropical climate.',
        facts: [
          ['Type', 'Sour Broth Soup (Ulam)'],
          ['Origin', 'Pre-colonial Indigenous Philippines'],
          ['Key Ingredients', 'Tamarind (sampalok), pork/shrimp/fish, taro, regional vegetables'],
          ['Flavor Profile', 'Sharply sour, savory, and comforting'],
          ['Global Status', 'Rated multiple times as one of the best soups in the world'],
          ['Legacy', 'Considered by many culinary historians to be the true national dish']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/sinigang.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/sinigang_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/sinigang_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 5) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Adobo',
        subtitle: 'Ulam — Vinegar & Soy Stew · Nationwide',
        tags: ['National Dish', 'Vinegar Preserved', 'Soy Sauce', 'Pork or Chicken', 'Garlic Loaded'],
        esc: 'Adobo is widely celebrated as the unofficial national dish of the Philippines, featuring an indigenous cooking method of marinating and simmering meat in vinegar, soy sauce, garlic, bay leaves, and whole black peppercorns. This slow-braising technique creates a savory, tangy sauce while naturally preserving the meat. Every household across the thousands of islands claims their own unique variation, ranging from dry and oily to rich and saucy.',
        facts: [
          ['Type', 'Braised Stew / Preservation Style (Ulam)'],
          ['Origin', 'Pre-colonial Philippines (with subsequent Spanish naming)'],
          ['Key Ingredients', 'Chicken or pork, cane vinegar, soy sauce, whole peppercorn, bay leaves'],
          ['Key Attribute', 'Tastes even better the next day as the flavors concentrate'],
          ['Variations', 'Adobong Puti (no soy sauce), Adobo sa Gata (with coconut milk)'],
          ['Legacy', 'The global culinary ambassador of Philippine culture']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/adobo.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/adobo_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/adobo_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 6) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Tinola',
        subtitle: 'Ulam — Ginger Broth · Nationwide',
        tags: ['Chicken Soup', 'Ginger Broth', 'Green Papaya', 'Moringa Leaves', 'Home Cooking'],
        esc: 'Tinola is a soothing and highly nutritious chicken soup built entirely on an aromatic broth heavily infused with sliced fresh ginger, garlic, and onions. Tender pieces of chicken are simmered alongside wedged green papayas (or chayote) and finished with fresh moringa (malunggay) or chili leaves. It is a legendary home-cooked dish famously referenced in José Rizal\'s historic 19th-century novel, Noli Me Tángere.',
        facts: [
          ['Type', 'Clear Ginger Soup (Ulam)'],
          ['Origin', 'Traditional Philippine home kitchens'],
          ['Key Ingredients', 'Chicken, fresh ginger, green papaya, malunggay leaves'],
          ['Flavor Profile', 'Light, warm, sharp ginger punch, and clean'],
          ['Cultural Note', 'Symbolizes familial care, warmth, and hospitality'],
          ['Legacy', 'The quintessential Filipino soul food cooked by mothers']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/tinola.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/tinola_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/tinola_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 7) {
      setFullData({
        category: 'Cuisine · Traditional Dishes',
        title: 'Dinuguan',
        subtitle: 'Ulam — Savory Stew · Nationwide',
        tags: ['Blood Stew', 'Chocolate Meat', 'Pork Offal', 'Vinegar Based', 'Puto Pairing'],
        esc: 'Dinuguan is a rich, intensely savory Filipino stew made of bite-sized pork cuts and offal gently simmered in a dark, spiced gravy of pig\'s blood, vinegar, garlic, and green long chilies (siling haba). The addition of local vinegar balances out the richness of the blood, eliminating any metallic trace and transforming it into a tangy, deeply complex delicacy. It is affectionately nicknamed "chocolate meat" to make it approachable to outsiders.',
        facts: [
          ['Type', 'Savory Offal Blood Stew (Ulam)'],
          ['Origin', 'Traditional Philippine alternative utilization cooking'],
          ['Key Ingredients', 'Pork meat/offal, fresh pig\'s blood, cane vinegar, long green chilies'],
          ['Classic Partner', 'Puto (sweet steamed white rice cakes)'],
          ['Flavor Profile', 'Tangy, savory, earthy, and mildly spicy'],
          ['Legacy', 'A brilliant demonstration of sustainable, head-to-tail culinary heritage']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/dishes/dinuguan.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/dinuguan_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/dishes/dinuguan_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  };

  const updateFullDataStreetFoods = (num) => {
    if (num === 0) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Kwek-Kwek',
        subtitle: 'Street Food — Deep-Fried · Nationwide',
        tags: ['Snack', 'Quail Eggs', 'Orange Batter', 'Crispy', 'Street Vendor'],
        esc: 'Kwek-Kwek is a staple of Filipino street side gastronomy made from hard-boiled quail eggs tucked into a bright orange-colored flour batter and deep-fried to a perfect crunch. It is heavily paired with a spiked sweet-and-sour brown sauce or spiced vinegar with floating cucumber bits and red onions, capturing the exact, energetic vibe of community street corners.',
        facts: [
          ['Type', 'Deep-Fried Skewer Snack'],
          ['Key Ingredients', 'Quail eggs, annatto powder (atsuete), flour, vinegar dip'],
          ['Close Cousin', 'Tokneneng (uses larger chicken or duck eggs)'],
          ['Flavor Profile', 'Crispy skin, rich yolk center, tangy-sweet finish'],
          ['Best Time', 'Popular afternoon standard snack']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/kwek_kwek.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/kwek_kwek_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/kwek_kwek_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 1) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Isaw',
        subtitle: 'Street Food — Grilled Skewer · Nationwide',
        tags: ['Barbecue', 'Intestines', 'Charcoal Grilled', 'Vinegar Dip', 'Night Snack'],
        esc: 'Isaw consists of coiled chicken or pork intestines meticulously cleaned, turned inside out, parboiled, looped tightly onto bamboo skewers, and grilled over red-hot charcoal. It is brushed repeatedly with a sweet, savory soy barbecue marinade while grilling, picking up deep smoky notes that blend intensely with local garlic-chili vinegar dips.',
        facts: [
          ['Type', 'Charcoal Grilled Skewer'],
          ['Variations', 'Isaw ng Manok (Chicken) or Isaw ng Baboy (Pork)'],
          ['Key Prep Step', 'Meticulous multi-stage boiling cleaning process'],
          ['Flavor Profile', 'Smoky, charred, chewy, and highly savory'],
          ['Culture', 'The absolute undisputed king of late-night university and community street culture']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/isaw.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/isaw_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/isaw_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 2) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Balut',
        subtitle: 'Street Food — Boiled Egg · Pateros, Manila',
        tags: ['Delicacy', 'Duck Egg', 'Embryo', 'High Protein', 'Late Night'],
        esc: 'Balut is a famous, globally recognized Filipino delicacy consisting of a fertilized duck egg incubated for roughly 14 to 18 days before being steamed. It contains a rich, hot broth (sabaw), a creamy, soft yolk, and a small embryonic chick. Eaten directly from the shell with a dash of coarse rock salt or spiced vinegar, it is traditionally sold by wandering nocturnal vendors shouting its name across neighborhoods.',
        facts: [
          ['Type', 'Incubated Boiled Egg'],
          ['Capital City', 'Pateros, Metro Manila'],
          ['Ideal Stage', '17 days (locally favored balance of texture)'],
          ['Nutrient Value', 'Renowned locally as an energy-boosting aphrodisiac'],
          ['Method', 'Crack small hole, sip hot broth first, salt contents, eat']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/balut.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/balut_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/balut_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 3) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Fishball',
        subtitle: 'Street Food — Deep-Fried · Nationwide',
        tags: ['Classic Snack', 'Tusok-Tusok', 'Sweet & Sour', 'Budget Friendly', 'Wok Fried'],
        esc: 'Fishballs are thin, flattened round spheres of minced fish paste deep-fried in bubbling hot oil directly inside a street mobile cart wok. Customers gather around the cart to skewer the balls using long bamboo sticks ("tusok-tusok") and plunge them into massive communal jars containing signature sweet, spicy, or sour sauces.',
        facts: [
          ['Type', 'Wok-Fried Fish Paste Skewer'],
          ['The Ritual', 'Tusok-tusok style (piercing your own food)'],
          ['Sauce Options', 'Sweet (Manong\'s sauce), Spicy-Sweet, or pure Sour Vinegar'],
          ['Economic Status', 'Historically one of the most affordable street snacks in the country'],
          ['Texture', 'Lightly chewy, airy, and flat']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/fishball.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/fishball_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/fishball_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 4) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Banana Cue',
        subtitle: 'Street Food — Sweet Snack · Nationwide',
        tags: ['Saba Banana', 'Caramelized', 'Sweet Tooth', 'Skewered Snack', 'Fried'],
        esc: 'Banana Cue is a highly sought-after sweet afternoon snack featuring native Saba bananas deep-fried in hot oil loaded with brown sugar. The sugar naturally melts and completely wraps around the hot bananas in a glossy, hardened caramel jacket. Two bananas are traditionally lined up on a rugged bamboo stick, striking a balance between soft, jammy banana centers and crunchy sweet outer crusts.',
        facts: [
          ['Type', 'Caramelized Sweet Skewer'],
          ['Core Ingredient', 'Saba Banana (Cardaba banana variety)'],
          ['Sibling Foods', 'Kamote Cue (Sweet potato variety)'],
          ['Serving Window', 'Peak afternoon merienda staple (2:00 PM – 4:00 PM)'],
          ['Texture', 'Crunchy candy exterior with soft, hot interior']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/banana_cue.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/banana_cue_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/banana_cue_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 5) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Kikiam',
        subtitle: 'Street Food — Deep-Fried · Chinese-Filipino Origin',
        tags: ['Fried Snack', 'Bean Curd Skin', 'Five Spice', 'Cart Food', 'Savory Log'],
        esc: 'Kikiam is a popular street food inspired by Chinese ngo hiang, consisting of seasoned ground pork, minced shrimp, and vegetables wrapped tightly in thin bean curd skins. It is parboiled and deep-fried in street food woks until the casing turns crinkly and golden brown. Served chopped or whole on skewers, it pairs with fishball dipping sauces.',
        facts: [
          ['Type', 'Sausage-Style Fried Wrap'],
          ['Ancestry', 'Hokkien immigrants (Ngo Hiang)'],
          ['Key Seasoning', 'Five-spice powder blends'],
          ['Street Version', 'Often dynamic flour-based iterations sold alongside squidballs'],
          ['Texture', 'Wrinkled crispy skin with a dense, meaty chew']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/kikiam.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/kikiam_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/kikiam_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 6) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Betamax',
        subtitle: 'Street Food — Grilled Skewer · Nationwide',
        tags: ['Pork Blood', 'Barbecue', 'Retro Name', 'Smoky', 'Cube Skewer'],
        esc: 'Betamax is a classic street barbecue made from coagulated, solidified chicken or pork blood cut into neat, rectangular blocks and threaded onto bamboo sticks. The cubes are grilled over hot coals, absorbing smoky flavors without any strong liquid metallic taste due to meticulous preparation. It earned its legendary name from its striking resemblance to vintage 1980s Betamax videotapes.',
        facts: [
          ['Type', 'Solidified Grilled Blood Skewer'],
          ['Ingredient Base', 'Purified coagulated pig or chicken blood'],
          ['Name Origin', 'Betamax cassette tapes (pop-culture reference)'],
          ['Texture', 'Firm, springy, gelatinous, tofu-like consistency'],
          ['Flavor Profile', 'Earthy, intensely smoky, absorbing the chili vinegar dips completely']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/betamax.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/betamax_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/betamax_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 7) {
      setFullData({
        category: 'Cuisine · Street Foods',
        title: 'Calamares',
        subtitle: 'Street Food — Deep-Fried · Coastal & Urban Stalls',
        tags: ['Squid Rings', 'Crispy Batter', 'Seafood Street Food', 'Vinegar Heavy', 'Crunchy'],
        esc: 'Calamares is a heavily democratized version of Mediterranean calamari, adapted into a spectacular, high-volume Filipino street side delicacy. Fresh squid rings are dredged in a thick, well-seasoned flour-cornstarch batter and deep-fried rapidly until the skin turns crunchy and ultra-crisp. It is a wildly popular snack typically served in small brown paper bags drenched in heavily spiced local white vinegar.',
        facts: [
          ['Type', 'Battered Fried Seafood Ring'],
          ['Core Base', 'Sliced local squid (pusit)'],
          ['Dipping Best', 'Garlic-chili cane vinegar infusion'],
          ['Texture', 'Extremely crunchy coating with a tender, slightly snap-chewy squid interior'],
          ['Popularity', 'A high-demand street item that also functions as an entry-level bar food']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/street_foods/calamares.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/calamares_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/street_foods/calamares_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  };

  const updateFullDataDesserts = (num) => {
    if (num === 0) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Halo-Halo',
        subtitle: 'Dessert — Shaved Ice · Nationwide',
        tags: ['Shaved Ice', 'Ube Ice Cream', 'Summer Treat', 'Sweet Beans', 'Leche Flan'],
        esc: 'Halo-Halo (meaning "mix-mix") is the absolute undisputed pinnacle of Filipino summer desserts, presented in a tall glass layered with crushed shaved ice, sweet evaporated milk, and an array of colorful local ingredients. Its hidden treasures include sweetened bananas, jackfruit, soft coconut strips (macapuno), purple yam jam (ube), nata de coco, and sweet beans, all crowned elegantly with a slice of rich leche flan and a scoop of royal purple ube ice cream.',
        facts: [
          ['Type', 'Layered Shaved Ice Sundae'],
          ['Name Meaning', '"Mix-Mix" (describes how it must be eaten)'],
          ['Ancestry', 'Inspired by Japanese pre-war Kakigori and Mitsumame'],
          ['Key Toppings', 'Leche flan slice, Ube ice cream scoop, crisp pounded rice (pinipig)'],
          ['Global Status', 'Widely recognized globally as one of the most unique frozen treats']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/halo_halo.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/halo_halo_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/halo_halo_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 1) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Leche Flan',
        subtitle: 'Dessert — Custard · Nationwide',
        tags: ['Caramel Custard', 'Rich & Creamy', 'Fiesta Classic', 'Egg Yolks', 'Sweet'],
        esc: 'Leche Flan is a lavish, velvety caramel custard dessert made almost entirely from pure egg yolks, condensed milk, and evaporated milk, flavored with a whisper of lemon zest. Steamed inside traditional oval tin molds known as "llaneras" over a pool of dark caramelized sugar syrup, it turns out ultra-smooth, creamy, and denser than its European flan counterparts, making it an essential addition to any festival table.',
        facts: [
          ['Type', 'Steamed Caramel Egg Custard'],
          ['Traditional Mold', 'Llanera (oval aluminum cups)'],
          ['Ancestry', 'Filipino adaptation of the Spanish Flan de Leche'],
          ['Texture Profile', 'Heavy, silky, completely air-bubble-free richness'],
          ['Usage', 'Eaten stand-alone or sliced onto Halo-Halo bowls']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/leche_flan.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/leche_flan_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/leche_flan_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 2) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Bibingka',
        subtitle: 'Dessert — Rice Cake · Christmas Season Classic',
        tags: ['Rice Cake', 'Clay Pot Baked', 'Salted Egg', 'Christmas Tradition', 'Coconut Milk'],
        esc: 'Bibingka is a soft, fluffy traditional rice cake prepared from galapong (ground soaked glutinous rice) whipped with coconut milk, sugar, and eggs. It is baked in clay pots lined with charred banana leaves, heated by smoldering charcoal elements placed above and below the pan. Topped with slices of salted duck egg, melted butter, grated cheese, and fresh coconut shreds, it is a hallmark after-church treat during the Christmas season.',
        facts: [
          ['Type', 'Charcoal-Baked Rice Cake'],
          ['Key Material', 'Galapong (fermented rice paste)'],
          ['Aroma Source', 'Wilted banana leaves lining the baking pot'],
          ['Iconic Season', 'Simbang Gabi (Dawn Masses leading to Christmas)'],
          ['Toppings', 'Salted egg slices, grated cheese, muscovado sugar, fresh niyog']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/bibingka.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/bibingka_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/bibingka_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 3) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Puto Bumbong',
        subtitle: 'Dessert — Rice Cake · Christmas Season Classic',
        tags: ['Purple Rice', 'Bamboo Tubes', 'Margarine', 'Niyog', 'Holiday Food'],
        esc: 'Puto Bumbong is a striking purple rice cake crafted from a unique blend of white and purple heirloom glutinous rice varieties (pirurutong). The rice powder is packed inside hollow bamboo tubes (bumbong) and steamed using specialized jetting boilers until cooked through. It is pushed out of the tubes, slathered in margarine or butter, and topped with shredded fresh coconut and deep brown muscovado sugar.',
        facts: [
          ['Type', 'Bamboo-Steamed Rice Cake'],
          ['Color Origin', 'Natural deep violet hue from Pirurutong rice'],
          ['Cooking Tool', 'Lansungan (steamer base with vertical bamboo nozzles)'],
          ['Serving Base', 'Wrapped in fresh banana leaves to lock in heat'],
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/puto_bumbong.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/puto_bumbong_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/puto_bumbong_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 4) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Turon',
        subtitle: 'Dessert — Fried Snack · Nationwide',
        tags: ['Lumpia Wrapper', 'Saba Banana', 'Langka', 'Caramelized Crispy', 'Merienda'],
        esc: 'Turon is an intensely crispy, sweet spring roll containing ripe Saba bananas and thin strands of aromatic sweet jackfruit (langka) dusted heavily with brown sugar. The entire package is wrapped up in an egg roll wrapper and tossed into hot oil, where extra sugar caramelizes on the outer wrapper, creating a crunchy, candy-like shell.',
        facts: [
          ['Type', 'Sweet Fried Lumpia Wrap'],
          ['Core Stuffing', 'Saba banana halves layered with jackfruit strips'],
          ['Outer Coating', 'Hardened shiny caramelized brown sugar jacket'],
          ['Status', 'The ultimate budget-friendly snack companion to savory dishes'],
          ['Texture', 'Ultra-crispy shell cracking open to molten, jammy fruit']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/turon.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/turon_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/turon_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 5) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Taho',
        subtitle: 'Dessert — Sweet Tofu · Morning & Afternoon Street Ritual',
        tags: ['Silken Tofu', 'Arnibal Syrup', 'Sago Pearls', 'Magtataho', 'Breakfast Snack'],
        esc: 'Taho is a warm, comforting snack made of fresh, velvety silken tofu drowned in rich "arnibal" (caramelized brown sugar syrup) and topped with translucent, chewy sago pearls. It is distributed by walking "Magtataho" vendors carrying two large aluminum buckets balanced across their shoulders on a bamboo yoke, signaling their arrival with a melodic call.',
        facts: [
          ['Type', 'Warm Silken Tofu Snack'],
          ['The Components', 'Warm tofu, dark cane syrup (arnibal), chewy tapioca pearls (sago)'],
          ['Ancestry', 'Adapted from Chinese "Douhua" sweets'],
          ['Culture', 'A beloved breakfast or mid-afternoon ritual purchased at front doorsteps'],
          ['Variations', 'Strawberry Taho (Baguio City specialization), Ube Taho']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/taho.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/taho_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/taho_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 6) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Biko',
        subtitle: 'Dessert — Rice Cake · Celebrations & Holidays',
        tags: ['Sticky Rice', 'Latik Topping', 'Coconut Curd', 'Brown Sugar', 'Kakanin'],
        esc: 'Biko is a dark, heavy glutinous rice cake cooked slowly with rich coconut milk and sweet brown sugar until the mixture turns incredibly sticky and thick. It is flattened out into round woven bamboo trays (bilao) and topped with a generous layer of charred coconut milk curds, known as latik, providing a nutty contrast to the sweet sticky rice cake base.',
        facts: [
          ['Type', 'Sticky Rice Cake (Kakanin)'],
          ['Key Accent', 'Latik (toasted solid coconut curd oil fragments)'],
          ['Occasion', 'New Year celebrations, birthdays, and household gatherings'],
          ['Texture Profile', 'Chewy, dense, intensely rich coconut oil presence'],
          ['Symbolism', 'The sticky texture represents strong, unbreakable family bindings']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/biko.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/biko_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/biko_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 7) {
      setFullData({
        category: 'Cuisine · Desserts & Sweets',
        title: 'Sapin-Sapin',
        subtitle: 'Dessert — Rice Cake · Feast Specialization',
        tags: ['Multi-layered', 'Colorful Kakanin', 'Ube Flavor', 'Jackfruit Layer', 'Latik Crumbles'],
        esc: 'Sapin-Sapin (meaning "layers") is an eye-catching, multi-layered glutinous rice cake made from rice flour, coconut milk, and sugar. Each layer has a distinct color and flavor: the bottom royal purple layer tastes of wild yam (ube), the middle bright yellow layer is sweet jackfruit (langka), and the top white layer retains a pure, clean coconut profile. The entire dessert is garnished with crispy latik crumbles.',
        facts: [
          ['Type', 'Layered Glutinous Rice Flour Cake'],
          ['Name Origin', '"Sapin" translates directly to "layers" or "sheets"'],
          ['Color Palette', 'Purple (ube), Yellow (langka), White (plain sweet coconut)'],
          ['Garnish Finish', 'Toasted desiccated coconut shreds or oil latik bits'],
          ['Texture', 'Soft, elastic, gelatinous, and highly visually striking']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/desserts/sapin_sapin.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/sapin_sapin_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/desserts/sapin_sapin_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  };

  const updateFullDataBeverages = (num) => {
    if (num === 0) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: 'Palamig',
        subtitle: 'Beverage — Sweet Refreshment · Everyday Street Drink',
        tags: ['Ice Drink', 'Street Soda', 'Melon Shreds', 'Gulaman', 'Tropical Cooler'],
        esc: 'Palamig is a generic term for large-volume, ice-cold sweet drinks sold from clear plastic dispensers along tropical roadsides. Ranging from bright pink cantaloupe strands swirling in sugar water to milky coconut coolers, these drinks provide immediate relief from the heavy tropical midday heat.',
        facts: [
          ['Type', 'Chilled Street Juice Cooler'],
          ['Core Varietals', 'Buko pandan, shredded melon juice, pineapple mixes'],
          ['Vessel Type', 'Typically served in plastic cups with extra ice blocks'],
          ['Flavor Base', 'Heavy cane sugar syrup mixtures'],
          ['Aesthetic', 'Highly colorful, pastel-shaded street icons']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/palamig.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/palamig_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/palamig_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 1) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: 'Kapeng Barako',
        subtitle: 'Beverage — Coffee · Batangas & Cavite Highlands',
        tags: ['Liberica Beans', 'Strong Brew', 'Batangas Culture', 'Pungent Coffee', 'Bold Taste'],
        esc: 'Kapeng Barako is a bold, intensely pungent Filipino coffee brewed from Liberica beans harvested in the fertile volcanic soil of Batangas and Cavite. Known for its strong aroma and sharp, woodsy flavor with fruity undertones, its name translates to "stud coffee," reflecting its robust and unapologetically bold flavor profile.',
        facts: [
          ['Type', 'High-Intensity Drip Coffee'],
          ['Bean Type', 'Coffea Liberica (accounting for only 1% of world trades)'],
          ['Cultural Hub', 'Lipa City, Batangas'],
          ['Sweetening Style', 'Traditionally paired with native brown muscovado sugar'],
          ['Body Profile', 'Heavy, dark, thick, with a distinct floral-smoky scent']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/kapeng_barako.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/kapeng_barako_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/kapeng_barako_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 2) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: "Sago't Gulaman",
        subtitle: 'Beverage — Sweet Refreshment · Nationwide Standard',
        tags: ['Arnibal Syrup', 'Gelatin Cubes', 'Tapioca Pearls', 'Traditional Cooler', 'Sweet'],
        esc: "Sago't Gulaman is a refreshing, ice-cold drink made from brown sugar syrup (arnibal), mineral water, and shaved ice, filled with diced grass jelly or agar-agar cubes (gulaman) and chewy tapioca pearls (sago). It offers a balance of sweet, smoky sugar syrup and a variety of gelatinous textures.",
        facts: [
          ['Type', 'Textured Syrup Cooler'],
          ['Syrup Base', 'Arnibal (caramelized dark panela or cane sugar)'],
          ['Gelatin Type', 'Agar-agar derived from red seaweed bases'],
          ['Flavor Profile', 'Rich, sugary sweetness with hints of vanilla or pandan essence'],
          ['Usage', 'The default drink pairing for street barbecues and fried appetizers']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/sagot_gulaman.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/sagot_gulaman_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/sagot_gulaman_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 3) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: 'Buko Juice',
        subtitle: 'Beverage — Fruit Juice · Coconut Plantations & Coastal Stands',
        tags: ['Coconut Water', 'Freshly Cracked', 'Hydration', 'Buko Meat', 'All Natural'],
        esc: 'Buko Juice is the naturally sweet, electrolyte-rich water harvested straight out of freshly cracked green young coconuts. It is served chilled in its own shell, with long ribbons of its soft tender coconut meat scraped directly into the juice, making it an incredibly hydrating and refreshing tropical drink.',
        facts: [
          ['Type', 'Raw Natural Isotonic Drink'],
          ['Harvest Age', 'Young Green Coconut stage (Buko)'],
          ['Vessel', 'Served inside the carved outer husk or over ice pitchers'],
          ['Nutrient Value', 'Loaded with potassium, minerals, and zero synthetic preservatives'],
          ['Flavor Note', 'Lightly sweet, milky clear, clean, and refreshing']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/buko_juice.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/buko_juice_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/buko_juice_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 4) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: 'Calamansi Juice',
        subtitle: 'Beverage — Fruit Juice · Home Kitchens & Restaurants',
        tags: ['Philippine Lime', 'Citrus Blast', 'Vitamin C', 'Hot or Cold', 'Tart Drink'],
        esc: 'Calamansi Juice is a classic citrus drink made from freshly squeezed Philippine limes (calamansi) blended with water and sweetened with honey or sugar syrup. Packed with Vitamin C, it features a distinctively sharp, sour, and refreshing flavor that cuts through rich, savory meals.',
        facts: [
          ['Type', 'Native Citrus Extract Cordial'],
          ['Fruit Source', 'Calamansi (hybrid citrus between kumquat and mandarin orange)'],
          ['Variations', 'Served ice-cold for summers, or warm as a throat remedy'],
          ['Flavor Profile', 'Bright, heavily sour, with a uniquely aromatic rind scent'],
          ['Health Property', 'The top native remedy for colds and standard health maintenance']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/calamansi_juice.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/calamansi_juice_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/calamansi_juice_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 5) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: 'Tsokolate Tablea',
        subtitle: 'Beverage — Hot Chocolate · Traditional Breakfast Ritual',
        tags: ['Hot Cocoa', 'Cacao Tablets', 'Batirol Whisk', 'Rich & Thick', 'Heritage Brew'],
        esc: 'Tsokolate Tablea is a rich, rustic hot chocolate made from pure, roasted local cacao beans pressed into dense discs called tablea. Boiled in water or milk inside a high-neck brass pitcher (batidor), it is spun using a wooden ribbed whisk (batirol) until it creates a thick, bittersweet, and velvety froth.',
        facts: [
          ['Type', 'Traditional Artisanal Hot Cocoa'],
          ['Core Material', '100% pure Philippine fermented roasted cacao tablets'],
          ['Spinning Tool', 'Molonillo / Batirol (turned manually to aerate fats)'],
          ['Classic Menu Pair', 'Served alongside savory garlic rice and dried fish (tuyo)'],
          ['Flavor Note', 'Deeply dark, unrefined, bittersweet, with pleasant coarse textures']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/tsokolate_tablea.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/tsokolate_tablea_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/tsokolate_tablea_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 6) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: 'Salabat',
        subtitle: 'Beverage — Herbal Tea · Colder Months & Vocal Remedies',
        tags: ['Ginger Tea', 'Herbal Remedy', 'Spicy-Warm', 'Sore Throat Cure', 'Natural Infusion'],
        esc: 'Salabat is a traditional Filipino ginger tea made by boiling crushed fresh ginger root for hours until the liquid develops a sharp, warming spice. Sweetened with yellow honey or coarse brown sugar, it is widely used as a home remedy to soothe sore throats, chest congestion, and vocal strain.',
        facts: [
          ['Type', 'Boiled Root Herbal Tea'],
          ['Primary Base', 'Luya (Fresh yellow ginger rhizomes)'],
          ['Vocal Mythos', 'Highly consumed by local singers to keep vocal cords flexible'],
          ['Seasonality', 'Commonly served during rainy months and early morning masses'],
          ['Flavor Character', 'Sharp, peppery, highly warming, with sweet throat relief']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/salabat.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/salabat_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/salabat_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (num === 7) {
      setFullData({
        category: 'Cuisine · Beverages',
        title: 'Lambanog',
        subtitle: 'Beverage — Alcoholic Spirit · Southern Tagalog Regions',
        tags: ['Coconut Wine', 'Potent Spirit', 'Distilled Sap', 'Quezon Province', 'Traditional Moonshine'],
        esc: 'Lambanog is a clear, highly potent distilled spirit often called "coconut vodka," crafted from the fermented sap of coconut palm blossoms. It boasts a high alcohol content, typically ranging around 40% to 45% ABV. Originating from Quezon province, it is deeply tied to communal drinking rituals, where drinkers share a single glass in an expression of brotherhood.',
        facts: [
          ['Type', 'Distilled Indigenous Spirit (ABV 40%+)'],
          ['Raw Source', 'Tubâ sap tapped from high coconut flower stalks'],
          ['Regional Capital', 'Tayabas, Quezon Province'],
          ['Social Custom', 'Tagayan system (communal circle sharing a single glass)'],
          ['Modern Status', 'Transitioned from rural moonshine to a premium flavored export spirit']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/foods_img/beverages/lambanog.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/lambanog_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/foods_img/beverages/lambanog_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  };

  const cardTypes = ["tall", "normal", "wide", "normal", "tall", "wide", "normal", "tall"];

  return (
    <>
      {/* FOOD SECTION */}
       <section id="food" className="p-(--section-pad) bg-(--cream) relative max-[900px]:py-15 max-[900px]:px-6">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            Food
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] text-(--ink) mb-5">
            The&nbsp; 
            <em className="text-(--crimson) italic">
              Flavors&nbsp; 
            </em> 
            of Manila
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] text-(--warm-gray) max-w-140">
            Manila&apos;s cuisine is a living archive — Spanish, Chinese, Malay, and American influences simmered into something entirely its own.
          </p>
        </div>

        <div className="grid grid-cols-[1.2fr_2fr] items-start mt-15 max-[900px]:grid-cols-1 mb-10">
          <div>
            {/* TABS */}
            <div className="flex gap-1 border-b border-(--border) mb-4 min-[1500px]:w-[250%]">
              <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Dishes" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"}`} id="ftab-dish" 
              onClick={() => {
                  setFoodTab("Dishes");
                }}>
                <span className="text-[15px] max-[900px]:hidden">
                  🍲
                </span> 
                Dishes
              </button>

              <button className={`bg-transparent borde-0 cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Street Foods" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"}`} id="ftab-street" onClick={() => {
                  setFoodTab("Street Foods");
                }}>
                <span className="text-[15px] max-[900px]:hidden">
                  🥢
                </span> 
                Street Foods
              </button>
              
              <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Desserts" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"}`} id="ftab-dessert" 
              onClick={() => {
                  setFoodTab("Desserts");
                }}>
                <span className="text-[15px] max-[900px]:hidden">
                  🍮
                </span> 
                Desserts
              </button>

              <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Beverages" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"}`} id="ftab-beverages" 
              onClick={() => {
                  setFoodTab("Beverages");
                }}>
                <span className="text-[15px] max-[900px]:hidden">
                  🧋
                </span> 
                Beverages
              </button>
            </div>
          </div>
        </div>

        {/* Dishes */}
        <div className={`food-panel ${foodTab === "Dishes" ? "block" : "hidden"}`} id="fpanel-dish">
          <div className="columns-4 gap-5 max-[900px]:columns-2 max-[480px]:columns-1">
            {dishes.map((dish, index) => (
              <FoodCard
                key={index}
                image={dish.image}
                food={dish}
                cardType={cardTypes[index % 8]} onClick={() => updateFullDataDishes(index)}/>
              ))
            }
          </div>
        </div>
    
        {/* Street Foods */}
        <div className={`food-panel ${foodTab === "Street Foods" ? "block" : "hidden"}`} id="fpanel-street">
          <div className="columns-4 gap-5 max-[900px]:columns-2 max-[480px]:columns-1">
            {streetFoods.map((streetFood, index) => (
              <FoodCard
                key={index}
                image={streetFood.image}
                food={streetFood}
                cardType={cardTypes[index % 8]} onClick={() => updateFullDataStreetFoods(index)}/>
              ))
            }
          </div>
        </div>
    
        {/* Desserts */}
        <div className={`food-panel ${foodTab === "Desserts" ? "block" : "hidden"}`} id="fpanel-dessert">
          <div className="columns-4 gap-5 max-[900px]:columns-2 max-[480px]:columns-1">
            {desserts.map((dessert, index) => (
              <FoodCard
                key={index}
                image={dessert.image}
                food={dessert}
                cardType={cardTypes[index % 8]} onClick={() => updateFullDataDesserts(index)}/>
              ))
            }
          </div>
        </div>
    
        {/* Beverages */}
        <div className={`food-panel ${foodTab === "Beverages" ? "block" : "hidden"}`} id="fpanel-beverage">
          <div className="columns-4 gap-5 max-[900px]:columns-2 max-[480px]:columns-1">
            {beverages.map((beverage, index) => (
              <FoodCard
                key={index}
                image={beverage.image}
                food={beverage}
                cardType={cardTypes[index % 8]} onClick={() => updateFullDataBeverages(index)}/>
              ))
            }
          </div>
        </div>     
      </section>
    </>
  )
}

export default FoodSection