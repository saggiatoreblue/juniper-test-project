export default abstract class StringHelper {
  public static isNullOrWhiteSpace(value: string): boolean {
    return !value || value.trim().length === 0;
  }

  public static isNullOrEmpty(value: string): boolean {
    return !value || value.length === 0;
  }

  public static upperCaseFirstChar(str: string): string {
    if (StringHelper.isNullOrEmpty(str)) {
      return str;
    }
    if (str.length === 1) {
      return str.toUpperCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public static toTitleCasing(str: any): string {
    let formattedString = this.upperCaseFirstChar(str);
    const lastChar = formattedString.charAt(formattedString.length - 1);
    const checkChar = lastChar === lastChar.toUpperCase() ? true : false;
    if (checkChar) {
      formattedString = formattedString.slice(0, -1);
    }

    formattedString = formattedString.replace(/([A-Z])/g, " $1");
    if (checkChar) formattedString = formattedString + lastChar;
    return formattedString;
  }

  public static convertToUSDollar(str: string): string {
    const price = +str;
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
