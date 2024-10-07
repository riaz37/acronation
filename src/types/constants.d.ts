/**
 * global types
 */
type Component = () => JSX.Element | Promise<JSX.Element>;
type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];

type ServiceCategoryType = {
  title: string;
  Icon: IconType;
  subCategories: ServiceSubCategoryType[];
  link: string;
};
type ServiceSubCategoryType = {
  title: string;
  color: string;
  bgColor: string;
};
