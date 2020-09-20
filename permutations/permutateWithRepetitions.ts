export function permutateWithRepetitions<T>(
  permutationOptions: Array<T>,
  permutationLength: number = permutationOptions.length,
): Array<Array<T>> {
  if (permutationLength === 1) {
    return permutationOptions.map((permutationOption) => [permutationOption]);
  }

  // Init permutations array.
  const permutations: Array<Array<T>> = [];

  // Get smaller permutations.
  const smallerPermutations = permutateWithRepetitions(
    permutationOptions,
    permutationLength - 1,
  );

  // Go through all options and join it to the smaller permutations.
  permutationOptions.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });

  return permutations;
}