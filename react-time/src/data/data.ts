interface TimeZone {
    code: string;
    area: string
    UTC: string;

}

// displacement
export const TimeZones: readonly TimeZone[] = [
    { code: 'ACST', area: 'центральноавстралийское время', UTC: 'UTC+9:30' },
    { code: 'AEST', area: 'восточноавстралийское время', UTC: 'UTC+10' },
    { code: 'AKST', area: 'аляскинское время', UTC: 'UTC−9' },
    { code: 'AST', area: 'атлантическое время', UTC: 'UTC−4' },
    { code: 'AWST', area: 'западноавстралийское время', UTC: 'UTC+8' },
    { code: 'CAT', area: 'центральноафриканское время', UTC: 'UTC+2' },
    { code: 'CET', area: 'центральноевропейское время', UTC: 'UTC+1' },
    { code: 'CST', area: 'центральноамериканское время', UTC: 'UTC−6' },
    { code: 'EAT', area: 'восточноафриканское время', UTC: 'UTC+3' },
    { code: 'EET', area: 'восточноевропейское время', UTC: 'UTC+2' },
    { code: 'EST', area: 'североамериканское восточное время', UTC: 'UTC−5' },
    { code: 'GMT', area: 'среднее время по Гринвичу', UTC: 'UTC+0' },
    { code: 'HAST', area: 'гавайско-алеутское время', UTC: 'UTC−10' },
    { code: 'MSK', area: 'московское время', UTC: 'UTC+3' },
    { code: 'MST', area: 'горное время', UTC: 'UTC−7' },
    { code: 'NST', area: 'ньюфаундлендское время', UTC: 'UTC−3:30' },
    { code: 'PST', area: 'североамериканское тихоокеанское время', UTC: 'UTC−8' },
    { code: 'UTC', area: 'всемирное координированное время', UTC: 'UTC+0' },
    { code: 'WAT', area: 'западноафриканское время', UTC: 'UTC+1' },
    { code: 'WET', area: 'западноевропейское время', UTC: 'UTC+0' },
]