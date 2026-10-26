import {
  formatNumber,
  formatSalary,
  formatArea,
  formatPolitical,
} from "./helpers.js";

const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

async function searchStates(searchInput) {
  try {
    const response = await fetch("./state_capitals.json");

    if (!response.ok) throw new Error("Failed to fetch response!");

    const states = await response.json();

    let matches = states.filter((el) => {
      const regex = new RegExp(`^${searchInput}`, "gi");
      return el.name.match(regex) || el.abbr.match(regex);
    });

    if (!searchInput.length) {
      matches.length = 0;
      displayStates(matches);
    }

    if (matches.length) {
      displayStates(matches);
    }
  } catch (err) {
    console.error(err);
  }
}

function displayStates(matches) {
  matchList.innerHTML = matches
    .map(
      (el) => `
    <div class="state-card" id="stateCard">
        <div class="state-header">
            <div class="state-name-section">
                <span class="shield-icon"></span>
                <span class="state-name">${el.name}</span>
                <span class="state-abbr">${el.abbr}</span>
            </div>
            <div class="capital-name">
                <i class="fas fa-landmark" style="color: #c41e3a;"></i>
                ${el.capital}
            </div>
        </div>
        
        <div class="state-info">
            <div class="info-section">
                <div class="info-item">
                    <i class="fas fa-users" style="color: #1e3c72;"></i>
                    <span class="info-label">Population:</span>
                    <span class="info-value">${formatNumber(el.population)}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-expand-arrows-alt" style="color: #c41e3a;"></i>
                    <span class="info-label">Area:</span>
                    <span class="info-value">${formatArea(el.area)}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt" style="color: #1e3c72;"></i>
                    <span class="info-label">Lat:</span>
                    <span class="info-value">${parseFloat(el.lat).toFixed(2)}</span>
                </div>
            </div>
            
            <div class="info-section">
                <div class="info-item">
                    <i class="fas fa-vote-yea" style="color: ${el.political === "democrat" ? "#1e3c72" : "#c41e3a"};"></i>
                    <span class="info-label">Political:</span>
                    <span class="political-badge ${el.political}">${formatPolitical(el.political)}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-dollar-sign" style="color: #1e3c72;"></i>
                    <span class="info-label">Avg Salary:</span>
                    <span class="info-value">${formatSalary(el.averageSalary)}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt" style="color: #c41e3a;"></i>
                    <span class="info-label">Long:</span>
                    <span class="info-value">${parseFloat(el.long).toFixed(2)}</span>
                </div>
            </div>
        </div>
    </div>`,
    )
    .join("");
}

search.addEventListener("input", () => searchStates(search.value));
