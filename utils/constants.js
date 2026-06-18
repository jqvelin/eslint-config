const STYLE_EXTENSIONS = ['css', 'scss', 'sass', 'less'];

export const reactPathGroups = [
  {
    pattern: 'react',
    group: 'external',
    position: 'before'
  },
  {
    pattern: 'react-dom',
    group: 'external',
    position: 'before'
  },
  {
    pattern: 'react/**',
    group: 'external',
    position: 'before'
  },
  {
    pattern: 'react-dom/**',
    group: 'external',
    position: 'before'
  }
];

export const stylePathGroups = STYLE_EXTENSIONS.flatMap((ext) => [
  {
    pattern: `*.${ext}`,
    group: 'external',
    position: 'after'
  },
  {
    pattern: `../*.${ext}`,
    group: 'parent',
    position: 'after'
  },
  {
    pattern: `../**/*.${ext}`,
    group: 'parent',
    position: 'after'
  },
  {
    pattern: `./*.${ext}`,
    group: 'sibling',
    position: 'after'
  },
  {
    pattern: `./**/*.${ext}`,
    group: 'sibling',
    position: 'after'
  }
]);

export const importPathGroups = [...reactPathGroups, ...stylePathGroups];
