export const calculatePrice = async (req, res) => {
    const {
        type,          // 'online' or 'in-person'
        grade,         // '9', '10', '11', '12'
        subjects,      // array, e.g., ['Math', 'Physics']
        lessonsPerWeek, // number, e.g., 3
        duration,      // number (hours), e.g., 2
    } = req.body;

    // Base hourly rate based on experience
    let baseRate = 25;

    // Add in-person surcharge
    if (type === 'in-person') {
        baseRate += 5; // flat $5 surcharge, can increase to $10 as needed
    }

    // Grade adjustment
    if (grade === '11' || grade === '12') {
        baseRate += 5;
    }

    // Subject count multiplier
    const subjectMultiplier = subjects.length;

    // Total hours per week
    const totalHours = lessonsPerWeek * duration;

    // Hourly and weekly calculation
    const hourlyRate = baseRate;
    const weeklyRate = hourlyRate * totalHours * subjectMultiplier;

    res.json({
        hourlyRate: `$${hourlyRate} CAD per hour`,
        weeklyRate: `$${weeklyRate} CAD per week`,
        rawValues: {
            hourlyRate,
            weeklyRate
        }
    });
}
