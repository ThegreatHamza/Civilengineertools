// Initial quantity estimation engine structure

export function estimateConcrete(elements) {
  return elements.reduce((total, element) => {
    return total + (element.length * element.width * element.height);
  }, 0).toFixed(3);
}

export function estimateArea(length, width) {
  return (length * width).toFixed(2);
}
