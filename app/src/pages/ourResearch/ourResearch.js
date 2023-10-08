import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const OurResearch = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (

        <div style={styles.container}>
            <h1 style={styles.title}>Our Research </h1>
            <div onClick={() => setShowOptions(!showOptions)}>
                
                <p style={styles.paragraph}>
                <p style={styles.subtitle}>Biodegradable products.</p>
                    <br />
                    Biodegradable products are products that can be broken down by natural processes into their constituent parts, such as carbon dioxide, water, and biomass, without causing harm to the environment. Biodegradation is a process by which natural microorganisms, such as bacteria and fungi, break down organic materials into simpler compounds. When biodegradable products are composted, they decompose into organic matter, which can be used to enrich soil and promote plant growth. This process does not produce the same greenhouse gas emissions that burning or landfilling can produce.
                    
                    <br /> <br />
                    Composting is a sustainable way of dealing with organic waste, and it can significantly reduce the amount of waste that ends up in landfills. In addition, the compost produced from biodegradable products can be used as a natural fertilizer, reducing the need for synthetic fertilizers, which are often made from fossil fuels.
                    <br /> <br />
                    It's important to note that not all biodegradable products can be composted, and not all compostable products are biodegradable. Some biodegradable products require specific conditions to break down, such as a certain temperature or level of moisture, while others may break down into harmful chemicals or microplastics. Therefore, it's important to carefully consider the materials and processes used to make and dispose of biodegradable products to ensure that they are truly sustainable and environmentally friendly.
                    <br /> <br />
                    In some cases, biodegradable products can be cheaper than plastics, especially if they are made from renewable resources that are abundant and cost-effective to produce. However, the cost of biodegradable products can vary depending on several factors, including the materials used, the manufacturing process, and the demand for the product.
                    <br /> <br />
                    In general, biodegradable products that are made from renewable resources, such as plant-based materials, may be more cost-effective over the long term because they are less dependent on non-renewable resources and may be easier to dispose of in an environmentally friendly way. In addition, the cost of plastic production may increase due to increasing regulations and taxes on carbon emissions.
                    <br /> <br />
                    However, it's important to note that the cost of biodegradable products can still be higher than traditional plastics in some cases, especially if the manufacturing process is more complex or if the demand for the product is low. As with any product, the cost of biodegradable products will depend on a variety of factors, including the materials, production process, and market demand.
                    
                </p>
                <br /> <br />
                <p style={styles.paragraph}>
                <p style={styles.subtitle}>Biodegradable products and zero emission:</p>
                    <ul>
                        <li>Reduced waste in landfills: Biodegradable products are designed to break down quickly and naturally, which means they won't contribute to the accumulation of waste in landfills. Landfills are a significant source of methane emissions, which is a potent greenhouse gas.</li> <br />
                        <li>Reduced energy consumption in production: Biodegradable products often require less energy to produce compared to traditional products. This is because they are made from renewable resources, such as plant-based materials, which require less energy to grow, and process compared to fossil fuels.</li> <br />
                        <li>Reduced emissions during disposal: When biodegradable products are disposed of in the environment, they break down naturally without releasing harmful chemicals or greenhouse gases. Traditional products, on the other hand, can release toxins and pollutants into the air and water when they decompose.</li> <br />
                        <li>Reduced pollution from plastic: Biodegradable products can help reduce pollution from plastic and micro-plastic. Plastic pollution is a major problem worldwide, and it poses a threat to wildlife, ecosystems, and human health. Biodegradable products can be made from plant-based materials, such as cornstarch or sugarcane, which break down much more quickly and safely than traditional plastic.</li> <br />
                        <li>Conservation of natural resources: Biodegradable products are often made from renewable resources, such as plants or other organic matter, which can be grown and harvested sustainably. By using renewable resources, we can reduce our dependence on non-renewable resources, such as fossil fuels, which contribute to greenhouse gas emissions.</li> <br />
                        <li>Reduced emissions from transportation: Biodegradable products can be produced locally, which reduces the need for long-distance transportation and the associated emissions from shipping and trucking. By producing products locally, we can also support local businesses and reduce our carbon footprint.</li> <br />
                        <li>Promoting circular economy: Biodegradable products can also promote a circular economy, where products are designed to be reused, recycled, or composted at the end of their life cycle. By creating products that can be easily broken down and turned into new products, we can reduce waste and conserve resources.</li> <br />
                    </ul>
                    However, it's important to note that biodegradable products should not be seen as a complete solution to the problem of greenhouse gas emissions. Other measures, such as reducing energy consumption, transitioning to renewable energy sources, and promoting sustainable practices, will also be necessary to achieve zero emissions.
                    <br /> <br />
                    Our research is focused on combining biodegradable materials and fibers to create new durable materials for carpentry and to avoid using plastic, particle boards (for woodworking), simplify the manufacturing process, improve the products, make the products more affordable, eliminate middle-mans, apply venture capital and private investments as well as to keep the carbon emission as low as possible to stay cost-effective.
                    <br /> <br />
                    Dry leaves, mango seeds, wheat flour, rice flour, corn starch, potato starch, tree bark, cardboards, coconut husks, wheat straw, sugarcane bagasse, algae and seaweed, agave fibers, hemp fibers, flax fibers, soy-based products, cork, cashew and walnut shells, pineapple leaves, jute fibers, sisal fibers, kenaf fibers, hay.
                    <br /> <br />
                    All the mentioned materials and fibers can be used to make a variety of biodegradable and compostable products such as:
                    <br /> <br />
                    <ul>
                        <li>Biodegradable utensils - these utensils are made from natural, biodegradable materials and can be disposed of in a compost bin or thrown away without causing harm to the environment. For example, biodegradable utensils can be made from plant-based materials, such as cornstarch, sugarcane, or bamboo, which can be grown and harvested sustainably. These materials may be cheaper than traditional plastics if they are locally sourced and if they are abundant in the area where they are produced. making biodegradable utensils and other products cheaper than plastic products will depend on a variety of factors, including the materials used, the manufacturing process, and the market demand. By using sustainable materials, energy-efficient manufacturing processes, and leveraging market demand. It will be possible to make biodegradable products cheaper and more accessible to consumers.</li> <br />
                        <li>Paper products – Recycled and artisan paper can be used to make various biodegradable products such as toilet paper, tissues, paper bags, and packaging materials. Hemp and flax fibers can be used to produce high-quality paper products, such as notebooks, stationery, and printing paper. Dry leaves can be used to make a variety of paper products, such as journals, notebooks, and greeting cards. Eco-friendly packaging: Dry leaves can be combined with biodegradable fibers to create biodegradable and compostable packaging materials, such as boxes or bags.</li> <br />
                        <li>Biodegradable plastics - Bioplastics made from recycled materials such as cornstarch, potato starch, or cellulose can be used to make a range of products such as utensils, food packaging, and shopping bags. Banana fiber and dry leaves can be used as a reinforcing agent in biodegradable plastics, creating a strong and eco-friendly material also in combination with other fibers.</li> <br />
                        <li>Biodegradable cleaning products - cleaning products made from natural and biodegradable materials such as vinegar, baking soda, and citrus can be used as effective alternatives to harsh chemicals.</li> <br />
                        <li>Biodegradable textiles - Clothing made from biodegradable materials such as hemp, bamboo, organic cotton, bagasse, hay can be used as an eco-friendly alternative to traditional textiles to create clothing, upholstery, and other textile products because the fiber is typically strong, durable, and often used as a sustainable alternative to synthetic materials. (e.g. bamboo fiber can be blended with other fibers, such as cotton, to enhance its strength, elasticity, or other properties.) Some types of leaves, such as maple and oak, can be used to make natural dyes for textiles and fabrics.</li> <br />
                        <li>Compostable food containers - Food containers made from materials such as sugarcane fiber, bamboo, and paper can be used for takeout and delivery, and are designed to break down quickly in composting facilities. (e.g. bagasse can be molded into various shapes to create eco-friendly and biodegradable food packaging, such as plates, bowls, and clamshell containers)</li> <br />
                        <li>Biodegradable diapers - Diapers made from plant-based materials can be composted after use, reducing the amount of waste sent to landfills.</li> <br />
                        <li>Biodegradable building materials - Building materials made from recycled materials such as wood and glass can be used to create eco-friendly structures that are biodegradable and energy-efficient. Other fibers and such as bamboo or bagasse can be used to create a variety of building materials, such as insulation, particle board, roofing materials, ceiling tiles, concrete blocks, and wall panels. Combined fibers with hemp, dry wooden branches and others can be used to reinforce concrete and other building materials, making them stronger and more durable. They can be also used for decorative elements in homes and gardens e.g., doors, bedframes, bookshelves, kitchen cabinets, garden furniture, out-door decks.</li> <br />
                        <li>In-door furniture made using fibers – larger dry wooden branches can be used to create rustic furniture, such as chairs, tables, and benches.</li> <br />
                        <li>Biodegradable packaging peanuts - Packing peanuts made from biodegradable materials such as cornstarch, potato starch, or recycled paper can be used as an alternative to traditional plastic packing peanuts, which are not biodegradable.</li> <br />
                        <li>Biodegradable cutlery - Cutlery made from plant-based materials such as cornstarch or bamboo can be used as an eco-friendly alternative to traditional plastic cutlery.</li> <br />
                        <li>Biodegradable pet products - Products such as pet food containers, litter boxes, and poop bags made from biodegradable materials can help reduce the environmental impact of pet ownership. Animal feed: e.g. sugar cane fibers can be processed into pellets or other forms of animal feed for livestock and other animals. Some animals, such as goats, sheep, and rabbits, can eat dry leaves as part of their diet.</li> <br />
                        <li>Biodegradable gardening products - Gardening products such as plant pots, seed trays, and gardening tools made from biodegradable materials can be used as a sustainable alternative to traditional plastic products. Compost and fertilizer: Dry leaves can be composted and used as a natural fertilizer for plants and gardens. Mulch: Dry leaves can also be used as a natural mulch to suppress weeds, retain moisture, and provide nutrients to soil. Soil improvement: Dry leaves can be used to improve soil quality and structure. When leaves are added to soil, they help to retain moisture, provide nutrients, and improve soil aeration. Dry leaves can be used to deter pests in gardens and other outdoor spaces. Some insects, such as snails and slugs, are repelled by the tannins in dry leaves. Compostable planters: dry leaves can be combined with biodegradable fibers, such as jute or hemp, to create compostable planters for gardening. Garden stakes: Dry wooden branches can be cut into stakes and used in gardens to support plants.</li> <br />
                        <li>Biodegradable beauty products - Beauty products such as shampoo bars, soap bars, and toothbrushes made from natural and biodegradable materials can help reduce plastic waste and promote sustainable living.</li> <br />
                        <li>Biofuel – e.g. bagasse can be used as a fuel source in the production of ethanol and other biofuels, making it a valuable energy resource. Some grasses, such as switchgrass and miscanthus, are used to produce biofuels as a renewable energy source.</li> <br />
                        <li>CCS (Carbon Capture Storage) - this is new research to capture and store Co2 in a solid form. There are different methods of CO2 capture and storage. In this process, CO2 is captured from industrial processes, such as power generation or manufacturing, and then stored in geological formations, such as depleted oil and gas reservoirs or deep saline aquifers. The captured CO2 is typically stored in a compressed form, such as a supercritical fluid or dry ice (frozen CO2), rather than a crystal. These forms of CO2 storage help to prevent the release of CO2 into the atmosphere, which can help to mitigate climate change. CCS is still an emerging technology, which needs to be explored. However, it is an approach indicating that CO2 can be used in crystal form for specific products. CCS is including the following: mineral carbonation, 
bioenergy with carbon capture and storage (BECCS), direct air capture (DAC).</li> <br />
                    </ul>
                    In conclusion, there are many biodegradable and compostable products in abundance that can be made from recycled materials, and they are an important part of the move towards a more sustainable, cheaper, and environmentally friendly lifestyle. Overall, raw materials are a versatile and sustainable materials that can be used in a wide range of products, from food packaging to building materials to textiles. Additionally, using different types of raw materials can help to reduce waste, our impact on the environment, and support a more circular economy.
                </p>
            </div>
            
            <ReturnHome />
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#041f26",
        color: "white",
        padding: "20px",
        borderRadius: "0px",
        boxShadow: "0px 0px 10px #282c34",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "justify",
    },
    title: {
        textAlign: "center",
        fontSize: "36px",
        margin: "0 0 20px 0"
    },
    subtitle: {
        textAlign: "justify",
        fontSize: "24px",
        margin: "0 0 0px 0"
    },
    p: {
        textAlign: "justify",
        fontSize: "16px",
        margin: "0 0 0px 0"
        
    },
}

export default OurResearch;
