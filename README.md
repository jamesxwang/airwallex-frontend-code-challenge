# Airwallex Frontend Code Challenge

[![GitHub Actions](https://github.com/jamesxwang/airwallex-frontend-code-challenge/actions/workflows/unit-test.yml/badge.svg)](https://github.com/jamesxwang/airwallex-frontend-code-challenge/actions/workflows/unit-test.yml) [![codecov](https://codecov.io/gh/jamesxwang/airwallex-frontend-code-challenge/branch/master/graph/badge.svg?token=0FP7PA7GYX)](https://codecov.io/gh/jamesxwang/airwallex-frontend-code-challenge) [![GitHub license](https://img.shields.io/github/license/jamesxwang/airwallex-frontend-code-challenge)](https://github.com/jamesxwang/airwallex-frontend-code-challenge)

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

For unit tests, please run:

```bash
$ yarn test
```

For e2e tests, please start the dev server first, then run:

```bash
$ yarn e2e:open
```

![e2e test](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/202203/e2e.2kdfvkv1l520.gif)

## Folder structure

```
.
├── cypress
│   └── integration                   # e2e tests
│       ├── home.spec.js
│       └── request.modal.spec.js
├── src
│   ├── components
│   │   ├── Footer
│   │   ├── Header
│   │   └── RequestModal
│   ├── constants                     # constants
│   ├── pages                         # page entries
│   ├── services                      # API requests
│   └── utils                         # util functions
├── LICENSE
├── tsconfig.json
├── typings.d.ts
├── cypress.json                      # e2e config
├── package.json
├── yarn.lock
└── README.md
```
