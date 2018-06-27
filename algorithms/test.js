function hash(key) {
  const hah = Array.from(key).reduce(
    (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
    0,
  );
  return hah % 32;
}
hash('test');
