import isInputValid from './isInputValid';

type TFormData = { [key: string]: string };

export function getFormData(content: HTMLElement): TFormData {
  const form = content.querySelector('form')!;
  const inputs = Array.from(form.elements).filter(element => element instanceof HTMLInputElement) as HTMLInputElement[];

  return inputs.reduce((acc, { name, value }) => {
    return { ...acc, [name]: value }
  }, {});
};


export function isFormValid(data: TFormData): boolean {
  return Object.keys(data).every(name => isInputValid(name, data[name]));
};
