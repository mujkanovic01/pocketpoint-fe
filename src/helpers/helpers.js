const calculateAge = function (birthdate) {
    const birthdateObj = new Date(birthdate);
    const currentDate = new Date();

    // Calculate the difference in years
    let age = currentDate.getFullYear() - birthdateObj.getFullYear();

    // Adjust the age if the current month is before the birth month
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthdateObj.getMonth();
    if (currentMonth < birthMonth) {
        age--;
    }

    // Adjust the age if the current month is the same as the birth month, but the current day is before the birth day
    if (currentMonth === birthMonth && currentDate.getDate() < birthdateObj.getDate()) {
        age--;
    }

    return age;
}

export default calculateAge;