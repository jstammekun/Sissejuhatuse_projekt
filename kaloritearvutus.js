function calculateCalories () {
    let age = parseFloat(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let gender = document.getElementById('gender').value;
    let activityLevel = document.getElementById('activity').value;

    let bmr;
    if (gender === 'Mees') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
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
    let totalCalories = Math.round(bmr * activityMultiplier / 100) * 100;
    
    document.getElementById('result').innerText = `Teie päevane kalorivajadus on umbes ${totalCalories} kalorit.`;
};