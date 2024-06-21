export type TLuminaOptionsComponents = {
  [k: string]: any;
}

export type TLuminaOptions = {
  database: string,
  components: TLuminaOptionsComponents[],
  editMode?: boolean,
}
