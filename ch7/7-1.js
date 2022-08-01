class Organization {
  #data;
  #name;
  #country;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get country() {
    return this.#country;
  }
  set country(value) {
    this.#country = value;
  }
  get rawData() {
    // return { ...this.#data }; // 얕은 복사 혹은 cloneDeep이용 // get만 있는 경우
    return { name: this.name, country: this.country }; // set도 있는 경우
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
