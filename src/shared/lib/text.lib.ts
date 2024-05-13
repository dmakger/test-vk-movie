export const minutesToHoursText = (minutes: number) => {
    return `${Math.floor(minutes / 60)} ч. ${minutes % 60} мин.`
}