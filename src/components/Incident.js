class Incident {
  constructor(json) {
    this.data = json || {};
  }

  getName() {
    const { common_place_name } = this.getAddress();
    return common_place_name;
  }

  getAddressString() {
    const { address_line1, city, state } = this.getAddress();
    return `${address_line1}, ${city}, ${state}`;
  }

  getAddress() {
    return this.data.address;
  }

  getLatLong() {
    const { latitude, longitude } = this.getAddress();
    return {
      lat: latitude,
      lng: longitude,
    };
  }

  getDescription() {
    const { comments } = this.data.description;
    return comments;
  }

  getOpenTime() {
    const { event_opened } = this.data.description;
    return event_opened;
  }

  getSubType() {
    const { subtype } = this.data.description;
    return subtype;
  }
}

export { Incident };
export default Incident;
