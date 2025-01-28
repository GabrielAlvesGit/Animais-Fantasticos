export default {
  rules: {
    // "no-console": "error"
    indent: ['error', 2], // Idn com 2 espaços
    'keyword-spacing' : 'error', // manter um espaço no if
    'no-multiple-empty-lines': 'error', // não permite variáveis não utilizadas
    'eol-last': ['error', 'always'], // Deixar com 1 espaço no final
    semi: ['error', 'always'], // Deixar sempre com ; no final
    'no-trailing-spaces': 'error', // Não espaçamento extra no código
    'operator-assignment': 'error',
    'no-inner-declaration': [
      'error',
      'functions',
      {blockScopedFunction: 'disallow'},
    ]
  }
};
