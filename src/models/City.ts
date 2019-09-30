import Details from "./Details";

export default class City {
  private city?: string;
  private cityCode: Array<string>;
  private country?: string;
  private countryCode?: string;
  private detail: Details;

  constructor() {
    this.cityCode = new Array<string>();
    this.detail = new Details();
  }

  setCity(city: string) {
    this.city = city;
  }

  addCityCode(cityCodes: string) {
    this.cityCode.push(cityCodes);
  }

  setCountry(country: string) {
    this.country = country;
  }

  setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
  }

  getDetail() {
    return this.detail;
  }
}
