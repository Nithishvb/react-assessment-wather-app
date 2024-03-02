export function kelvinToCelsius(kelvin: number) {
  return Math.round(kelvin - 273.15);
}

export function celsiusToFahrenheit(celsius: number) {
  return Math.round((celsius * 9) / 5 + 32);
}
