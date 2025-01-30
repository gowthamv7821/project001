class PincodeData {
    constructor() {
        this.data = [
            { subDistrict: "Adyar", pincode: "600020", type: "Urban" },
            { subDistrict: "Alandur", pincode: "600016", type: "Urban" },
            { subDistrict: "Alwarpet", pincode: "600018", type: "Urban" },
            { subDistrict: "Ambattur", pincode: "600053", type: "Urban" },
            { subDistrict: "Anna Nagar", pincode: "600040", type: "Urban" },
            { subDistrict: "Ashok Nagar", pincode: "600083", type: "Urban" },
            { subDistrict: "Chetpet", pincode: "600031", type: "Urban" },
            { subDistrict: "Egmore", pincode: "600008", type: "Urban" },
            { subDistrict: "Ekkatuthangal", pincode: "600032", type: "Urban" },
            { subDistrict: "Kilpauk", pincode: "600010", type: "Urban" },
            { subDistrict: "Kodambakkam", pincode: "600024", type: "Urban" },
            { subDistrict: "Kolathur", pincode: "600099", type: "Urban" },
            { subDistrict: "Kotturpuram", pincode: "600085", type: "Urban" },
            { subDistrict: "Maduravoyal", pincode: "600095", type: "Urban" },
            { subDistrict: "Mannadi", pincode: "600001", type: "Urban" },
            { subDistrict: "Mint", pincode: "600001", type: "Urban" },
            { subDistrict: "Mylapore", pincode: "600004", type: "Urban" },
            { subDistrict: "Mount Road", pincode: "600006", type: "Urban" },
            { subDistrict: "Nandanam", pincode: "600035", type: "Urban" },
            { subDistrict: "Neelankarai", pincode: "600041", type: "Urban" },
            { subDistrict: "Nungambakkam", pincode: "600034", type: "Urban" },
            { subDistrict: "Perambur", pincode: "600011", type: "Urban" },
            { subDistrict: "Periyar Nagar", pincode: "600082", type: "Urban" },
            { subDistrict: "Perungudi", pincode: "600096", type: "Urban" },
            { subDistrict: "Purasawalkam", pincode: "600084", type: "Urban" },
            { subDistrict: "Pammal", pincode: "600075", type: "Urban" },
            { subDistrict: "Red Hills", pincode: "600052", type: "Urban" },
            { subDistrict: "Royapuram", pincode: "600013", type: "Urban" },
            { subDistrict: "Sholinganallur", pincode: "600119", type: "Urban" },
            { subDistrict: "Saidapet", pincode: "600015", type: "Urban" },
            { subDistrict: "T. Nagar", pincode: "600017", type: "Urban" },
            { subDistrict: "Teynampet", pincode: "600018", type: "Urban" },
            { subDistrict: "Thiru Vi Ka Nagar", pincode: "600082", type: "Urban" },
            { subDistrict: "Tiruvottiyur", pincode: "600019", type: "Urban" },
            { subDistrict: "Thiruvanmiyur", pincode: "600041", type: "Urban" },
            { subDistrict: "Thiruvannamalai", pincode: "606601", type: "Urban" },
            { subDistrict: "Valasaravakkam", pincode: "600087", type: "Urban" },
            { subDistrict: "Vepery", pincode: "600007", type: "Urban" },
            { subDistrict: "Velachery", pincode: "600042", type: "Urban" },
            { subDistrict: "Chengalpattu", pincode: "603001", type: "Urban" },
            { subDistrict: "Kanchipuram", pincode: "631501", type: "Urban" },
            { subDistrict: "Tondiarpet", pincode: "600081", type: "Urban" },
            { subDistrict: "Tindivanam", pincode: "604001", type: "Urban" },
            { subDistrict: "Villupuram", pincode: "605601", type: "Urban" },  
            { subDistrict: "Arakkonam", pincode: "605602", type: "Rural" },   
            { subDistrict: "Kallakurichi", pincode: "605603", type: "Rural" },
            { subDistrict: "Acharapakkam", "pincode": "603301", "type": "Rural" },
            { subDistrict: "Ayyampettai", "pincode": "631601", "type": "Rural" },
            { subDistrict: "Uthiramerur", "pincode": "603406", "type": "Rural" },
            { subDistrict: "Walajabad", "pincode": "631605", "type": "Rural" },
            { subDistrict: "Sriperumbudur", "pincode": "602105", "type": "Urban" },
            { subDistrict: "Karikambattu", "pincode": "604307", "type": "Rural" },
            { subDistrict: "Thennerkunam", "pincode": "604102", "type": "Rural" },
            { subDistrict: "Kovadi", "pincode": "604102", "type": "Rural" },
            { subDistrict: "Ongur", "pincode": "604307", "type": "Rural" },
            { subDistrict: "Olakur", "pincode": "604307", "type": "Rural" }
            
        ];
    }

    getPincodeByLocation(location) {
        const result = this.data.find(item => item.subDistrict.toLowerCase() === location.toLowerCase());
        return result ? result.pincode : null;
    }
}

const pincodeData = new PincodeData();

function getPincode() {
    const locationInput = document.getElementById("locationInput").value;
    const pincode = pincodeData.getPincodeByLocation(locationInput);

    if (pincode) {
        document.getElementById("pincode").innerText = `Pincode for ${locationInput} is: ${pincode}🤗`;
    } else {
        document.getElementById("pincode").innerText = "Location not found🙁";
    }
}

function showSuggestions() {
    const input = document.getElementById("locationInput").value.toLowerCase();
    const suggestions = document.getElementById("suggestions");

    suggestions.innerHTML = "";

    if (input.length > 0) {
        const filteredData = pincodeData.data.filter(item => 
            item.subDistrict.toLowerCase().startsWith(input)
        );

        filteredData.forEach(item => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.textContent = item.subDistrict;
            suggestionItem.onclick = () => {
                document.getElementById("locationInput").value = item.subDistrict;
                suggestions.innerHTML = "";
            };
            suggestions.appendChild(suggestionItem);
        });
    }
}
