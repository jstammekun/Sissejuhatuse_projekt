function calculateCalories () {
    // Puhastame eelmised tulemused
    document.getElementById("result").innerText = "";

    // Defineerin väärtused arvutuse tegemiseks
    let age = parseFloat(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let gender = document.getElementById('gender').value;
    let activityLevel = document.getElementById('activity').value;

    // Kontrollin väärtuste õigsust
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
        alert('Palun sisesta korrektsed väärtused, et arvutada täpne tulemus.');
        return;
    }
    if (document.getElementById('lose_weight').checked == false && document.getElementById('maintain_weight').checked == false && document.getElementById('gain_weight').checked ==  false) {
        alert('Palun vali vähemalt üks eesmärk: kaalulangus, kaalu säilitamine või kaalutõus.');
        return;
    }

    // Arvutan välja BMI
    let bmr;
    if (gender === 'Mees') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    let activityMultiplier;
    switch (activityLevel) {
        case '1': activityMultiplier = 1.2; break;
        case '2': activityMultiplier = 1.375; break;
        case '3': activityMultiplier = 1.55; break;
        case '4': activityMultiplier = 1.725; break;
        case '5': activityMultiplier = 1.9; break;
        default: activityMultiplier = 1.2;
    }
    // Arvutab välja kalorite hulga
    let totalCalories = Math.round(bmr * activityMultiplier / 100) * 100;
    
    
    if (document.getElementById('lose_weight').checked) {
        totalCalories = totalCalories - 500;
        document.getElementById('result').innerText += ` Kui soovite kaalust alla võtta, peaksite tarbima umbes ${totalCalories} kalorit päevas.`;
    }
    if (document.getElementById('maintain_weight').checked) {
        document.getElementById('result').innerText += ` Kui soovite säilitada oma kaalu, peaksite tarbima umbes ${totalCalories} kalorit päevas.`;
    }
    if (document.getElementById('gain_weight').checked) {
        totalCalories = totalCalories + 500;
        document.getElementById('result').innerText += ` Kui soovite kaalus juurde võtta, peaksite tarbima umbes ${totalCalories} kalorit päevas.`;
    }

    let resultText = '';

    // Esmalt loob põhilause
    resultText = `Sinu soovituslik päevane kalorite hulk on umbes <strong>${totalCalories} kcal</strong>.`;
    
    // Tingimuslausetega anname igale inimesele vastava soovituse
    if (totalCalories < 1200) {
        resultText = `Sinu arvutatud kalorivajadus (${totalCalories} kcal) on potentsiaalselt ohtlikult madal. Nii madal kaloraaž ei pruugi tagada kehale vajalikke toitaineid. Palun konsulteeri toitumisnõustaja või arstiga.`;
    } else if (totalCalories > 4000) {
         resultText = `Sinu arvutatud kalorivajadus (${totalCalories} kcal) on väga kõrge. Tervisliku ja tasakaalustatud toitumise tagamiseks on soovitatav konsulteerida spetsialistiga.`;
    } else if (totalCalories >= 1200 && totalCalories < 1500) {
        resultText += ` See on kalorite defitsiit, mis sobib kaalulangetuseks. Et vältida näljatunnet ja tagada piisav toitainete saamine, keskendu valgurikastele ja kiudainerohketele toitudele.
        <br>
        <ul>
            <li><strong>Valguallikad:</strong> Kanafilee, kodujuust, Kreeka jogurt, kala (tursk, tuunikala vees), munavalged, tofu.</li>
            <li><strong>Süsivesikud:</strong> Suures koguses köögivilju (brokoli, lillkapsas, spinat, kurk), marjad. Väiksemas koguses kaerahelbed või täisteraleib.</li>
            <li><strong>Rasvad:</strong> Veerand avokaadot, väike peotäis mandleid või teelusikatäis oliiviõli salatil.</li>
        </ul>
        <strong>Näidiseine:</strong> Suur salat grillitud kanafilee, erinevate roheliste lehtede, tomati, kurgi ja kerge vinegrettkastmega.`;
    } else if (totalCalories >= 1500 && totalCalories < 2000) {
        resultText += ` See on mõõdukas kaloraaž, mis sobib ideaalselt tasakaalustatud toitumiseks ja kaalu hoidmiseks või kergeks langetamiseks. Oluline on lisada menüüsse komplekssüsivesikuid energia saamiseks.
        <ul>
            <li><strong>Valguallikad:</strong> Lõhe, lahja veiseliha, läätsed, oad, kanakoivad (nahata).</li>
            <li><strong>Süsivesikud:</strong> Kinoa, pruun riis, bataat, täisterapasta, õunad, banaanid.</li>
            <li><strong>Rasvad:</strong> Pähklid (kreeka, india), seemned (chia, lina), maapähklivõi, oliivid.</li>
        </ul>
        <strong>Näidiseine:</strong> Ahjus küpsetatud lõhefilee koos kinoasalati ja aurutatud spargliga.`;
    } else if (totalCalories >= 2000 && totalCalories < 2500) {
        resultText += ` See on hea kaloraaž aktiivse eluviisi toetamiseks ja kaalu säilitamiseks. Sinu menüü peaks olema mitmekesine ja sisaldama piisavalt kõiki makrotoitaineid, et tagada hea energiatase ja taastumine.
        <ul>
            <li><strong>Valguallikad:</strong> Suuremad portsjonid liha ja kala, vadakuvalgu šeigid pärast trenni, munad.</li>
            <li><strong>Süsivesikud:</strong> Suuremad portsjonid kaerahelbeid, kartulid, täisterapasta, riis ja laiem valik puuvilju.</li>
            <li><strong>Rasvad:</strong> Terved munad (koos kollasega), juust (mõõdukalt), täisrasvane Kreeka jogurt.</li>
        </ul>
        <strong>Näidiseine:</strong> Kauss vürtsikat *chili con carne*'t lahja veisehakkliha ja ubadega, serveeritud pruuni riisi ja värske salatiga.`;
    } else if (totalCalories >= 2500 && totalCalories < 3000) {
        resultText += ` See on kõrge kaloraaž, mis on suunatud lihasmassi kasvatamisele või väga aktiivse elustiili toetamiseks. Suurenda portsjoneid ja lisa menüüsse rohkem tervislikke rasvu.
        <ul>
            <li><strong>Valguallikad:</strong> Veisesteik, rasvasem kala (heeringas, makrell), täispiim, valgupulbrid.</li>
            <li><strong>Süsivesikud:</strong> Riisigaletid, suured portsjonid pastat ja riisi, kaunviljad nagu kikerherned ja oad.</li>
            <li><strong>Rasvad:</strong> Kasuta toiduvalmistamisel rohkem oliiviõli, söö terve avokaado, lisa smuutidesse pähklivõid.</li>
        </ul>
        <strong>Näidiseine:</strong> Suur taldrikutäis täisterapastat kanahakklihast valmistatud tomatikastmega, peale puistatud parmesani juustu.`;
    } else if (totalCalories >= 3000 && totalCalories <= 4000) {
        resultText += ` See on väga kõrge kaloraaž, mis on mõeldud tõsiseks massikogumiseks või sportlastele. Et nii suurt kogust süüa, jaota toidukorrad päeva peale ühtlasemalt (nt 4-5 toidukorda).
        <ul>
            <li><strong>Valguallikad:</strong> Punane liha, rasvane kala, kohupiimakreemid, massilisajad (gainerid).</li>
            <li><strong>Süsivesikud:</strong> Lisa toitudele mett või vahtrasiirupit, söö kuivatatud puuvilju, bagelsid.</li>
            <li><strong>Rasvad:</strong> Kookosõli smuutides, suured peotäied pähkleid ja seemneid vahepaladeks.</li>
        </ul>
        <strong>Näidiseine:</strong> Kaloririkas smuuti, mis sisaldab valgupulbrit, kaerahelbeid, banaani, supilusikatäie maapähklivõid ja täispiima - lisaks tavalistele suurtele toidukordadele.`;
    }

    // Kuvame koostatud teksti tulemuse alale
    document.getElementById('result').innerHTML = resultText;
}