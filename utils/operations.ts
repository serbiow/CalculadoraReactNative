export const calculate = (input: string): string => {
  try {
    const result = eval(
      input.replace(/×/g, '*').replace(/÷/g, '/')
    );
    return result.toString();
  } catch {
    return 'Erro';
  }
};
