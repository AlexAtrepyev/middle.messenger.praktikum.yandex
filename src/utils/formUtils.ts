import isInputValid from './isInputValid';

type TFormData = { [key: string]: string };

export function getFormData(content: HTMLElement): TFormData {
  const form = content.querySelector('form')!;

  const filterCallback = (element: HTMLElement) => element instanceof HTMLInputElement;
  const inputs = Array.from(form.elements).filter(filterCallback) as HTMLInputElement[];

  return inputs.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
}

export function isFormValid(data: TFormData): boolean {
  return Object.keys(data).every((name) => isInputValid(name, data[name]));
}
