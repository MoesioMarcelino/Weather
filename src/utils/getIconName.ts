interface IWeather {
  label: string;
  icon: string;
  day?: boolean;
  both?: boolean;
}

const weatherNames: IWeather[] = [
  { label: 'Sunny', icon: '01-s.png', day: true },
  { label: 'Mostly Sunny', icon: '02-s.png', day: true },
  { label: 'Partly Sunny', icon: '03-s.png', day: true },
  { label: 'Intermittent Clouds', icon: '04-s.png', day: true },
  { label: 'Hazy Sunshine', icon: '05-s.png', day: true },
  { label: 'Mostly Cloudy', icon: '06-s.png', day: true },
  { label: 'Cloudy', icon: '07-s.png', both: true },
  { label: 'Dreary (Overcast)', icon: '08-s.png', both: true },
  { label: 'Fog', icon: '11-s.png', both: true },
  { label: 'Showers', icon: '12-s.png', both: true },
  { label: 'Mostly Cloudy w/ Showers', icon: '13-s.png', day: true },
  { label: 'Partly Sunny w/ Showers', icon: '14-s.png', day: true },
  { label: 'T-Storms', icon: '15-s.png', both: true },
  { label: 'Mostly Cloudy w/ T-Storms', icon: '16-s.png', day: true },
  { label: 'Partly Sunny w/ T-Storms', icon: '17-s.png', day: true },
  { label: 'Rain', icon: '18-s.png', both: true },
  { label: 'Flurries', icon: '19-s.png', both: true },
  { label: 'Mostly Cloudy w/ Flurries', icon: '20-s.png', day: true },
  { label: 'Partly Sunny w/ Flurries', icon: '21-s.png', day: true },
  { label: 'Snow', icon: '22-s.png', both: true },
  { label: 'Mostly Cloudy w/ Snow', icon: '23-s.png', day: true },
  { label: 'Ice', icon: '24-s.png', both: true },
  { label: 'Sleet', icon: '25-s.png', both: true },
  { label: 'Freezing Rain', icon: '26-s.png', both: true },
  { label: 'Rain and Snow', icon: '29-s.png', both: true },
  { label: 'Hot', icon: '30-s.png', both: true },
  { label: 'Cold', icon: '31-s.png', both: true },
  { label: 'Windy', icon: '32-s.png', both: true },
  { label: 'Clear', icon: '33-s.png', day: false },
  { label: 'Mostly Clear', icon: '34-s.png', day: false },
  { label: 'Partly Cloudy', icon: '35-s.png', day: false },
  { label: 'Intermittent Clouds', icon: '36-s.png', day: false },
  { label: 'Hazy Moonlight', icon: '37-s.png', day: false },
  { label: 'Mostly cloudy', icon: '38-s.png', day: false },
  { label: 'Partly Cloudy w/ Showers', icon: '39-s.png', day: false },
  { label: 'Mostly Cloudy w/ Showers', icon: '40-s.png', day: false },
  { label: 'Partly Cloudy w/ T-Storms', icon: '41-s.png', day: false },
  { label: 'Mostly Cloudy w/ T-Storms', icon: '42-s.png', day: false },
  { label: 'Mostly Cloudy w/ Flurries', icon: '43-s.png', day: false },
  { label: 'Mostly Cloudy w/ Snow', icon: '44-s.png', day: false },
];

export function getIconName(name: string): string | undefined {
  const weatherFinded = weatherNames.find((weather) => {
    return weather.label === name;
  });

  return weatherFinded?.icon;
}
