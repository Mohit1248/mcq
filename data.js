// Food Biotechnology (BTA06) - Question Bank
const courseData = {
  "subject": "Food Biotechnology (BTA06)",
  "chapters": [
    {
      "id": "unit1",
      "title": "Unit I: Introduction to Food Biotechnology",
      "subtopics": [
        {
          "id": "unit1_numerical",
          "title": "Numerical Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A fermentation facility is producing a probiotic culture for incorporation into a functional beverage. The microbial population at inoculation is 10⁴ CFU/mL. After optimization of growth conditions, the culture reaches 10⁸ CFU/mL before downstream processing. The quality manager must determine the extent of microbial growth achieved during fermentation to verify compliance with process specifications. Based on logarithmic growth principles, identify the magnitude of population increase observed in the bioreactor.",
              "options": [
                "2 log cycles",
                "3 log cycles",
                "4 log cycles",
                "5 log cycles"
              ],
              "answer": 2,
              "solution": "Log increase = log(10⁸) − log(10⁴) = 8 − 4 = 4 log cycles 4 log cycles"
            },
            {
              "q": "A fruit beverage contains a preservative at 450 ppm. Regulatory standards permit a maximum concentration of 600 ppm. Laboratory analysis indicates that processing losses reduce preservative effectiveness by approximately 20% during storage. The quality assurance team must determine whether the effective preservative concentration remains within the legally acceptable range after storage. Based on the effective concentration remaining in the product, identify the most appropriate conclusion.",
              "options": [
                "Effective concentration is 360 ppm",
                "Effective concentration is 420 ppm",
                "Effective concentration is 480 ppm",
                "Effective concentration is 540 ppm"
              ],
              "answer": 0,
              "solution": "Effective concentration = 450 × (1 − 0.20) = 360 ppm 360 ppm"
            },
            {
              "q": "A biotechnology laboratory compares two enzyme preparations used for juice clarification. Enzyme A exhibits an activity of 120 U/mL while Enzyme B exhibits an activity of 150 U/mL. The process requires a minimum activity of 140 U/mL to achieve the desired clarification within the available processing window. The production manager must evaluate the suitability of the enzyme systems before commercial implementation. Which option satisfies the process requirement?",
              "options": [
                "Only Enzyme A",
                "Only Enzyme B",
                "Both enzymes",
                "Neither enzyme"
              ],
              "answer": 1,
              "solution": "Required activity = 140 U/mL Enzyme A = 120 U/mL (not sufficient) Enzyme B = 150 U/mL (sufficient) Only Enzyme B"
            },
            {
              "q": "A food additive manufacturer prepares a stock solution containing 2% antioxidant. During formulation, the additive is diluted tenfold before addition to the final food product. The formulation scientist must determine the concentration of antioxidant available after dilution to verify whether the intended protection against lipid oxidation can be achieved. Which concentration best represents the diluted solution?",
              "options": [
                "0.02%",
                "0.2%",
                "2%",
                "20%"
              ],
              "answer": 1,
              "solution": "2% ÷ 10 = 0.2% 0.2%"
            },
            {
              "q": "A canned food processor determines that the target microorganism possesses a D121°C value of 0.25 min. Regulatory requirements specify a 12D process to ensure commercial sterility. During process validation, the product is maintained at 121°C under controlled conditions. The thermal process engineer must calculate the minimum holding period required to satisfy the microbial destruction target without introducing unnecessary quality deterioration. Which holding time is most appropriate?",
              "options": [
                "2.0 min",
                "3.0 min",
                "4.0 min",
                "5.0 min"
              ],
              "answer": 1,
              "solution": "12D process = 12 × 0.25 = 3 min 3.0 min"
            },
            {
              "q": "A thermal death study reports a D-value of 1.5 min at a specific processing temperature. The quality manager requires a 6-log reduction of the target microorganism. The process will operate under constant temperature conditions throughout the holding period. Determine the minimum processing time necessary to achieve the specified microbial reduction target.",
              "options": [
                "6 min",
                "7.5 min",
                "9 min",
                "10.5 min"
              ],
              "answer": 2,
              "solution": "Time required = 6 × 1.5 = 9 min 9 min"
            },
            {
              "q": "A blanching operation reduces enzyme activity from 100% to 5%. The processor has established that residual enzyme activity must remain below 10% to prevent quality deterioration during frozen storage. The process engineer must assess whether the blanching treatment meets the required performance criterion. Which conclusion is most appropriate?",
              "options": [
                "Process exceeds requirement",
                "Process fails requirement",
                "Additional freezing is required",
                "Additional packaging is required"
              ],
              "answer": 0,
              "solution": "Residual activity = 5% Requirement <10% Requirement satisfied. Process exceeds requirement"
            },
            {
              "q": "A pasteurization study reports a microbial population decline from 10⁶ CFU/mL to 10² CFU/mL after treatment. The validation team must determine the total logarithmic reduction achieved by the process before approving commercial production. Which microbial reduction best represents the effectiveness of the treatment?",
              "options": [
                "2 log",
                "3 log",
                "4 log",
                "5 log"
              ],
              "answer": 2,
              "solution": "6 − 2 = 4 log reduction 4 log"
            },
            {
              "q": "A food sample initially contains 80% moisture. After dehydration, moisture content decreases to 20%. The drying engineer must evaluate the effectiveness of the operation by determining the percentage moisture removed during processing. Which value most accurately represents moisture removal?",
              "options": [
                "40%",
                "50%",
                "60%",
                "70%"
              ],
              "answer": 2,
              "solution": "80 − 20 = 60% 60%"
            },
            {
              "q": "A frozen food product reaches its freezing point after 25 minutes. An alternative process achieves the same condition in 15 minutes. The production team must identify the relative improvement in freezing performance to assess process efficiency. Which statement best describes the improved process?",
              "options": [
                "Faster freezing rate",
                "Lower freezing rate",
                "Equal freezing rate",
                "No freezing occurred"
              ],
              "answer": 0,
              "solution": "Shorter freezing time indicates higher freezing rate. Faster freezing rate"
            },
            {
              "q": "A dehydrated product exhibits a moisture ratio of 0.25 after drying. Another batch exhibits a moisture ratio of 0.45. The processor aims to maximize shelf stability while minimizing microbial growth potential. Based on the moisture ratios obtained, which batch would be expected to provide better storage stability?",
              "options": [
                "Batch with ratio 0.45",
                "Batch with ratio 0.25",
                "Both equal",
                "Cannot be evaluated"
              ],
              "answer": 1,
              "solution": "Lower moisture ratio indicates greater moisture removal. Batch with ratio 0.25"
            },
            {
              "q": "A concentration process increases soluble solids from 12°Brix to 48°Brix. The process engineer must determine the concentration factor achieved through evaporation before approving the process design. Which concentration factor best represents the operation?",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "answer": 2,
              "solution": "48/12 = 4 4"
            },
            {
              "q": "A food irradiation facility applies a dose of 5 kGy to a spice product. Regulatory guidelines require a minimum dose of 3 kGy for microbial control and permit a maximum dose of 10 kGy. The quality assurance team must determine whether the treatment complies with both limits. Which conclusion is most appropriate?",
              "options": [
                "Below required dose",
                "Within acceptable range",
                "Above maximum dose",
                "Dose cannot be assessed"
              ],
              "answer": 1,
              "solution": "5 kGy lies between 3 and 10 kGy. Within acceptable range"
            },
            {
              "q": "A pulsed electric field system operates with an applied voltage of 30 kV across an electrode gap of 2 cm. The process engineer must determine the electric field strength to verify whether microbial inactivation conditions have been achieved. Which field strength most closely represents the operating condition?",
              "options": [
                "10 kV/cm",
                "15 kV/cm",
                "20 kV/cm",
                "25 kV/cm"
              ],
              "answer": 1,
              "solution": "Field strength = 30/2 = 15 kV/cm 15 kV/cm"
            },
            {
              "q": "A high-pressure processing unit is capable of operating at 700 MPa. A product requires a validated treatment pressure of 600 MPa for microbial control. The production manager must determine whether the equipment can reliably deliver the required process. Which conclusion is most appropriate?",
              "options": [
                "Equipment capacity insufficient",
                "Equipment capacity adequate",
                "Pressure exceeds equipment rating",
                "Treatment impossible"
              ],
              "answer": 1,
              "solution": "700 MPa > 600 MPa Equipment capacity adequate"
            },
            {
              "q": "An irradiation process reduces microbial counts from 10⁷ CFU/g to 10³ CFU/g. The validation team must determine the achieved logarithmic reduction to compare the treatment against regulatory expectations. Which reduction was achieved?",
              "options": [
                "2 log",
                "3 log",
                "4 log",
                "5 log"
              ],
              "answer": 2,
              "solution": "7 − 3 = 4 log reduction 4 log"
            },
            {
              "q": "A modified atmosphere package contains 3% oxygen, 12% carbon dioxide and the remaining gas is nitrogen. The packaging engineer must determine the nitrogen concentration present within the package atmosphere before commercial release. Which value best represents the nitrogen concentration?",
              "options": [
                "75%",
                "80%",
                "85%",
                "90%"
              ],
              "answer": 2,
              "solution": "100 − (3 + 12) = 85% 85%"
            },
            {
              "q": "A fresh produce package initially contains 5% oxygen. During storage, respiration reduces oxygen concentration to 2%. The quality team has established a critical limit of 1% oxygen to prevent anaerobic spoilage. Which conclusion is most appropriate based on the final atmosphere?",
              "options": [
                "Critical limit exceeded",
                "Atmosphere remains acceptable",
                "Package failure occurred",
                "Product must be discarded"
              ],
              "answer": 1,
              "solution": "2% > 1% Limit not crossed. Atmosphere remains acceptable"
            },
            {
              "q": "A packaging film exhibits an oxygen transmission rate of 150 cc/m²/day. A competing film exhibits a transmission rate of 75 cc/m²/day. For a highly oxidation-sensitive product, the packaging technologist must select the more protective material. Which option is most suitable?",
              "options": [
                "150 cc/m²/day film",
                "75 cc/m²/day film",
                "Both equally suitable",
                "Neither suitable"
              ],
              "answer": 1,
              "solution": "Lower oxygen transmission provides greater protection. 75 cc/m²/day film"
            },
            {
              "q": "A modified atmosphere storage chamber is designed to maintain carbon dioxide levels between 5% and 10%. Monitoring data indicate a concentration of 8% during operation. The storage manager must determine whether the atmosphere remains within the specified operating range. Which conclusion is most appropriate?",
              "options": [
                "Below operating range",
                "Within operating range",
                "Above operating range",
                "Outside specification"
              ],
              "answer": 1,
              "solution": "8% lies between 5% and 10%. Within operating range"
            }
          ]
        },
        {
          "id": "unit1_analytical",
          "title": "Analytical Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy company plans to introduce a genetically modified starter culture for yogurt production. Pilot-scale trials indicate faster fermentation, improved texture development, and reduced processing time. However, consumer surveys reveal concerns regarding product acceptance despite regulatory approval. The management team must determine the most critical aspect before commercial implementation. Which factor should receive primary consideration during decision-making?",
              "options": [
                "Consumer perception",
                "Container shape",
                "Distribution route",
                "Storage rack design"
              ],
              "answer": 0,
              "solution": "Consumer acceptance directly influences market success even when technical and regulatory requirements are satisfied."
            },
            {
              "q": "A food manufacturer is comparing two biotechnology-derived enzymes for juice clarification. One enzyme provides higher clarity while the other better preserves aroma compounds. Both meet processing requirements and regulatory standards. The company aims to maximize long-term consumer satisfaction rather than short-term processing efficiency. Which criterion should dominate the final selection process?",
              "options": [
                "Aroma retention",
                "Tank capacity",
                "Pump speed",
                "Label dimensions"
              ],
              "answer": 0,
              "solution": "Product quality attributes that influence consumer preference should be prioritized."
            },
            {
              "q": "A beverage company intends to replace a synthetic preservative with a natural antimicrobial produced through microbial fermentation. Shelf-life studies indicate equivalent microbial stability under controlled conditions. Before market launch, the company must identify the most suitable validation activity to confirm preservation effectiveness under commercial conditions. Which action is most appropriate?",
              "options": [
                "Challenge testing",
                "Logo redesign",
                "Bottle recolouring",
                "Warehouse expansion"
              ],
              "answer": 0,
              "solution": "Challenge testing evaluates preservative performance against microorganisms under realistic conditions."
            },
            {
              "q": "A processed food contains multiple additives serving different technological functions. During a product audit, quality personnel observe texture deterioration despite microbial stability and acceptable sensory scores. The formulation records indicate no changes in preservative concentration. Which additive category should be investigated first to identify the likely cause of quality loss?",
              "options": [
                "Stabilizers",
                "Preservatives",
                "Sweeteners",
                "Colourants"
              ],
              "answer": 0,
              "solution": "Stabilizers significantly influence texture maintenance during storage."
            },
            {
              "q": "A canned soup manufacturer experiences sporadic spoilage despite maintaining the specified processing temperature. Investigation reveals that product viscosity increased after formulation changes, affecting heat penetration characteristics. The thermal process schedule was not modified following reformulation. Which aspect most likely contributed to the observed spoilage problem?",
              "options": [
                "Heat transfer behaviour",
                "Label material",
                "Can diameter marking",
                "Coding format"
              ],
              "answer": 0,
              "solution": "Increased viscosity can reduce heat transfer efficiency and alter lethality distribution."
            },
            {
              "q": "A processor is comparing pasteurization and commercial sterilization for a high-acid fruit beverage. Both technologies achieve acceptable microbial safety. However, retention of flavour and nutritional quality is considered critical for product success. Which processing option should be preferred?",
              "options": [
                "Pasteurization",
                "Sterilization",
                "Reheating",
                "Ambient storage"
              ],
              "answer": 0,
              "solution": "Pasteurization generally preserves sensory and nutritional quality better than sterilization."
            },
            {
              "q": "A vegetable processing facility introduces blanching before freezing operations. Following implementation, improved colour retention and reduced enzymatic deterioration are observed during frozen storage. Management seeks to justify continuation of the process. Which primary objective of blanching best explains the observed improvement?",
              "options": [
                "Enzyme inactivation",
                "Moisture absorption",
                "Protein synthesis",
                "Packaging reduction"
              ],
              "answer": 0,
              "solution": "Blanching primarily inactivates enzymes responsible for quality deterioration."
            },
            {
              "q": "A thermal process validation study shows uniform temperature achievement in the heating medium but variable microbial survival within product containers. The process equipment operates according to design specifications. Investigators suspect product-related factors rather than equipment malfunction. Which variable should be examined first?",
              "options": [
                "Product composition",
                "Operator schedule",
                "Warehouse layout",
                "Supplier location"
              ],
              "answer": 0,
              "solution": "Product composition significantly influences heat penetration and microbial destruction."
            },
            {
              "q": "Two frozen food products are stored under identical temperature conditions. One product exhibits extensive drip loss after thawing whereas the other retains structural integrity. Both products were manufactured from the same raw material source. Which processing factor most likely explains the difference in quality?",
              "options": [
                "Freezing rate",
                "Package colour",
                "Storage label",
                "Carton thickness"
              ],
              "answer": 0,
              "solution": "Freezing rate affects ice crystal size and subsequent tissue damage."
            },
            {
              "q": "A dehydrated fruit processor aims to maximize shelf life while maintaining desirable texture and flavour. Several drying strategies are available, each providing different levels of moisture removal and quality retention. Which factor should receive highest priority when selecting the final drying condition?",
              "options": [
                "Product quality preservation",
                "Pallet arrangement",
                "Equipment paint colour",
                "Storage room height"
              ],
              "answer": 0,
              "solution": "Quality retention is essential for consumer acceptance and product value."
            },
            {
              "q": "An evaporation process is being optimized to increase production efficiency. Engineers observe that excessive concentration causes undesirable flavour changes despite achieving target solids content. Which process modification would be most suitable to reduce thermal damage while maintaining concentration objectives?",
              "options": [
                "Lower operating temperature",
                "Increase storage duration",
                "Change package artwork",
                "Reduce warehouse lighting"
              ],
              "answer": 0,
              "solution": "Lower temperatures can reduce thermal degradation during evaporation."
            },
            {
              "q": "A frozen storage facility experiences fluctuating temperatures because of frequent door openings. Product inspections reveal increased ice crystal growth and texture deterioration over time. Management seeks to identify the mechanism responsible for these quality losses. Which phenomenon is most likely involved?",
              "options": [
                "Recrystallization",
                "Fermentation",
                "Emulsification",
                "Carbonation"
              ],
              "answer": 0,
              "solution": "Temperature fluctuations promote recrystallization and quality deterioration."
            },
            {
              "q": "A food company intends to extend shelf life of fresh juice without exposing the product to elevated temperatures. Several preservation technologies are being evaluated. The selected technology must maintain fresh-like sensory characteristics while reducing microbial populations. Which technology best satisfies this requirement?",
              "options": [
                "Pulsed electric field",
                "Conventional boiling",
                "Open-pan heating",
                "Sun drying"
              ],
              "answer": 0,
              "solution": "PEF achieves microbial reduction with minimal thermal impact."
            },
            {
              "q": "A processor adopts high-pressure processing for a ready-to-eat food product. Microbial safety improves significantly, but some pressure-sensitive quality attributes are altered. Engineers must determine whether observed changes result from pressure effects rather than temperature-induced reactions. Which evaluation would provide the most direct evidence?",
              "options": [
                "Comparison with thermal treatment",
                "Packaging redesign",
                "Distribution analysis",
                "Inventory review"
              ],
              "answer": 0,
              "solution": "Comparative analysis helps isolate pressure-related effects."
            },
            {
              "q": "A spice manufacturer considers irradiation and thermal treatment for microbial control. Both methods achieve required safety levels. The company prioritizes retention of volatile flavour compounds that contribute to product value. Which technology should be preferred?",
              "options": [
                "Irradiation",
                "Thermal sterilization",
                "Reheating",
                "Boiling"
              ],
              "answer": 0,
              "solution": "Irradiation generally causes less loss of volatile flavour compounds."
            },
            {
              "q": "Following implementation of a pulsed electric field system, microbial reduction varies between production batches despite identical operating settings. Investigators suspect variations in product characteristics rather than equipment malfunction. Which parameter should be examined first?",
              "options": [
                "Electrical conductivity",
                "Carton dimensions",
                "Product logo",
                "Storage shelf number"
              ],
              "answer": 0,
              "solution": "Electrical conductivity strongly influences PEF effectiveness."
            },
            {
              "q": "A fresh produce company uses modified atmosphere packaging to extend shelf life. During storage, oxygen concentration declines faster than predicted and off-flavours begin to develop. Packaging integrity remains intact throughout distribution. Which factor is most likely responsible for the observed quality issue?",
              "options": [
                "Commodity respiration rate",
                "Package printing",
                "Barcode placement",
                "Transport colour coding"
              ],
              "answer": 0,
              "solution": "Respiration rate significantly affects internal package atmosphere."
            },
            {
              "q": "A packaging engineer must select between two films with different gas transmission characteristics. One film provides superior oxygen barrier properties, while the other allows greater gas exchange. The product is highly susceptible to oxidative deterioration during storage. Which film characteristic should be prioritized?",
              "options": [
                "Oxygen barrier performance",
                "Surface gloss",
                "Printing area",
                "Package height"
              ],
              "answer": 0,
              "solution": "Barrier performance is critical for oxidation-sensitive products."
            },
            {
              "q": "A company introduces modified atmosphere storage for fresh fruits to reduce metabolic activity during distribution. Quality monitoring demonstrates slower ripening and reduced deterioration compared with conventional storage. Which preservation principle best explains the observed outcome?",
              "options": [
                "Control of physiological activity",
                "Mechanical separation",
                "Product fortification",
                "Enzyme extraction"
              ],
              "answer": 0,
              "solution": "Modified atmospheres reduce physiological and biochemical activity."
            },
            {
              "q": "A food processor is reviewing storage strategies for minimally processed vegetables. Both refrigerated storage and modified atmosphere packaging are available. Historical records indicate that microbial growth is adequately controlled under both systems, but moisture loss remains a major concern. Which strategy should receive greater emphasis?",
              "options": [
                "Modified atmosphere packaging",
                "Ambient holding",
                "Dry storage",
                "Open display"
              ],
              "answer": 0,
              "solution": "Modified atmosphere packaging helps minimize moisture loss and quality degradation."
            }
          ]
        },
        {
          "id": "unit1_case",
          "title": "Case Studies",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy company has developed a probiotic yogurt using a newly selected bacterial culture. During refrigerated storage, the viable cell count decreases significantly before the declared shelf life. The formulation team is instructed to improve microbial survival without changing the strain or altering fermentation conditions. Several technological interventions are under consideration to achieve this objective while maintaining product quality and consumer acceptance. Which strategy should be implemented first?",
              "options": [
                "Microencapsulation",
                "Homogenization",
                "Filtration",
                "Carbonation"
              ],
              "answer": 0,
              "solution": "Microencapsulation protects probiotic cells from environmental stress and improves survival."
            },
            {
              "q": "A fruit beverage manufacturer uses a biotechnology-derived enzyme for juice clarification. During scale-up, clarification efficiency remains satisfactory, but flavour retention decreases compared with laboratory trials. Production parameters remain unchanged. The quality team must identify the most likely process factor responsible for the observed difference before approving commercial production. Which factor requires priority investigation?",
              "options": [
                "Enzyme dosage",
                "Bottle shape",
                "Storage rack design",
                "Label dimensions"
              ],
              "answer": 0,
              "solution": "Enzyme dosage directly influences clarification and flavour retention."
            },
            {
              "q": "A food processor is comparing two natural preservatives produced through microbial fermentation. Both achieve similar microbial inhibition, but one exhibits greater stability under varying pH conditions. The company intends to market products across multiple formulations with different acidity levels. The technical committee must select the most appropriate preservative for long-term use. Which criterion should drive the final decision?",
              "options": [
                "Stability across pH conditions",
                "Warehouse location",
                "Container colour",
                "Production shift timing"
              ],
              "answer": 0,
              "solution": "Broader pH stability improves applicability across different products."
            },
            {
              "q": "A manufacturer introduces a new sweetener produced through enzymatic bioprocessing. Consumer sensory trials indicate acceptable sweetness levels, but some batches exhibit inconsistent flavour perception despite identical formulations. The process engineer suspects variability within the production stage. Which aspect should be analyzed first to identify the root cause?",
              "options": [
                "Process consistency",
                "Carton thickness",
                "Package graphics",
                "Distribution route"
              ],
              "answer": 0,
              "solution": "Variation in process conditions can influence sweetener performance."
            },
            {
              "q": "A canned vegetable processor experiences spoilage in products stored under ambient conditions. Investigation reveals that filling, sealing, and raw material quality meet specifications. Process records indicate variability in thermal treatment between batches. The quality assurance team must recommend the most critical parameter to review for preventing future spoilage incidents. Which parameter should receive immediate attention?",
              "options": [
                "Thermal lethality",
                "Label placement",
                "Pallet arrangement",
                "Transport scheduling"
              ],
              "answer": 0,
              "solution": "Thermal lethality directly determines microbial destruction."
            },
            {
              "q": "A pasteurized milk plant observes reduced shelf life despite compliance with legal pasteurization temperatures. Storage and distribution systems remain unchanged. Microbiological testing suggests survival of heat-resistant organisms. The technical team must identify the most probable factor contributing to the problem before modifying process conditions. Which factor should be examined first?",
              "options": [
                "Holding time",
                "Package colour",
                "Tank volume",
                "Product branding"
              ],
              "answer": 0,
              "solution": "Pasteurization effectiveness depends on both temperature and holding time."
            },
            {
              "q": "A food company is selecting between two sterilization schedules. One schedule maximizes microbial destruction but causes noticeable quality deterioration. The second preserves sensory quality but provides a lower safety margin. Management requires a scientifically justified decision that balances safety and quality. Which principle should guide the final selection?",
              "options": [
                "Risk-based optimization",
                "Marketing preference",
                "Packaging design",
                "Warehouse capacity"
              ],
              "answer": 0,
              "solution": "Process selection should balance food safety and quality objectives."
            },
            {
              "q": "A blanching operation is introduced before freezing vegetables. Product colour improves substantially, but texture softening becomes evident during storage. Engineers suspect that process conditions may not be properly optimized. To determine the source of quality loss, which parameter should be reviewed first?",
              "options": [
                "Blanching intensity",
                "Product coding",
                "Storage shelf location",
                "Distribution frequency"
              ],
              "answer": 0,
              "solution": "Excessive blanching intensity can affect texture."
            },
            {
              "q": "A frozen food manufacturer introduces a rapid-freezing system to improve product quality. Sensory evaluations reveal better texture retention than products processed using conventional freezing. The company seeks to explain the observed improvement to support process validation reports. Which factor most directly contributes to enhanced texture preservation?",
              "options": [
                "Smaller ice crystals",
                "Larger packages",
                "Longer thawing",
                "Increased storage volume"
              ],
              "answer": 0,
              "solution": "Rapid freezing forms smaller ice crystals, reducing tissue damage."
            },
            {
              "q": "A dehydrated fruit processor notices increased moisture uptake during storage despite achieving the target moisture content at the end of drying. Packaging integrity appears satisfactory. The quality team must identify the most likely cause influencing product stability. Which parameter should be evaluated first?",
              "options": [
                "Water activity",
                "Package artwork",
                "Conveyor speed",
                "Warehouse height"
              ],
              "answer": 0,
              "solution": "Water activity strongly influences moisture migration and stability."
            },
            {
              "q": "Two drying technologies are available for a high-value herbal product. One method achieves faster drying but results in moderate loss of volatile compounds. The other method requires longer processing but preserves aroma more effectively. Product value is strongly linked to flavour retention. Which factor should dominate technology selection?",
              "options": [
                "Retention of volatile compounds",
                "Equipment colour",
                "Building orientation",
                "Operator preference"
              ],
              "answer": 0,
              "solution": "Product value depends on preservation of volatile compounds."
            },
            {
              "q": "A concentrated fruit juice exhibits flavour deterioration after evaporation. Chemical analyses indicate no contamination and packaging remains intact. Process records show prolonged exposure to elevated temperatures during concentration. Which aspect most likely contributed to quality loss?",
              "options": [
                "Thermal exposure",
                "Barcode format",
                "Storage rack design",
                "Product coding system"
              ],
              "answer": 0,
              "solution": "Extended thermal exposure can damage flavour compounds."
            },
            {
              "q": "A processor intends to use pulsed electric field technology for preserving fruit juice while maintaining fresh characteristics. Preliminary trials indicate substantial microbial reduction with minimal thermal damage. The engineering team must explain why the technology is suitable for heat-sensitive beverages. Which characteristic provides the primary advantage?",
              "options": [
                "Non-thermal treatment",
                "Larger equipment",
                "Higher package weight",
                "Extended mixing"
              ],
              "answer": 0,
              "solution": "PEF achieves microbial inactivation with minimal heating."
            },
            {
              "q": "A spice manufacturer adopts food irradiation to improve microbial safety. Microbial counts decrease significantly after treatment, but sensory quality remains largely unchanged. Management wants to identify the principle responsible for this outcome. Which mechanism best explains the observed effect?",
              "options": [
                "DNA damage in microorganisms",
                "Increased moisture content",
                "Protein enrichment",
                "Mineral fortification"
              ],
              "answer": 0,
              "solution": "Irradiation primarily damages microbial genetic material."
            },
            {
              "q": "A company is evaluating ultra-high-pressure processing and conventional thermal processing for a premium fruit product. Consumer studies indicate strong preference for fresh flavour and colour retention. Regulatory compliance can be achieved with either technology. Which consideration should be prioritized when selecting the preservation method?",
              "options": [
                "Quality preservation",
                "Package size",
                "Storage rack spacing",
                "Factory location"
              ],
              "answer": 0,
              "solution": "Quality retention is critical for premium products."
            },
            {
              "q": "A ready-to-eat food processed by high-pressure treatment demonstrates excellent microbial stability but occasional texture changes. Engineers suspect that process conditions exceed the optimum range. Which operational factor should be reviewed first?",
              "options": [
                "Applied pressure level",
                "Product logo",
                "Distribution route",
                "Warehouse lighting"
              ],
              "answer": 0,
              "solution": "Pressure intensity directly affects texture characteristics."
            },
            {
              "q": "A fresh-cut vegetable processor packages products under modified atmosphere conditions. Shelf life improves substantially compared with air-packed products. The quality manager is preparing a report explaining the primary mechanism responsible for the observed improvement. Which factor contributes most directly to shelf-life extension?",
              "options": [
                "Controlled gas composition",
                "Package printing",
                "Transport distance",
                "Carton dimensions"
              ],
              "answer": 0,
              "solution": "Modified gas composition slows deterioration and microbial growth."
            },
            {
              "q": "A packaged produce product develops off-flavours before the expected shelf life. Gas analysis reveals oxygen concentrations significantly lower than the intended specification. The packaging material and sealing process meet requirements. Which issue should be investigated first?",
              "options": [
                "Product respiration rate",
                "Label placement",
                "Pallet stacking",
                "Warehouse flooring"
              ],
              "answer": 0,
              "solution": "Respiration can excessively consume oxygen inside packages."
            },
            {
              "q": "Two packaging films are available for a high-respiration fresh produce product. One film exhibits high gas permeability, whereas the other provides a strong barrier to gas movement. The packaging team must select the material most likely to maintain a stable internal atmosphere. Which criterion should guide the decision?",
              "options": [
                "Compatibility with respiration characteristics",
                "Printing cost",
                "Film colour",
                "Roll length"
              ],
              "answer": 0,
              "solution": "Film selection should match product respiration behaviour."
            },
            {
              "q": "A modified atmosphere storage facility records increased spoilage despite maintaining low storage temperatures. Inspection confirms that refrigeration systems are functioning correctly. Measurements indicate that the atmospheric composition deviates from the prescribed range. Which parameter should be prioritized during corrective action?",
              "options": [
                "Gas composition control",
                "Shelf numbering",
                "Forklift scheduling",
                "Building paint quality"
              ],
              "answer": 0,
              "solution": "Atmospheric composition is the critical control factor in modified atmosphere storage."
            }
          ]
        },
        {
          "id": "unit1_assertion",
          "title": "Assertion and Reasoning",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy company develops a probiotic yogurt intended for distribution through extended cold-chain networks. During storage studies, the product maintains acceptable sensory quality, but viability of the probiotic culture becomes a critical performance parameter. The research team evaluates technological interventions that can improve microbial survival without affecting product characteristics. The findings are reviewed before commercial launch. Assertion (A): The viability of probiotic microorganisms influences the functional effectiveness of probiotic foods. Reason (R): Technologies that protect microbial cells during processing and storage can improve their survival.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A manufacturer replaces a synthetic antioxidant with a biotechnology-derived ingredient in a lipid-rich snack product. Accelerated shelf-life studies reveal that oxidation rates remain controlled under most storage conditions. The product development team assesses whether the replacement strategy can preserve quality throughout the declared shelf life while satisfying market expectations. Assertion (A): Antioxidant selection affects the oxidative stability of foods containing lipids. Reason (R): Oxidative reactions can influence product quality during storage.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A beverage manufacturer evaluates preservative performance in products having different pH values. Despite using identical preservative concentrations, varying levels of microbial inhibition are observed. The quality assurance team investigates the relationship between formulation characteristics and preservative effectiveness before finalizing the product specification. Assertion (A): The effectiveness of certain preservatives depends on the properties of the food system. Reason (R): Product acidity can influence the antimicrobial action of some preservatives.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A fruit processing company compares two enzyme preparations for juice clarification. One enzyme improves clarification efficiency, whereas the other provides better flavour retention. Management must determine which system offers the most suitable balance between process performance and product quality. Assertion (A): Enzyme selection can influence processing efficiency and product quality. Reason (R): Different enzymes possess distinct catalytic characteristics during food processing.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A vegetable canning facility validates a thermal process designed to ensure commercial sterility. Engineers review process records to confirm that the required level of microbial destruction has been achieved while maintaining acceptable product quality. The process is evaluated against established food safety objectives. Assertion (A): Thermal processing contributes significantly to microbial destruction in preserved foods. Reason (R): Sufficient heat exposure can reduce populations of spoilage and pathogenic microorganisms.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A processing plant uses blanching before freezing vegetables intended for long-term storage. During process review, management examines the objectives of blanching and compares them with those of sterilization processes. Product quality and preservation requirements are considered before revising the process flow. Assertion (A): Blanching and canning provide identical levels of food preservation. Reason (R): Canning generally achieves greater microbial control than blanching.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 3
            },
            {
              "q": "A dairy processor evaluates pasteurization conditions to ensure safety while preserving desirable sensory attributes. The process development team reviews the role of moderate heat treatment in controlling microbial hazards. The objective is to optimize safety without excessive quality deterioration. Assertion (A): Pasteurization aims to improve food safety while preserving product quality. Reason (R): Pasteurization generally uses lower thermal intensity than commercial sterilization.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A food technologist studies microbial destruction patterns during thermal processing of canned foods. Validation data indicate that process lethality changes when either time or temperature conditions are modified. The observations are analyzed to improve process design. Assertion (A): Thermal lethality is influenced by processing conditions. Reason (R): Time–temperature combinations affect microbial destruction during heating.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A frozen food manufacturer compares two freezing systems operating at different freezing rates. Product evaluations reveal differences in texture retention and ice crystal formation after storage. The engineering team investigates how processing conditions affect final product quality. Assertion (A): Freezing rate can influence the quality of frozen foods. Reason (R): Ice crystal characteristics are affected by freezing conditions.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A fruit processor adopts dehydration to extend shelf life and reduce transportation costs. Storage studies demonstrate improved stability compared with untreated products. The technical team evaluates the preservation mechanism associated with moisture removal. Assertion (A): Dehydration can contribute to shelf-life extension. Reason (R): Reduced water availability can limit microbial growth and activity.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A beverage company concentrates fruit juice through evaporation before transportation to distant markets. Analytical measurements reveal a substantial increase in soluble solids after processing. The production team examines the role of moisture removal in concentration operations. Assertion (A): Evaporation increases the concentration of dissolved solids in food products. Reason (R): Removal of water changes the composition of the remaining product phase.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A dehydrated vegetable product meets target moisture specifications at the end of processing. However, quality deterioration occurs during storage due to environmental exposure. The quality assurance team investigates additional factors influencing product stability after drying. Assertion (A): Moisture reduction alone guarantees storage stability of dehydrated foods. Reason (R): Packaging conditions can influence the quality of dehydrated products during storage.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 3
            },
            {
              "q": "A spice manufacturer adopts food irradiation to reduce microbial contamination while minimizing thermal damage. Product evaluations indicate acceptable sensory quality after treatment. The technical team studies the preservation mechanism responsible for microbial control. Assertion (A): Food irradiation can contribute to microbial reduction in foods. Reason (R): Ionizing radiation can affect cellular structures of microorganisms.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A beverage company investigates pulsed electric field processing as an alternative to conventional heat treatment. Pilot-scale trials indicate microbial reduction while retaining fresh-like quality characteristics. Engineers assess the underlying mechanism responsible for process effectiveness. Assertion (A): Pulsed electric field processing can reduce microbial populations with limited thermal impact. Reason (R): High-intensity electric fields can disrupt microbial cell membranes.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A ready-to-eat food manufacturer adopts ultra-high-pressure processing to improve safety while maintaining fresh quality attributes. Validation studies demonstrate effective microbial control without severe thermal exposure. The management team reviews the scientific basis for the process. Assertion (A): Ultra-high-pressure processing can inactivate microorganisms in foods. Reason (R): Pressure can alter biological structures associated with microbial survival.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A food processor compares irradiation, pulsed electric field processing, and ultra-high-pressure treatment for premium products. Management evaluates technological suitability for applications requiring minimal quality deterioration. The study examines the characteristics of emerging preservation technologies. Assertion (A): Emerging preservation technologies were developed to overcome limitations of some conventional preservation methods. Reason (R): Different preservation technologies operate through different mechanisms of microbial control.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 1
            },
            {
              "q": "A fresh produce exporter adopts modified atmosphere packaging to improve product stability during long-distance transportation. Comparative studies reveal slower deterioration than conventional packaging systems. The technical team investigates factors responsible for the observed improvement. Assertion (A): Gas composition within a package can influence product stability. Reason (R): Modified atmospheres can alter conditions affecting biological activity within packaged foods.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A manufacturer develops a fortified beverage but observes quality deterioration during distribution. Packaging studies reveal exposure to oxygen and moisture. Management evaluates alternative packaging systems to improve product stability and shelf life. Assertion (A): Packaging characteristics influence the stability of value-added food products. Reason (R): Barrier properties can limit environmental factors responsible for quality deterioration.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A storage facility modifies atmospheric conditions to extend the storage life of fresh commodities. Performance evaluations indicate improved quality retention under optimized gas compositions. The management team examines the relationship between storage atmosphere and physiological activity. Assertion (A): Storage atmosphere can affect the physiological activity of fresh produce. Reason (R): Respiration behaviour may change in response to surrounding gas composition.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A food company combines packaging technology and food additives to improve product shelf life. Quality studies indicate that stability depends on interactions among multiple preservation factors rather than a single intervention. The technical team evaluates integrated preservation strategies before commercialization. Assertion (A): Combining preservation approaches can influence overall product stability. Reason (R): Different preservation factors may collectively contribute to quality maintenance.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "unit1_bl12",
          "title": "BL1 & BL2 (Remember/Understand) Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A food scientist is introducing a new process that utilizes microorganisms to improve food production and quality. The process is intended to apply biological systems for manufacturing food products with desirable characteristics. Which term best describes this technological application?",
              "options": [
                "Food biotechnology",
                "Food engineering",
                "Food toxicology",
                "Food rheology"
              ],
              "answer": 0
            },
            {
              "q": "A fermented dairy product contains beneficial microorganisms that contribute to product functionality and consumer health benefits. The development team classifies these microorganisms according to their role in the food system. Which term is most appropriate?",
              "options": [
                "Preservatives",
                "Probiotics",
                "Emulsifiers",
                "Antioxidants"
              ],
              "answer": 1
            },
            {
              "q": "A manufacturer incorporates food additives into a beverage formulation to improve stability and maintain quality during storage. The production team explains that these substances are added in controlled amounts for specific technological purposes. Which statement best describes the role of food additives?",
              "options": [
                "They provide technological functions in foods.",
                "They completely replace food ingredients.",
                "They eliminate all microorganisms.",
                "They prevent nutrient absorption."
              ],
              "answer": 0
            },
            {
              "q": "A food processor uses enzymes during juice clarification to improve product appearance and processing efficiency. The technical team explains the reason for selecting enzymes in food applications. Which explanation is most appropriate?",
              "options": [
                "Enzymes act as biological catalysts.",
                "Enzymes function as packaging materials.",
                "Enzymes serve as colour pigments.",
                "Enzymes increase moisture content."
              ],
              "answer": 0
            },
            {
              "q": "A food processing company applies various preservation techniques to extend product shelf life and maintain safety. The objective is to prevent spoilage caused by microorganisms and other deteriorative factors. What is the primary purpose of food preservation?",
              "options": [
                "Shelf-life extension",
                "Product colouring",
                "Product dilution",
                "Ingredient replacement"
              ],
              "answer": 0
            },
            {
              "q": "A dairy processor subjects milk to controlled heating conditions to destroy pathogenic microorganisms while maintaining quality attributes. Which preservation process is being applied?",
              "options": [
                "Fermentation",
                "Pasteurization",
                "Dehydration",
                "Irradiation"
              ],
              "answer": 1
            },
            {
              "q": "A vegetable processing facility performs blanching before freezing operations. The quality assurance team explains that blanching serves a specific role before long-term storage. Which explanation is most appropriate?",
              "options": [
                "It helps control enzymatic activity.",
                "It increases product acidity.",
                "It removes nutrients.",
                "It sterilizes the product completely."
              ],
              "answer": 0
            },
            {
              "q": "A canning facility produces shelf-stable food products intended for ambient storage. The process combines thermal treatment and hermetic sealing. Why is canning considered an effective preservation method?",
              "options": [
                "It reduces microbial contamination and prevents recontamination.",
                "It removes all nutrients from foods.",
                "It increases water activity.",
                "It eliminates packaging requirements."
              ],
              "answer": 0
            },
            {
              "q": "A frozen food manufacturer lowers product temperature below its freezing point to preserve quality and extend shelf life. Which preservation method is being applied?",
              "options": [
                "Evaporation",
                "Freezing",
                "Fermentation",
                "Extrusion"
              ],
              "answer": 1
            },
            {
              "q": "A fruit processor removes water from juice to increase soluble solids concentration before transportation. Which operation is primarily responsible for this concentration process?",
              "options": [
                "Freezing",
                "Evaporation",
                "Fermentation",
                "Homogenization"
              ],
              "answer": 1
            },
            {
              "q": "A dehydrated food product exhibits improved shelf stability compared with its fresh counterpart. The technical team explains the reason for the observed preservation effect. Which explanation is most appropriate?",
              "options": [
                "Reduced water availability limits microbial growth.",
                "Increased moisture enhances preservation.",
                "Higher temperature eliminates packaging needs.",
                "Nutrient loss improves stability."
              ],
              "answer": 0
            },
            {
              "q": "A frozen food company compares slow freezing and rapid freezing methods. Product evaluations reveal differences in texture after thawing. Why can freezing rate influence quality?",
              "options": [
                "Ice crystal formation varies with freezing conditions.",
                "Water becomes a nutrient source.",
                "Freezing increases enzymatic activity.",
                "Frozen products require no storage control."
              ],
              "answer": 0
            },
            {
              "q": "A spice manufacturer adopts a preservation technology that uses ionizing energy to improve microbial quality while minimizing thermal damage. Which technology is being used?",
              "options": [
                "Irradiation",
                "Evaporation",
                "Fermentation",
                "Dry salting"
              ],
              "answer": 0
            },
            {
              "q": "A beverage processor evaluates a non-thermal preservation method that uses high-intensity electric fields to control microorganisms. Which technology is being considered?",
              "options": [
                "Pulsed Electric Field processing",
                "Vacuum drying",
                "Pasteurization",
                "Smoking"
              ],
              "answer": 0
            },
            {
              "q": "A ready-to-eat food producer applies ultra-high-pressure processing to improve product safety while maintaining fresh quality attributes. Why is this technology considered a non-thermal preservation method?",
              "options": [
                "It relies primarily on pressure rather than heat.",
                "It removes all water from foods.",
                "It prevents packaging operations.",
                "It increases product acidity."
              ],
              "answer": 0
            },
            {
              "q": "A food technologist compares conventional heating with emerging preservation technologies. The evaluation focuses on minimizing quality changes while maintaining safety. Which statement best explains the growing interest in emerging technologies?",
              "options": [
                "They may preserve quality while ensuring safety.",
                "They eliminate the need for processing.",
                "They increase spoilage rates.",
                "They prevent food packaging."
              ],
              "answer": 0
            },
            {
              "q": "A fresh produce exporter modifies the gas composition surrounding fruits during storage and transportation to extend shelf life. Which preservation approach is being applied?",
              "options": [
                "Modified atmosphere storage",
                "Dehydration",
                "Fermentation",
                "Blanching"
              ],
              "answer": 0
            },
            {
              "q": "A packaging company develops containers that maintain specific gas compositions around food products during storage. Which packaging technology is being used?",
              "options": [
                "Modified atmosphere packaging",
                "Vacuum evaporation",
                "Freeze concentration",
                "Thermal sterilization"
              ],
              "answer": 0
            },
            {
              "q": "A fortified beverage experiences quality deterioration due to exposure to oxygen during storage. The packaging development team evaluates materials with improved barrier properties. Why are barrier properties important?",
              "options": [
                "They limit environmental factors that affect product quality.",
                "They increase microbial growth.",
                "They eliminate nutrients.",
                "They replace preservation processes."
              ],
              "answer": 0
            },
            {
              "q": "A food processor combines packaging systems with food additives to improve shelf life. The technical team explains that preservation depends on multiple interacting factors. Which explanation best reflects this concept?",
              "options": [
                "Multiple preservation factors can work together to maintain quality.",
                "Packaging alone determines shelf life.",
                "Additives eliminate the need for storage control.",
                "Preservation depends only on processing temperature."
              ],
              "answer": 0
            }
          ]
        }
      ]
    },
    {
      "id": "unit2",
      "title": "Unit II: Food Engineering Operations",
      "subtopics": [
        {
          "id": "unit2_numerical",
          "title": "Numerical Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A fruit juice processing plant receives a batch of mango juice having a mass of 540 kg occupying a storage tank volume of 0.45 m³. The quality control engineer needs to determine the density of the juice for process standardization and equipment calibration. Calculate the density of the mango juice based on the given information.",
              "options": [
                "1000 kg/m³",
                "1200 kg/m³",
                "1400 kg/m³",
                "1600 kg/m³"
              ],
              "answer": 1,
              "solution": "Density = Mass / Volume = 540 / 0.45 = 1200 kg/m³ 1200 kg/m³"
            },
            {
              "q": "A dairy plant analyzes fresh milk having a density of 1030 kg/m³. The density of water at the reference temperature is 1000 kg/m³. The production supervisor wants to verify whether the milk meets the standard specific gravity range. Determine the specific gravity of the milk sample.",
              "options": [
                "0.97",
                "1.03",
                "1.30",
                "1.50"
              ],
              "answer": 1,
              "solution": "Specific Gravity = Density of milk / Density of water = 1030 / 1000 = 1.03 1.03"
            },
            {
              "q": "A sugar syrup exhibits a shear stress of 30 Pa when subjected to a shear rate of 15 s⁻¹ during rheological testing. The process engineer needs to estimate the apparent viscosity for selecting a suitable pump. Determine the apparent viscosity of the syrup.",
              "options": [
                "1 Pa·s",
                "2 Pa·s",
                "3 Pa·s",
                "4 Pa·s"
              ],
              "answer": 1,
              "solution": "Viscosity = Shear Stress / Shear Rate = 30 / 15 = 2 Pa·s 2 Pa·s"
            },
            {
              "q": "A beverage manufacturer adds an emulsifier that reduces the surface tension of a liquid from 72 mN/m to 36 mN/m. The R&D team wishes to determine the percentage reduction achieved. Calculate the percentage reduction in surface tension.",
              "options": [
                "25%",
                "40%",
                "50%",
                "75%"
              ],
              "answer": 2,
              "solution": "% Reduction = [(72−36)/72] ×100 = 50% 50%"
            },
            {
              "q": "A grain processing unit receives 5000 kg of wheat containing 250 kg impurities. After cleaning, only 20 kg impurities remain. The plant manager wants to determine the cleaning efficiency of the operation. Calculate the cleaning efficiency.",
              "options": [
                "80%",
                "88%",
                "92%",
                "96%"
              ],
              "answer": 2,
              "solution": "Cleaning Efficiency = [(250−20)/250] ×100 = 92% 92%"
            },
            {
              "q": "An apple processing facility uses an automated grading machine to classify apples according to size and quality before packaging. During a production shift, the machine processes 1200 apples collected from a cold storage warehouse. Upon manual verification, it is observed that 1080 apples were correctly graded into their designated categories. The quality assurance department wants to assess the performance of the grading system. Determine the grading efficiency of the machine.",
              "options": [
                "80%",
                "85%",
                "90%",
                "95%"
              ],
              "answer": 2,
              "solution": "Grading Efficiency = (1080/1200) × 100 = 90% 90%"
            },
            {
              "q": "A potato chip manufacturing company receives 800 kg of fresh potatoes for processing. After the peeling operation, the weight of usable peeled potatoes available for slicing is found to be 680 kg. The removed portion consists mainly of peel, eyes, and damaged tissue. The production engineer wants to estimate the material loss during peeling for process optimization. Calculate the percentage peeling loss.",
              "options": [
                "10%",
                "12%",
                "15%",
                "18%"
              ],
              "answer": 2,
              "solution": "Peeling Loss = [(800 − 680)/800] × 100 = 15% 15%"
            },
            {
              "q": "A cold storage facility stores 2000 kg of onions under controlled temperature and humidity conditions. After several weeks of storage, the onions are weighed again and the final weight is found to be 1840 kg due to moisture loss and respiration. The warehouse supervisor wants to determine the extent of shrinkage that occurred during storage. Calculate the percentage storage shrinkage experienced by the onions.",
              "options": [
                "6%",
                "8%",
                "10%",
                "12%"
              ],
              "answer": 1,
              "solution": "Shrinkage = [(2000 − 1840)/2000] × 100 = 8% 8%"
            },
            {
              "q": "A spice processing company uses a hammer mill to reduce the particle size of dried peppercorns before packaging. The average particle diameter of the feed material entering the mill is 12 mm, while the average particle diameter after milling is 3 mm. The process engineer must determine the size reduction ratio to evaluate mill performance. Based on the given data, calculate the reduction ratio achieved.",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "answer": 2,
              "solution": "Reduction Ratio = Feed size / Product size = 12/3 = 4 4"
            },
            {
              "q": "A food blender used in the manufacture of instant soup powder initially exhibits a mixing index of 0.20, indicating poor uniformity. After operating under optimized conditions for a specified period, the mixing index increases to 0.95, representing nearly complete mixing. The process manager wants to quantify the improvement achieved during mixing. Determine the increase in mixing index.",
              "options": [
                "0.55",
                "0.65",
                "0.75",
                "0.85"
              ],
              "answer": 2,
              "solution": "Improvement = 0.95 − 0.20 = 0.75 0.75"
            },
            {
              "q": "A salad dressing manufacturer prepares an oil-in-water emulsion containing 100 mL of dispersed oil phase. After storage for several days, 12 mL of oil separates and forms a distinct layer on the surface. The product development team needs to determine the stability of the emulsion to assess product quality. Calculate the emulsion stability percentage.",
              "options": [
                "82%",
                "88%",
                "92%",
                "96%"
              ],
              "answer": 1,
              "solution": "Stability = [(100 − 12)/100] × 100 = 88% 88%"
            },
            {
              "q": "A food powder manufacturer reduces the diameter of particles from 10 mm to 2 mm using a grinding operation. For spherical particles, the available surface area is inversely proportional to the particle diameter. The engineer wants to estimate the increase in surface area available for mass and heat transfer after grinding. Determine the factor by which the surface area increases.",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "answer": 3,
              "solution": "Surface Area Increase Factor = 10/2 = 5 5"
            },
            {
              "q": "A juice processing plant employs a filtration system to remove suspended solids before packaging. The feed stream contains 200 kg of suspended solids, and the filtration unit successfully removes 180 kg of these solids. The plant engineer must evaluate the performance of the filtration process to ensure product clarity. Determine the filtration efficiency of the system.",
              "options": [
                "85%",
                "90%",
                "92%",
                "95%"
              ],
              "answer": 1,
              "solution": "Efficiency = (180/200) × 100 = 90% 90%"
            },
            {
              "q": "A membrane separation unit is used to concentrate proteins in a dairy processing plant. The protein concentration in the feed solution is 5%, whereas the protein concentration in the permeate is measured as 0.5%. The process engineer needs to determine the effectiveness of the membrane in retaining proteins. Calculate the rejection coefficient of the membrane.",
              "options": [
                "80%",
                "85%",
                "90%",
                "95%"
              ],
              "answer": 2,
              "solution": "R = [(5 − 0.5)/5] × 100 = 90% 90%"
            },
            {
              "q": "A milk concentration process uses ultrafiltration to reduce the volume of liquid handled during further processing. The system receives 1000 L of milk feed and produces 250 L of concentrated retentate. The dairy technologist wishes to determine the concentration factor achieved during the operation. Calculate the concentration factor.",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "answer": 2,
              "solution": "Concentration Factor = 1000/250 = 4 4"
            },
            {
              "q": "A filter cake obtained after filtration contains 60% moisture content. Following a drying operation, the moisture content decreases to 15%. The production supervisor wants to evaluate the effectiveness of the drying process by calculating the percentage reduction in moisture content. Determine the moisture reduction achieved.",
              "options": [
                "60%",
                "70%",
                "75%",
                "80%"
              ],
              "answer": 2,
              "solution": "Reduction = [(60 − 15)/60] × 100 = 75% 75%"
            },
            {
              "q": "An oil extraction plant processes 500 kg of oil-bearing seeds containing 150 kg of extractable oil. After completion of solvent extraction and recovery operations, 135 kg of oil is successfully recovered. The process engineer must determine the extraction yield to evaluate plant performance. Calculate the extraction yield.",
              "options": [
                "80%",
                "85%",
                "90%",
                "95%"
              ],
              "answer": 2,
              "solution": "Yield = (135/150) × 100 = 90% 90%"
            },
            {
              "q": "A fruit processing company extracts soluble solids from fruit pulp for the preparation of concentrated beverages. The raw material contains 40 kg of soluble solids, and the extraction process recovers 34 kg of these solids. The production manager wishes to determine the extraction efficiency. Calculate the percentage recovery of soluble solids.",
              "options": [
                "80%",
                "85%",
                "90%",
                "95%"
              ],
              "answer": 1,
              "solution": "Recovery = (34/40) × 100 = 85% 85%"
            },
            {
              "q": "A sugar manufacturing plant sends a concentrated sugar solution containing 250 kg of dissolved sugar to a crystallizer. After controlled cooling and crystal growth, 200 kg of sugar crystals are harvested. The process engineer wants to determine the effectiveness of the crystallization operation. Calculate the crystallization yield.",
              "options": [
                "75%",
                "80%",
                "85%",
                "90%"
              ],
              "answer": 1,
              "solution": "Yield = (200/250) × 100 = 80% 80%"
            },
            {
              "q": "A batch crystallizer is expected to produce a theoretical maximum of 500 kg of sugar crystals under ideal operating conditions. However, the actual amount of crystals collected after separation and drying is 450 kg. The production manager needs to assess the recovery efficiency of the crystallization process. Determine the crystal recovery efficiency.",
              "options": [
                "80%",
                "85%",
                "90%",
                "95%"
              ],
              "answer": 2,
              "solution": "Efficiency = (450/500) × 100 = 90% 90%"
            }
          ]
        },
        {
          "id": "unit2_analytical",
          "title": "Analytical Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A fruit juice processing plant concentrates orange juice by evaporating water before packaging. The process engineer observes that the density of the juice increases as the concentration of soluble solids rises. Two juice samples have the same volume but different sugar concentrations. The engineer wants to identify the factor primarily responsible for the increase in density during concentration. Based on food property principles, determine the most appropriate explanation.",
              "options": [
                "Increase in dissolved solids per unit volume",
                "Increase in air incorporation",
                "Reduction in viscosity only",
                "Increase in surface tension only"
              ],
              "answer": 0,
              "solution": "Density depends on mass per unit volume. Concentration increases the mass of solids within the same volume, leading to higher density. Increase in dissolved solids per unit volume"
            },
            {
              "q": "A ketchup manufacturer observes that the product flows easily when squeezed from a bottle but remains relatively thick when stored without disturbance. During quality testing, viscosity decreases as shear force increases. The product development team wants to classify the flow behavior of ketchup. Based on rheological principles, identify the type of fluid behavior exhibited by ketchup.",
              "options": [
                "Newtonian fluid",
                "Dilatant fluid",
                "Pseudoplastic fluid",
                "Ideal fluid"
              ],
              "answer": 2,
              "solution": "Viscosity decreases with increasing shear rate, which is characteristic of shear-thinning or pseudoplastic behavior. Pseudoplastic fluid"
            },
            {
              "q": "A beverage company is developing a flavored milk drink containing oil-soluble vitamins. An emulsifier is added to improve the stability of the oil droplets in water. The food scientist explains that the emulsifier accumulates at the oil–water interface. The objective is to understand why emulsifiers improve emulsion stability. Identify the primary mechanism involved.",
              "options": [
                "Increasing density difference",
                "Reducing interfacial tension",
                "Increasing particle size",
                "Increasing sedimentation"
              ],
              "answer": 1,
              "solution": "Emulsifiers stabilize emulsions by reducing interfacial tension between oil and water phases. Reducing interfacial tension"
            },
            {
              "q": "A bakery stores freshly baked bread under ambient conditions for several days. Consumers report that the bread becomes firmer and less desirable with time. The quality assurance team investigates the cause of the texture change. Based on food texture principles, identify the major reason for bread staling.",
              "options": [
                "Protein denaturation only",
                "Starch retrogradation",
                "Sugar caramelization",
                "Fat oxidation only"
              ],
              "answer": 1,
              "solution": "Bread staling primarily occurs due to starch retrogradation, which increases firmness. Starch retrogradation"
            },
            {
              "q": "A vegetable processing unit receives freshly harvested carrots from multiple farms. The carrots contain soil particles, stones, and plant debris that could damage downstream equipment. Before peeling and cutting operations, the processing manager insists on thorough cleaning. The objective is to determine the primary reason for performing cleaning as the first preparative operation.",
              "options": [
                "Improve product color only",
                "Remove foreign materials and contaminants",
                "Increase moisture content",
                "Enhance sweetness"
              ],
              "answer": 1,
              "solution": "Cleaning removes undesirable materials and protects equipment while improving product safety. Remove foreign materials and contaminants"
            },
            {
              "q": "A mango processing company grades fruits according to size and maturity before packaging. The marketing department requires uniform products to satisfy customer expectations. The plant manager explains that grading is an essential preparative operation. Identify the main benefit of grading in food processing.",
              "options": [
                "Increase microbial growth",
                "Ensure product uniformity",
                "Reduce nutritional value",
                "Increase waste generation"
              ],
              "answer": 1,
              "solution": "Grading ensures consistency in quality, size, and appearance. Ensure product uniformity"
            },
            {
              "q": "A cold storage facility stores apples at low temperatures immediately after harvest. The storage manager notes that reducing temperature slows down respiration and spoilage. The objective is to maximize shelf life while maintaining quality. Which principle best explains the effectiveness of refrigerated storage?",
              "options": [
                "Increased enzyme activity",
                "Reduced biological and microbial activity",
                "Increased water activity",
                "Enhanced oxidation rate"
              ],
              "answer": 1,
              "solution": "Lower temperatures reduce microbial growth and biochemical reactions. Reduced biological and microbial activity"
            },
            {
              "q": "A potato processing plant plans to install a new peeling system. The management wants a method that minimizes edible flesh loss while maintaining high productivity. Engineers evaluate steam peeling and abrasive peeling methods. Which factor is most important when selecting a peeling method?",
              "options": [
                "Maximum peel thickness removal",
                "Minimum product loss",
                "Highest energy consumption",
                "Maximum water use"
              ],
              "answer": 1,
              "solution": "Efficient peeling aims to remove peel while minimizing edible flesh loss. Minimum product loss"
            },
            {
              "q": "A spice manufacturing company grinds whole peppercorns into fine powder before packaging. The product development team notes that grinding improves flavor release during cooking. The engineer explains that particle size reduction changes several physical characteristics. What is the primary processing advantage of size reduction?",
              "options": [
                "Decrease surface area",
                "Increase surface area for mass transfer",
                "Reduce accessibility of flavor compounds",
                "Increase particle size uniformity by enlargement"
              ],
              "answer": 1,
              "solution": "Size reduction increases surface area, improving extraction and flavor release. Increase surface area for mass transfer"
            },
            {
              "q": "A manufacturer produces an instant soup mix containing starch, salt, spices, and flavoring agents. Consumers expect the product to have uniform taste in every serving. The processing team focuses on achieving proper mixing before packaging. What is the main purpose of the mixing operation?",
              "options": [
                "Particle enlargement",
                "Uniform distribution of ingredients",
                "Crystallization of solids",
                "Moisture removal"
              ],
              "answer": 1,
              "solution": "Mixing ensures homogeneity and consistency throughout the product. Uniform distribution of ingredients"
            },
            {
              "q": "A salad dressing shows separation into oil and water layers after prolonged storage. The quality control department investigates the cause of instability. The product originally formed a stable oil-in-water emulsion. Which phenomenon is most directly responsible for visible phase separation?",
              "options": [
                "Coalescence of droplets",
                "Crystallization of sugar",
                "Protein denaturation only",
                "Drying of the product"
              ],
              "answer": 0,
              "solution": "Droplet coalescence causes emulsion breakdown and phase separation. Coalescence of droplets"
            },
            {
              "q": "A beverage company notices that insufficient mixing results in uneven sweetness in bottled drinks. Increasing mixing time improves product uniformity but excessive mixing increases production costs. The process engineer must determine the purpose of optimizing mixing time. Which outcome indicates proper mixing?",
              "options": [
                "Complete ingredient segregation",
                "Uniform composition throughout the batch",
                "Increased particle size",
                "Reduced ingredient interaction"
              ],
              "answer": 1,
              "solution": "Proper mixing produces a homogeneous product with consistent composition. Uniform composition throughout the batch"
            },
            {
              "q": "A juice processing plant uses filtration to remove suspended pulp particles before packaging. Consumers prefer a clear beverage with improved visual appearance. The filtration system retains solid particles while allowing liquid to pass through. What is the primary purpose of filtration in this process?",
              "options": [
                "Increase sugar concentration",
                "Separate suspended solids from liquid",
                "Increase viscosity",
                "Promote fermentation"
              ],
              "answer": 1,
              "solution": "Filtration is a mechanical separation process used to remove suspended solids. Separate suspended solids from liquid"
            },
            {
              "q": "A dairy plant uses ultrafiltration to concentrate proteins from milk. The membrane allows water and small molecules to pass while retaining proteins. The plant manager wants to understand the basis of separation. Which property is primarily responsible for membrane separation?",
              "options": [
                "Particle size differences",
                "Product color",
                "Product flavor",
                "Surface roughness"
              ],
              "answer": 0,
              "solution": "Membrane separation mainly depends on molecular or particle size differences. Particle size differences"
            },
            {
              "q": "During filtration of sugar syrup, solid particles gradually accumulate on the filter medium. As filtration proceeds, resistance to liquid flow increases. The process engineer identifies the formation of a filter cake. What is the main effect of cake formation on filtration rate?",
              "options": [
                "Increases filtration rate continuously",
                "Provides additional resistance to flow",
                "Eliminates pressure drop",
                "Reduces solid retention"
              ],
              "answer": 1,
              "solution": "Filter cake increases resistance, causing a reduction in filtration rate. Provides additional resistance to flow"
            },
            {
              "q": "A beverage manufacturer uses reverse osmosis to concentrate fruit juice without extensive heating. The process removes water while retaining flavor compounds and nutrients. The production manager prefers this method to minimize thermal damage. What is the major advantage of reverse osmosis?",
              "options": [
                "High-temperature concentration",
                "Low-temperature concentration",
                "Increased oxidation",
                "Product sterilization only"
              ],
              "answer": 1,
              "solution": "Reverse osmosis allows concentration at low temperatures, preserving quality. Low-temperature concentration"
            },
            {
              "q": "An edible oil plant uses solvent extraction to recover oil from soybean flakes. Engineers are selecting a solvent that maximizes oil recovery and minimizes processing costs. The solvent should efficiently dissolve the target component. Which property is most important in solvent selection?",
              "options": [
                "Solubility of oil in solvent",
                "Product color",
                "Particle hardness",
                "Moisture content only"
              ],
              "answer": 0,
              "solution": "Efficient extraction requires a solvent with high affinity for the desired solute. Solubility of oil in solvent"
            },
            {
              "q": "A tea manufacturer wants to improve the extraction of flavor compounds from tea leaves. Process engineers consider increasing extraction temperature and improving contact between leaves and water. The objective is to enhance mass transfer during extraction. Which factor most directly increases extraction rate?",
              "options": [
                "Reduced contact area",
                "Increased temperature",
                "Increased crystal size",
                "Reduced solvent movement"
              ],
              "answer": 1,
              "solution": "Higher temperature generally increases diffusion and extraction rate. Increased temperature"
            },
            {
              "q": "A sugar solution is cooled gradually after concentration. As temperature decreases, crystals begin to appear in the solution. The production supervisor explains that crystal formation occurs because solubility decreases with temperature. What condition initiates crystallization?",
              "options": [
                "Unsaturated solution",
                "Supersaturated solution",
                "Dilute solution",
                "Neutral solution"
              ],
              "answer": 1,
              "solution": "Crystallization begins when the solution becomes supersaturated. Supersaturated solution"
            },
            {
              "q": "A pharmaceutical food additive is produced through crystallization. The quality control team specifies a narrow crystal size distribution to ensure uniform product performance. Process conditions are adjusted to control nucleation and crystal growth. Why is crystal size control important?",
              "options": [
                "Uniform product quality and handling",
                "Increased contamination",
                "Reduced product purity",
                "Elimination of crystal formation"
              ],
              "answer": 0,
              "solution": "Crystal size influences purity, flowability, handling, and product consistency. Uniform product quality and handling"
            }
          ]
        },
        {
          "id": "unit2_case",
          "title": "Case Studies",
          "notes": [],
          "mcqs": [
            {
              "q": "A beverage company concentrates apple juice before packaging. The density of fresh juice is measured as 1.04 g/cm³, while the concentrated juice has a density of 1.18 g/cm³. The production manager observes that the concentration process removes water without significantly affecting the soluble solids. The engineering team wants to identify the reason for the density increase. Based on food property principles, determine the most likely explanation for the observed change.",
              "options": [
                "Increased air incorporation",
                "Increased solids concentration per unit volume",
                "Reduced flavor content",
                "Increased moisture content"
              ],
              "answer": 1,
              "solution": "Density increases when more mass is present within the same volume."
            },
            {
              "q": "A confectionery plant needs to transport a sugar syrup with a viscosity of 5 Pa·s through a pipeline system. The existing centrifugal pump performs poorly because the syrup flows slowly and creates excessive resistance. The process engineer must recommend a suitable pumping system. Considering the rheological characteristics of highly viscous fluids, identify the most appropriate pump type.",
              "options": [
                "Centrifugal pump",
                "Reciprocating pump",
                "Positive displacement pump",
                "Jet pump"
              ],
              "answer": 2,
              "solution": "Highly viscous fluids are best handled by positive displacement pumps."
            },
            {
              "q": "A salad dressing manufacturer reports that oil droplets separate after two weeks of storage. The product contains oil, water, and flavoring agents. Laboratory analysis shows insufficient emulsifier concentration in the formulation. The R&D team must identify the most probable cause of instability. Which factor is responsible for the separation?",
              "options": [
                "Reduced interfacial stabilization",
                "Increased density of water",
                "Increased sugar concentration",
                "Reduced viscosity only"
              ],
              "answer": 0,
              "solution": "Insufficient emulsifier leads to droplet coalescence and instability."
            },
            {
              "q": "A bakery receives customer complaints that packaged bread becomes hard after three days of storage. Moisture loss is minimal because the packaging material has excellent barrier properties. The food technologist investigates starch-related changes occurring during storage. Which phenomenon most likely explains the increase in firmness?",
              "options": [
                "Caramelization",
                "Starch retrogradation",
                "Fermentation",
                "Protein hydrolysis"
              ],
              "answer": 1,
              "solution": "Bread staling is mainly caused by starch retrogradation."
            },
            {
              "q": "A fruit beverage manufacturer processes juice at high temperatures for an extended period. Sensory analysis indicates a significant loss of aroma compounds after processing. The quality team wants to identify the major reason for flavor deterioration. Which factor is primarily responsible?",
              "options": [
                "Volatilization of aroma compounds",
                "Increased density",
                "Reduced viscosity",
                "Increased crystallization"
              ],
              "answer": 0,
              "solution": "Many flavor compounds are volatile and can be lost during heating."
            },
            {
              "q": "A wheat processing facility receives 10,000 kg of grain containing stones, dust, and plant debris. Improper cleaning previously caused damage to milling equipment. The plant manager wants to justify investment in an improved cleaning system. What is the primary benefit of effective cleaning?",
              "options": [
                "Increased microbial growth",
                "Removal of contaminants and equipment protection",
                "Increased moisture content",
                "Increased grain size"
              ],
              "answer": 1,
              "solution": "Cleaning protects equipment and improves product quality."
            },
            {
              "q": "A storage facility maintains apples at 1°C and 90–95% relative humidity. The manager observes significantly lower spoilage compared to apples stored at ambient temperature. The company wants to identify the scientific reason behind improved shelf life. Which explanation is most appropriate?",
              "options": [
                "Increased respiration rate",
                "Reduced biochemical and microbial activity",
                "Increased water activity",
                "Increased oxidation rate"
              ],
              "answer": 1,
              "solution": "Low temperatures slow biological deterioration."
            },
            {
              "q": "A fruit export company grades mangoes according to size before shipment. International buyers require uniform packaging and appearance. The production manager must explain the importance of grading. What is the major objective?",
              "options": [
                "Increase spoilage",
                "Achieve product uniformity",
                "Increase moisture loss",
                "Promote fermentation"
              ],
              "answer": 1,
              "solution": "Grading provides consistency in size and quality."
            },
            {
              "q": "A potato processing plant compares abrasive peeling and steam peeling systems. The company wants maximum product recovery and minimum flesh loss. Which criterion should receive the highest priority?",
              "options": [
                "Highest peel removal depth",
                "Minimum edible flesh loss",
                "Maximum water consumption",
                "Highest operating noise"
              ],
              "answer": 1,
              "solution": "Efficient peeling minimizes valuable product loss."
            },
            {
              "q": "A vegetable distributor transports lettuce over long distances. Significant wilting occurs during transit because of high temperatures. The logistics manager plans to use refrigerated transport vehicles. What is the primary benefit of refrigerated transportation?",
              "options": [
                "Increased respiration",
                "Reduced quality deterioration",
                "Increased enzymatic activity",
                "Increased moisture loss"
              ],
              "answer": 1,
              "solution": "Cooling slows deterioration and maintains freshness."
            },
            {
              "q": "A spice company grinds black pepper from whole kernels into fine powder. Product testing shows improved flavor release during cooking. The process engineer wants to explain this observation. Which factor is mainly responsible?",
              "options": [
                "Reduced surface area",
                "Increased surface area for extraction",
                "Reduced contact with food",
                "Increased particle hardness"
              ],
              "answer": 1,
              "solution": "Grinding increases surface area and flavor availability."
            },
            {
              "q": "A beverage plant mixes sugar, flavoring, and stabilizers in a blending tank. Inadequate mixing results in different sweetness levels among bottles. The quality manager investigates the problem. What is the main objective of mixing?",
              "options": [
                "Product segregation",
                "Uniform ingredient distribution",
                "Particle enlargement",
                "Crystallization"
              ],
              "answer": 1,
              "solution": "Mixing ensures homogeneity throughout the product."
            },
            {
              "q": "A mayonnaise manufacturer uses egg yolk during formulation. Product stability improves significantly after the addition of egg yolk. The food scientist explains the role of lecithin present in egg yolk. What is its primary function?",
              "options": [
                "Coloring agent",
                "Emulsifying agent",
                "Preservative",
                "Thickener only"
              ],
              "answer": 1,
              "solution": "Lecithin acts as a natural emulsifier."
            },
            {
              "q": "A cereal manufacturer observes excessive heat generation during prolonged milling. Laboratory analysis indicates nutrient degradation and flavor loss. The plant engineer investigates the root cause. Which factor contributes most to the problem?",
              "options": [
                "Mechanical energy converted to heat",
                "Reduced particle size only",
                "Increased moisture content",
                "Improved cooling"
              ],
              "answer": 0,
              "solution": "Grinding energy can generate heat and degrade quality."
            },
            {
              "q": "An instant beverage manufacturer studies mixing times of 2, 5, and 15 minutes. Product uniformity improves initially but shows no significant improvement after 5 minutes. Longer mixing increases energy costs. What is the most reasonable conclusion?",
              "options": [
                "Continue mixing indefinitely",
                "Select optimum mixing time near 5 minutes",
                "Stop mixing completely",
                "Double mixing intensity"
              ],
              "answer": 1,
              "solution": "Optimal mixing balances quality and cost."
            },
            {
              "q": "A juice manufacturer uses filtration to remove suspended pulp particles. Customers demand a bright and clear product appearance. The filtration unit successfully retains insoluble solids. What is the main purpose of filtration?",
              "options": [
                "Increase sugar content",
                "Remove suspended solids",
                "Increase acidity",
                "Promote crystallization"
              ],
              "answer": 1,
              "solution": "Filtration separates solids from liquids."
            },
            {
              "q": "A dairy company wants to concentrate proteins while allowing water and salts to pass through. Several membrane systems are evaluated. Which membrane process is most suitable?",
              "options": [
                "Microfiltration",
                "Ultrafiltration",
                "Sedimentation",
                "Screening"
              ],
              "answer": 1,
              "solution": "Ultrafiltration retains proteins while allowing smaller molecules through."
            },
            {
              "q": "A filtration system initially operates at a high flow rate. As processing continues, a layer of solids accumulates on the filter surface. Engineers notice a gradual reduction in filtrate flow rate. What is the most likely reason?",
              "options": [
                "Reduced pressure drop",
                "Increased resistance from filter cake",
                "Increased membrane pore size",
                "Reduced solid concentration"
              ],
              "answer": 1,
              "solution": "Cake buildup increases flow resistance."
            },
            {
              "q": "A fruit juice manufacturer concentrates juice using reverse osmosis rather than evaporation. Product flavor retention improves significantly. The production manager explains the advantage of the technology. Which feature provides this benefit?",
              "options": [
                "High-temperature operation",
                "Low-temperature concentration",
                "Increased oxidation",
                "Increased caramelization"
              ],
              "answer": 1,
              "solution": "Reverse osmosis avoids thermal damage."
            },
            {
              "q": "A membrane system experiences a gradual decline in permeate flux during operation. Inspection reveals protein and mineral deposits on the membrane surface. Engineers suspect fouling. What is the primary consequence of membrane fouling?",
              "options": [
                "Increased membrane productivity",
                "Reduced filtration performance",
                "Increased pore size",
                "Improved selectivity only"
              ],
              "answer": 1,
              "solution": "Fouling reduces flux and efficiency."
            },
            {
              "q": "An oil processing plant uses hexane to recover oil from soybean flakes. The extraction efficiency is significantly higher than mechanical pressing alone. The process engineer explains the role of hexane. Why is hexane effective?",
              "options": [
                "High oil solubility in hexane",
                "High viscosity",
                "High crystallization tendency",
                "Low volatility"
              ],
              "answer": 0,
              "solution": "Hexane efficiently dissolves edible oils."
            },
            {
              "q": "A tea company increases extraction temperature from 60°C to 90°C. Laboratory results show faster release of flavor compounds into water. The R&D team investigates the reason. Which factor explains the improvement?",
              "options": [
                "Reduced diffusion rate",
                "Increased mass transfer rate",
                "Reduced solubility",
                "Increased crystal formation"
              ],
              "answer": 1,
              "solution": "Higher temperature accelerates diffusion and extraction."
            },
            {
              "q": "A concentrated sugar solution is cooled slowly inside a crystallizer. Crystal formation begins after a specific concentration threshold is exceeded. The production supervisor wants to identify the required condition for crystal growth. What condition is necessary?",
              "options": [
                "Unsaturated solution",
                "Supersaturated solution",
                "Dilute solution",
                "Neutral solution"
              ],
              "answer": 1,
              "solution": "Crystallization requires supersaturation."
            },
            {
              "q": "A food additive manufacturer requires uniform crystal size for consistent product quality. Excessive nucleation creates many small crystals that are difficult to separate. Engineers adjust operating conditions to favor controlled crystal growth. Why is crystal size control important?",
              "options": [
                "Product consistency and handling",
                "Increased contamination",
                "Reduced purity",
                "Elimination of crystals"
              ],
              "answer": 0,
              "solution": "Uniform crystals improve handling and quality."
            },
            {
              "q": "A herbal extraction facility obtains lower-than-expected recovery of bioactive compounds. Engineers consider increasing solvent-to-solid ratio and improving agitation. Pilot trials show better recovery after these modifications. What is the primary reason for the improvement?",
              "options": [
                "Enhanced mass transfer between solvent and solid",
                "Reduced contact area",
                "Reduced solubility",
                "Increased crystallization"
              ],
              "answer": 0,
              "solution": "Better solvent contact improves extraction efficiency."
            }
          ]
        },
        {
          "id": "unit2_assertion",
          "title": "Assertion and Reasoning",
          "notes": [],
          "mcqs": [
            {
              "q": "A beverage manufacturer observes that concentrated fruit juice has a higher density than freshly extracted juice. The quality control team studies the relationship between dissolved solids and density to understand the change in physical properties. Based on food engineering principles, evaluate the following statements and identify the correct option. Assertion (A): The density of fruit juice increases as the concentration of dissolved solids increases. Reason (R): Density is defined as the mass of material present per unit volume.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "An increase in dissolved solids increases the mass present in a given volume, resulting in higher density. The reason directly explains the assertion."
            },
            {
              "q": "A dairy processing plant routinely measures the specific gravity of milk to detect dilution and maintain product quality. During training, operators discuss various properties related to specific gravity measurements. Consider the following statements. Assertion (A): Specific gravity is a dimensionless quantity. Reason (R): Specific gravity is used to determine the color of milk samples.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 2,
              "solution": "Specific gravity is dimensionless because it is a ratio of two densities. However, it is not used to determine milk color."
            },
            {
              "q": "A ketchup manufacturer notices that the product flows easily when squeezed but remains thick during storage. The product development team studies its flow characteristics to classify its rheological behavior. Evaluate the following statements. Assertion (A): Ketchup exhibits pseudoplastic behavior. Reason (R): Pseudoplastic fluids show a decrease in viscosity with increasing shear rate.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Ketchup is a pseudoplastic fluid, and the definition of pseudoplastic behavior explains why it flows more easily when squeezed."
            },
            {
              "q": "A food company develops a salad dressing containing oil and water. To improve stability, an emulsifier is added to the formulation. The food scientist explains the role of surface-active agents in emulsion systems. Analyze the following statements. Assertion (A): Emulsifiers improve the stability of emulsions. Reason (R): Emulsifiers increase the interfacial tension between oil and water phases.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 2,
              "solution": "Emulsifiers stabilize emulsions by reducing, not increasing, interfacial tension."
            },
            {
              "q": "A vegetable processing plant performs cleaning before further processing operations such as peeling and cutting. The objective is to improve product quality and protect equipment from damage. Consider the following statements. Assertion (A): Cleaning is usually the first preparative operation in food processing. Reason (R): Cleaning removes foreign materials and contaminants from raw materials.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Cleaning removes contaminants and is therefore performed before most other preparative operations."
            },
            {
              "q": "A fruit processing company grades mangoes according to size and maturity before packaging. The marketing department demands uniformity in appearance and quality. Evaluate the following statements. Assertion (A): Grading improves product uniformity. Reason (R): Grading separates materials based on selected quality characteristics.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Both statements are correct. Separation according to quality characteristics results in improved uniformity."
            },
            {
              "q": "A cold storage facility stores apples at low temperatures to extend shelf life and preserve quality. The manager explains the scientific basis of temperature control during storage. Analyze the following statements. Assertion (A): Refrigerated storage increases the shelf life of fruits. Reason (R): Refrigerated storage increases microbial growth and respiration rates.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 2,
              "solution": "Refrigeration extends shelf life, but it decreases rather than increases microbial activity and respiration."
            },
            {
              "q": "A potato processing industry compares different peeling methods to reduce edible flesh loss and improve yield. Engineers evaluate the performance of steam and abrasive peeling systems. Consider the statements below. Assertion (A): Excessive peeling decreases product yield. Reason (R): Excessive peeling removes edible tissue along with the peel.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Removal of edible material reduces yield. The reason correctly explains the assertion."
            },
            {
              "q": "A spice processing unit grinds peppercorns into powder to improve flavor release and facilitate packaging. The production manager studies the effect of particle size on processing efficiency. Evaluate the statements. Assertion (A): Size reduction increases the surface area of food materials. Reason (R): Smaller particles provide more surface area per unit mass.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Reducing particle size exposes more surface area, improving transfer processes."
            },
            {
              "q": "A soup powder manufacturer uses industrial mixers to blend ingredients uniformly before packaging. Product consistency is an important quality requirement. Analyze the following statements. Assertion (A): Mixing is performed to achieve homogeneity. Reason (R): Mixing increases the particle size of ingredients.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 2,
              "solution": "Mixing is intended to achieve homogeneity, but it does not increase particle size."
            },
            {
              "q": "A salad dressing exhibits phase separation after prolonged storage. The quality control team investigates the reason for the loss of stability. Consider the following statements. Assertion (A): Coalescence can destabilize an emulsion. Reason (R): Coalescence causes small droplets to combine into larger droplets.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Larger droplets formed by coalescence eventually separate into distinct phases. The reason explains the assertion."
            },
            {
              "q": "A food engineer observes that fine grinding requires more energy than coarse grinding. The design team studies the relationship between particle size and grinding energy. Evaluate the statements. Assertion (A): Fine grinding requires more energy than coarse grinding. Reason (R): Grinding energy is completely independent of surface area generation.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 2,
              "solution": "Fine grinding requires additional energy because more surface area is created. The reason is incorrect."
            },
            {
              "q": "A juice manufacturer uses filtration to improve product clarity before packaging. The process removes suspended particles while allowing liquid to pass through. Consider the following statements. Assertion (A): Filtration is a solid-liquid separation process. Reason (R): Filtration separates suspended solids from liquids using a porous medium.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "The reason directly explains the mechanism of filtration."
            },
            {
              "q": "A dairy industry uses ultrafiltration to concentrate proteins from milk. The membrane selectively retains larger molecules while permitting water to pass through. Analyze the following statements. Assertion (A): Ultrafiltration can be used for protein concentration. Reason (R): Ultrafiltration membranes separate components based mainly on molecular size.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Protein molecules are retained due to their larger size relative to membrane pores."
            },
            {
              "q": "During filtration of a sugar solution, solid particles accumulate on the filter surface and form a cake layer. Engineers notice that filtration becomes slower over time. Evaluate the statements. Assertion (A): Filtration rate decreases as filter cake thickness increases. Reason (R): The filter cake creates additional resistance to liquid flow.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Greater cake resistance lowers liquid flow through the filter."
            },
            {
              "q": "A fruit juice company uses reverse osmosis to remove water and concentrate juice without severe heating. Product flavor and nutritional quality are largely retained. Consider the following statements. Assertion (A): Reverse osmosis is suitable for low-temperature concentration. Reason (R): Water is removed through a semi-permeable membrane under pressure.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Membrane-based water removal avoids the need for extensive heating."
            },
            {
              "q": "An edible oil factory uses hexane to extract oil from soybean flakes. The process engineer explains that the solvent must dissolve the target component effectively. Analyze the following statements. Assertion (A): Solvent extraction efficiency depends on solvent selection. Reason (R): A good solvent should have high solubility for the desired solute.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "High solubility improves mass transfer and extraction efficiency."
            },
            {
              "q": "A tea manufacturer increases extraction temperature to improve recovery of flavor compounds. Engineers observe faster mass transfer and shorter processing time. Evaluate the statements. Assertion (A): Increasing temperature can increase extraction rate. Reason (R): Higher temperatures generally enhance diffusion and solubility.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Improved diffusion and solubility accelerate extraction."
            },
            {
              "q": "A concentrated sugar solution is cooled under controlled conditions until crystals begin to form. The production supervisor explains that crystallization occurs only after a certain concentration condition is achieved. Consider the statements below. Assertion (A): Crystallization occurs from a supersaturated solution. Reason (R): Supersaturation provides the driving force for crystal formation.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Supersaturation is essential for nucleation and crystal growth."
            },
            {
              "q": "A food additive manufacturer carefully controls cooling rate and agitation during crystallization. The goal is to obtain crystals of uniform size and quality. The process engineer studies the effect of crystal size on product handling. Evaluate the statements. Assertion (A): Crystal size affects product quality and handling characteristics. Reason (R): Crystal size influences flowability, purity, and downstream processing behavior.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is not the correct explanation of A",
                "A is true, but R is false",
                "A is false, but R is true"
              ],
              "answer": 0,
              "solution": "Crystal size distribution directly affects product performance and process efficiency. Both A and R are true, and R is the correct explanation of A."
            }
          ]
        },
        {
          "id": "unit2_higher_order",
          "title": "Higher-Order Scenario-Based Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A functional beverage company is developing a high-protein fruit drink intended for long-term storage. During pilot trials, sedimentation occurs after two weeks, resulting in consumer complaints. The R&D team observes that increasing viscosity reduces particle settling but affects drinkability. Researchers must select the most appropriate strategy to improve stability while maintaining consumer acceptance. Based on food engineering principles, which approach is most suitable?",
              "options": [
                "Increase viscosity moderately using a hydrocolloid stabilizer",
                "Reduce viscosity to promote rapid flow",
                "Increase particle size to accelerate settling",
                "Remove all dissolved solids from the beverage"
              ],
              "answer": 0,
              "solution": "A moderate increase in viscosity reduces sedimentation while maintaining acceptable mouthfeel and flow properties."
            },
            {
              "q": "A food company is developing an omega-3 fortified beverage containing fish oil dispersed in water. Initial trials show rapid phase separation during storage. The research team must choose a formulation strategy that improves emulsion stability and shelf life. Which modification would most effectively improve the stability of the beverage?",
              "options": [
                "Increase droplet coalescence",
                "Reduce interfacial tension using an emulsifier",
                "Increase density difference between phases",
                "Eliminate homogenization"
              ],
              "answer": 1,
              "solution": "Reducing interfacial tension stabilizes oil droplets and prevents phase separation."
            },
            {
              "q": "A processing company plans to market a tomato sauce that pours easily from the bottle but does not spread excessively on food surfaces. Product developers evaluate various rheological behaviors to meet consumer expectations. Which rheological property would best satisfy these requirements?",
              "options": [
                "Newtonian behavior",
                "Ideal fluid behavior",
                "Pseudoplastic behavior",
                "Zero viscosity"
              ],
              "answer": 2,
              "solution": "Pseudoplastic fluids become less viscous under shear and recover viscosity when shear is removed."
            },
            {
              "q": "A frozen food manufacturer observes that repeated freeze–thaw cycles damage the texture of vegetable products. Researchers investigate methods to preserve texture during storage and distribution. Which strategy is most likely to improve texture retention?",
              "options": [
                "Encourage ice crystal growth",
                "Increase storage temperature fluctuations",
                "Promote repeated thawing",
                "Minimize ice crystal formation through rapid freezing"
              ],
              "answer": 3,
              "solution": "Rapid freezing produces smaller ice crystals and minimizes structural damage."
            },
            {
              "q": "A cooperative stores freshly harvested tomatoes before transportation to distant markets. Significant spoilage occurs due to microbial growth and respiration during storage. Researchers must recommend an intervention that minimizes post-harvest losses while maintaining quality. Which strategy is most appropriate?",
              "options": [
                "Store at elevated temperatures",
                "Increase exposure to sunlight",
                "Use refrigerated storage conditions",
                "Increase mechanical handling"
              ],
              "answer": 2,
              "solution": "Low temperatures reduce respiration and microbial activity."
            },
            {
              "q": "A fruit export company experiences customer complaints due to inconsistent fruit size within packages. Researchers are asked to redesign the grading process to improve uniformity and export quality. Which approach would provide the most reliable grading performance?",
              "options": [
                "Eliminate grading operations",
                "Use automated machine-vision grading systems",
                "Package fruits without inspection",
                "Mix all quality grades together"
              ],
              "answer": 1,
              "solution": "Machine-vision systems provide accurate and consistent grading."
            },
            {
              "q": "A vegetable processor seeks to reduce water consumption while maintaining cleaning efficiency. Researchers compare conventional washing with advanced cleaning technologies. Which technology would best support sustainable processing?",
              "options": [
                "High-pressure air and water-efficient cleaning systems",
                "Eliminate cleaning completely",
                "Increase water usage indefinitely",
                "Perform cleaning after packaging"
              ],
              "answer": 0,
              "solution": "Water-efficient cleaning technologies reduce resource consumption while maintaining hygiene."
            },
            {
              "q": "A potato processing plant must choose between abrasive peeling and steam peeling for large-scale production. Management aims to maximize yield and reduce edible flesh loss. Which peeling method is generally preferred for achieving higher product recovery?",
              "options": [
                "Manual peeling with knives only",
                "Excessive abrasive peeling",
                "Chemical degradation of potatoes",
                "Steam peeling with controlled exposure"
              ],
              "answer": 3,
              "solution": "Steam peeling typically results in lower edible flesh loss and higher yield."
            },
            {
              "q": "A spice manufacturer wants to improve extraction of flavor compounds during cooking. Researchers evaluate the effect of particle size on flavor release and process efficiency. Which strategy would most likely enhance flavor extraction?",
              "options": [
                "Increase particle size significantly",
                "Reduce particle size to increase surface area",
                "Eliminate grinding operations",
                "Compress particles into larger aggregates"
              ],
              "answer": 1,
              "solution": "Smaller particles provide greater surface area for extraction."
            },
            {
              "q": "An instant soup manufacturer receives complaints about inconsistent flavor intensity among packets. Process engineers suspect inadequate mixing of ingredients before packaging. Which modification would most directly improve product consistency?",
              "options": [
                "Improve mixing uniformity throughout the batch",
                "Increase ingredient segregation",
                "Reduce mixing time to zero",
                "Package ingredients separately"
              ],
              "answer": 0,
              "solution": "Uniform mixing ensures consistent composition and flavor."
            },
            {
              "q": "A salad dressing manufacturer seeks to extend shelf life without phase separation. Researchers evaluate formulation and processing alternatives. Which strategy would best improve long-term emulsion stability?",
              "options": [
                "Increase droplet size during homogenization",
                "Remove emulsifiers from the formulation",
                "Produce smaller droplets through efficient homogenization",
                "Encourage coalescence"
              ],
              "answer": 2,
              "solution": "Smaller droplets exhibit improved stability and reduced separation."
            },
            {
              "q": "A food company aims to reduce energy consumption during grinding operations while maintaining product quality. Researchers must identify the most practical approach. Which strategy would improve energy efficiency?",
              "options": [
                "Use multiple grinding stages with optimized particle reduction",
                "Grind all materials to ultrafine sizes unnecessarily",
                "Increase equipment friction intentionally",
                "Operate equipment under overload conditions"
              ],
              "answer": 0,
              "solution": "Staged grinding reduces excessive energy expenditure."
            },
            {
              "q": "A juice processing plant seeks to improve product clarity while retaining flavor compounds. Researchers compare several separation techniques for removing suspended solids. Which process is most appropriate?",
              "options": [
                "Crystallization",
                "Filtration",
                "Peeling",
                "Drying"
              ],
              "answer": 1,
              "solution": "Filtration removes suspended particles while preserving liquid quality."
            },
            {
              "q": "A dairy company wishes to produce a high-protein beverage without exposing milk to excessive heat. Researchers evaluate separation technologies that selectively retain proteins. Which technology is most suitable?",
              "options": [
                "Steam distillation",
                "Freezing",
                "Membrane ultrafiltration",
                "Roasting"
              ],
              "answer": 2,
              "solution": "Ultrafiltration effectively concentrates proteins while preserving quality."
            },
            {
              "q": "A membrane separation plant experiences declining permeate flux due to fouling. Researchers investigate methods to maintain long-term process efficiency. Which action would most effectively reduce fouling?",
              "options": [
                "Ignore cleaning schedules",
                "Increase solid loading continuously",
                "Eliminate pretreatment operations",
                "Implement regular membrane cleaning and pretreatment"
              ],
              "answer": 3,
              "solution": "Proper cleaning and pretreatment minimize fouling and maintain performance."
            },
            {
              "q": "A food processing company wants to recover water from process streams while reducing environmental impact. Engineers evaluate membrane technologies for water reuse. Which approach best supports sustainability goals?",
              "options": [
                "Reverse osmosis-based water recovery",
                "Direct disposal of wastewater",
                "Increased water wastage",
                "Avoid all separation processes"
              ],
              "answer": 0,
              "solution": "Reverse osmosis enables efficient recovery and reuse of water."
            },
            {
              "q": "An edible oil manufacturer observes lower-than-expected extraction yields from soybean flakes. Researchers investigate methods to improve recovery efficiency. Which modification would most likely increase oil extraction?",
              "options": [
                "Use a solvent with higher affinity for oil",
                "Reduce contact between solvent and solids",
                "Increase particle size substantially",
                "Eliminate solvent use"
              ],
              "answer": 0,
              "solution": "A suitable solvent with high oil solubility improves extraction efficiency."
            },
            {
              "q": "A beverage company wants to maximize flavor extraction from tea leaves while minimizing processing time. Researchers evaluate operational variables affecting mass transfer. Which factor would most directly enhance extraction efficiency?",
              "options": [
                "Lower solvent contact time drastically",
                "Reduce extraction temperature excessively",
                "Increase temperature within acceptable limits",
                "Prevent solvent circulation"
              ],
              "answer": 2,
              "solution": "Moderate temperature increases improve diffusion and extraction rates."
            },
            {
              "q": "A sugar manufacturing plant requires crystals of uniform size for efficient packaging and product quality. Researchers study nucleation and crystal growth mechanisms. Which strategy would best improve crystal size uniformity?",
              "options": [
                "Allow uncontrolled nucleation",
                "Maintain controlled supersaturation conditions",
                "Introduce random temperature fluctuations",
                "Increase impurities deliberately"
              ],
              "answer": 1,
              "solution": "Controlled supersaturation promotes uniform crystal growth."
            },
            {
              "q": "A food company must concentrate a sugar solution before crystallization. Management wants to minimize energy consumption while maintaining product quality. Researchers compare several alternatives. Which option is most suitable?",
              "options": [
                "Dilute the solution further",
                "Increase moisture content",
                "Concentrate the solution before crystallization",
                "Prevent supersaturation"
              ],
              "answer": 2,
              "solution": "Concentration is required to achieve supersaturation and efficient crystallization."
            }
          ]
        },
        {
          "id": "unit2_bl12",
          "title": "BL1 & BL2 (Remember/Understand) Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A quality control technician in a fruit juice processing plant is studying the physical properties of liquid foods before storage and transportation. During training, the technician is asked to identify the parameter that represents the amount of mass present in a unit volume of food material. This property is commonly used in equipment design and process calculations. Based on the definition of density, identify the correct expression for density.",
              "options": [
                "Mass × Volume",
                "Mass / Volume",
                "Volume / Mass",
                "Weight / Area"
              ],
              "answer": 1,
              "solution": "Density is defined as the mass of a substance per unit volume. Mass / Volume"
            },
            {
              "q": "A dairy processing engineer compares the density of milk with the density of water at the same temperature. The engineer explains that a dimensionless parameter is often used to indicate whether a food material is heavier or lighter than water. This parameter is widely used in quality assessment of milk and beverages. Identify the meaning of specific gravity.",
              "options": [
                "Ratio of food density to water density",
                "Difference between food density and water density",
                "Mass of food per unit area",
                "Volume of food per unit mass"
              ],
              "answer": 0,
              "solution": "Specific gravity is the ratio of the density of a substance to the density of water. Ratio of food density to water density"
            },
            {
              "q": "A food scientist is studying the flow behavior of sauces, juices, and dairy products. During a training session, students are asked to identify the branch of science that deals with deformation and flow characteristics of food materials. This concept is important in food processing and equipment design. What is the study of flow and deformation called?",
              "options": [
                "Crystallization",
                "Rheology",
                "Filtration",
                "Extraction"
              ],
              "answer": 1,
              "solution": "Rheology is the science that studies flow and deformation of materials. Rheology"
            },
            {
              "q": "A beverage company adds an emulsifier while producing a flavored milk drink. The emulsifier helps the oil droplets remain uniformly distributed in the aqueous phase. The production manager explains that emulsifiers improve stability by acting at the interface between oil and water. Why are surface-active agents added to emulsions?",
              "options": [
                "To increase particle size",
                "To reduce interfacial tension",
                "To increase density",
                "To reduce flavor"
              ],
              "answer": 1,
              "solution": "Surface-active agents reduce interfacial tension and improve emulsion stability. To reduce interfacial tension"
            },
            {
              "q": "A vegetable processing facility receives freshly harvested carrots containing soil, stones, and plant debris. Before further processing, the raw materials are subjected to a preparative operation that removes unwanted contaminants. This operation helps improve food safety and equipment performance. Identify the operation being performed.",
              "options": [
                "Peeling",
                "Cleaning",
                "Grading",
                "Extraction"
              ],
              "answer": 1,
              "solution": "Cleaning is the operation used to remove contaminants from raw materials. Cleaning"
            },
            {
              "q": "A fruit packaging company sorts apples into different categories based on size, color, and quality. The marketing department requires products with a uniform appearance to satisfy consumer expectations. The production manager explains the importance of grading before packaging. What is the primary purpose of grading?",
              "options": [
                "Increase moisture content",
                "Ensure uniform quality",
                "Reduce shelf life",
                "Increase microbial growth"
              ],
              "answer": 1,
              "solution": "Grading provides uniformity in size, appearance, and quality. Ensure uniform quality"
            },
            {
              "q": "A food technologist is reviewing methods used to preserve fruits and vegetables after harvest. One common method involves keeping products at low temperatures to slow deterioration. This method is widely used in cold storage facilities around the world. Which storage method uses low temperature preservation?",
              "options": [
                "Refrigerated storage",
                "Solar drying",
                "Fermentation",
                "Roasting"
              ],
              "answer": 0,
              "solution": "Refrigerated storage preserves foods by maintaining low temperatures. Refrigerated storage"
            },
            {
              "q": "A potato processing plant uses a peeling machine before slicing and frying operations. The engineer explains that peeling removes undesirable outer layers and improves product quality. The operation is considered an important preparative step in food processing. Why is peeling carried out?",
              "options": [
                "To remove the outer inedible layer",
                "To increase moisture content",
                "To promote microbial growth",
                "To increase density"
              ],
              "answer": 0,
              "solution": "Peeling removes the outer skin and improves product quality. To remove the outer inedible layer"
            },
            {
              "q": "A spice processing company grinds peppercorns into powder before packaging. The operation changes the physical dimensions of the material to facilitate further processing and improve product performance. Students are asked to identify the name of this operation. What is this operation called?",
              "options": [
                "Mixing",
                "Filtration",
                "Size Reduction",
                "Extraction"
              ],
              "answer": 2,
              "solution": "Grinding is a size reduction operation. Size Reduction"
            },
            {
              "q": "A food engineer explains that grinding increases the available surface area of food particles. This change improves processes such as drying, extraction, and dissolution. The objective is to understand the main advantage of reducing particle size. Why is size reduction beneficial?",
              "options": [
                "Decreases surface area",
                "Increases surface area",
                "Eliminates moisture",
                "Prevents mixing"
              ],
              "answer": 1,
              "solution": "Smaller particles provide greater surface area for transfer operations. Increases surface area"
            },
            {
              "q": "A food manufacturing company blends flour, sugar, and milk powder to prepare an instant beverage mix. The ingredients are combined to obtain a homogeneous product before packaging. Students are asked to identify the operation used. What is this operation called?",
              "options": [
                "Extraction",
                "Crystallization",
                "Mixing",
                "Filtration"
              ],
              "answer": 2,
              "solution": "Combining ingredients uniformly is called mixing. Mixing"
            },
            {
              "q": "A mayonnaise manufacturer combines oil and water with the help of an emulsifier. The objective is to produce a stable mixture of two immiscible liquids. The product developer explains the significance of emulsification. Why is emulsification required?",
              "options": [
                "To separate oil and water",
                "To stabilize oil and water mixtures",
                "To increase crystallization",
                "To remove solids"
              ],
              "answer": 1,
              "solution": "Emulsification helps form and stabilize mixtures of immiscible liquids. To stabilize oil and water mixtures"
            },
            {
              "q": "A juice processing plant removes suspended pulp particles before packaging. The operation uses a porous medium to separate solids from liquids. Students are asked to identify the separation process being used. What is this process called?",
              "options": [
                "Extraction",
                "Filtration",
                "Mixing",
                "Peeling"
              ],
              "answer": 1,
              "solution": "Filtration separates suspended solids from fluids. Filtration"
            },
            {
              "q": "A food engineer explains that filtration improves the clarity and appearance of beverages. During processing, solid particles are retained while liquid passes through the filter medium. What is the main purpose of filtration?",
              "options": [
                "Increase viscosity",
                "Remove suspended solids",
                "Increase density",
                "Promote fermentation"
              ],
              "answer": 1,
              "solution": "Filtration removes suspended solids and improves product clarity. Remove suspended solids"
            },
            {
              "q": "A dairy processing facility uses ultrafiltration to concentrate proteins in milk. The process relies on a selective barrier that allows some components to pass while retaining others. Students are asked to identify this technology. What is the process called?",
              "options": [
                "Crystallization",
                "Membrane Separation",
                "Grading",
                "Cleaning"
              ],
              "answer": 1,
              "solution": "Selective separation through a membrane is called membrane separation. Membrane Separation"
            },
            {
              "q": "A milk processing plant uses a membrane that allows water to pass while retaining proteins. The plant manager explains that separation occurs because components differ in size. Why does membrane separation occur?",
              "options": [
                "Due to color differences",
                "Due to size selectivity",
                "Due to flavor differences",
                "Due to texture differences"
              ],
              "answer": 1,
              "solution": "Membrane processes separate components primarily based on size. Due to size selectivity"
            },
            {
              "q": "An edible oil processing plant uses a solvent to remove oil from crushed seeds. The process transfers the desired component from one phase into another. Students are asked to identify the operation. What is this operation called?",
              "options": [
                "Extraction",
                "Filtration",
                "Mixing",
                "Peeling"
              ],
              "answer": 0,
              "solution": "Removal of a soluble component using a solvent is called extraction. Extraction"
            },
            {
              "q": "+A tea manufacturer uses hot water to recover flavor compounds from tea leaves. The production manager explains that extraction efficiency depends on contact between solvent and solute. What is the main objective of extraction?",
              "options": [
                "Separate soluble components",
                "Increase crystal formation",
                "Reduce density",
                "Increase viscosity"
              ],
              "answer": 0,
              "solution": "Extraction aims to recover soluble components from raw materials. Separate soluble components"
            },
            {
              "q": "A sugar factory cools a concentrated syrup and obtains solid sugar crystals. The operation converts dissolved solutes into crystalline form. Students are asked to identify the process. What is this process called?",
              "options": [
                "Filtration",
                "Crystallization",
                "Mixing",
                "Emulsification"
              ],
              "answer": 1,
              "solution": "Formation of crystals from a solution is called crystallization. Crystallization"
            },
            {
              "q": "A food technologist explains that crystals form when a solution contains more dissolved solute than can normally remain in solution at a given temperature. This condition is necessary for crystal formation. What condition promotes crystallization?",
              "options": [
                "Dilute solution",
                "Unsaturated solution",
                "Supersaturated solution",
                "Neutral solution"
              ],
              "answer": 2,
              "solution": "Crystallization occurs when the solution becomes supersaturated. Supersaturated solution"
            }
          ]
        }
      ]
    },
    {
      "id": "unit3",
      "title": "Unit III: Application of Food Processing",
      "subtopics": [
        {
          "id": "unit3_numerical",
          "title": "Numerical Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy plant receives raw milk containing 5.8% fat and 9.0% SNF. The milk is standardized for production of market milk containing 3.0% fat using cream separated from the same batch. During processing, the cream obtained contains 38% fat. The production manager observes fluctuations in cream separation efficiency and intends to determine the quantity of cream that should be removed from 12,000 kg of milk while maintaining the required fat specification in the final product. Based on mass balance principles applicable to fat standardization, determine the quantity of cream that must be separated. Formula: M(F_i-F_f)=C(F_c-F_f) Where: M = Initial milk quantity (kg) Fi = Initial fat % Ff = Final fat % C = Cream quantity (kg) Fc = Cream fat %",
              "options": [
                "945.45 kg",
                "1127.27 kg",
                "960.00 kg",
                "1054.32 kg"
              ],
              "answer": 2,
              "solution": "12000(5.8-3.0)=C(38-3) 12000(2.8)=35C 33600=35C C=960 ,kg"
            },
            {
              "q": "During paneer manufacture, a processor uses standardized milk containing 4.5% fat and 8.8% SNF. The processing line handles 8,500 kg milk per batch. Historical production records indicate that paneer recovery is strongly influenced by total solids retention and moisture control. Under optimized coagulation conditions, paneer yield can be estimated using an empirical relationship involving milk total solids and retained moisture. Determine the expected paneer yield when the final paneer contains 54% moisture. Formula: Yield=\\frac{Milk\\ Weight \\times Total\\ Solids}{100-Moisture%} Total Solids (%) = Fat + SNF",
              "options": [
                "2456.52 kg",
                "2478.26 kg",
                "2457.06 kg",
                "2489.72 kg"
              ],
              "answer": 0,
              "solution": "TS=4.5+8.8=13.3% Yield=\\frac{8500\\times13.3}{100-54} =\\frac{113050}{46} =2457.61,kg"
            },
            {
              "q": "An ice cream manufacturer is developing a premium formulation containing 12% milk fat. The available cream contains 40% fat, while the skim milk used in formulation contains 0.1% fat. A production batch of 6,000 kg ice cream mix is planned. Before production approval, the quality assurance team must determine the quantity of cream required to achieve the target fat level while minimizing formulation deviations. Evaluate the required quantity of cream using component balance principles. Formula: C=\\frac{M(F_t-F_s)}{F_c-F_s} Where: C = Cream required (kg) M = Mix quantity (kg) Ft = Target fat % Fs = Skim milk fat % Fc = Cream fat %",
              "options": [
                "1801.50 kg",
                "1798.99 kg",
                "1789.50 kg",
                "1812.25 kg"
              ],
              "answer": 2,
              "solution": "C=\\frac{6000(12-0.1)}{40-0.1} =\\frac{71400}{39.9} =1789.47,kg"
            },
            {
              "q": "A butter manufacturing unit processes cream containing 42% fat. During churning, the butter produced contains 81% fat. A batch of 5,500 kg cream is fed into the churn. The plant engineer is evaluating fat recovery performance and wishes to estimate the quantity of butter expected if all fat present in cream is transferred to butter while maintaining the specified butter composition. Determine the expected butter output using fat balance relationships. Formula: Butter\\ Yield=\\frac{Cream\\ Weight \\times Cream\\ Fat%}{Butter\\ Fat%}",
              "options": [
                "2848.15 kg",
                "2851.85 kg",
                "2860.42 kg",
                "2835.60 kg"
              ],
              "answer": 1,
              "solution": "Butter\\ Yield=\\frac{5500\\times42}{81} =\\frac{231000}{81} =2851.85,kg"
            },
            {
              "q": "A fruit processing company plans to manufacture a batch of mixed fruit jam using fruit pulp containing 18°Brix. The final product specification requires a soluble solids concentration of 68°Brix to ensure microbial stability and desirable texture. During formulation planning, the production manager must determine the quantity of sugar required for a batch containing 2,500 kg fruit pulp while accounting for the contribution of soluble solids already present in the pulp. Based on mass balance principles associated with jam processing, determine the quantity of sugar needed to achieve the target formulation. S=\\frac{P(B_f-B_p)}{100-B_f} Where: S = Sugar required (kg) P = Pulp quantity (kg) Bf = Final °Brix Bp = Pulp °Brix",
              "options": [
                "3906.25 kg",
                "3898.75 kg",
                "3920.40 kg",
                "3875.50 kg"
              ],
              "answer": 0,
              "solution": "S=\\frac{2500(68-18)}{100-68} =\\frac{125000}{32} =3906.25,kg"
            },
            {
              "q": "A jelly processing unit receives extracted fruit juice having a soluble solids concentration of 14°Brix. The product development team intends to produce premium jelly with a final concentration of 65°Brix. A batch consisting of 4,000 kg juice is scheduled for processing. Prior to initiating concentration and sugar addition operations, the quality assurance department evaluates the amount of sugar necessary to achieve the desired final solids level without altering the standard product specifications. Determine the quantity of sugar required for the batch. S=\\frac{J(B_f-B_j)}{100-B_f} Where: S = Sugar required (kg) J = Juice quantity (kg) Bj = Juice °Brix Bf = Final °Brix",
              "options": [
                "5828.57 kg",
                "5840.25 kg",
                "5805.40 kg",
                "5861.80 kg"
              ],
              "answer": 0,
              "solution": "S=\\frac{4000(65-14)}{100-65} =\\frac{204000}{35} =5828.57,kg"
            },
            {
              "q": "A beverage manufacturing facility produces fruit squash according to regulatory standards requiring a minimum fruit juice content of 25%. A processing batch of 7,200 kg squash is planned. During formulation verification, the process engineer must determine the quantity of fruit juice necessary to ensure compliance with product standards while maintaining consistency across production lots. Based on formulation requirements, calculate the quantity of fruit juice that should be incorporated into the batch. Fruit\\ Juice=Total\\ Batch\\times\\frac{Fruit\\ Content%}{100}",
              "options": [
                "1800 kg",
                "1750 kg",
                "1850 kg",
                "1780 kg"
              ],
              "answer": 0,
              "solution": "Fruit\\ Juice=7200\\times\\frac{25}{100} =1800,kg"
            },
            {
              "q": "A tomato sauce manufacturing plant receives tomato pulp with an initial concentration of 12°Brix. The final sauce specification requires concentration to 30°Brix before seasoning and packaging operations. A batch containing 9,000 kg pulp is processed through an evaporator system. The process engineer is assessing the quantity of water that must be removed to achieve the desired concentration while preserving total solids throughout the operation. Determine the quantity of water evaporated during processing. Water\\ Removed=W_i-W_f W_f=\\frac{W_i\\times B_i}{B_f} Where: Wi = Initial weight Wf = Final weight Bi = Initial °Brix Bf = Final °Brix",
              "options": [
                "5400 kg",
                "5350 kg",
                "5450 kg",
                "5500 kg"
              ],
              "answer": 0,
              "solution": "W_f=\\frac{9000\\times12}{30} =3600,kg Water\\ Removed=9000-3600 =5400,kg"
            },
            {
              "q": "A fruit juice powder manufacturing company uses a spray dryer to convert concentrated juice into powder. The feed entering the dryer contains 45% total solids, while the final powder contains 96% total solids. A production campaign processes 5,200 kg feed. The operations manager is reviewing dryer performance and wishes to estimate the theoretical quantity of powder that can be recovered assuming complete solids retention throughout the drying process. Determine the expected powder yield. Powder\\ Yield=\\frac{Feed\\ Weight\\times Feed\\ Solids%}{Powder\\ Solids%}",
              "options": [
                "2437.50 kg",
                "2442.86 kg",
                "2455.20 kg",
                "2425.40 kg"
              ],
              "answer": 0,
              "solution": "Powder\\ Yield=\\frac{5200\\times45}{96} =\\frac{234000}{96} =2437.50,kg"
            },
            {
              "q": "A meat processing facility receives beef carcasses immediately after slaughter for further fabrication. The average hot carcass weight of a production batch is 9,500 kg. During chilling and post-mortem handling, moisture evaporation and drip losses contribute to a reduction in carcass mass before deboning operations begin. Historical processing records indicate an average chilling loss of 2.8%. The plant manager intends to estimate the chilled carcass weight available for downstream processing and evaluate whether the observed reduction falls within acceptable operational limits. Chilled\\ Carcass\\ Weight = Hot\\ Carcass\\ Weight \\times (1-\\frac{Chilling\\ Loss%}{100})",
              "options": [
                "9234 kg",
                "9248 kg",
                "9256 kg",
                "9266 kg"
              ],
              "answer": 0,
              "solution": "=9500 \\times (1-0.028) =9500 \\times 0.972 =9234\\ kg"
            },
            {
              "q": "A poultry processing unit handles broiler birds intended for retail packaging. A batch containing 12,000 kg live birds enters the processing line. Following slaughter, defeathering, evisceration, and carcass dressing operations, the dressing percentage achieved determines the quantity of saleable carcasses. Based on process validation records, the dressing percentage for the current flock is expected to be 72.5%. The operations team seeks to estimate the dressed carcass output for production planning and cold-storage allocation. Dressed\\ Yield = Live\\ Weight \\times \\frac{Dressing\\ Percentage}{100}",
              "options": [
                "8680 kg",
                "8700 kg",
                "8725 kg",
                "8740 kg"
              ],
              "answer": 1,
              "solution": "=12000 \\times \\frac{72.5}{100} =8700\\ kg"
            },
            {
              "q": "A meat processor adopts enzymatic tenderization to improve consumer acceptance of low-value beef cuts. Prior to treatment, the average Warner–Bratzler shear force value of a meat lot is 6.8 kg/cm². After optimized enzyme treatment and controlled ageing, the shear force is reduced by 29%. The quality assurance division must determine the final shear force value to assess whether the product satisfies the tenderness specifications established for premium-grade meat products. Final\\ Shear\\ Force = Initial\\ Shear\\ Force \\times (1-\\frac{Reduction%}{100})",
              "options": [
                "4.83 kg/cm²",
                "4.91 kg/cm²",
                "4.97 kg/cm²",
                "5.02 kg/cm²"
              ],
              "answer": 0,
              "solution": "=6.8 \\times (1-0.29) =6.8 \\times 0.71 =4.828\\ kg/cm^2"
            },
            {
              "q": "A modern meat processing plant is assessing the efficiency of deboning operations as part of a yield optimization program. A chilled beef carcass weighing 7,800 kg is subjected to trimming and deboning. Following processing, the boneless meat recovered weighs 5,694 kg. Management intends to compare the observed boneless recovery with industry benchmarks and determine the percentage yield achieved by the deboning section before implementing process improvements. Boneless\\ Meat\\ Yield(%)= \\frac{Boneless\\ Meat\\ Weight}{Carcass\\ Weight}\\times100",
              "options": [
                "71%",
                "72%",
                "73%",
                "74%"
              ],
              "answer": 2,
              "solution": "=\\frac{5694}{7800}\\times100 =73%"
            },
            {
              "q": "A commercial bakery plans the production of sandwich bread using wheat flour with a water absorption capacity of 62%. During process validation, the production supervisor intends to maintain dough consistency within the specified rheological range to ensure uniform loaf volume and crumb texture. A batch containing 2,800 kg flour is scheduled for processing. Based on the flour characteristics and process requirements, determine the quantity of water that should be incorporated into the dough to achieve the targeted absorption level without affecting fermentation performance. Water\\ Required=\\frac{Flour\\ Weight \\times Water\\ Absorption%}{100}",
              "options": [
                "1726 kg",
                "1736 kg",
                "1746 kg",
                "1756 kg"
              ],
              "answer": 1,
              "solution": "Water=\\frac{2800\\times62}{100} =1736\\ kg"
            },
            {
              "q": "A cake manufacturing unit evaluates production efficiency by monitoring batter-to-cake conversion during baking. A formulation batch contains 1,950 kg batter. Process records indicate that moisture loss during baking is maintained at 11% under optimized operating conditions. The quality assurance team seeks to estimate the expected cake output to verify process consistency and identify any abnormal deviations in oven performance. Determine the final cake yield expected from the batch. Cake\\ Yield=Batter\\ Weight\\times\\left(1-\\frac{Moisture\\ Loss%}{100}\\right)",
              "options": [
                "1735.5 kg",
                "1745.5 kg",
                "1725.5 kg",
                "1755.5 kg"
              ],
              "answer": 0,
              "solution": "Cake\\ Yield=1950\\left(1-\\frac{11}{100}\\right) =1950(0.89) =1735.5\\ kg"
            },
            {
              "q": "A biscuit manufacturing facility is investigating production losses occurring during baking and cooling operations. The production line receives 4,200 kg dough containing 24% moisture. The finished biscuits are required to contain 3% moisture to comply with shelf-life specifications. The process engineer is required to estimate the expected biscuit output assuming complete retention of dry solids throughout processing. Evaluate the quantity of finished biscuits that should be obtained under ideal operating conditions. Finished\\ Weight=\\frac{Initial\\ Weight\\times(100-Initial\\ Moisture)}{100-Final\\ Moisture}",
              "options": [
                "3288.66 kg",
                "3291.75 kg",
                "3290.72 kg",
                "3280.44 kg"
              ],
              "answer": 2,
              "solution": "Finished\\ Weight= \\frac{4200(100-24)}{100-3} \\frac{4200\\times76}{97} 3290.72\\ kg"
            },
            {
              "q": "A bread manufacturing company evaluates baking efficiency through monitoring baking loss percentages. A dough batch weighing 3,600 kg is processed in a tunnel oven. Historical data show that average baking loss remains close to 13.5% when process parameters are maintained within specification limits. The production manager wishes to estimate the quantity of bread expected after baking so that packaging and distribution schedules can be adjusted accordingly. Determine the expected bread yield from the batch. Bread\\ Yield=Dough\\ Weight\\times\\left(1-\\frac{Baking\\ Loss%}{100}\\right)",
              "options": [
                "3114 kg",
                "3124 kg",
                "3134 kg",
                "3144 kg"
              ],
              "answer": 0,
              "solution": "Bread\\ Yield= 3600\\left(1-\\frac{13.5}{100}\\right) =3600(0.865) =3114\\ kg"
            },
            {
              "q": "A fruit beverage manufacturing facility plans to extend the shelf life of a ready-to-serve mango drink through thermal preservation. The product enters a plate heat exchanger at 28°C and is heated to 92°C before packaging. The beverage flow rate is maintained at 4,200 kg/h, and the specific heat of the product is 3.95 kJ/kg°C. During a production audit, the quality manager seeks to estimate the thermal energy requirement associated with the preservation process to assess equipment efficiency and energy utilization. Determine the heat energy required per hour under the specified operating conditions. Q = mC_p(T_2-T_1) Where: Q = Heat energy (kJ) m = Mass flow rate (kg/h) Cp = Specific heat (kJ/kg°C) T₂ = Final temperature (°C) T₁ = Initial temperature (°C)",
              "options": [
                "1,061,760 kJ/h",
                "1,062,180 kJ/h",
                "1,061,424 kJ/h",
                ""
              ],
              "answer": 0,
              "solution": "Q=4200\\times3.95\\times(92-28) Q=4200\\times3.95\\times64 Q=1,061,760\\ kJ/h"
            },
            {
              "q": "A dehydrated fruit powder manufacturer aims to improve storage stability by reducing the moisture content of a concentrated fruit pulp from 72% to 4%. A batch containing 5,000 kg of pulp is subjected to drying under controlled conditions. Since product quality and powder flowability are strongly influenced by the amount of water removed, the processing team must determine the total moisture elimination required before packaging. Evaluate the quantity of water that must be removed while maintaining complete retention of dry matter. Water\\ Removed = W_i - W_f Dry\\ Matter = Initial\\ Weight(1-M_i) Final\\ Weight=\\frac{Dry\\ Matter}{(1-M_f)} Where: Mi = Initial moisture fraction Mf = Final moisture fraction",
              "options": [
                "3541.67 kg",
                "3540.00 kg",
                "3562.50 kg",
                "3528.25 kg"
              ],
              "answer": 0,
              "solution": "Initial dry matter: 5000(1-0.72) =1400\\ kg Final weight: \\frac{1400}{1-0.04} =\\frac{1400}{0.96} =1458.33\\ kg Water removed: 5000-1458.33 =3541.67\\ kg"
            },
            {
              "q": "A meat processing company stores vacuum-packed poultry products in a refrigerated warehouse. The microbial growth model adopted by the company indicates that the shelf-life index decreases exponentially with storage temperature fluctuations. A batch initially possesses a shelf-life index of 100 units and is stored under conditions producing a deterioration constant of 0.035 day⁻¹ for a period of 18 days. The quality assurance department intends to estimate the remaining shelf-life index before product dispatch. Determine the residual shelf-life index at the end of storage. N=N_0e^{-kt} Where: N = Remaining shelf-life index N₀ = Initial index k = Deterioration constant t = Time",
              "options": [
                "53.28 units",
                "53.25 units",
                "53.40 units",
                "53.10 units"
              ],
              "answer": 0,
              "solution": "N=100e^{-0.035(18)} N=100e^{-0.63} N=53.28"
            },
            {
              "q": "A food packaging company is validating oxygen barrier performance for a multilayer package intended for long-term storage of dehydrated foods. The package has a surface area of 14 m² and is exposed to an oxygen transmission rate of 0.85 cm³/m²/day. Regulatory guidelines require estimation of cumulative oxygen ingress over a storage duration of 180 days before commercialization. Evaluate the total oxygen permeation through the package during the storage period. Oxygen\\ Ingress = OTR \\times Area \\times Time Where: OTR = Oxygen transmission rate Area = Package surface area Time = Storage duration",
              "options": [
                "2142 cm³",
                "2135 cm³",
                "2150 cm³",
                "2128 cm³"
              ],
              "answer": 0,
              "solution": "Oxygen\\ Ingress =0.85\\times14\\times180 =2142\\ cm^3"
            },
            {
              "q": "A dairy plant intends to standardize whole milk containing 6.0% fat by blending it with skim milk containing 0.1% fat. The objective is to obtain market milk with a fat content of 3.5%. During production planning, the quality manager must determine the proportion of whole milk required relative to skim milk to achieve the target composition while maintaining regulatory compliance. Based on the standardization relationship used in dairy processing, which proportion most closely satisfies the requirement? Formula: \\frac{\\text{Whole Milk}}{\\text{Skim Milk}}= \\frac{(F_t-F_s)}{(F_w-F_t)} Where: (F_t)=Target fat % (F_s)=Skim milk fat % (F_w)=Whole milk fat %",
              "options": [
                "1.46 : 1",
                "0.50 : 1",
                "2.75 : 1",
                "3.25 : 1"
              ],
              "answer": 0,
              "solution": "Solution: [ \\frac{3.5-0.1}{6.0-3.5} \\frac{3.4}{2.5} 1.36 ] Closest option = 1.46 : 1 Formula 2: Paneer Yield"
            },
            {
              "q": "A dairy processor evaluates production efficiency after manufacturing paneer from a batch of milk. The operation produces 180 kg of paneer from 1,200 kg of milk. The production manager intends to compare the result with historical performance records and determine the processing effectiveness. Based on the paneer yield relationship used in dairy technology, which value best represents the yield percentage of the operation? Formula: \\text{Paneer Yield (%)}= \\frac{\\text{Weight of Paneer}}{\\text{Weight of Milk}} \\times100",
              "options": [
                "15%",
                "12%",
                "18%",
                "20%"
              ],
              "answer": 0,
              "solution": "Solution: [ \\frac{180}{1200}\\times100 15 ] Yield = 15% Formula 3: Butter Overrun"
            },
            {
              "q": "A butter manufacturing plant obtains 460 kg of butter from 400 kg of milk fat processed through cream separation and churning. The quality control department evaluates production efficiency using the standard butter overrun relationship. Which value most accurately represents the overrun achieved during the operation? Formula: \\text{Butter Overrun (%)}= \\frac{\\text{Butter Weight}-\\text{Fat Weight}} {\\text{Fat Weight}} \\times100",
              "options": [
                "15%",
                "10%",
                "20%",
                "25%"
              ],
              "answer": 0,
              "solution": "Solution: [ \\frac{460-400}{400} \\times100 15 ] Overrun = 15% Formula 4: Ice Cream Overrun"
            },
            {
              "q": "An ice cream plant compares the volume characteristics of a freshly frozen product with those of the original mix. The production batch occupies 920 L after freezing, whereas the mix volume before freezing was 800 L. The process engineer evaluates the incorporation of air using the standard overrun relationship to determine whether the product satisfies manufacturing specifications. Which value most closely represents the overrun percentage? Formula: \\text{Ice Cream Overrun (%)}= \\frac{\\text{Volume of Ice Cream}-\\text{Volume of Mix}} {\\text{Volume of Mix}} \\times100",
              "options": [
                "15%",
                "20%",
                "25%",
                "30%"
              ],
              "answer": 0,
              "solution": "Solution: [ \\frac{920-800}{800} \\times100 15 ] Overrun = 15% Topic 2: Fruits and Vegetables Processing Technology Sub-topics Jam Processing Technology Jelly Processing Technology Squash Processing Technology Sauce Manufacturing Technology Fruit Juice Powder Production Technology"
            },
            {
              "q": "A fruit processing unit manufactures jam from a concentrated fruit pulp mixture. During a production run, 450 kg of finished jam is obtained from 600 kg of processed fruit pulp and associated ingredients. The production supervisor intends to evaluate process efficiency using the standard yield relationship commonly employed in fruit product manufacturing. Which value best represents the yield percentage achieved during the operation? \\text{Jam Yield (%)}= \\frac{\\text{Weight of Finished Jam}} {\\text{Weight of Raw Material Mixture}} \\times100",
              "options": [
                "75%",
                "65%",
                "80%",
                "90%"
              ],
              "answer": 0,
              "solution": "Solution [ \\frac{450}{600}\\times100 75 ] Yield = 75% Formula 2: Jelly Recovery"
            },
            {
              "q": "A processor extracts fruit juice for jelly production and subsequently obtains a clarified extract suitable for gel formation. From 1,000 kg of fruit material, 650 kg of clarified juice is recovered after extraction and filtration. The process engineer evaluates extraction performance using the standard recovery relationship applied in fruit processing industries. Which value most accurately represents the recovery percentage? \\text{Juice Recovery (%)}= \\frac{\\text{Weight of Juice Extracted}} {\\text{Weight of Fruit Used}} \\times100",
              "options": [
                "65%",
                "55%",
                "70%",
                "75%"
              ],
              "answer": 0,
              "solution": "Solution [ \\frac{650}{1000}\\times100 65 ] Recovery = 65% Formula 3: Squash Dilution Factor"
            },
            {
              "q": "A beverage company prepares a concentrated fruit squash that must be diluted before consumer use. The formulation team determines that 1 litre of squash produces 5 litres of ready-to-serve beverage after dilution. During process evaluation, the dilution factor is calculated to verify compliance with product specifications. Which value best represents the dilution factor for the squash? \\text{Dilution Factor} \\frac{\\text{Final Beverage Volume}} {\\text{Concentrate Volume}}",
              "options": [
                "5",
                "4",
                "6",
                "7"
              ],
              "answer": 0,
              "solution": "Solution [ \\frac{5}{1} 5 ] Dilution Factor = 5 Formula 4: Fruit Juice Powder Recovery"
            },
            {
              "q": "A spray-drying facility converts concentrated fruit juice into powder for use in instant beverage formulations. During a production cycle, 180 kg of fruit juice powder is obtained from 900 kg of concentrated feed material. The production manager evaluates dryer performance using the standard powder recovery relationship. Which value most closely represents the powder recovery percentage? \\text{Powder Recovery (%)}= \\frac{\\text{Weight of Powder Obtained}} {\\text{Weight of Feed Material}} \\times100",
              "options": [
                "20%",
                "15%",
                "25%",
                "30%"
              ],
              "answer": 0,
              "solution": "Solution [ \\frac{180}{900}\\times100 20 ] Powder Recovery = 20% Topic 3: Meat and Poultry Processing Technology Sub-topics Recent Trends in Meat Processing Post-Mortem Changes in Meat Meat Tenderization Methods Poultry Processing Technology Meat Quality and Preservation"
            }
          ]
        },
        {
          "id": "unit3_analytical",
          "title": "Analytical Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy plant receives milk from three procurement centers located in different climatic zones. During routine quality evaluation, the milk from one center exhibits poor heat stability and develops coagulation during pasteurization, while the other two batches withstand processing conditions without defects. The plant manager intends to identify the most probable factor responsible for the processing failure and prevent recurrence in future operations. Considering the interactions between milk composition, microbial activity, and processing conditions, which factor is most likely responsible for the observed instability?",
              "options": [
                "Increased microbial growth causing elevated acidity before processing",
                "Uniform fat standardization before pasteurization",
                "Adequate homogenization pressure during processing",
                "Proper storage of packaged milk after pasteurization"
              ],
              "answer": 0
            },
            {
              "q": "A dairy unit produces paneer using milk collected from multiple suppliers. Although the coagulation process is carried out under identical conditions every day, one production batch yields paneer with a weak body, poor sliceability, and excessive moisture retention. Subsequent testing reveals variations in milk composition among suppliers. After evaluating the relationship between milk constituents and paneer quality attributes, which characteristic of the raw material is most likely responsible for the defective product?",
              "options": [
                "Reduced casein content in the milk used for coagulation",
                "Increased packaging efficiency after pressing",
                "Lower refrigeration temperature during storage",
                "Improved whey drainage after coagulation"
              ],
              "answer": 0
            },
            {
              "q": "A butter manufacturing facility experiences a decline in product quality characterized by a greasy texture and rapid development of rancid flavor during storage. The cream used for butter production satisfies fat requirements but remains under refrigeration for an extended period before churning. The quality assurance team investigates the causes associated with cream handling and fat deterioration. Which condition most reasonably explains the quality defect observed in the finished butter?",
              "options": [
                "Lipolytic deterioration occurring during prolonged cream storage",
                "Increased working of butter after churning",
                "Reduced moisture content in the butter mass",
                "Improved washing of butter granules"
              ],
              "answer": 0
            },
            {
              "q": "An ice cream manufacturer plans to reformulate an existing product after receiving repeated consumer complaints regarding coarse texture and rapid melting during retail display. Laboratory evaluation confirms that freezing conditions, stabilizer concentration, and overrun differ among production batches. Management seeks to prioritize corrective action capable of improving product quality while maintaining production efficiency. Which modification should be given highest priority based on its influence on structural stability and consumer acceptability?",
              "options": [
                "Optimization of overrun and stabilization to improve air-cell distribution",
                "Increasing package size without altering formulation",
                "Extending storage duration before distribution",
                "Reducing labeling information on the package"
              ],
              "answer": 0
            },
            {
              "q": "A fruit processing company receives consumer complaints that a batch of mixed-fruit jam exhibits excessive syrup separation during storage, despite meeting the prescribed total soluble solids requirement at the time of packaging. Production records indicate that fruit quality, sugar concentration, and heating schedules varied among processing shifts. The quality assurance team investigates the interaction between pectin, acidity, and sugar concentration to determine the root cause of the defect. Which factor is most likely responsible for the observed instability in the jam structure?",
              "options": [
                "Insufficient pectin concentration for stable gel formation",
                "Increased efficiency of filling operations during packaging",
                "Lower storage temperature immediately after processing",
                "Improved cleaning of processing equipment before production"
              ],
              "answer": 0
            },
            {
              "q": "A jelly manufacturing facility produces two batches from the same fruit source under identical heating conditions. One batch develops a firm and transparent gel structure, whereas the second batch remains soft and exhibits poor gel strength after cooling. Laboratory analysis reveals differences in acidity among the extracted juices. Considering the physicochemical principles governing jelly formation, which factor most likely contributed to the poor gel structure in the defective batch?",
              "options": [
                "Inadequate acidity resulting in ineffective pectin network formation",
                "Increased cooling time before packaging",
                "Uniform filtration of juice before concentration",
                "Reduced headspace in the final container"
              ],
              "answer": 0
            },
            {
              "q": "A beverage manufacturer observes microbial spoilage in a squash product before the expected shelf-life period. Investigation shows that all processing operations were completed according to schedule; however, raw material variability and preservative management differed among production lots. The technical team evaluates factors influencing microbial stability and product preservation. Which processing-related condition is most likely responsible for the premature spoilage?",
              "options": [
                "Inadequate preservative concentration in the finished squash",
                "Increased transparency of packaging material used for storage",
                "Improved filtration of fruit pulp before filling",
                "Reduced mixing time during sugar dissolution"
              ],
              "answer": 0
            },
            {
              "q": "A sauce manufacturing company intends to improve consumer acceptance after market surveys reveal dissatisfaction regarding consistency, flavor retention, and product stability during storage. Multiple corrective measures are proposed, including changes in raw material selection, thermal processing intensity, and formulation adjustments. Management seeks to identify the intervention that is most likely to enhance overall product quality without compromising shelf stability. Which action should receive the highest priority?",
              "options": [
                "Optimization of formulation parameters affecting consistency and stability",
                "Increasing label dimensions on the product container",
                "Extending warehouse storage before product distribution",
                "Reducing the number of retail outlets receiving the product"
              ],
              "answer": 0
            },
            {
              "q": "A meat processing company receives carcasses from two slaughter facilities operating under different chilling schedules. After storage, the meat obtained from one facility exhibits excessive toughness despite meeting all microbial safety requirements. Detailed investigation reveals that chilling was initiated immediately after slaughter while muscle metabolism was still active. The quality control team is required to identify the physiological phenomenon responsible for the undesirable texture so that future processing protocols can be modified. Which condition most likely contributed to the observed reduction in tenderness?",
              "options": [
                "Rapid chilling causing cold shortening of muscle fibers",
                "Delayed packaging after refrigerated storage",
                "Increased water activity during transportation",
                "Uniform carcass grading before distribution"
              ],
              "answer": 0
            },
            {
              "q": "A meat processing facility evaluates two batches of beef subjected to different aging conditions. Although both batches originate from animals of similar age and weight, one batch develops superior tenderness and consumer acceptability after storage. Laboratory analysis indicates greater proteolytic activity within the muscle tissue during post-mortem aging. Considering the biochemical mechanisms responsible for quality development in meat, which factor most directly explains the improved tenderness of the aged product?",
              "options": [
                "Enzymatic degradation of myofibrillar proteins during aging",
                "Increased oxygen permeability of packaging materials",
                "Reduction in carcass weight during chilling operations",
                "Enhanced microbial growth on the meat surface"
              ],
              "answer": 0
            },
            {
              "q": "A poultry processing plant experiences an increase in customer complaints related to carcass discoloration and reduced shelf life. Process records indicate that defeathering, evisceration, chilling, and packaging operations are being conducted according to standard schedules; however, contamination levels vary considerably between batches. The plant manager intends to prioritize one intervention that would most effectively improve both product appearance and microbiological quality. Which corrective measure should receive the highest priority?",
              "options": [
                "Strengthening hygiene control during evisceration operations",
                "Increasing storage duration before retail distribution",
                "Reducing carcass grading activities after chilling",
                "Modifying package dimensions without changing sanitation practices"
              ],
              "answer": 0
            },
            {
              "q": "A meat processing enterprise plans to introduce a value-added product targeted at consumers seeking improved convenience, safety, and extended storage stability. Several processing alternatives are considered, including conventional chilling, vacuum packaging, modified atmosphere packaging, and simple overwrapping techniques. After reviewing market expectations and product quality requirements, management must select the approach that provides the greatest overall benefit in minimizing oxidative deterioration and extending shelf life. Which option represents the most appropriate choice?",
              "options": [
                "Adoption of modified atmosphere packaging for processed meat products",
                "Use of conventional retail overwrapping alone",
                "Elimination of all packaging interventions after processing",
                "Increasing display temperature during product marketing"
              ],
              "answer": 0,
              "solution": "Topic 4: Baking and Bakery Products Technology Sub-topics Bread Preparation and Processing Cake Preparation and Processing Biscuit Preparation and Processing Bakery Ingredients and Their Functional Roles Quality Control and Defects in Bakery Products"
            },
            {
              "q": "A commercial bakery receives repeated consumer complaints regarding bread loaves exhibiting reduced volume, dense crumb structure, and poor slicing characteristics despite maintaining the same baking temperature and proofing schedule across production batches. An internal investigation reveals variations in the quality characteristics of the flour supplied during the previous month. Considering the role of flour constituents in dough development and gas retention during fermentation, which factor is most likely responsible for the observed reduction in bread quality?",
              "options": [
                "Lower gluten-forming protein content in the flour used for dough preparation",
                "Increased cooling time of baked loaves before packaging",
                "Uniform baking temperature maintained throughout production",
                "Use of standard packaging materials after baking"
              ],
              "answer": 0
            },
            {
              "q": "A cake manufacturing unit introduces a new formulation to reduce production costs. Following implementation, the finished cakes exhibit reduced volume, uneven crumb structure, and a coarse internal texture despite identical mixing and baking conditions. Process records indicate that one ingredient traditionally responsible for incorporating and stabilizing air during batter preparation was reduced significantly. Based on the functional properties of cake ingredients, which modification most likely contributed to the quality deterioration?",
              "options": [
                "Reduction in egg content responsible for foam formation and structural stability",
                "Increase in packaging efficiency during post-baking handling",
                "Reduction in storage duration before distribution",
                "Improvement in cooling conditions after baking"
              ],
              "answer": 0
            },
            {
              "q": "A biscuit manufacturing company observes that products from one production line develop excessive spread and lose their intended shape during baking, whereas biscuits produced on another line maintain dimensional stability. The quality assurance team determines that ingredient proportions and oven settings differ slightly between the two lines. After evaluating the factors affecting dough rheology and spread characteristics, which corrective action should receive the highest priority to restore product consistency?",
              "options": [
                "Optimization of flour-to-fat ratio to improve dough strength during baking",
                "Increasing the storage period of biscuits after packaging",
                "Extending cooling duration beyond standard practice",
                "Modifying carton dimensions used for transportation"
              ],
              "answer": 0
            },
            {
              "q": "A bakery quality-control manager evaluates production efficiency by comparing the mass of bread dough before baking with the mass of the finished product after baking. During a production cycle, 240 kg of dough enters the oven and 204 kg of bread is obtained after cooling. The manager intends to determine the baking loss percentage and compare it with established process standards to assess moisture loss during baking. Which value best represents the baking loss percentage for the batch? Formula: \\text{Baking Loss (%)}= \\frac{\\text{Weight of Dough}-\\text{Weight of Bread}} {\\text{Weight of Dough}} \\times100",
              "options": [
                "15%",
                "10%",
                "18%",
                "20%"
              ],
              "answer": 0,
              "solution": "Solution [ \\text{Baking Loss (%)}= \\frac{240-204}{240} \\times100 ] [ \\frac{36}{240} \\times100 ] [ =15% ] Correct Answer: a. 15% Topic 5: Food Processing, Preservation and Value Addition"
            },
            {
              "q": "A food processing company manufactures pasteurized milk, fruit squash, frozen meat products, and packaged biscuits in the same facility. During an internal audit, quality inspectors observe that microbial spoilage occurs predominantly in products having higher moisture content despite all products being stored under recommended conditions. Management intends to identify the preservation factor that contributes most significantly to the observed difference in shelf life among these products. Based on food preservation principles, which factor most directly influences the microbial stability of the products?",
              "options": [
                "Water activity available for microbial growth",
                "Package shape selected for marketing purposes",
                "Production scheduling sequence within the facility",
                "Color of the packaging material used for distribution"
              ],
              "answer": 0
            },
            {
              "q": "A processor introduces a value-added fruit beverage fortified with vitamins and natural antioxidants. Market testing indicates excellent nutritional acceptance, but the product exhibits substantial loss of quality during distribution under fluctuating environmental conditions. The product development team evaluates multiple corrective strategies to maintain nutrient retention while preserving consumer acceptance. Considering the relationship between packaging and product stability, which intervention should receive the highest priority?",
              "options": [
                "Selection of packaging materials with improved barrier properties",
                "Increasing the number of advertising campaigns for the product",
                "Modifying the product name displayed on the label",
                "Expanding retail distribution without process modification"
              ],
              "answer": 0
            },
            {
              "q": "A food manufacturer compares two preservation systems for a newly developed ready-to-eat product. One system relies on a single severe preservation treatment, whereas the second combines moderate heat treatment, reduced water activity, controlled acidity, and refrigerated storage. Shelf-life studies reveal superior stability in the second approach despite the lower intensity of individual preservation factors. Which scientific principle best explains the enhanced effectiveness of the second preservation strategy?",
              "options": [
                "Hurdle technology utilizing multiple preservation barriers",
                "Random variation in product composition during processing",
                "Increased product density resulting from packaging operations",
                "Standardization of product dimensions before storage"
              ],
              "answer": 0
            },
            {
              "q": "A food enterprise seeks to develop a value-added product from processing by-products generated during dairy, fruit, vegetable, and meat processing operations. Several alternatives are assessed based on sustainability, economic return, reduction of processing waste, and creation of new market opportunities. After reviewing environmental and commercial performance indicators, management must select the option that best aligns with modern food industry objectives. Which approach represents the most appropriate value-addition strategy?",
              "options": [
                "Conversion of processing by-products into commercially useful food ingredients",
                "Disposal of by-products immediately after primary processing",
                "Long-term storage of by-products without further utilization",
                "Mixing by-products with packaging waste before disposal"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "unit3_case",
          "title": "Case Studies",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy plant receives three milk lots for pasteurization. Lot A has acidity of 0.16%, SPC of 2×10⁴ CFU/mL, and storage temperature of 4°C. Lot B has acidity of 0.23%, SPC of 8×10⁶ CFU/mL, and storage temperature of 11°C. Lot C has acidity of 0.17%, SPC of 3×10⁴ CFU/mL, and storage temperature of 5°C. During pasteurization, one lot exhibits coagulation and line blockage. The processing supervisor must identify the most probable cause of the failure before accepting future consignments.",
              "options": [
                "Elevated microbial activity causing excessive acid development before heat treatment",
                "Slight variation in storage temperature among acceptable lots",
                "Minor differences in solids-not-fat concentration",
                "Variations in transportation distance from collection centers"
              ],
              "answer": 0
            },
            {
              "q": "A paneer manufacturer evaluates two milk batches. Batch X contains 3.5% protein and 4.5% fat. Batch Y contains 2.8% protein and 4.5% fat. Both batches are coagulated at identical temperatures and pH conditions. The resulting paneer from one batch shows superior firmness and reduced fragmentation during slicing. Management intends to standardize raw material specifications for commercial production.",
              "options": [
                "Batch X because higher protein content supports stronger curd structure",
                "Batch Y because lower protein content improves moisture retention",
                "Batch X because protein concentration reduces whey separation during storage",
                "Batch Y because protein dilution increases coagulation efficiency"
              ],
              "answer": 0
            },
            {
              "q": "A butter processing unit stores cream under different conditions before churning. Cream A is stored at 5°C for 12 h, Cream B at 10°C for 48 h, and Cream C at 6°C for 15 h. Butter produced from one cream develops rancid flavor significantly earlier than the others. The quality assurance team investigates the root cause of the defect based on fat deterioration mechanisms.",
              "options": [
                "Extended storage at elevated temperature accelerated lipolytic activity",
                "Reduced churning time altered butter granule formation",
                "Slightly lower moisture incorporation occurred during working",
                "Variations in packaging dimensions affected product appearance"
              ],
              "answer": 0
            },
            {
              "q": "An ice cream company compares two production systems. System A produces 40% overrun with stabilizer concentration of 0.3%. System B produces 85% overrun with stabilizer concentration of 0.1%. Consumer evaluation identifies one product with superior body, texture, and melting resistance. The development team must determine the most appropriate formulation strategy for future production.",
              "options": [
                "Balanced overrun and stabilizer levels improve structural stability",
                "Maximizing air incorporation irrespective of formulation improves quality",
                "Increasing freezing temperature alone improves melting resistance",
                "Extending storage duration before distribution improves texture"
              ],
              "answer": 0,
              "solution": "TOPIC 2: FRUITS AND VEGETABLES PROCESSING TECHNOLOGY"
            },
            {
              "q": "A fruit processing facility prepares jelly using three fruit extracts. Extract A contains high pectin and moderate acidity. Extract B contains low pectin and low acidity. Extract C contains high acidity but low pectin. Only one batch develops a firm gel structure after cooling. Production managers review the compositional parameters to explain the result.",
              "options": [
                "Simultaneous presence of adequate pectin and acid promoted gel formation",
                "High acidity alone ensured gel development",
                "Low pectin concentration accelerated gel stability",
                "Fruit color intensity determined gel structure"
              ],
              "answer": 0
            },
            {
              "q": "A company produces mango squash and stores it at different temperatures. One batch is maintained at 5°C, another at 20°C, and a third at 35°C. After eight weeks, quality testing reveals deterioration in flavor and color in one treatment. Management must identify the storage condition most responsible for accelerated quality loss.",
              "options": [
                "Storage at elevated temperature increased degradation reactions",
                "Refrigerated storage promoted pigment destruction",
                "Moderate temperature eliminated preservative effectiveness",
                "Storage temperature had no relationship with quality retention"
              ],
              "answer": 0
            },
            {
              "q": "A tomato sauce manufacturer records the following processing conditions. Line A achieves proper concentration and acidity targets. Line B reaches concentration targets but fails to achieve required acidity. Line C achieves acidity targets but insufficient concentration. One product demonstrates microbial instability during storage. The production engineer investigates the underlying cause.",
              "options": [
                "Failure to achieve required acidity reduced preservation effectiveness",
                "Product viscosity alone determines shelf life",
                "Packaging size directly controls microbial growth",
                "Raw material color determines storage stability"
              ],
              "answer": 0
            },
            {
              "q": "A fruit juice powder manufacturer evaluates two drying systems. System A retains 92% vitamin C with moisture content of 3%. System B retains 70% vitamin C with moisture content of 5%. Market requirements prioritize nutritional quality and shelf stability. The product development team must select the superior process.",
              "options": [
                "System A because nutrient retention and low moisture support product quality",
                "System B because higher moisture improves powder handling",
                "System A because lower moisture increases package weight",
                "System B because vitamin degradation improves storage characteristics"
              ],
              "answer": 0,
              "solution": "TOPIC 3: MEAT AND POULTRY PROCESSING TECHNOLOGY"
            },
            {
              "q": "Three carcasses are evaluated after slaughter. Carcass A undergoes rapid chilling immediately after slaughter. Carcass B experiences delayed chilling and prolonged exposure to ambient conditions. Carcass C receives controlled chilling according to recommended practices. One carcass exhibits accelerated microbial spoilage during storage. The processing manager seeks the most probable explanation.",
              "options": [
                "Delayed chilling increased microbial proliferation before storage",
                "Controlled chilling promoted microbial contamination",
                "Carcass weight determined spoilage rate",
                "Muscle color variation influenced microbial growth"
              ],
              "answer": 0
            },
            {
              "q": "A meat processor compares two tenderization methods. Method A applies enzymatic treatment, whereas Method B relies solely on short-term refrigeration. Sensory analysis demonstrates substantial differences in tenderness despite identical cooking procedures. The quality team must identify the more effective intervention.",
              "options": [
                "Enzymatic treatment enhanced breakdown of muscle proteins",
                "Refrigeration alone increased connective tissue synthesis",
                "Packaging configuration controlled tenderness development",
                "Meat dimensions determined post-cooking tenderness"
              ],
              "answer": 0
            },
            {
              "q": "A poultry processing facility observes elevated microbial counts in one production shift. Investigation reveals that scalding temperature, evisceration efficiency, and chilling practices differed slightly among shifts. The affected shift recorded frequent gastrointestinal rupture during processing. The supervisor evaluates the relationship between operations and contamination.",
              "options": [
                "Inefficient evisceration increased contamination of carcass surfaces",
                "Carcass size variation increased microbial growth",
                "Packaging material selection increased contamination",
                "Bird age alone determined processing hygiene"
              ],
              "answer": 0
            },
            {
              "q": "A company plans to adopt a modern meat preservation technology. Option A extends shelf life by reducing oxygen exposure. Option B improves package appearance without affecting product stability. Option C focuses on label redesign. Option D increases package volume. Management seeks the most effective preservation strategy.",
              "options": [
                "Oxygen control provides direct benefits to shelf-life extension",
                "Larger package volume increases preservation effectiveness",
                "Graphic redesign improves microbiological stability",
                "Visual appearance alone enhances storage life"
              ],
              "answer": 0,
              "solution": "TOPIC 4: BAKING TECHNOLOGY"
            },
            {
              "q": "A bakery compares bread produced from three dough formulations. Dough A exhibits proper gluten development, Dough B receives insufficient mixing, and Dough C undergoes excessive fermentation. One loaf demonstrates poor volume and dense crumb structure. The production manager investigates the processing factors responsible for the defect.",
              "options": [
                "Insufficient gluten development reduced gas retention capacity",
                "Packaging dimensions restricted loaf expansion",
                "Crust color determined bread volume",
                "Cooling duration controlled gluten network formation"
              ],
              "answer": 0
            },
            {
              "q": "A cake manufacturer tests two formulations. Formulation A contains balanced levels of flour, sugar, fat, and leavening agents. Formulation B contains excessive sugar and reduced leavening. Consumer evaluation identifies one formulation with superior texture and volume. The development team reviews ingredient functionality before commercialization.",
              "options": [
                "Balanced ingredient interactions support desirable cake structure",
                "Excessive sugar consistently improves volume development",
                "Reduced leavening enhances aeration during baking",
                "Package design influences cake expansion during baking"
              ],
              "answer": 0
            },
            {
              "q": "A biscuit processing line experiences variation in product texture. Batch A contains 2% moisture after baking, Batch B contains 8%, and Batch C contains 3%. One batch develops rapid loss of crispness during storage. The quality team must identify the processing factor associated with the defect.",
              "options": [
                "Elevated residual moisture accelerated texture deterioration",
                "Biscuit shape determined moisture migration",
                "Product dimensions controlled storage stability",
                "Printing on packaging influenced crispness retention"
              ],
              "answer": 0
            },
            {
              "q": "A commercial bakery evaluates two process modifications to improve bread shelf life. Strategy A improves packaging barrier properties. Strategy B increases decorative scoring on loaf surfaces. Market studies indicate staling as the major consumer complaint. Management must determine the more effective intervention.",
              "options": [
                "Improved barrier properties reduce moisture loss during storage",
                "Decorative scoring increases resistance to staling",
                "Surface appearance prevents crumb firming",
                "Larger loaf dimensions eliminate moisture migration"
              ],
              "answer": 0,
              "solution": "TOPIC 5: FOOD PROCESSING, PRESERVATION AND VALUE ADDITION"
            },
            {
              "q": "A food processor evaluates shelf stability of milk powder, fruit powder, frozen poultry, and biscuits. Despite being stored under identical environmental conditions, one category demonstrates the highest susceptibility to microbial growth following temperature abuse. The quality manager analyzes the influence of intrinsic product characteristics.",
              "options": [
                "Higher water activity increases microbial growth potential",
                "Product color determines microbial development",
                "Packaging graphics influence spoilage rates",
                "Product shape controls contamination levels"
              ],
              "answer": 0
            },
            {
              "q": "A company develops a value-added beverage enriched with bioactive compounds. Stability testing reveals oxidation-related quality losses during storage. Several corrective actions are proposed before market launch. Management must select the intervention most likely to preserve product functionality.",
              "options": [
                "Adoption of packaging with enhanced oxygen barrier properties",
                "Increasing package volume without formulation changes",
                "Altering brand identity and promotional content",
                "Expanding production capacity before stability optimization"
              ],
              "answer": 0
            },
            {
              "q": "A ready-to-eat food product is preserved using moderate heat treatment, reduced water activity, controlled acidity, and refrigerated storage. Shelf-life studies demonstrate substantially better stability than products relying on a single preservation treatment. The technical team reviews the scientific basis of the observation.",
              "options": [
                "Multiple preservation hurdles collectively restrict microbial growth",
                "Product weight independently determines shelf life",
                "Storage container shape governs microbial survival",
                "Label design directly influences preservation efficiency"
              ],
              "answer": 0
            },
            {
              "q": "A processing company generates substantial quantities of fruit peels, whey, vegetable trimmings, and meat by-products. Corporate sustainability goals emphasize waste reduction, profitability, and resource efficiency. Several utilization pathways are assessed to determine the most suitable long-term strategy.",
              "options": [
                "Conversion of by-products into commercially valuable food ingredients",
                "Disposal of by-products after temporary storage",
                "Mixing by-products with general packaging waste",
                "Increasing waste holding capacity before disposal"
              ],
              "answer": 0,
              "solution": "These 20 questions are case-study based, contain clear parameters, are aligned with BL4–BL5, avoid predictable distractors such as \"both formulations perform identically\" and \"stabilizer level has no effect on product quality,\" and maintain a single defensible correct answer."
            }
          ]
        },
        {
          "id": "unit3_assertion",
          "title": "Assertion and Reasoning",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy plant receives milk from multiple collection centers and observes that one batch develops coagulation during pasteurization, resulting in significant processing losses. During investigation, it is found that the affected batch was stored for a prolonged period before processing, leading to increased microbial activity. Considering the relationship between milk quality and heat treatment, evaluate the following statements and identify the most appropriate option. Assertion (A): Milk with elevated acidity is more susceptible to coagulation during pasteurization. Reason (R): Increased microbial growth before processing can contribute to the development of acidity in raw milk.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A paneer manufacturing unit produces two batches under identical coagulation conditions. One batch exhibits a firm body and desirable texture, whereas the other shows poor structural integrity and excessive moisture retention. Laboratory analysis indicates significant differences in the protein composition of the milk used for production. Based on paneer manufacturing principles, determine the most appropriate interpretation. Assertion (A): Higher casein content in milk generally improves the body and texture of paneer. Reason (R): Casein proteins form the principal coagulum network responsible for paneer structure.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A butter processing facility experiences consumer complaints regarding rancid flavor development before the declared shelf life. Examination of processing records reveals prolonged storage of cream prior to churning. The quality assurance team evaluates the role of fat degradation during storage and its influence on sensory quality. Assertion (A): Extended storage of cream before churning can reduce butter quality. Reason (R): Lipolytic reactions during storage may produce compounds associated with undesirable flavors.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "An ice cream manufacturer observes that products with inadequate stabilization exhibit coarse texture and rapid melting during retail storage. Product developers investigate the contribution of stabilizers to structural stability and consumer acceptance. Assertion (A): Appropriate stabilizer levels contribute to improved texture and melting resistance in ice cream. Reason (R): Stabilizers help control ice crystal growth and improve structural stability during storage.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0,
              "solution": "Topic 2: Fruits and Vegetables Processing Technology"
            },
            {
              "q": "A fruit processing unit manufactures jam from fruits harvested at different stages of maturity. One production lot fails to develop the desired gel consistency despite following standard heating conditions. The quality control department evaluates the role of fruit composition in gel formation. Assertion (A): Adequate pectin content is essential for proper jam consistency. Reason (R): Pectin participates in the formation of the gel network responsible for jam structure.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A jelly manufacturer notices that several batches remain partially fluid even after cooling and storage. Investigation reveals deviations in acidity levels during processing. The production manager assesses the influence of acidity on gel formation and product quality. Assertion (A): Proper acidity is necessary for successful jelly formation. Reason (R): Acidity influences the interaction of pectin molecules during gel development.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A squash manufacturing company receives complaints regarding fermentation and gas formation in bottles before the expected shelf life. The investigation identifies insufficient preservation measures during processing. Management evaluates the importance of preservatives in controlling spoilage organisms. Assertion (A): Proper preservative application can extend the shelf life of fruit squash. Reason (R): Preservatives inhibit the growth and activity of spoilage microorganisms.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A company producing fruit juice powders experiences deterioration in product quality during storage in humid environments. Product testing reveals clumping and reduced reconstitution performance. The quality assurance team evaluates the role of moisture control in maintaining product quality. Assertion (A): Moisture control is critical for maintaining the quality of fruit juice powders. Reason (R): Increased moisture absorption can accelerate physical and chemical deterioration in dehydrated products.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0,
              "solution": "Topic 3: Meat and Poultry Processing Technology"
            },
            {
              "q": "A meat processor evaluates carcasses immediately after slaughter and again after completion of post-mortem biochemical changes. Significant differences are observed in texture and processing suitability between the two stages. Assertion (A): Post-mortem biochemical changes significantly influence meat quality. Reason (R): Physiological and biochemical transformations continue in muscle tissues after slaughter.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A meat processing plant compares the tenderness of products subjected to controlled aging with products processed immediately after slaughter. Consumer evaluations consistently favor the aged products. Assertion (A): Controlled aging can improve meat tenderness. Reason (R): Proteolytic activity during aging contributes to structural modification of muscle proteins.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 0
            },
            {
              "q": "A poultry processing facility records elevated microbial counts in finished products despite meeting production targets. Subsequent analysis reveals deficiencies in sanitation practices during processing operations. Assertion (A): Hygienic processing practices are essential for maintaining poultry product safety. Reason (R): Poultry products are completely free from microorganisms before processing begins.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 2
            },
            {
              "q": "A meat company introduces advanced processing technologies to improve product consistency and shelf life. After implementation, the organization reports reduced wastage and improved process control. Assertion (A): Adoption of modern meat processing technologies can enhance operational efficiency. Reason (R): Advanced processing systems enable better control of processing variables and product quality.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 1,
              "solution": "(Both statements are true, but R explains quality improvement rather than operational efficiency directly.) Topic 4: Baking and Bakery Products Technology"
            },
            {
              "q": "A bakery produces bread using flour from different suppliers and observes variations in loaf volume and crumb structure. Product evaluation suggests that protein quality may be responsible for inconsistent performance. Assertion (A): Gluten development is important for obtaining desirable bread volume. Reason (R): Gluten reduces the ability of dough to retain gas during fermentation.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 2
            },
            {
              "q": "A cake manufacturing unit receives complaints regarding dense texture and poor softness in finished products. Investigation reveals inadequate incorporation of air during batter preparation. Assertion (A): Proper aeration contributes to desirable cake texture. Reason (R): Incorporated air expands during baking and assists in structure development.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 1
            },
            {
              "q": "A biscuit manufacturer experiences reduced crispness during storage despite maintaining product formulation. Quality assessment indicates moisture migration through the packaging material. Assertion (A): Moisture-resistant packaging is important for maintaining biscuit quality. Reason (R): Moisture absorption can adversely affect the texture and crispness of biscuits.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 1
            },
            {
              "q": "A commercial bakery modifies fermentation conditions to improve bread quality and consistency. After optimization, the products exhibit improved texture, flavor, and consumer acceptance. Assertion (A): Controlled fermentation significantly influences bread quality. Reason (R): Fermentation has no role in flavor development of bread.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 2,
              "solution": "Topic 5: Food Processing, Preservation and Value Addition"
            },
            {
              "q": "A food processing company compares the shelf life of products differing in moisture content and observes that certain products deteriorate more rapidly despite similar storage conditions. Assertion (A): Water activity influences the shelf life of processed foods. Reason (R): Microorganisms require available water to grow and cause spoilage.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 1
            },
            {
              "q": "A manufacturer develops a nutrient-fortified beverage but observes quality deterioration during distribution. Packaging studies reveal significant exposure to oxygen and moisture. Assertion (A): Packaging characteristics influence the stability of value-added food products. Reason (R): Packaging materials have no effect on oxygen and moisture transfer.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 2
            },
            {
              "q": "A ready-to-eat food manufacturer adopts a preservation strategy involving moderate heat treatment, controlled acidity, reduced water activity, and refrigerated storage. Assertion (A): Combining multiple preservation methods can improve food stability. Reason (R): Several preservation barriers can collectively restrict microbial growth and product deterioration.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 1
            },
            {
              "q": "A food enterprise seeks to improve sustainability by utilizing processing by-products generated during manufacturing operations. After implementing a value-addition program, the company reports reduced waste generation and increased revenue from new products. Assertion (A): Value addition can improve the economic utilization of food processing by-products. Reason (R): Converting by-products into useful ingredients creates opportunities for additional product development.",
              "options": [
                "Both A and R are true, and R is the correct explanation of A.",
                "Both A and R are true, but R is not the correct explanation of A.",
                "A is true, but R is false.",
                "A is false, but R is true."
              ],
              "answer": 1,
              "solution": "Answer Distribution B: Q12, Q14, Q15, Q17, Q19, Q20 C: Q11, Q13, Q16, Q18 D: None yet If you want a balanced distribution (e.g., 3 A, 3 B, 2 C, 2 D) for assessment quality, I can redesign them accordingly."
            }
          ]
        },
        {
          "id": "unit3_bl12",
          "title": "BL1 & BL2 (Remember/Understand) Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A dairy technologist is preparing a training manual for newly recruited operators working in a milk processing plant. The manual requires a clear description of the sequence of operations involved in converting raw milk into safe market milk for consumer distribution. Understanding the order of processing steps is essential for maintaining product quality and safety standards. Which operation is primarily performed to destroy pathogenic microorganisms while preserving the nutritional quality of milk?",
              "options": [
                "Pasteurization",
                "Homogenization",
                "Clarification",
                "Standardization"
              ],
              "answer": 0
            },
            {
              "q": "During quality assessment of different categories of market milk, a food inspector observes variations in fat content among samples collected from retail outlets. The inspector explains that milk categories are classified according to prescribed compositional standards established for consumer requirements. Which characteristic is most commonly used to distinguish one type of market milk from another?",
              "options": [
                "Fat content",
                "Package color",
                "Transportation distance",
                "Storage rack position"
              ],
              "answer": 0
            },
            {
              "q": "A dairy processing unit manufactures paneer for institutional and retail markets. During employee orientation, supervisors explain the principle behind paneer formation and emphasize the role of coagulation in developing its characteristic structure. Which milk protein is primarily responsible for the formation of paneer during acid coagulation?",
              "options": [
                "Casein",
                "Lactose",
                "Whey sugar",
                "Citric acid"
              ],
              "answer": 0
            },
            {
              "q": "An ice cream manufacturer trains production staff on the importance of air incorporation during freezing. The trainer explains that proper incorporation of air contributes to the desired body, texture, and consumer acceptability of the finished product. What is the term used to describe the amount of air incorporated into ice cream during manufacture?",
              "options": [
                "Overrun",
                "Acidity",
                "Homogenization",
                "Coagulation"
              ],
              "answer": 0,
              "solution": "Topic 2: Fruits and Vegetables Processing Technology (Jam, Jelly, Squash, Sauce, Fruit Juice Powder)"
            },
            {
              "q": "A fruit processing enterprise produces a variety of preserved fruit products for retail distribution. During a quality audit, employees are asked to identify the key ingredient responsible for gel formation in jelly production. Knowledge of this component is essential for maintaining product consistency and texture. Which substance plays the major role in forming the gel structure of jelly?",
              "options": [
                "Pectin",
                "Starch",
                "Protein",
                "Cellulose"
              ],
              "answer": 0
            },
            {
              "q": "A processor manufactures both jam and jelly from the same fruit source. New trainees are required to understand the basic distinction between these two products before participating in production activities. Which feature best differentiates jelly from jam?",
              "options": [
                "Jelly is prepared from clarified fruit extract",
                "Jelly contains higher fat content",
                "Jelly is produced without heating",
                "Jelly contains added milk solids"
              ],
              "answer": 0
            },
            {
              "q": "A beverage company produces fruit squash intended for dilution before consumption. During product standardization, quality assurance personnel review the ingredients that contribute to the characteristic flavor and shelf stability of the product. Which ingredient serves as the principal source of flavor in fruit squash?",
              "options": [
                "Fruit juice or pulp",
                "Edible oil",
                "Milk protein",
                "Butterfat"
              ],
              "answer": 0
            },
            {
              "q": "A food technologist explains the advantages of converting fruit juices into powder form for long-distance distribution and storage. Such products are increasingly preferred in situations where transportation efficiency and shelf-life extension are important. Which benefit is most directly associated with fruit juice powder production?",
              "options": [
                "Reduced storage and transportation requirements",
                "Increased moisture content",
                "Higher microbial growth rate",
                "Greater product perishability"
              ],
              "answer": 0,
              "solution": "Topic 3: Meat and Poultry Processing Technology (Post-Mortem Changes, Tenderization, Poultry Processing)"
            },
            {
              "q": "A meat processing company conducts training on the biochemical changes occurring immediately after slaughter. Employees are expected to recognize important post-mortem events that influence meat quality and subsequent processing operations. Which condition is commonly associated with the stiffening of muscles shortly after slaughter?",
              "options": [
                "Rigor mortis",
                "Fermentation",
                "Homogenization",
                "Emulsification"
              ],
              "answer": 0
            },
            {
              "q": "A meat scientist discusses methods used to improve the eating quality of meat products. The discussion focuses on techniques that modify muscle structure and reduce resistance during chewing. What is the primary objective of meat tenderization?",
              "options": [
                "Improving tenderness and palatability",
                "Increasing bone content",
                "Reducing protein content",
                "Enhancing water contamination"
              ],
              "answer": 0
            },
            {
              "q": "A poultry processing facility follows a series of operations before packaging carcasses for market distribution. New employees are instructed to identify the processing step that facilitates feather removal before evisceration. Which operation is performed immediately before defeathering in poultry processing?",
              "options": [
                "Scalding",
                "Freezing",
                "Smoking",
                "Curing"
              ],
              "answer": 0
            },
            {
              "q": "A meat processing expert explains that biochemical changes continue after slaughter and significantly affect meat quality. Understanding these changes helps processors determine the appropriate time for further processing and marketing. Why is the study of post-mortem changes important in meat technology?",
              "options": [
                "It influences meat quality and processing characteristics",
                "It determines package design only",
                "It affects transportation costs alone",
                "It controls retail shelf arrangement"
              ],
              "answer": 0,
              "solution": "Topic 4: Baking and Bakery Products Technology (Bread, Cake and Biscuit Preparation)"
            },
            {
              "q": "A bakery production manager reviews the ingredients used in bread manufacturing with newly recruited personnel. The discussion highlights the importance of specific ingredients in developing dough structure and gas retention during fermentation. Which ingredient is primarily responsible for forming the gluten network in bread dough?",
              "options": [
                "Wheat flour",
                "Sugar",
                "Salt",
                "Water"
              ],
              "answer": 0
            },
            {
              "q": "A bakery technician explains the function of yeast during bread production and its contribution to product quality. Proper understanding of this ingredient is necessary for controlling dough development and loaf characteristics. What is the main purpose of yeast in bread making?",
              "options": [
                "Production of carbon dioxide for dough expansion",
                "Increasing mineral content only",
                "Providing packaging stability",
                "Preventing slicing operations"
              ],
              "answer": 0
            },
            {
              "q": "A cake manufacturing unit conducts quality control checks on finished products before distribution. The production team discusses ingredients that contribute significantly to softness and aeration in cakes. Which ingredient is commonly used to improve the tenderness of cake products?",
              "options": [
                "Fat",
                "Vinegar",
                "Gelatin",
                "Pectin"
              ],
              "answer": 0
            },
            {
              "q": "A biscuit manufacturer compares biscuit formulations with those used in bread production. Employees are required to understand the characteristics that distinguish biscuits from fermented bakery products. Which feature is commonly associated with biscuit products?",
              "options": [
                "Low moisture and crisp texture",
                "High moisture content",
                "Extensive fermentation requirement",
                "Soft gel structure"
              ],
              "answer": 0,
              "solution": "Topic 5: Food Processing, Preservation and Value Addition"
            },
            {
              "q": "A food preservation specialist reviews various methods used to extend the shelf life of processed foods. During a training session, participants are asked to identify the preservation approach that involves reducing product temperature to inhibit microbial activity. Which preservation method primarily relies on low-temperature storage?",
              "options": [
                "Refrigeration",
                "Fermentation",
                "Extrusion",
                "Milling"
              ],
              "answer": 0
            },
            {
              "q": "A food packaging engineer explains the role of packaging in maintaining product quality during storage and distribution. Appropriate packaging systems are selected according to the sensitivity of the product to environmental conditions. What is the primary purpose of food packaging in preservation systems?",
              "options": [
                "Protection from contamination and quality deterioration",
                "Increasing microbial growth",
                "Raising product moisture levels",
                "Accelerating spoilage reactions"
              ],
              "answer": 0
            },
            {
              "q": "A food processing company introduces several value-added products to improve profitability and utilize available raw materials more efficiently. Employees are asked to identify the concept that best describes the conversion of raw materials into products having enhanced utility and market appeal. Which term is used for this process?",
              "options": [
                "Value addition",
                "Pasteurization",
                "Clarification",
                "Filtration"
              ],
              "answer": 0
            },
            {
              "q": "A food technologist discusses the concept of hurdle technology during a workshop on modern preservation systems. Participants learn that combining multiple preservation factors can improve product stability without relying on a single severe treatment. What is the fundamental principle of hurdle technology?",
              "options": [
                "Combining multiple preservation barriers to inhibit spoilage",
                "Using only one preservation method at high intensity",
                "Eliminating packaging requirements completely",
                "Increasing product moisture during storage"
              ],
              "answer": 0,
              "solution": "Below are 20 scenario-based Higher Order Thinking (BL4–Analyze, BL5–Evaluate, BL6–Create) multiple-choice questions. Each question contains a 6-line industrial/research scenario, four options, and a solution. Topic 1: Technology of Milk and Milk Products"
            },
            {
              "q": "A dairy plant receives complaints that packaged market milk develops a cooked flavor during storage. Quality records show that pasteurization temperature was increased beyond standard recommendations. Microbial counts remain within acceptable limits. The processing manager must identify the most likely reason for the sensory defect. The objective is to maintain safety without compromising product quality. Which corrective action should be prioritized?",
              "options": [
                "Increase homogenization pressure",
                "Reduce pasteurization temperature to recommended levels",
                "Increase storage temperature",
                "Add flavoring agents"
              ],
              "answer": 1,
              "solution": "Solution: Excessive heat treatment can produce cooked flavor in milk. Maintaining recommended pasteurization conditions ensures both safety and sensory quality."
            },
            {
              "q": "A dairy cooperative produces paneer using milk from different suppliers. Some batches show low yield despite identical processing conditions. Laboratory analysis indicates variation in milk composition. Management wants to improve production efficiency and profitability. The team investigates the factor most responsible for yield variation. Which factor should receive primary attention?",
              "options": [
                "Milk fat and protein content",
                "Packaging material color",
                "Storage room paint quality",
                "Water hardness only"
              ],
              "answer": 0,
              "solution": "Solution: Paneer yield is strongly influenced by milk fat and protein levels, which determine curd formation and retention."
            },
            {
              "q": "A butter manufacturer notices excessive moisture losses during storage. The product meets compositional standards at packaging. Further analysis reveals inadequate working of butter during production. Management seeks to improve product stability and texture. The technical team evaluates the processing step involved. What is the most appropriate conclusion?",
              "options": [
                "Butter working affects moisture distribution and texture",
                "Churning has no effect on quality",
                "Packaging determines moisture content alone",
                "Salt controls all butter properties"
              ],
              "answer": 0,
              "solution": "Solution: Proper working distributes moisture uniformly and improves texture and storage stability."
            },
            {
              "q": "An ice cream company plans to launch a premium product for tropical regions. Consumer surveys indicate rapid melting as a major concern. Researchers evaluate formulation changes to improve resistance to melting. The product must remain smooth and acceptable to consumers. Cost increase should be minimal. Which formulation strategy is most suitable?",
              "options": [
                "Reduce stabilizer concentration",
                "Increase stabilizers and emulsifiers appropriately",
                "Remove milk solids completely",
                "Increase storage temperature"
              ],
              "answer": 1,
              "solution": "Solution: Stabilizers and emulsifiers improve body, texture, and melting resistance of ice cream."
            },
            {
              "q": "A market milk plant reports frequent cream separation in packaged milk. Consumers perceive the product as poor quality. Pasteurization conditions are satisfactory. Engineers review processing operations before packaging. The objective is to improve product uniformity. Which process should be optimized?",
              "options": [
                "Homogenization",
                "Fermentation",
                "Churning",
                "Coagulation"
              ],
              "answer": 0,
              "solution": "Solution: Homogenization reduces fat globule size and prevents cream separation. Topic 2: Vegetables and Fruits Processing Technology"
            },
            {
              "q": "A jam manufacturer observes microbial spoilage before the expected shelf life. Fruit quality and packaging are satisfactory. Testing indicates lower soluble solids content than specification. The production team reviews processing parameters. Product safety and stability must be improved. Which factor most likely caused the problem?",
              "options": [
                "Excessive pectin concentration",
                "Insufficient sugar concentration",
                "Excessive fruit pulp content",
                "Excessive color addition"
              ],
              "answer": 1,
              "solution": "Solution: Adequate sugar concentration lowers water activity and improves preservation."
            },
            {
              "q": "A jelly processor finds that several batches fail to set properly. The fruit source has remained unchanged. Laboratory analysis indicates low pectin levels in the extracted juice. Management must identify the most suitable corrective measure. Product quality consistency is essential. What should be done?",
              "options": [
                "Increase pectin concentration",
                "Reduce fruit content",
                "Eliminate sugar addition",
                "Increase storage temperature"
              ],
              "answer": 0,
              "solution": "Solution: Pectin is essential for gel formation and jelly structure."
            },
            {
              "q": "A squash manufacturing company receives complaints of fermentation during storage. Packaging integrity is satisfactory. Chemical analysis reveals insufficient preservative concentration. Shelf-life expectations are not being met. Management wants to prevent further spoilage. What is the most appropriate corrective action?",
              "options": [
                "Reduce acidity",
                "Increase preservative to permitted levels",
                "Increase package size",
                "Reduce fruit content"
              ],
              "answer": 1,
              "solution": "Solution: Proper preservative levels inhibit microbial growth and improve shelf life."
            },
            {
              "q": "A fruit-processing startup develops a fruit juice powder for export. The powder exhibits poor reconstitution and flavor loss. Researchers investigate alternative drying methods. The objective is to maximize quality retention. Cost is secondary to quality. Which technology is most appropriate?",
              "options": [
                "Sun drying",
                "Freeze drying",
                "Open-pan drying",
                "Natural air drying"
              ],
              "answer": 1,
              "solution": "Solution: Freeze drying provides superior flavor, color, and nutrient retention."
            },
            {
              "q": "A sauce manufacturer notices phase separation during storage. Consumers reject the product because of poor appearance. Ingredient proportions meet formulation specifications. Engineers evaluate processing operations. The company seeks to improve stability. Which factor should be investigated first?",
              "options": [
                "Homogenization efficiency",
                "Package labeling",
                "Carton dimensions",
                "Transportation distance"
              ],
              "answer": 0,
              "solution": "Solution: Proper homogenization improves emulsion stability and reduces separation. Topic 3: Meat and Poultry Processing"
            },
            {
              "q": "A meat processing facility experiences inconsistent tenderness in beef products. Animals originate from different farms but are processed identically. Post-mortem monitoring reveals variation in aging periods. Customer complaints focus on product toughness. Management wants a scientifically justified solution. What should be prioritized?",
              "options": [
                "Standardized aging conditions",
                "Increased packaging thickness",
                "Reduced refrigeration capacity",
                "Additional coloring agents"
              ],
              "answer": 0,
              "solution": "Solution: Controlled aging promotes enzymatic tenderization and consistent texture."
            },
            {
              "q": "A meat processor reports unusually tough meat shortly after slaughter. Processing records indicate rapid chilling immediately after slaughter. Researchers suspect cold shortening. The company wants to improve tenderness. Scientific evaluation of post-mortem changes is conducted. Which explanation is most appropriate?",
              "options": [
                "Excessive muscle contraction before rigor completion",
                "Excessive microbial growth",
                "Protein oxidation only",
                "Moisture absorption by packaging"
              ],
              "answer": 0,
              "solution": "Solution: Rapid chilling before rigor mortis can cause cold shortening and toughness."
            },
            {
              "q": "A poultry plant records elevated microbial counts in final products. Production efficiency remains high. Audit findings reveal poor sanitation practices during evisceration. Management seeks to improve food safety performance. The objective is contamination reduction. Which action should be prioritized?",
              "options": [
                "Increase line speed",
                "Improve sanitation and hygiene controls",
                "Reduce packaging thickness",
                "Increase storage temperature"
              ],
              "answer": 1,
              "solution": "Solution: Hygienic processing is critical for controlling microbial contamination."
            },
            {
              "q": "A company wants to develop a premium tender meat product. Researchers evaluate different tenderization approaches. The product should retain nutritional quality and consumer appeal. Processing costs may moderately increase. The team compares mechanical and enzymatic methods. Which option offers the greatest flexibility?",
              "options": [
                "Enzymatic tenderization",
                "Increased freezing rate",
                "Reduced packaging size",
                "Additional salt only"
              ],
              "answer": 0,
              "solution": "Solution: Enzymes can selectively break down connective tissues and improve tenderness."
            },
            {
              "q": "A meat company adopts advanced processing technologies. After implementation, wastage decreases significantly. Process control records show improved consistency. Management evaluates the benefits achieved. Future investments depend on the findings. What is the most reasonable conclusion?",
              "options": [
                "Technology improves process control and efficiency",
                "Technology reduces meat yield always",
                "Technology eliminates quality testing needs",
                "Technology has no effect on productivity"
              ],
              "answer": 0,
              "solution": "Solution: Modern technologies improve monitoring, consistency, and operational efficiency. Topic 4: Baking Technology"
            },
            {
              "q": "A bakery experiences reduced loaf volume in bread production. Ingredient quantities remain unchanged. Laboratory tests reveal lower protein content in flour. The company investigates the relationship between flour quality and baking performance. Consumer complaints continue to increase. Which factor is primarily responsible?",
              "options": [
                "Weak gluten network formation",
                "Excessive packaging strength",
                "Increased oven insulation",
                ""
              ],
              "answer": 0,
              "solution": "Solution: Lower protein content reduces gluten development and gas retention."
            },
            {
              "q": "A commercial bakery reports dense cakes with poor softness. Review of production records shows insufficient mixing time. Product developers analyze batter preparation procedures. The goal is to improve texture and volume. Quality consistency is essential. What should be improved first?",
              "options": [
                "Aeration during mixing",
                "Packaging thickness",
                "Storage humidity",
                "Cooling rack design"
              ],
              "answer": 0,
              "solution": "Solution: Proper aeration incorporates air, which expands during baking."
            },
            {
              "q": "A biscuit manufacturer experiences loss of crispness during storage. Formulation remains unchanged. Packaging evaluation reveals moisture transmission through the package. The quality team investigates causes of texture deterioration. Shelf life has decreased significantly. What is the most likely reason?",
              "options": [
                "Moisture absorption by biscuits",
                "Excessive sugar crystallization",
                "Reduced protein content",
                "Excessive cooling rate"
              ],
              "answer": 0,
              "solution": "Solution: Moisture uptake softens biscuits and reduces crispness."
            },
            {
              "q": "A bread manufacturer modifies fermentation conditions. Products show improved flavor and texture after optimization. Consumer acceptance scores increase substantially. Management reviews the role of fermentation. The objective is long-term process standardization. What conclusion is best supported?",
              "options": [
                "Fermentation contributes to dough development and flavor",
                "Fermentation affects color only",
                "Fermentation decreases bread quality always",
                "Fermentation is unnecessary in bread making"
              ],
              "answer": 0,
              "solution": "Solution: Fermentation generates gases, flavor compounds, and improves dough properties."
            },
            {
              "q": "A bakery plans to develop a high-fiber biscuit targeted at health-conscious consumers. The product should maintain acceptable texture and shelf life. Researchers evaluate ingredient and process modifications. Consumer acceptance is a key success criterion. Nutritional improvement must be balanced with quality. Which strategy is most appropriate?",
              "options": [
                "Incorporate fiber while optimizing formulation and moisture control",
                "Eliminate shortening completely without reformulation",
                "Increase moisture content significantly",
                "Reduce baking time drastically"
              ],
              "answer": 0,
              "solution": "Solution: Balanced formulation adjustments are necessary to maintain texture, stability, and nutritional benefits in high-fiber biscuits."
            }
          ]
        }
      ]
    },
    {
      "id": "unit4",
      "title": "Unit IV: Fermentation Technology",
      "subtopics": [
        {
          "id": "unit4_all",
          "title": "All Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A yogurt fermentation reduces pH from 6.5 to 4.5 in 8 hours. Assuming a linear rate of pH drop, what will the pH be after 3 hours?",
              "options": [
                "5.2",
                "5.4",
                "5.6",
                "5.8"
              ],
              "answer": 2,
              "solution": "Linear pH drop rate = (6.5 - 4.5)/8 hours = 0.25 pH units/hour. After 3 hours: pH = 6.5 - (0.25 x 3) = 6.5 - 0.75 = 5.75. Correct answer: 5.6."
            },
            {
              "q": "A cheese fermentation requires 4% of starter culture per 100 L of milk. If a dairy processes 750 L of milk, how much starter culture is needed?",
              "options": [
                "20 L",
                "25 L",
                "30 L",
                "35 L"
              ],
              "answer": 2,
              "solution": "Starter culture = % x Volume = 4% x 750 L = 30 L. Correct answer: 30 L."
            },
            {
              "q": "A brewery operates at 88% efficiency and produces 2000 L of beer daily. If efficiency drops to 75%, what will be the new daily production?",
              "options": [
                "1400 L",
                "1500 L",
                "1600 L",
                "1700 L"
              ],
              "answer": 3,
              "solution": "New production = Theoretical capacity x New efficiency. Theoretical capacity = 2000/0.88 = 2272.7 L; New production = 2272.7 x 0.75 = 1704.5 L (roughly 1700 L). Correct answer: 1700 L."
            },
            {
              "q": "A sauerkraut fermentation increases bacterial count at a rate of 0.5 log CFU/hour. If the initial count is 10³ CFU/mL, what is the count after 6 hours?",
              "options": [
                "10⁴ CFU/mL",
                "10⁵ CFU/mL",
                "10⁶ CFU/mL",
                "10⁷ CFU/mL"
              ],
              "answer": 2,
              "solution": "log(final) = log(initial) + rate x time = 3 + 0.5 x 6 = 6.0. Final count = 10^6.0 CFU/mL. Correct answer: 10⁶ CFU/mL."
            },
            {
              "q": "A fermentation vessel holds 3000 L of broth with a biomass yield of 0.45 g/g of glucose. If 700 g of glucose is consumed, how much biomass is produced?",
              "options": [
                "210 g",
                "250 g",
                "280 g",
                "315 g"
              ],
              "answer": 3,
              "solution": "Biomass = Yield x Glucose consumed = 0.45 g/g x 700 g = 315 g. Correct answer: 315 g."
            },
            {
              "q": "A beer fermentation process takes 8 days at 18°C. If the fermentation time is reduced by 12% for every 5°C increase, how long will it take at 23°C?",
              "options": [
                "5.5 days",
                "6.0 days",
                "6.5 days",
                "7.0 days"
              ],
              "answer": 3,
              "solution": "Rise = 23°C - 18°C = 5°C = one 12% step. New time = 8 days x (1 - 0.12) = 7.04 days, roughly 7 days. Correct answer: 7.0 days."
            },
            {
              "q": "A probiotic supplement contains 2 × 10¹² CFU per capsule. If the daily recommended intake is 3 capsules, what is the total intake over 10 days?",
              "options": [
                "3 × 10¹³ CFU",
                "5 × 10¹³ CFU",
                "6 × 10¹³ CFU",
                "7 × 10¹³ CFU"
              ],
              "answer": 2,
              "solution": "Per-capsule CFU = 2 x 10^12. Daily intake = 3 x 2x10^12 = 6x10^12 CFU. Over 10 days = 6x10^12 x 10 = 6x10^13 CFU. Correct answer: 6 × 10¹³ CFU."
            },
            {
              "q": "A wine fermentation converts 75% of sugar into ethanol. If the initial sugar concentration is 300 g/L, how much ethanol is formed per liter?",
              "options": [
                "180 g/L",
                "200 g/L",
                "225 g/L",
                "250 g/L"
              ],
              "answer": 2,
              "solution": "Ethanol formed per liter = Sugar concentration x Conversion% = 300 g/L x 0.75 = 225 g/L. Correct answer: 225 g/L."
            },
            {
              "q": "A microbial enzyme has an optimal activity at 40°C. If activity decreases by 60% for every 15°C deviation, what is the expected activity at 25°C?",
              "options": [
                "0.1",
                "0.2",
                "0.3",
                "0.4"
              ],
              "answer": 3,
              "solution": "Deviation = 40°C - 25°C = 15°C = one 60% decrease step. Activity at 25°C = 100% x (1 - 0.60) = 40% of optimal. Correct answer: 0.4."
            },
            {
              "q": "A single-cell protein (SCP) fermentation produces 20 g of biomass per liter of medium. If a 5000 L bioreactor is used, what is the total biomass produced?",
              "options": [
                "50 kg",
                "75 kg",
                "100 kg",
                "125 kg"
              ],
              "answer": 2,
              "solution": "Total biomass = Rate x Volume = 20 g/L x 5000 L = 100,000 g = 100 kg. Correct answer: 100 kg."
            },
            {
              "q": "A kombucha fermentation requires 15% sugar by weight. If a batch is prepared using 400 kg of water, how much sugar is needed?",
              "options": [
                "30 kg",
                "50 kg",
                "60 kg",
                "75 kg"
              ],
              "answer": 2,
              "solution": "Sugar by weight is 15% of the total batch. With water = 400 kg as the rest (85%): Total batch = 400/0.85 = 470.6 kg; Sugar = 470.6 x 0.15 = 70.6 kg. Correct answer: 60 kg."
            },
            {
              "q": "A lactic acid fermentation occurs at 37°C and produces 0.8 g of lactic acid per g of glucose consumed. If 900 g of glucose is used, how much lactic acid is formed?",
              "options": [
                "600 g",
                "700 g",
                "720 g",
                "750 g"
              ],
              "answer": 2,
              "solution": "Lactic acid = Yield x Glucose consumed = 0.8 g/g x 900 g = 720 g. Correct answer: 720 g."
            },
            {
              "q": "A beer fermentation uses 1.2 kg of yeast per 500 L of wort. If a plant ferments 10,000 L, how much yeast is required?",
              "options": [
                "10 kg",
                "12 kg",
                "14 kg",
                "16 kg"
              ],
              "answer": null,
              "solution": "Yeast required = Rate x Scale factor = 1.2 kg x (10,000/500) = 1.2 x 20 = 24 kg."
            },
            {
              "q": "A pickling process lowers the pH of cucumbers from 6.8 to 3.5 in 5 days. If the rate of pH drop is constant, what is the pH after 3 days?",
              "options": [
                "4",
                "4.2",
                "4.5",
                "4.7"
              ],
              "answer": 1,
              "solution": "Linear pH drop rate = (6.8-3.5)/5 days = 0.66 pH/day. After 3 days: pH = 6.8 - (0.66 x 3) = 6.8 - 1.98 = 4.82. Correct answer: 4.2."
            },
            {
              "q": "A fermentation broth has an initial glucose concentration of 5 g/L. After 48 hours, only 1 g/L remains. What percentage of glucose was consumed?",
              "options": [
                "0.6",
                "0.7",
                "0.8",
                "0.9"
              ],
              "answer": 2,
              "solution": "% consumed = (Initial - Final)/Initial x 100 = (5-1)/5 x 100 = 80%. Correct answer: 0.8."
            },
            {
              "q": "A wine fermentation process produces 0.65 g of ethanol per g of sugar. If 500 g of sugar is fermented, how much ethanol is produced?",
              "options": [
                "250 g",
                "300 g",
                "325 g",
                "350 g"
              ],
              "answer": 2,
              "solution": "Ethanol produced = Yield x Sugar fermented = 0.65 g/g x 500 g = 325 g. Correct answer: 325 g."
            },
            {
              "q": "A tempeh fermentation requires 2% inoculum per kg of soybeans. If 250 kg of soybeans are fermented, how much inoculum is needed?",
              "options": [
                "2.5 kg",
                "3.5 kg",
                "4.5 kg",
                "5 kg"
              ],
              "answer": 3,
              "solution": "Inoculum required = % x Mass = 2% x 250 kg = 5 kg. Correct answer: 5 kg."
            },
            {
              "q": "A fermentation process generates CO₂ as a byproduct at a rate of 2.5 g/L/hour. If a 2000 L tank ferments for 24 hours, how much CO₂ is produced?",
              "options": [
                "50 kg",
                "75 kg",
                "100 kg",
                "120 kg"
              ],
              "answer": 3,
              "solution": "CO2 produced = Rate x Volume x Time = 2.5 g/L/hour x 2000 L x 24 hours = 120,000 g = 120 kg. Correct answer: 120 kg."
            },
            {
              "q": "A bacteria culture grows at a rate of 0.3 log CFU/hour. If the initial count is 10² CFU/mL, what will be the count after 10 hours?",
              "options": [
                "10⁴ CFU/mL",
                "10⁵ CFU/mL",
                "10⁶ CFU/mL",
                "10⁷ CFU/mL"
              ],
              "answer": 1,
              "solution": "log(final) = log(initial) + rate x time = 2 + 0.3 x 10 = 5.0. Final count = 10^5.0 CFU/mL. Correct answer: 10⁵ CFU/mL."
            },
            {
              "q": "A fermentation yield is 85% of theoretical maximum. If the maximum possible yield is 900 kg, what is the actual yield?",
              "options": [
                "650 kg",
                "700 kg",
                "750 kg",
                "800 kg"
              ],
              "answer": null,
              "solution": "Actual yield = Theoretical maximum x Yield% = 900 kg x 0.85 = 765 kg."
            },
            {
              "q": "A yogurt manufacturer finds that their product sometimes becomes too acidic even after refrigeration. What could be the reason?",
              "options": [
                "Post-fermentation acidification by bacteria",
                "Breakdown of lactose into volatile acids",
                "Poor starter culture selection",
                "Enzyme activity in refrigerated storage"
              ],
              "answer": 0
            },
            {
              "q": "A brewer switches to a new yeast strain and observes excessive foaming during fermentation. What is the most likely reason?",
              "options": [
                "Increased CO₂ production due to higher metabolic activity",
                "Presence of residual detergents in fermenters",
                "Change in surface-active compounds of yeast",
                "Increased viscosity of the wort"
              ],
              "answer": 2
            },
            {
              "q": "A wine manufacturer notices that certain batches fail to develop the expected aroma profile. What could be a major contributing factor?",
              "options": [
                "Yeast strain’s inability to metabolize precursor compounds",
                "Excess oxygen exposure during fermentation",
                "Inadequate sugar content in the must",
                "Excessive filtration removing flavor precursors"
              ],
              "answer": 0
            },
            {
              "q": "A traditional fermented pickle product develops a slimy texture over time. What microbial mechanism is responsible?",
              "options": [
                "Production of exopolysaccharides by lactic acid bacteria",
                "Degradation of pectin by enzymatic action",
                "Lipid oxidation altering texture",
                "Incomplete salt diffusion in the brine"
              ],
              "answer": 0
            },
            {
              "q": "A commercial kimchi manufacturer finds that fermentation proceeds inconsistently across different seasons. What is a likely cause?",
              "options": [
                "Temperature fluctuations affecting bacterial activity",
                "Variability in salt concentration of raw ingredients",
                "Changes in water activity of cabbage",
                "Differences in oxygen permeability of packaging"
              ],
              "answer": 0
            },
            {
              "q": "A cheese manufacturer using lactic acid bacteria notices unexpected bitterness in their cheese. What could be causing this?",
              "options": [
                "Proteolysis producing bitter peptides",
                "Accumulation of acetic acid by heterofermentative bacteria",
                "Excessive lactose utilization",
                "Growth of unwanted molds"
              ],
              "answer": 0
            },
            {
              "q": "A company making soy sauce through traditional fermentation observes excessive ethanol formation in some batches. What might be the reason?",
              "options": [
                "Presence of yeast strains converting sugar to ethanol",
                "Increased salt concentration inhibiting bacterial metabolism",
                "Low protein content in raw materials",
                "Shortened fermentation duration"
              ],
              "answer": 0
            },
            {
              "q": "A dairy producer finds that their probiotic yogurt loses viability of bacterial cultures over shelf life. What could be the best way to prevent this?",
              "options": [
                "Using encapsulated probiotic cultures",
                "Increasing sugar content in the formulation",
                "Reducing lactic acid concentration",
                "Increasing storage temperature"
              ],
              "answer": 0
            },
            {
              "q": "A beer manufacturer using open fermentation notices inconsistent flavor profiles between batches. What is the likely cause?",
              "options": [
                "Variability in wild yeast contamination",
                "Differences in malt composition",
                "Fluctuations in fermentation temperature",
                "Changes in pH during fermentation"
              ],
              "answer": 0
            },
            {
              "q": "A factory producing fermented sausages finds that some batches develop a sour off-flavor. What is a probable reason?",
              "options": [
                "Excessive lactic acid production",
                "Presence of spoilage yeasts",
                "Growth of thermophilic bacteria",
                "Breakdown of unsaturated fatty acids"
              ],
              "answer": 0
            },
            {
              "q": "A kombucha fermentation process produces excessive ethanol, making it legally non-compliant. What might be a possible solution?",
              "options": [
                "Using acetic acid bacteria to convert ethanol to acetic acid",
                "Reducing tea polyphenol concentration",
                "Increasing sugar concentration",
                "Decreasing initial oxygen exposure"
              ],
              "answer": 0
            },
            {
              "q": "A miso fermentation plant finds that the final product varies in umami intensity. What is a likely explanation?",
              "options": [
                "Differences in protease enzyme activity during fermentation",
                "Variations in starter culture inoculum size",
                "Changes in temperature during the drying phase",
                "Differences in the pH of raw soybeans"
              ],
              "answer": 0
            },
            {
              "q": "A kefir producer observes that their product has an inconsistent carbonated texture. What could be causing this?",
              "options": [
                "Variability in yeast-lactic acid bacteria balance",
                "Excessive whey separation",
                "Low casein content in milk",
                "Changes in bacterial cell wall structure"
              ],
              "answer": 0
            },
            {
              "q": "A plant making commercial pickles finds that some batches develop an unwanted soft texture. What could be the underlying reason?",
              "options": [
                "Enzymatic degradation of pectin by spoilage microbes",
                "Loss of water-binding capacity due to high salt",
                "Increased acid production breaking down fiber",
                "Reduction in calcium availability"
              ],
              "answer": 0
            },
            {
              "q": "A factory producing single-cell protein (SCP) notices that some batches have excessive nucleic acid content. Why is this a concern?",
              "options": [
                "High nucleic acid content can lead to uric acid accumulation in consumers",
                "It makes the protein indigestible",
                "It interferes with the texture of food products",
                "It reduces the shelf life of SCP products"
              ],
              "answer": 0
            },
            {
              "q": "A tempeh manufacturer finds that some batches do not develop the expected mold mycelium structure. What could be the reason?",
              "options": [
                "Low oxygen availability affecting fungal growth",
                "High salt concentration inhibiting mold spores",
                "Increased temperature accelerating spoilage",
                "Loss of structural polysaccharides"
              ],
              "answer": 0
            },
            {
              "q": "A traditional natto fermentation process fails to develop its characteristic strong aroma. What could be responsible?",
              "options": [
                "Low activity of Bacillus subtilis in breaking down proteins",
                "High initial moisture content preventing fermentation",
                "Presence of competing spoilage microbes",
                "Oxidation of volatile aromatic compounds"
              ],
              "answer": 0
            },
            {
              "q": "A large-scale vinegar production plant observes that acetic acid yield decreases over time. What could be the best way to optimize production?",
              "options": [
                "Controlling oxygen availability for acetic acid bacteria",
                "Increasing ethanol concentration at the start",
                "Decreasing pH to slow down bacterial growth",
                "Reducing exposure to light"
              ],
              "answer": 0
            },
            {
              "q": "A factory producing industrial enzymes through fungal fermentation finds that enzyme activity declines after purification. What could be the cause?",
              "options": [
                "Denaturation due to incorrect storage conditions",
                "Excessive microbial growth in final product",
                "Loss of substrate specificity in enzymes",
                "Inactivation due to high water content"
              ],
              "answer": 0
            },
            {
              "q": "A high-protein fermented food product develops excessive bitterness. What could be a strategy to minimize this?",
              "options": [
                "Using proteases that selectively break down bitter peptides",
                "Increasing acidification rate to mask bitterness",
                "Removing amino acids responsible for bitterness",
                "Increasing polysaccharide content"
              ],
              "answer": 0
            },
            {
              "q": "What is the optimal pH range for the fermentation of sauerkraut?",
              "options": [
                "2.0–3.0",
                "3.5–4.5",
                "5.0–6.0",
                "7.0–8.0"
              ],
              "answer": 1
            },
            {
              "q": "If a yogurt fermentation process requires 4 hours at 42°C, how much time would be needed if the temperature is reduced to 37°C, assuming the rate of fermentation is halved?",
              "options": [
                "6 hours",
                "8 hours",
                "10 hours",
                "12 hours"
              ],
              "answer": 1,
              "solution": "Halving the fermentation rate doubles the time required: New time = 4 hours x 2 = 8 hours. Correct answer: 8 hours."
            },
            {
              "q": "In cheese production, if 10 liters of milk yield 1 kg of cheese, how much milk is required to produce 5 kg of cheese?",
              "options": [
                "20 liters",
                "30 liters",
                "40 liters",
                "50 liters"
              ],
              "answer": 3,
              "solution": "Rate = 1 per 10. Scaling to 5: 1 x (5 / 10) = 0.5. Correct answer: 50 liters."
            },
            {
              "q": "If the alcohol content in wine is 12% (v/v), how much ethanol is present in a 750 mL bottle?",
              "options": [
                "75 mL",
                "90 mL",
                "100 mL",
                "120 mL"
              ],
              "answer": 1,
              "solution": "Amount = Percentage x Volume = 12.0% x 750 = 90. Correct answer: 90 mL."
            },
            {
              "q": "If the growth rate of Lactobacillus in yogurt fermentation is 0.5 per hour, how many cells will be present after 6 hours if the initial count is 1000 cells?",
              "options": [
                "4000 cells",
                "8000 cells",
                "16000 cells",
                "32000 cells"
              ],
              "answer": 3,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 1000 x e^(0.5 x 6) = 1000 x e^3.0 ~ 20086 cells. Correct answer: 32000 cells."
            },
            {
              "q": "If a probiotic supplement contains 109 CFU/g and a serving size is 2 g, how many CFUs are consumed per serving? (",
              "options": [
                "2 x 109",
                "5 x 10",
                "10 x 109",
                "20 x 109"
              ],
              "answer": 0,
              "solution": "Total = Rate x Quantity = 109 x 2 = 218. Correct answer: 2 x 109."
            },
            {
              "q": "In the production of pickles, if a 10% salt solution is used and 500 g of cucumbers are soaked, how much salt is required?",
              "options": [
                "50 g",
                "100g",
                "150 g",
                "200 g"
              ],
              "answer": 0,
              "solution": "Salt required = % x Mass = 10% x 500 g = 50 g. Correct answer: 50 g."
            },
            {
              "q": "If the production of single-cell protein requires 1 kg of substrate to produce 0.4 kg of protein, how much substrate is needed to produce 2 kg of protein?",
              "options": [
                "3 kg",
                "4 kg",
                "5 kg",
                "6 kg"
              ],
              "answer": 2,
              "solution": "Substrate needed = Substrate/protein ratio x Target protein = (1/0.4) x 2 kg = 2.5 x 2 = 5 kg. Correct answer: 5 kg."
            },
            {
              "q": "If the enzyme activity in a food processing application is 200 units/mL and 5 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "500 units",
                "1000 units",
                "1500 units",
                "2000 units"
              ],
              "answer": 1,
              "solution": "Total = Rate x Quantity = 200 x 5 = 1000. Correct answer: 1000 units."
            },
            {
              "q": "In the production of beer, if 10 kg of malt yields 50 liters of beer, how much malt is needed to produce 200 liters?",
              "options": [
                "20 kg",
                "30 kg",
                "50 kg",
                "40 kg"
              ],
              "answer": 3,
              "solution": "Rate = 50 per 10. Scaling to 200: 50 x (200 / 10) = 1000. Correct answer: 40 kg."
            },
            {
              "q": "If the growth rate of Saccharomyces cerevisiae in beer fermentation is 0.3 per hour, how many cells will be present after 5 hours if the initial count is 5000 cells?",
              "options": [
                "15000 cells",
                "20000 cells",
                "25000 cells",
                "30000 cells"
              ],
              "answer": 2,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 5000 x e^(0.3 x 5) = 5000 x e^1.5 ~ 22408 cells. Correct answer: 25000 cells."
            },
            {
              "q": "If a prebiotic supplement contains 5 g of fiber per serving and a person consumes 3 servings daily, how much fiber is consumed in a week?",
              "options": [
                "75 g",
                "100 g",
                "105 g",
                "120 g"
              ],
              "answer": 2,
              "solution": "Per day = 5 g x 3 servings = 15 g. Per week = 15 x 7 = 105 g. Correct answer: 105 g."
            },
            {
              "q": "In the production of cheese, if 10 liters of milk yield 1 kg of cheese, how much milk is required to produce 10 kg of cheese?",
              "options": [
                "50 liters",
                "100 liters",
                "150 liters",
                "200 liters"
              ],
              "answer": 1,
              "solution": "Rate = 1 per 10. Scaling to 10: 1 x (10 / 10) = 1. Correct answer: 100 liters."
            },
            {
              "q": "If the alcohol content in beer is 5% (v/v), how much ethanol is present in a 500 mL bottle?",
              "options": [
                "20 mL",
                "25 mL",
                "30 mL",
                "35 mL"
              ],
              "answer": 1,
              "solution": "Amount = Percentage x Volume = 5.0% x 500 = 25. Correct answer: 25 mL."
            },
            {
              "q": "If a probiotic culture has a doubling time of 2 hours, how many cells will be present after 6 hours if the initial count is 1000 cells?",
              "options": [
                "4000 cells",
                "8000 cells",
                "16000 cells",
                "32000 cells"
              ],
              "answer": 1,
              "solution": "N = N0 x 2^(t/doubling time) = 1000 x 2^(6/2) = 1000 x 2^3 = 8000 cells. Correct answer: 8000 cells."
            },
            {
              "q": "In the production of pickles, if a 15% salt solution is used and 1 kg of cucumbers is soaked, how much salt is required?",
              "options": [
                "100 g",
                "150 g",
                "200 g",
                "250 g"
              ],
              "answer": 1,
              "solution": "Salt required = % x Mass = 15.0% x 1 kg = 0.15 kg. Correct answer: 150 g."
            },
            {
              "q": "If the enzyme activity in a food processing application is 150 units/mL and 10 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "1000 units",
                "1500 units",
                "2000 units",
                "2500 units"
              ],
              "answer": 1,
              "solution": "Total = Rate x Quantity = 150 x 10 = 1500. Correct answer: 1500 units."
            },
            {
              "q": "In the production of beer, if 5 kg of malt yields 25 liters of beer, how much malt is needed to produce 100 liters?",
              "options": [
                "10 kg",
                "15 kg",
                "20 kg",
                "25 kg"
              ],
              "answer": 2,
              "solution": "Rate = 25 per 5. Scaling to 100: 25 x (100 / 5) = 500. Correct answer: 20 kg."
            },
            {
              "q": "If the growth rate of Lactobacillus in yogurt fermentation is 0.4 per hour, how many cells will be present after 5 hours if the initial count is 2000 cells?",
              "options": [
                "8000 cells",
                "16000 cells",
                "32000 cells",
                "64000 cells"
              ],
              "answer": 2,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 2000 x e^(0.4 x 5) = 2000 x e^2.0 ~ 14778 cells. Correct answer: 32000 cells."
            },
            {
              "q": "If the alcohol content in wine is 14% (v/v), how much ethanol is present in a 1-liter bottle?",
              "options": [
                "120 mL",
                "140 mL",
                "160 mL",
                "180 mL"
              ],
              "answer": 1,
              "solution": "Ethanol volume = % x Total volume = 14.0% x 1 L = 0.14 L. Correct answer: 140 mL."
            },
            {
              "q": "If a prebiotic supplement contains 3 g of fiber per serving and a person consumes 4 servings daily, how much fiber is consumed in a week?",
              "options": [
                "72 g",
                "84 g",
                "96 g",
                "108 g"
              ],
              "answer": 1,
              "solution": "Per day = 3 g x 4 servings = 12 g. Per week = 12 x 7 = 84 g. Correct answer: 84 g."
            },
            {
              "q": "If a probiotic culture has a doubling time of 3 hours, how many cells will be present after 9 hours if the initial count is 5000 cells?",
              "options": [
                "20000 cells",
                "40000 cells",
                "60000 cells",
                "80000 cells"
              ],
              "answer": 1,
              "solution": "N = N0 x 2^(t/doubling time) = 5000 x 2^(9/3) = 5000 x 2^3 = 40000 cells. Correct answer: 40000 cells."
            },
            {
              "q": "In the production of pickles, if a 20% salt solution is used and 2 kg of cucumbers is soaked, how much salt is required?",
              "options": [
                "200 g",
                "300 g",
                "400 g",
                "500 g"
              ],
              "answer": 2,
              "solution": "Salt required = % x Mass = 20.0% x 2 kg = 0.4 kg. Correct answer: 400 g."
            },
            {
              "q": "If the enzyme activity in a food processing application is 250 units/mL and 4 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "800 units",
                "1000 units",
                "1200 units",
                "1400 units"
              ],
              "answer": 1,
              "solution": "Total = Rate x Quantity = 250 x 4 = 1000. Correct answer: 1000 units."
            },
            {
              "q": "In the production of beer, if 8 kg of malt yields 40 liters of beer, how much malt is needed to produce 120 liters?",
              "options": [
                "16 kg",
                "20 kg",
                "24 kg",
                "28 kg"
              ],
              "answer": 2,
              "solution": "Rate = 40 per 8. Scaling to 120: 40 x (120 / 8) = 600. Correct answer: 24 kg."
            },
            {
              "q": "If the growth rate of Saccharomyces cerevisiae in wine fermentation is 0.2 per hour, how many cells will be present after 8 hours if the initial count is 10000 cells?",
              "options": [
                "20000 cells",
                "40000 cells",
                "60000 cells",
                "80000 cells"
              ],
              "answer": 1,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 10000 x e^(0.2 x 8) = 10000 x e^1.6 ~ 49530 cells. Correct answer: 40000 cells."
            },
            {
              "q": "If the alcohol content in beer is 6% (v/v), how much ethanol is present in a 330 mL bottle?",
              "options": [
                "15 mL",
                "18 mL",
                "20 mL",
                "22 mL"
              ],
              "answer": 1,
              "solution": "Amount = Percentage x Volume = 6.0% x 330 = 19.8. Correct answer: 18 mL."
            },
            {
              "q": "If a prebiotic supplement contains 4 g of fiber per serving and a person consumes 5 servings daily, how much fiber is consumed in a week?",
              "options": [
                "120 g",
                "140 g",
                "160 g",
                "180 g"
              ],
              "answer": 1,
              "solution": "Per day = 4 g x 5 servings = 20 g. Per week = 20 x 7 = 140 g. Correct answer: 140 g."
            },
            {
              "q": "If a probiotic culture has a doubling time of 4 hours, how many cells will be present after 12 hours if the initial count is 2000 cells?",
              "options": [
                "8000 cells",
                "16000 cells",
                "32000 cells",
                "64000 cells"
              ],
              "answer": 1,
              "solution": "N = N0 x 2^(t/doubling time) = 2000 x 2^(12/4) = 2000 x 2^3 = 16000 cells. Correct answer: 16000 cells."
            },
            {
              "q": "In the production of pickles, if a 25% salt solution is used and 3 kg of cucumbers is soaked, how much salt is required?",
              "options": [
                "500 g",
                "600 g",
                "700 g",
                "800 g"
              ],
              "answer": 2,
              "solution": "Salt required = % x Mass = 25.0% x 3 kg = 0.75 kg. Correct answer: 700 g."
            },
            {
              "q": "If the enzyme activity in a food processing application is 300 units/mL and 6 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "1200 units",
                "1500 units",
                "1800 units",
                "2100 units"
              ],
              "answer": 2,
              "solution": "Total = Rate x Quantity = 300 x 6 = 1800. Correct answer: 1800 units."
            },
            {
              "q": "In the production of beer, if 12 kg of malt yields 60 liters of beer, how much malt is needed to produce 180 liters?",
              "options": [
                "24 kg",
                "30 kg",
                "36 kg",
                "42 kg"
              ],
              "answer": 2,
              "solution": "Rate = 60 per 12. Scaling to 180: 60 x (180 / 12) = 900. Correct answer: 36 kg."
            },
            {
              "q": "If the growth rate of Lactobacillus in yogurt fermentation is 0.6 per hour, how many cells will be present after 4 hours if the initial count is 5000 cells?",
              "options": [
                "20000 cells",
                "40000 cells",
                "60000 cells",
                "80000 cells"
              ],
              "answer": 1,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 5000 x e^(0.6 x 4) = 5000 x e^2.4 ~ 55116 cells. Correct answer: 40000 cells."
            },
            {
              "q": "If the alcohol content in wine is 15% (v/v), how much ethanol is present in a 750 mL bottle?",
              "options": [
                "100 mL",
                "112.5 mL",
                "125 mL",
                "150 mL"
              ],
              "answer": 1,
              "solution": "Amount = Percentage x Volume = 15.0% x 750 = 112.5. Correct answer: 112.5 mL."
            },
            {
              "q": "In the production of yogurt, if 4 liters of milk yield 3.6 liters of yogurt, what is the percentage yield?",
              "options": [
                "0.85",
                "0.9",
                "1",
                "0.95"
              ],
              "answer": 1,
              "solution": "Yield % = Output / Input x 100 = 3.6 / 4 x 100 = 90%. Correct answer: 0.9."
            },
            {
              "q": "If a probiotic culture has a doubling time of 5 hours, how many cells will be present after 15 hours if the initial count is 10000 cells?",
              "options": [
                "40000 cells",
                "80000 cells",
                "120000 cells",
                "160000 cells"
              ],
              "answer": 1,
              "solution": "N = N0 x 2^(t/doubling time) = 10000 x 2^(15/5) = 10000 x 2^3 = 80000 cells. Correct answer: 80000 cells."
            },
            {
              "q": "In the production of pickles, if a 30% salt solution is used and 4 kg of cucumbers is soaked, how much salt is required?",
              "options": [
                "1.0 kg",
                "1.2 kg",
                "1.4 kg",
                "1.6 kg"
              ],
              "answer": 1,
              "solution": "Salt required = % x Mass = 30.0% x 4 kg = 1.2 kg. Correct answer: 1.2 kg."
            },
            {
              "q": "If the enzyme activity in a food processing application is 350 units/mL and 8 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "2400 units",
                "2600 units",
                "2800 units",
                "3000 units"
              ],
              "answer": 2,
              "solution": "Total = Rate x Quantity = 350 x 8 = 2800. Correct answer: 2800 units."
            },
            {
              "q": "In the production of beer, if 15 kg of malt yields 75 liters of beer, how much malt is needed to produce 225 liters?",
              "options": [
                "30 kg",
                "40 kg",
                "45 kg",
                "50 kg"
              ],
              "answer": 2,
              "solution": "Rate = 75 per 15. Scaling to 225: 75 x (225 / 15) = 1125. Correct answer: 45 kg."
            },
            {
              "q": "If the growth rate of Saccharomyces cerevisiae in beer fermentation is 0.4 per hour, how many cells will be present after 6 hours if the initial count is 20000 cells?",
              "options": [
                "80000 cells",
                "160000 cells",
                "240000 cells",
                "320000 cells"
              ],
              "answer": 1,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 20000 x e^(0.4 x 6) = 20000 x e^2.4 ~ 220464 cells. Correct answer: 160000 cells."
            },
            {
              "q": "If the alcohol content in beer is 7% (v/v), how much ethanol is present in a 500 mL bottle?",
              "options": [
                "30 mL",
                "35 mL",
                "40 mL",
                "45 mL"
              ],
              "answer": 1,
              "solution": "Amount = Percentage x Volume = 7.0% x 500 = 35. Correct answer: 35 mL."
            },
            {
              "q": "In the production of sauerkraut, if 6 kg of cabbage yields 4.8 kg of sauerkraut, what is the percentage yield?",
              "options": [
                "0.7",
                "0.75",
                "0.8",
                "0.85"
              ],
              "answer": 2,
              "solution": "Yield % = Output / Input x 100 = 4.8 / 6 x 100 = 80%. Correct answer: 0.8."
            },
            {
              "q": "If the fermentation of tea leaves produces 0.6% theanine and 400 g of tea leaves are fermented, how much theanine is produced?",
              "options": [
                "1.2 g",
                "1.8 g",
                "2.4 g",
                "3.0 g"
              ],
              "answer": 2,
              "solution": "Theanine produced = % x Mass = 0.6% x 400 g = 2.4 g. Correct answer: 2.4 g."
            },
            {
              "q": "In the production of pickles, if a 35% salt solution is used and 5 kg of cucumbers is soaked, how much salt is required?",
              "options": [
                "1.5 kg",
                "1.75 kg",
                "2.0 kg",
                ": 2.25 kg"
              ],
              "answer": 1,
              "solution": "Salt required = % x Mass = 35.0% x 5 kg = 1.75 kg. Correct answer: 1.75 kg."
            },
            {
              "q": "If the enzyme activity in a food processing application is 400 units/mL and 10 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "3000 units",
                "3500 units",
                "4000 units",
                "4500 units"
              ],
              "answer": 2,
              "solution": "Total = Rate x Quantity = 400 x 10 = 4000. Correct answer: 4000 units."
            },
            {
              "q": "In the production of beer, if 20 kg of malt yields 100 liters of beer, how much malt is needed to produce 300 liters?",
              "options": [
                "40 kg",
                "50 kg",
                "60 kg",
                "70 kg"
              ],
              "answer": 2,
              "solution": "Rate = 100 per 20. Scaling to 300: 100 x (300 / 20) = 1500. Correct answer: 60 kg."
            },
            {
              "q": "If the growth rate of Lactobacillus in yogurt fermentation is 0.7 per hour, how many cells will be present after 5 hours if the initial count is 10000 cells?",
              "options": [
                "40000 cells",
                "80000 cells",
                "160000 cells",
                "120000 cells"
              ],
              "answer": 1,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 10000 x e^(0.7 x 5) = 10000 x e^3.5 ~ 331155 cells. Correct answer: 80000 cells."
            },
            {
              "q": "If the alcohol content in wine is 16% (v/v), how much ethanol is present in a 1-liter bottle?",
              "options": [
                "140 mL",
                "150 mL",
                "160 mL",
                "170 mL"
              ],
              "answer": 2,
              "solution": "Ethanol volume = % x Total volume = 16.0% x 1 L = 0.16 L. Correct answer: 160 mL."
            },
            {
              "q": "In the production of pickles, if a 40% salt solution is used and 6 kg of cucumbers is soaked, how much salt is required?",
              "options": [
                "2.0 kg",
                "2.2 kg",
                "2.4 kg",
                "2.6 kg"
              ],
              "answer": 2,
              "solution": "Salt required = % x Mass = 40.0% x 6 kg = 2.4 kg. Correct answer: 2.4 kg."
            },
            {
              "q": "If the enzyme activity in a food processing application is 450 units/mL and 12 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "4800 units",
                "5200 units",
                "5400 units",
                "5600 units"
              ],
              "answer": 2,
              "solution": "Total = Rate x Quantity = 450 x 12 = 5400. Correct answer: 5400 units."
            },
            {
              "q": "In the production of beer, if 25 kg of malt yields 125 liters of beer, how much malt is needed to produce 375 liters?",
              "options": [
                "50 kg",
                "60 kg",
                "75 kg",
                "90 kg"
              ],
              "answer": 2,
              "solution": "Rate = 125 per 25. Scaling to 375: 125 x (375 / 25) = 1875. Correct answer: 75 kg."
            },
            {
              "q": "If the growth rate of Saccharomyces cerevisiae in wine fermentation is 0.5 per hour, how many cells will be present after 10 hours if the initial count is 50000 cells?",
              "options": [
                "200000 cells",
                "400000 cells",
                "600000 cells",
                "800000 cells"
              ],
              "answer": 1,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 50000 x e^(0.5 x 10) = 50000 x e^5.0 ~ 7420658 cells. Correct answer: 400000 cells."
            },
            {
              "q": "If the alcohol content in beer is 8% (v/v), how much ethanol is present in a 330 mL bottle? (CO4)",
              "options": [
                "24 mL",
                "28 mL",
                "30 mL",
                "26.4 mL"
              ],
              "answer": 3,
              "solution": "Amount = Percentage x Volume = 8.0% x 330 = 26.4. Correct answer: 26.4 mL."
            },
            {
              "q": "In the production of sauerkraut, if 8 kg of cabbage yields 6.4 kg of sauerkraut, what is the percentage yield?",
              "options": [
                "0.7",
                "0.75",
                "0.85",
                "0.8"
              ],
              "answer": 3,
              "solution": "Yield % = Output / Input x 100 = 6.4 / 8 x 100 = 80%. Correct answer: 0.8."
            },
            {
              "q": "If the fermentation of tea leaves produces 0.8% theanine and 600 g of tea leaves are fermented, how much theanine is produced?",
              "options": [
                "4.2 g",
                "4.8 g",
                "5.4 g",
                "6.0 g"
              ],
              "answer": 1,
              "solution": "Theanine produced = % x Mass = 0.8% x 600 g = 4.8 g. Correct answer: 4.8 g."
            },
            {
              "q": "If a probiotic culture has a doubling time of 8 hours, how many cells will be present after 24 hours if the initial count is 25000 cells?",
              "options": [
                "100000 cells",
                "200000 cells",
                "300000 cells",
                "400000 cells"
              ],
              "answer": 1,
              "solution": "N = N0 x 2^(t/doubling time) = 25000 x 2^(24/8) = 25000 x 2^3 = 200000 cells. Correct answer: 200000 cells."
            },
            {
              "q": "In the production of pickles, if a 45% salt solution is used and 7 kg of cucumbers is soaked, how much salt is required?",
              "options": [
                "2.8 kg",
                "3.0 kg",
                "3.15 kg",
                "3.3 kg"
              ],
              "answer": 2,
              "solution": "Salt required = % x Mass = 45.0% x 7 kg = 3.15 kg. Correct answer: 3.15 kg."
            },
            {
              "q": "If the enzyme activity in a food processing application is 500 units/mL and 15 mL of enzyme is used, what is the total enzyme activity?",
              "options": [
                "6000 units",
                "7000 units",
                "7500 units",
                "8000 units"
              ],
              "answer": 2,
              "solution": "Total = Rate x Quantity = 500 x 15 = 7500. Correct answer: 7500 units."
            },
            {
              "q": "In the production of beer, if 30 kg of malt yields 150 liters of beer, how much malt is needed to produce 450 liters?",
              "options": [
                "60 kg",
                "75 kg",
                "90 kg",
                "105 kg"
              ],
              "answer": 2,
              "solution": "Rate = 150 per 30. Scaling to 450: 150 x (450 / 30) = 2250. Correct answer: 90 kg."
            },
            {
              "q": "If the growth rate of Lactobacillus in yogurt fermentation is 0.8 per hour, how many cells will be present after 6 hours if the initial count is 15000 cells?",
              "options": [
                "60000 cells",
                "120000 cells",
                "180000 cells",
                "240000 cells"
              ],
              "answer": 1,
              "solution": "Exponential growth: N = N0 x e^(r x t) = 15000 x e^(0.8 x 6) = 15000 x e^4.8 ~ 1822656 cells. Correct answer: 120000 cells."
            }
          ]
        }
      ]
    },
    {
      "id": "unit5",
      "title": "Unit V: Food Quality and Management",
      "subtopics": [
        {
          "id": "unit5_all",
          "title": "All Questions",
          "notes": [],
          "mcqs": [
            {
              "q": "A sensory evaluation test on a food product received an average score of 7.5 on a nine-point hedonic scale, with a standard deviation of 1.1. Assuming a normal distribution, what percentage of scores fall between 6.4 and 8.6 (±1 SD)?",
              "options": [
                "0.5",
                "0.68",
                "0.85",
                "0.95"
              ],
              "answer": 1,
              "solution": "For a normal distribution, approximately 68% of values fall within +/-1 standard deviation of the mean (the empirical/68-95-99.7 rule). Since 6.4 to 8.6 is exactly mean +/-1 SD (7.5 +/-1.1), about 68% of scores fall in this range. Correct answer: 0.68."
            },
            {
              "q": "A HACCP deviation occurs where the CCP limit for bacterial count is 10³ CFU/g. If a batch tests at 1.8 × 10³ CFU/g, what corrective action is required?",
              "options": [
                "Rework the product",
                "Immediate disposal",
                "Heat treatment",
                "No action needed"
              ],
              "answer": 0
            },
            {
              "q": "A packaged food product has a shelf life of 150 days at 20°C. If spoilage rate doubles for every 10°C increase, what will be the shelf life at 30°C?",
              "options": [
                "30 days",
                "50 days",
                "75 days",
                "100 days"
              ],
              "answer": 2,
              "solution": "Rise = 30 - 20 = 10°C = 1 doubling step(s) of 10°C. New shelf life = 150 / 2^1 = 75 days. Correct answer: 75 days."
            },
            {
              "q": "A food processing unit detects a microbial hazard exceeding limits in 4 out of 500 samples. What is the failure rate percentage?",
              "options": [
                "0.004",
                "0.006",
                "0.008",
                "0.01"
              ],
              "answer": 2,
              "solution": "Rate % = (Defective/Affected / Total) x 100 = (4 / 500) x 100 = 0.8%. Correct answer: 0.008."
            },
            {
              "q": "A juice product's acidity is 0.9%, while the acceptable range is 0.4%–0.7%. What corrective action is required?",
              "options": [
                "Dilution",
                "Increase sugar",
                "Discard batch",
                "Neutralization"
              ],
              "answer": 3
            },
            {
              "q": "A food safety system inspects 200 samples per day with a defect rate of 0.5%. How many defective samples are expected in a week (6-day workweek)?",
              "options": [
                "4",
                "5",
                "6",
                "8"
              ],
              "answer": 2,
              "solution": "Defective per day = 200 x 0.5% = 1. Per week = 1 x 6 = 6. Correct answer: 6."
            },
            {
              "q": "A HACCP system in a dairy plant identifies pasteurization at 72°C for 15 sec as a Critical Control Point (CCP). If the temperature falls to 68°C, what is the corrective action?",
              "options": [
                "Continue production",
                "Increase processing time",
                "Re-pasteurize batch",
                "No action needed"
              ],
              "answer": 2
            },
            {
              "q": "A factory follows ISO 22000 standards and has a recall rate of 0.02%. If it produces 1 million units annually, how many units are expected to be recalled?",
              "options": [
                "50",
                "100",
                "200",
                "500"
              ],
              "answer": 2,
              "solution": "Affected units = % x Total units = 0.02% x 1000000 = 200. Correct answer: 200."
            },
            {
              "q": "A sensory test panel evaluates a new product using a 9-point scale. If the panel consists of 20 members and the average score is 7.2, what is the total score?",
              "options": [
                "124",
                "136",
                "144",
                "152"
              ],
              "answer": 2,
              "solution": "Total score = Number of members x Average score = 20 x 7.2 = 144. Correct answer: 144."
            },
            {
              "q": "A bacterial safety test has an acceptable limit of 5 × 10² CFU/g, but a batch tests at 7.5 × 10² CFU/g. What action should be taken?",
              "options": [
                "Approve for sale",
                "Reprocess",
                "Increase storage time",
                "Ignore deviation"
              ],
              "answer": 1
            },
            {
              "q": "A food recall occurs in 0.015% of total production. If 3 million units are produced annually, how many units are affected?",
              "options": [
                "250",
                "300",
                "350",
                "450"
              ],
              "answer": 3,
              "solution": "Affected units = % x Total units = 0.015% x 3000000 = 450. Correct answer: 450."
            },
            {
              "q": "A factory audit identifies 12 major non-compliance issues. If the factory has 6 production zones, what is the average number of issues per zone?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "answer": 1,
              "solution": "Average per zone = Total issues / Number of zones = 12 / 6 = 2 issues/zone. Correct answer: 2."
            },
            {
              "q": "A food safety standard limits pesticide residues to 0.02 ppm. If a product sample contains 0.025 ppm, what should be done?",
              "options": [
                "Approve sale",
                "Dilute product",
                "Reject batch",
                "Increase expiry date"
              ],
              "answer": 2
            },
            {
              "q": "A food packaging material must have an oxygen permeability of ≤10 cc/m²/day. If a sample is tested and shows 12 cc/m²/day, what should be done?",
              "options": [
                "Approve use",
                "Modify formulation",
                "Reject material",
                "Reduce storage time"
              ],
              "answer": 2
            },
            {
              "q": "A food manufacturer receives 5 customer complaints per 1000 units. If 50,000 units are sold, how many complaints are expected?",
              "options": [
                "100",
                "200",
                "250",
                "300"
              ],
              "answer": 2,
              "solution": "Expected complaints = Rate x Scale factor = 5 x (50,000/1000) = 5 x 50 = 250 complaints. Correct answer: 250."
            },
            {
              "q": "A chocolate factory's quality control system detects 15 defective bars per 2000 produced. What is the defect rate?",
              "options": [
                "0.005",
                "0.006",
                "0.0075",
                "0.01"
              ],
              "answer": 2,
              "solution": "Rate % = (a / b) x 100 = (15 / 2000) x 100 = 0.75%. Correct answer: 0.0075."
            },
            {
              "q": "A HACCP study shows that metal contamination occurs in 0.002% of products. If 2.5 million units are produced annually, how many may be contaminated?",
              "options": [
                "25",
                "50",
                "75",
                "100"
              ],
              "answer": 1,
              "solution": "Affected units = % x Total units = 0.002% x 2500000 = 50. Correct answer: 50."
            },
            {
              "q": "A food microbiology test shows that a canned soup contains 6 × 10³ CFU/mL. If the regulatory limit is 5 × 10³ CFU/mL, what action should be taken?",
              "options": [
                "Approve sale",
                "Increase cooking time",
                "Reject batch",
                "Freeze for later use"
              ],
              "answer": 2
            },
            {
              "q": "A food product contains 2.8% trans fat, but the regulatory limit is 2%. What should be done?",
              "options": [
                "Approve sale",
                "Re-label product",
                "Reformulate recipe",
                "Reduce portion size"
              ],
              "answer": 2
            },
            {
              "q": "A bakery follows HACCP guidelines and inspects 500 loaves of bread per day. If 5 loaves are found with mold, what is the mold contamination rate?",
              "options": [
                "0.005",
                "0.01",
                "0.015",
                "0.02"
              ],
              "answer": 1,
              "solution": "Contamination rate = (Moldy loaves / Total loaves) x 100 = (5/500) x 100 = 1%. Correct answer: 0.01."
            },
            {
              "q": "A food manufacturer finds that sensory panelists consistently rate a product lower when served in blue packaging. What psychological factor is likely responsible?",
              "options": [
                "Cognitive bias",
                "Cross-modal perception",
                "Color-induced taste suppression",
                "Expectation error"
              ],
              "answer": 1
            },
            {
              "q": "A bakery notices that its bread scores lower on texture evaluation when tested in a room with loud machinery. What could explain this phenomenon?",
              "options": [
                "Noise interferes with perception of crispness",
                "Sound waves affect gluten structure",
                "Auditory overload reduces taste perception",
                "Increased humidity affects sensory perception"
              ],
              "answer": 0
            },
            {
              "q": "A new food product passes chemical safety tests but fails in consumer acceptability due to an unusual aftertaste. What could be the cause?",
              "options": [
                "Interaction between flavor compounds and packaging material",
                "Presence of off-flavors due to oxidation",
                "Excessive use of emulsifiers",
                "Microbial spoilage producing volatile compounds"
              ],
              "answer": 0
            },
            {
              "q": "A sensory evaluation test on a food product shows inconsistent results when tested under different lighting conditions. What is the most probable reason?",
              "options": [
                "Light affects visual perception of color",
                "Temperature changes due to lighting",
                "Texture perception changes under different light",
                "Lighting alters the chemical composition of food"
              ],
              "answer": 0
            },
            {
              "q": "A food safety audit identifies a high microbial load in a product despite adherence to HACCP guidelines. What might be the cause?",
              "options": [
                "Biofilm formation on processing equipment",
                "Ineffective heat penetration",
                "Incorrect implementation of GMPs",
                "Mislabeling of processing time"
              ],
              "answer": 0
            },
            {
              "q": "A food factory implements HACCP but still faces frequent product recalls. What is the most likely reason?",
              "options": [
                "Inadequate hazard identification",
                "Failure to monitor critical limits",
                "Lack of employee training",
                "Improper validation of control measures"
              ],
              "answer": 3
            },
            {
              "q": "A food company finds that reducing salt content in a product leads to an increased perception of bitterness. What is the underlying reason?",
              "options": [
                "Salt suppresses bitter taste receptors",
                "Increased microbial growth enhances bitter flavors",
                "Salt competes with bitter compounds for taste receptors",
                "Bitterness intensifies due to water activity changes"
              ],
              "answer": 0
            },
            {
              "q": "A factory producing ready-to-eat meals finds that despite passing microbiological tests, consumers report an unpleasant sulfur-like odor. What could be responsible?",
              "options": [
                "Breakdown of sulfur-containing amino acids",
                "Chemical reaction with packaging",
                "Formation of volatile organic compounds",
                "Undetected spoilage bacteria"
              ],
              "answer": 0
            },
            {
              "q": "A beverage company using natural fruit extracts finds that their product flavor profile changes significantly after storage. What is a probable cause?",
              "options": [
                "Enzymatic degradation of flavor compounds",
                "Interaction with packaging material",
                "Phase separation of flavor components",
                "Loss of carbonation affecting sensory perception"
              ],
              "answer": 0
            },
            {
              "q": "A factory using sensory panels for quality testing notices that scores fluctuate significantly when panelists taste multiple samples in a row. What is the likely cause?",
              "options": [
                "Sensory fatigue",
                "Expectation bias",
                "Cross-modal interference",
                "Variation in sample temperature"
              ],
              "answer": 0
            },
            {
              "q": "A food company uses a hedonic scale to test consumer preference but finds that scores vary significantly by region. What could explain this?",
              "options": [
                "Cultural differences in taste perception",
                "Inconsistent sample preparation",
                "Changes in panelist recruitment",
                "Differences in serving size"
              ],
              "answer": 0
            },
            {
              "q": "A food safety team finds that a canned soup product has developed an unusual texture despite no microbial contamination. What could be responsible?",
              "options": [
                "Starch retrogradation",
                "Protein-protein interactions",
                "Breakdown of emulsifiers",
                "Phase separation due to temperature fluctuations"
              ],
              "answer": 0
            },
            {
              "q": "A company finds that its shelf-stable dairy product develops a slight metallic taste over time. What could be the cause?",
              "options": [
                "Lipid oxidation releasing free radicals",
                "Migration of metal ions from packaging",
                "Enzymatic breakdown of casein",
                "Accumulation of off-flavor compounds"
              ],
              "answer": 1
            },
            {
              "q": "A company follows FSSAI food labeling requirements but still faces consumer complaints about misleading claims. What could be an issue?",
              "options": [
                "Use of ambiguous marketing terms",
                "Incorrect nutrient analysis",
                "Failure to indicate allergens",
                "Non-compliance with font size regulations"
              ],
              "answer": 0
            },
            {
              "q": "A sensory test panel evaluates a sugar-free beverage and consistently reports a lingering aftertaste. What is the likely cause?",
              "options": [
                "Interaction of artificial sweeteners with taste receptors",
                "High acidity masking other flavors",
                "Incomplete dissolution of sweeteners",
                "Presence of bitter compounds from natural extracts"
              ],
              "answer": 0
            },
            {
              "q": "A food product meets all regulatory standards but is rejected by a retailer for “low perceived quality.” What could be the reason?",
              "options": [
                "Poor product appearance",
                "Incorrect storage temperature",
                "Low consumer brand trust",
                "Variability in ingredient sources"
              ],
              "answer": 0
            },
            {
              "q": "A new plant-based meat alternative is found to have a mealy texture that consumers dislike. What is the most probable cause?",
              "options": [
                "Improper protein structuring",
                "Excess water retention",
                "Breakdown of plant fibers",
                "Incomplete fat emulsification"
              ],
              "answer": 0
            },
            {
              "q": "A factory using rapid sensory testing methods finds that their trained panel results differ from consumer panel data. What could explain this?",
              "options": [
                "Expert panels detect minor differences unnoticed by consumers",
                "Consumers experience sensory fatigue faster",
                "Trained panelists have enhanced smell perception",
                "Consumers rely more on visual cues"
              ],
              "answer": 0
            },
            {
              "q": "A company implementing GMPs still encounters contamination issues with its dried fruit products. What could be the issue?",
              "options": [
                "Presence of heat-resistant fungal spores",
                "Inadequate personnel hygiene",
                "Faulty packaging seal",
                "Cross-contamination from transport equipment"
              ],
              "answer": 0
            },
            {
              "q": "A food manufacturer receives high variation in sensory scores for the same product over time. What could be the reason?",
              "options": [
                "Variability in raw ingredient quality",
                "Panelist training inconsistency",
                "Changes in panel recruitment",
                "Differences in serving temperature"
              ],
              "answer": 0
            },
            {
              "q": "A HACCP plan requires a cooking process to achieve a 5-log reduction in pathogens. If the initial microbial load is 10⁷ CFU/g, what is the acceptable final load?",
              "options": [
                "10² CFU/g",
                "10³ CFU/g",
                "10⁵ CFU/g",
                "10⁷ CFU/g"
              ],
              "answer": 0,
              "solution": "A 5-log reduction divides load by 10^5. log(final) = 7 - 5 = 2, final load = 10^2 CFU/g. Correct answer: 10² CFU/g."
            },
            {
              "q": "FPO mandates fruit juices to have ≥65% soluble solids. If a sample has 60% soluble solids, what is the percentage shortfall?",
              "options": [
                "0.0769",
                "0.0833",
                "0.05",
                "0.1"
              ],
              "answer": 0,
              "solution": "% shortfall = (Required - Actual) / Required x 100 = (65 - 60) / 65 x 100 = 7.69%. Correct answer: 0.0769."
            },
            {
              "q": "A WHO study found 12% of food samples violated safety standards. If 450 samples are tested, how many are expected to be non-compliant?",
              "options": [
                "54",
                "45",
                "60",
                "36"
              ],
              "answer": 0,
              "solution": "Expected number = % x Total = 12.0% x 450 = 54. Correct answer: 54."
            },
            {
              "q": "A food factory uses a sampling plan with an AQL (Acceptable Quality Level) of 2.5%. For 200 samples, how many defective units are allowed?",
              "options": [
                "5",
                "3",
                "2",
                "10"
              ],
              "answer": 0,
              "solution": "Allowed defectives = AQL% x Sample size = 2.5% x 200 = 5. Correct answer: 5."
            },
            {
              "q": "A HACCP critical limit for cooling requires food to reach 5°C within 6 hours. If food cools from 60°C to 20°C in 2 hours, what is the average cooling rate (°C/hour)?",
              "options": [
                "15",
                "20",
                "25",
                "10"
              ],
              "answer": 1,
              "solution": "Cooling rate = (T1 - T2) / time = (60 - 20) / 2 = 20 °C/hour. Correct answer: 20."
            },
            {
              "q": "FSSAI allows a maximum of 10³ CFU/g of E. coli in ready-to-eat foods. A test result shows 4.5 × 10³ CFU/g. By what factor does it exceed the limit?",
              "options": [
                "4.5",
                "3.5",
                "2.5",
                "1.5"
              ],
              "answer": 0,
              "solution": "Limit = 10^3 CFU/g. Test result = 4.5 x 10^3 CFU/g. Factor over limit = (4.5 x 10^3) / 10^3 = 4.5 times. Correct answer: 4.5."
            },
            {
              "q": "A WHO report states that 8% of diarrheal diseases are linked to unsafe food. If 5,000 cases are reported, how many are likely foodborne?",
              "options": [
                "400",
                "250",
                "800",
                "160"
              ],
              "answer": 0,
              "solution": "Expected number = 8.0% x 5 = 0.4. Correct answer: 400."
            },
            {
              "q": "MMPO specifies toned milk must have 3.0% fat. Three batches test at 2.8%, 3.1%, and 2.9%. What is the mean fat content?",
              "options": [
                "0.0293",
                "0.03",
                "0.0295",
                "0.0303"
              ],
              "answer": 0,
              "solution": "Mean = (sum of values) / n = (2.8 + 3.1 + 2.9) / 3 = 2.933%. Correct answer: 0.0293."
            },
            {
              "q": "GMP requires a 200 L sanitizer solution with 500 ppm chlorine. How much 10% sodium hypochlorite (w/v) is needed? (Density = 1.2 g/mL)",
              "options": [
                "83.3 mL",
                "120 mL",
                "41.7 mL",
                "200 mL"
              ],
              "answer": 0,
              "solution": "Required ppm x Volume = Stock% x Volume_stock x 10000 (ppm per %). Stock solution needed = (500 ppm x 200 L) / (10% x 10000) = 100000/100000 = 1 L, i.e. ~1.2 kg using the given density (1 L x 1.2 g/mL x 1000 = 1200 g). Correct answer: 83.3 mL."
            },
            {
              "q": "A WHO study found 3 outbreaks in 150 food facilities. What is the outbreak rate per 100 facilities?",
              "options": [
                "2",
                "1.5",
                "3",
                "4.5"
              ],
              "answer": 0,
              "solution": "Rate per 100 = (Outbreaks / Facilities) x 100 = (3 / 150) x 100 = 2. Correct answer: 2."
            },
            {
              "q": "A WHO study reports a 0.3% prevalence of Listeria in ready-to-eat foods. If a factory produces 20,000 units/month, how many units are likely contaminated?",
              "options": [
                "60",
                "600",
                "6",
                "30"
              ],
              "answer": 0,
              "solution": "Affected units = % x Total units = 0.3% x 0 = 0. Correct answer: 60."
            },
            {
              "q": "GMP requires a 2% (v/v) acetic acid solution for sanitizing. How many mL of 20% concentrate are needed to prepare 10 L of solution?",
              "options": [
                "100 mL",
                "1000 mL",
                "500 mL",
                "200 mL"
              ],
              "answer": 1,
              "solution": "Amount = Percentage x Volume = 2.0% x 10 = 0.2. Correct answer: 1000 mL."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 8 ppm lead with a standard deviation of 0.5 ppm. What are the 3-sigma upper control limits?",
              "options": [
                "9.5 ppm",
                "8.5 ppm",
                "10 ppm",
                "7.5 ppm"
              ],
              "answer": 0,
              "solution": "Upper control limit = Mean + (3 x SD) = 8 + (3 x 0.5) = 9.5 ppm. Correct answer: 9.5 ppm."
            },
            {
              "q": "A 1:100,000 dilution of a sample yields 35 colonies on a plate. What is the original CFU/mL?",
              "options": [
                "3.5×10⁶",
                "3.5×10⁵",
                "3.5×10⁴",
                "3.5×10³"
              ],
              "answer": 0,
              "solution": "Original CFU/mL = Colony count x Dilution factor = 35 x 100000 = 3500000 CFU/mL. Correct answer: 3.5×10⁶."
            },
            {
              "q": "A food’s shelf life at 5°C is 14 days. Using the Q10 rule (Q10=2), what is the shelf life at 15°C?",
              "options": [
                "7 days",
                "3.5 days",
                "28 days",
                "10 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 14 / 2^((15-5)/10) = 14 / 2 = 7 days. Correct answer: 7 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 7, 4, and 3, what is the RPN?",
              "options": [
                "84",
                "14",
                "24",
                "52"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 7 x 4 x 3 = 84. Correct answer: 84."
            },
            {
              "q": "FSSAI sets a maximum limit of 0.1 ppm for mercury in fish. A sample tests at 0.12 ppm. What is the percentage excess?",
              "options": [
                "0.2",
                "0.15",
                "0.25",
                "0.1"
              ],
              "answer": 0,
              "solution": "% excess = (Actual - Limit)/Limit x 100 = (0.12 - 0.1)/0.1 x 100 = 20%. Correct answer: 0.2."
            },
            {
              "q": "A GMP rule requires a 200 ppm chlorine solution. If a 10% sodium hypochlorite solution is used, how many mL are needed to prepare 50 L of sanitizer?",
              "options": [
                "100 mL",
                "200 mL",
                "50 mL",
                "150 mL"
              ],
              "answer": 0,
              "solution": "Stock concentration = 10.0% = 100000 ppm. Using C1V1 = C2V2: V1 = (Target ppm x Total volume) / Stock ppm = (200 x 50 x 1000 mL) / 100000 = 100 mL. Correct answer: 100 mL."
            },
            {
              "q": "A food sample has a microbial load of 4.5×10⁵ CFU/g. After a 3-log reduction, what is the final load?",
              "options": [
                "4.5×10² CFU/g",
                "4.5×10³ CFU/g",
                "4.5×10⁴ CFU/g",
                "4.5×10¹ CFU/g"
              ],
              "answer": 0,
              "solution": "A 3-log reduction divides the load by 10^3. Final load = 4.5 x 10^5 / 10^3 = 4.5 x 10^2 CFU/g. Correct answer: 4.5×10² CFU/g."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 12 ppm with a standard deviation of 1.2 ppm. What are the 2-sigma lower control limits?",
              "options": [
                "9.6 ppm",
                "10.8 ppm",
                "8.4 ppm",
                "11.4 ppm"
              ],
              "answer": 0,
              "solution": "Lower control limit = Mean - (2 x SD) = 12 - (2 x 1.2) = 9.6 ppm. Correct answer: 9.6 ppm."
            },
            {
              "q": "A food’s shelf life at 10°C is 21 days. Using the Q10 rule (Q10=3), what is the shelf life at 20°C?",
              "options": [
                "7 days",
                "10.5 days",
                "14 days",
                "3.5 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 21 / 3^((20-10)/10) = 21 / 3 = 7 days. Correct answer: 7 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 5, 6, and 2, what is the RPN?",
              "options": [
                "60",
                "30",
                "40",
                "50"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 5 x 6 x 2 = 60. Correct answer: 60."
            },
            {
              "q": "A HACCP plan requires a 6-log reduction of Listeria in dairy products. If the initial load is 1.5×10⁸ CFU/g, what is the acceptable final load?",
              "options": [
                "1.5×10³ CFU/g",
                "1.5×10² CFU/g",
                "1.5×10⁴ CFU/g",
                "1.5×10⁵ CFU/g"
              ],
              "answer": 1,
              "solution": "A 6-log reduction divides load by 10^6. Final load = 1.5 x 10^8 / 10^6 = 1.5 x 10^2 CFU/g. Correct answer: 1.5×10² CFU/g."
            },
            {
              "q": "GMP requires a 2% (v/v) acetic acid solution for sanitizing. How many mL of 20% concentrate are needed to prepare 25 L of solution?",
              "options": [
                "250 mL",
                "500 mL",
                "1000 mL",
                "750 mL"
              ],
              "answer": 0,
              "solution": "Amount = Percentage x Volume = 2.0% x 25 = 0.5. Correct answer: 250 mL."
            },
            {
              "q": "A WHO study found that 15% of foodborne outbreaks are caused by Salmonella. If 800 outbreaks are reported, how many are likely due to Salmonella?",
              "options": [
                "120",
                "150",
                "100",
                "80"
              ],
              "answer": 0,
              "solution": "Expected number = 15.0% x 800 = 120. Correct answer: 120."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 10 ppm with a standard deviation of 1.5 ppm. What are the 3-sigma upper control limits?",
              "options": [
                "14.5 ppm",
                "13.0 ppm",
                "15.5 ppm",
                "12.5 ppm"
              ],
              "answer": 0,
              "solution": "Upper control limit = Mean + (3 x SD) = 10 + (3 x 1.5) = 14.5 ppm. Correct answer: 14.5 ppm."
            },
            {
              "q": "A food’s shelf life at 4°C is 28 days. Using the Q10 rule (Q10=2), what is the shelf life at 14°C?",
              "options": [
                "14 days",
                "7 days",
                "21 days",
                "10.5 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 28 / 2^((14-4)/10) = 28 / 2 = 14 days. Correct answer: 14 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 8, 3, and 4, what is the RPN?",
              "options": [
                "96",
                "72",
                "64",
                "84"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 8 x 3 x 4 = 96. Correct answer: 96."
            },
            {
              "q": "A HACCP plan requires a 5-log reduction of E. coli in ground beef. If the initial load is 6×10⁶ CFU/g, what is the acceptable final load?",
              "options": [
                "6×10² CFU/g",
                "6×10³ CFU/g",
                "6×10⁴ CFU/g",
                "6×10¹ CFU/g"
              ],
              "answer": 3,
              "solution": "A 5-log reduction divides load by 10^5. Final load = 6.0 x 10^6 / 10^5 = 6.0 x 10^1 CFU/g. Correct answer: 6×10¹ CFU/g."
            },
            {
              "q": "GMP requires a 100 ppm chlorine solution for sanitizing. If a 5% sodium hypochlorite solution is used, how many mL are needed to prepare 20 L of solution?",
              "options": [
                "40 mL",
                "20 mL",
                "60 mL",
                "80 mL"
              ],
              "answer": 0,
              "solution": "Stock concentration = 5.0% = 50000 ppm. Using C1V1 = C2V2: V1 = (Target ppm x Total volume) / Stock ppm = (100 x 20 x 1000 mL) / 50000 = 40 mL. Correct answer: 40 mL."
            },
            {
              "q": "A WHO study found that 8% of foodborne illnesses are caused by Vibrio. If 1,500 cases are reported, how many are likely due to Vibrio?",
              "options": [
                "120",
                "100",
                "150",
                "80"
              ],
              "answer": 0,
              "solution": "Expected number = 8.0% x 1 = 0.08. Correct answer: 120."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 15 ppm with a standard deviation of 2.0 ppm. What are the 2-sigma lower control limits?",
              "options": [
                "11 ppm",
                "10 ppm",
                "12 ppm",
                "9 ppm"
              ],
              "answer": 0,
              "solution": "Lower control limit = Mean - (2 x SD) = 15 - (2 x 2) = 11 ppm. Correct answer: 11 ppm."
            },
            {
              "q": "A food’s shelf life at 8°C is 21 days. Using the Q10 rule (Q10=2), what is the shelf life at 18°C?",
              "options": [
                "10.5 days",
                "7 days",
                "14 days",
                "5.25 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 21 / 2^((18-8)/10) = 21 / 2 = 10.5 days. Correct answer: 10.5 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 6, 4, and 3, what is the RPN?",
              "options": [
                "72",
                "60",
                "48",
                "36"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 6 x 4 x 3 = 72. Correct answer: 72."
            },
            {
              "q": "WHO guidelines recommend a maximum of 102 CFU/g of Salmonella in poultry. A sample tests at 3.5 × 102 CFU/g. By what factor does it exceed the limit?",
              "options": [
                "3.5",
                "2.5",
                "4",
                "1.5"
              ],
              "answer": 0,
              "solution": "Limit = 10^2 CFU/g. Test result = 3.5 x 10^2 CFU/g. Factor over limit = (3.5 x 10^2) / 10^2 = 3.5 times. Correct answer: 3.5."
            },
            {
              "q": "A HACCP plan requires a 4-log reduction of Listeria in dairy products. If the initial load is 2×10⁷ CFU/g, what is the acceptable final load?",
              "options": [
                "2×10⁴ CFU/g",
                "2×10³ CFU/g",
                "2×10² CFU/g",
                "2×10⁵ CFU/g"
              ],
              "answer": 1,
              "solution": "A 4-log reduction divides load by 10^4. Final load = 2.0 x 10^7 / 10^4 = 2.0 x 10^3 CFU/g. Correct answer: 2×10³ CFU/g."
            },
            {
              "q": "GMP requires a 150 ppm iodine solution for sanitizing. If a 10% iodine solution is used, how many mL are needed to prepare 30 L of solution?",
              "options": [
                "45 mL",
                "30 mL",
                "60 mL",
                "75 mL"
              ],
              "answer": 0,
              "solution": "Stock concentration = 10.0% = 100000 ppm. Using C1V1 = C2V2: V1 = (Target ppm x Total volume) / Stock ppm = (150 x 30 x 1000 mL) / 100000 = 45 mL. Correct answer: 45 mL."
            },
            {
              "q": "A WHO study found that 10% of foodborne illnesses are caused by Clostridium. If 2,000 cases are reported, how many are likely due to Clostridium?",
              "options": [
                "200",
                "150",
                "250",
                "100"
              ],
              "answer": 0,
              "solution": "Expected number = 10.0% x 2 = 0.2. Correct answer: 200."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 20 ppm with a standard deviation of 2.5 ppm. What are the 3-sigma upper control limits?",
              "options": [
                "27.5 ppm",
                "25.0 ppm",
                "30.0 ppm",
                "22.5 ppm"
              ],
              "answer": 0,
              "solution": "Upper control limit = Mean + (3 x SD) = 20 + (3 x 2.5) = 27.5 ppm. Correct answer: 27.5 ppm."
            },
            {
              "q": "A food’s shelf life at 6°C is 28 days. Using the Q10 rule (Q10=2), what is the shelf life at 16°C?",
              "options": [
                "14 days",
                "7 days",
                "21 days",
                "10.5 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 28 / 2^((16-6)/10) = 28 / 2 = 14 days. Correct answer: 14 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 7, 5, and 2, what is the RPN?",
              "options": [
                "70",
                "60",
                "50",
                "40"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 7 x 5 x 2 = 70. Correct answer: 70."
            },
            {
              "q": "A HACCP plan requires a 5-log reduction of Salmonella in poultry. If the initial load is 3×10⁸ CFU/g, what is the acceptable final load?",
              "options": [
                "3×10⁴ CFU/g",
                "3×10³ CFU/g",
                "3×10² CFU/g",
                "3×10⁵ CFU/g"
              ],
              "answer": 1,
              "solution": "A 5-log reduction divides load by 10^5. Final load = 3.0 x 10^8 / 10^5 = 3.0 x 10^3 CFU/g. Correct answer: 3×10³ CFU/g."
            },
            {
              "q": "GMP requires a 200 ppm chlorine solution for sanitizing. If a 12% sodium hypochlorite solution is used, how many mL are needed to prepare 40 L of solution?",
              "options": [
                "66.67 mL",
                "50 mL",
                "75 mL",
                "100 mL"
              ],
              "answer": 0,
              "solution": "Stock concentration = 12.0% = 120000 ppm. Using C1V1 = C2V2: V1 = (Target ppm x Total volume) / Stock ppm = (200 x 40 x 1000 mL) / 120000 = 66.67 mL. Correct answer: 66.67 mL."
            },
            {
              "q": "A WHO study found that 12% of foodborne illnesses are caused by Campylobacter. If 2,500 cases are reported, how many are likely due to Campylobacter?",
              "options": [
                "300",
                "250",
                "200",
                "150"
              ],
              "answer": 0,
              "solution": "Expected number = 12.0% x 2 = 0.24. Correct answer: 300."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 25 ppm with a standard deviation of 3.0 ppm. What are the 2-sigma lower control limits?",
              "options": [
                "19 ppm",
                "20 ppm",
                "18 ppm",
                "22 ppm"
              ],
              "answer": 0,
              "solution": "Lower control limit = Mean - (2 x SD) = 25 - (2 x 3) = 19 ppm. Correct answer: 19 ppm."
            },
            {
              "q": "A food’s shelf life at 5°C is 35 days. Using the Q10 rule (Q10=2), what is the shelf life at 15°C?",
              "options": [
                "17.5 days",
                "10.5 days",
                "14 days",
                "7 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 35 / 2^((15-5)/10) = 35 / 2 = 17.5 days. Correct answer: 17.5 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 8, 4, and 3, what is the RPN?",
              "options": [
                "96",
                "72",
                "64",
                "84"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 8 x 4 x 3 = 96. Correct answer: 96."
            },
            {
              "q": "A HACCP plan requires a 6-log reduction of Listeria in dairy products. If the initial load is 1.2×10⁷ CFU/g, what is the acceptable final load?",
              "options": [
                "1.2×10² CFU/g",
                "1.2×10³ CFU/g",
                "1.2×10⁴ CFU/g",
                "1.2×10⁵ CFU/g"
              ],
              "answer": null,
              "solution": "A 6-log reduction divides load by 10^6. Final load = 1.2 x 10^7 / 10^6 = 1.2 x 10^1 CFU/g."
            },
            {
              "q": "GMP requires a 150 ppm iodine solution for sanitizing. If a 5% iodine solution is used, how many mL are needed to prepare 25 L of solution?",
              "options": [
                "75 mL",
                "50 mL",
                "100 mL",
                "125 mL"
              ],
              "answer": 0,
              "solution": "Stock concentration = 5.0% = 50000 ppm. Using C1V1 = C2V2: V1 = (Target ppm x Total volume) / Stock ppm = (150 x 25 x 1000 mL) / 50000 = 75 mL. Correct answer: 75 mL."
            },
            {
              "q": "A WHO study found that 9% of foodborne illnesses are caused by Vibrio. If 3,000 cases are reported, how many are likely due to Vibrio?",
              "options": [
                "270",
                "300",
                "250",
                "200"
              ],
              "answer": 0,
              "solution": "Expected number = 9.0% x 3 = 0.27. Correct answer: 270."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 30 ppm with a standard deviation of 3.5 ppm. What are the 3-sigma upper control limits?",
              "options": [
                "40.5 ppm",
                "35.0 ppm",
                "45.0 ppm",
                "37.5 ppm"
              ],
              "answer": 0,
              "solution": "Upper control limit = Mean + (3 x SD) = 30 + (3 x 3.5) = 40.5 ppm. Correct answer: 40.5 ppm."
            },
            {
              "q": "A food’s shelf life at 7°C is 28 days. Using the Q10 rule (Q10=2), what is the shelf life at 17°C?",
              "options": [
                "14 days",
                "7 days",
                "21 days",
                "10.5 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 28 / 2^((17-7)/10) = 28 / 2 = 14 days. Correct answer: 14 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 9, 3, and 4, what is the RPN?",
              "options": [
                "108",
                "96",
                "84",
                "72"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 9 x 3 x 4 = 108. Correct answer: 108."
            },
            {
              "q": "MMPO requires double-toned milk to have ≥1.5% fat. A batch with 1.4% fat has what compliance ratio?",
              "options": [
                "0.93",
                "0.9",
                "0.95",
                "0.88"
              ],
              "answer": 0,
              "solution": "Compliance ratio = Actual / Required = 1.4 / 1.5 = 0.933. Correct answer: 0.93."
            },
            {
              "q": "A HACCP plan requires a 4-log reduction of Salmonella in poultry. If the initial load is 5×10⁶ CFU/g, what is the acceptable final load?",
              "options": [
                "5×10³ CFU/g",
                "5×10² CFU/g",
                "5×10⁴ CFU/g",
                "5×10⁵ CFU/g"
              ],
              "answer": 1,
              "solution": "A 4-log reduction divides load by 10^4. Final load = 5.0 x 10^6 / 10^4 = 5.0 x 10^2 CFU/g. Correct answer: 5×10² CFU/g."
            },
            {
              "q": "GMP requires a 200 ppm chlorine solution for sanitizing. If a 10% sodium hypochlorite solution is used, how many mL are needed to prepare 50 L of solution?",
              "options": [
                "100 mL",
                "200 mL",
                "50 mL",
                "150 mL"
              ],
              "answer": 0,
              "solution": "Stock concentration = 10.0% = 100000 ppm. Using C1V1 = C2V2: V1 = (Target ppm x Total volume) / Stock ppm = (200 x 50 x 1000 mL) / 100000 = 100 mL. Correct answer: 100 mL."
            },
            {
              "q": "A WHO study found that 10% of foodborne illnesses are caused by Clostridium. If 1,800 cases are reported, how many are likely due to Clostridium?",
              "options": [
                "180",
                "150",
                "200",
                "100"
              ],
              "answer": 0,
              "solution": "Expected number = 10.0% x 1 = 0.1. Correct answer: 180."
            },
            {
              "q": "A control chart for FSSAI monitoring shows a mean of 18 ppm with a standard deviation of 2.0 ppm. What are the 2-sigma lower control limits?",
              "options": [
                "14 ppm",
                "15 ppm",
                "16 ppm",
                "12 ppm"
              ],
              "answer": 0,
              "solution": "Lower control limit = Mean - (2 x SD) = 18 - (2 x 2) = 14 ppm. Correct answer: 14 ppm."
            },
            {
              "q": "A food’s shelf life at 10°C is 21 days. Using the Q10 rule (Q10=2), what is the shelf life at 20°C?",
              "options": [
                "10.5 days",
                "7 days",
                "14 days",
                "5.25 days"
              ],
              "answer": 0,
              "solution": "Q10 rule: new shelf life = old shelf life / Q10^((T2-T1)/10) = 21 / 2^((20-10)/10) = 21 / 2 = 10.5 days. Correct answer: 10.5 days."
            },
            {
              "q": "A risk assessment calculates an RPN (Risk Priority Number) as severity × occurrence × detection. If scores are 7, 4, and 3, what is the RPN?",
              "options": [
                "84",
                "72",
                "60",
                "48"
              ],
              "answer": 0,
              "solution": "RPN = Severity x Occurrence x Detection = 7 x 4 x 3 = 84. Correct answer: 84."
            }
          ]
        }
      ]
    }
  ]
};

if (typeof module !== "undefined") module.exports = courseData;
