/**
 * Data for conflicts in the Horn of Africa
 * Contains financial, human, and infrastructure costs for each major conflict
 */

const conflictData = {
  // Conflict names and labels
  labels: ['Eritrean War', 'Ethiopian-Eritrean', 'Ogaden War', 'Somalia Interventions', 'Tigray War'],
  
  // Financial costs in billions (inflation adjusted to 2023)
  warCosts: [36.7, 25.2, 7.8, 7.8, 6.6],
  
  // Rebuild costs in billions
  rebuildCosts: [36.7, 7, 11.7, 9.1, 21.9],
  
  // Human costs in thousands
  humanCosts: [250, 100, 60, 30, 600],
  
  // Total costs
  totalWarCost: 146, // In billions USD
  totalLivesLost: 800000, // Approximation
  totalRebuildCost: 85, // In billions USD
  
  // Detailed information for each conflict
  conflicts: [
      {
          name: "Eritrean War of Independence",
          period: "1961-1991",
          warCost: 36.7,
          rebuildCost: 36.7,
          rebuildDetails: {
              eritrea: 7.3,
              ethiopia: 29.4
          },
          humanCost: "Hundreds of Thousands",
          humanCostValue: 250000,
          longTermImpacts: [
              "Left both countries in crushing debt",
              "Contributed to the Derg's collapse",
              "Devastated infrastructure across both nations",
              "Generational trauma and displacement"
          ],
          image: "./Ethiopia-Eritrea.png"
      },
      {
          name: "Ethiopian-Eritrean War",
          period: "1998-2000",
          warCost: 25.2, // 12.6 per side
          rebuildCost: 7,
          rebuildDetails: {
              eritrea: 3,
              ethiopia: 4
          },
          humanCost: "100,000+",
          humanCostValue: 100000,
          longTermImpacts: [
              "Halted bilateral trade",
              "International isolation of Eritrea",
              "Limited Ethiopian exports",
              "Destabilized regional security",
              "Most costs were debt-financed, creating long-term economic burdens"
          ],
          image: "./Ethiopia-Eritrea.png"
      },
      {
          name: "Ogaden War",
          period: "1977-1978",
          warCost: 7.8,
          rebuildCost: 11.7,
          rebuildDetails: {
              note: "Neither nation could fully afford"
          },
          humanCost: "60,000+",
          humanCostValue: 60000,
          longTermImpacts: [
              "Destroyed economies in both nations",
              "Ethiopia became dependent on Soviet aid",
              "Somalia plunged into deeper instability",
              "Set the stage for decades of regional tension"
          ],
          image: "./Ethiopia-Somalia.png"
      },
      {
          name: "Ethiopia's Interventions in Somalia",
          period: "2006-present",
          warCost: 7.8,
          rebuildCost: 9.1,
          rebuildDetails: {
              note: "For Somalia (still incomplete)"
          },
          humanCost: "Thousands",
          humanCostValue: 30000, // Approximate for visualization
          longTermImpacts: [
              "Ongoing chaos in Somalia",
              "Massive refugee crises affecting the entire region",
              "Strained regional diplomatic relations",
              "Rise of extremist groups"
          ],
          image: "./Ethiopia-Somalia.png"
      },
      {
          name: "Tigray War",
          period: "2020-2022",
          warCost: 6.6,
          rebuildCost: 21.9,
          rebuildDetails: {
              note: "Estimated for infrastructure & services"
          },
          humanCost: "600,000",
          humanCostValue: 600000,
          longTermImpacts: [
              "Millions internally displaced",
              "Severe damage to healthcare, education, and basic infrastructure",
              "Suspended international aid",
              "Potential for renewed conflict",
              "Severe economic setbacks during a global pandemic"
          ],
          image: "./Ethiopia.png"
      }
  ],
  
  // Calculator data
  calculator: {
      // Cost per unit in millions of USD
      costPerUnit: {
          school: 0.5, // $500,000 per school
          hospital: 10, // $10 million per hospital
          road: 1, // $1 million per km of road
          water: 2, // $2 million per water system
          power: 500 // $500 million per power plant
      },
      
      // Impact multipliers
      impact: {
          school: {
              students: 500, // Students per school
              jobs: 20 // Teaching jobs per school
          },
          hospital: {
              patients: 100000, // People served per hospital
              jobs: 200 // Healthcare jobs per hospital
          },
          water: {
              people: 20000 // People served per water system
          },
          power: {
              output: 500, // MW per power plant
              homes: 500000 // Homes powered per plant
          }
      }
  }
};